import http.server
import socketserver
import os
import json
import threading
import uuid
from datetime import datetime, timezone

PORT = 5000
DIRECTORY = "static"
ORDERS_FILE = os.path.join(os.path.dirname(__file__), "data", "orders.json")
ORDERS_LOCK = threading.Lock()

def read_orders():
    try:
        with open(ORDERS_FILE, "r", encoding="utf-8") as file:
            orders = json.load(file)
            return orders if isinstance(orders, list) else []
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def write_orders(orders):
    os.makedirs(os.path.dirname(ORDERS_FILE), exist_ok=True)
    temporary_file = ORDERS_FILE + ".tmp"
    with open(temporary_file, "w", encoding="utf-8") as file:
        json.dump(orders, file, ensure_ascii=False, indent=2)
    os.replace(temporary_file, ORDERS_FILE)

def safe_amount(value):
    try:
        return max(0, float(value or 0))
    except (TypeError, ValueError):
        return 0

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self):
        try:
            content_length = int(self.headers.get("Content-Length", "0"))
            if content_length <= 0 or content_length > 100_000:
                return None
            return json.loads(self.rfile.read(content_length).decode("utf-8"))
        except (ValueError, json.JSONDecodeError, UnicodeDecodeError):
            return None

    def do_GET(self):
        if self.path.split("?", 1)[0] == "/api/orders":
            with ORDERS_LOCK:
                orders = read_orders()
            orders.sort(key=lambda order: order.get("createdAt", ""), reverse=True)
            self.send_json({"orders": orders[:200]})
            return
        super().do_GET()

    def do_POST(self):
        if self.path != "/api/orders":
            self.send_error(404)
            return
        payload = self.read_json_body()
        if not isinstance(payload, dict) or not payload.get("name") or not payload.get("phone"):
            self.send_json({"error": "Name and phone are required"}, 400)
            return
        order = {
            "id": uuid.uuid4().hex,
            "product": str(payload.get("product", "طلب تفصيل"))[:200],
            "name": str(payload.get("name", ""))[:120],
            "phone": str(payload.get("phone", ""))[:60],
            "delivery": str(payload.get("delivery", ""))[:120],
            "address": str(payload.get("address", ""))[:300],
            "measurements": str(payload.get("measurements", ""))[:1200],
            "paymentMethod": str(payload.get("paymentMethod", ""))[:100],
            "totalAmount": safe_amount(payload.get("totalAmount", 0)),
            "depositAmount": safe_amount(payload.get("depositAmount", 0)),
            "status": "pending",
            "createdAt": datetime.now(timezone.utc).isoformat()
        }
        with ORDERS_LOCK:
            orders = read_orders()
            orders.append(order)
            write_orders(orders)
        self.send_json({"order": order}, 201)

    def do_PUT(self):
        prefix = "/api/orders/"
        if not self.path.startswith(prefix):
            self.send_error(404)
            return
        order_id = self.path[len(prefix):].split("?", 1)[0]
        payload = self.read_json_body()
        status = payload.get("status") if isinstance(payload, dict) else None
        if status not in {"pending", "deposit-paid", "completed", "cancelled"}:
            self.send_json({"error": "Invalid order status"}, 400)
            return
        with ORDERS_LOCK:
            orders = read_orders()
            order = next((item for item in orders if item.get("id") == order_id), None)
            if order is None:
                self.send_json({"error": "Order not found"}, 404)
                return
            order["status"] = status
            write_orders(orders)
        self.send_json({"order": order})

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", PORT), NoCacheHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()