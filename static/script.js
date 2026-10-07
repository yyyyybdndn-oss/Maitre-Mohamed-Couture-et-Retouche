/* ── AOS INIT ── */
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60
});

/* ── TRANSLATIONS ── */
const translations = {
    ar: {
        dir: 'rtl',
        flag: '🇲🇦',
        name: 'العربية',
        'nav-gallery': 'أعمالنا',
        'nav-services': 'خدماتنا',
        'nav-contact': 'تواصل معنا',
        'hero-subtitle': 'إتقان الخياطة التقليدية والعصرية في طنجة',
        'hero-btn': 'تواصل معنا الآن',
        'section-services': 'خدماتنا',
        'section-gallery': 'أعمالنا',
        'section-contact': 'تواصل معنا',
        'filter-all': 'الكل',
        'filter-coats': 'المعاطف',
        'filter-sportswear': 'الملابس الرياضية',
        'filter-traditional': 'الألبسة التقليدية',
        'service-traditional-title': 'الخياطة التقليدية',
        'service-traditional-desc': 'جلاليب، قفاطين وشناذر مغربية أصيلة بأجود الأقمشة',
        'service-modern-title': 'الملابس العصرية',
        'service-modern-desc': 'بدلات، معاطف وملابس رياضية بتصاميم حديثة',
        'service-alterations-title': 'الريتوش والتعديل',
        'service-alterations-desc': 'تعديل وإصلاح جميع أنواع الملابس باحترافية عالية',
        'contact-address-title': 'العنوان',
        'contact-address-val': 'طنجة، المغرب',
        'contact-phone-title': 'الهاتف',
        'contact-wa-title': 'واتساب',
        'contact-wa-link': 'أرسل رسالة الآن',
        'wa-order': 'طلب عبر الواتساب',
        'wa-float-btn': 'تواصل مع المعلم محمد',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    fr: {
        dir: 'ltr',
        flag: '🇫🇷',
        name: 'Français',
        'nav-gallery': 'Nos Créations',
        'nav-services': 'Services',
        'nav-contact': 'Contact',
        'hero-subtitle': 'L\'art de la couture traditionnelle et moderne à Tanger',
        'hero-btn': 'Contactez-nous',
        'section-services': 'Nos Services',
        'section-gallery': 'Nos Créations',
        'section-contact': 'Contactez-nous',
        'filter-all': 'Tout',
        'filter-coats': 'Manteaux',
        'filter-sportswear': 'Sport',
        'filter-traditional': 'Traditionnel',
        'service-traditional-title': 'Couture Traditionnelle',
        'service-traditional-desc': 'Djellabas, kaftans et gandouras marocains authentiques dans les meilleures étoffes',
        'service-modern-title': 'Vêtements Modernes',
        'service-modern-desc': 'Costumes, manteaux et vêtements de sport aux designs contemporains',
        'service-alterations-title': 'Retouche & Ajustement',
        'service-alterations-desc': 'Retouche et réparation de tous types de vêtements avec un savoir-faire professionnel',
        'contact-address-title': 'Adresse',
        'contact-address-val': 'Tanger, Maroc',
        'contact-phone-title': 'Téléphone',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Envoyer un message',
        'wa-order': 'Commander via WhatsApp',
        'wa-float-btn': 'Contacter Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    en: {
        dir: 'ltr',
        flag: '🇬🇧',
        name: 'English',
        'nav-gallery': 'Gallery',
        'nav-services': 'Services',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Mastering traditional & modern tailoring in Tangier',
        'hero-btn': 'Contact Us Now',
        'section-services': 'Our Services',
        'section-gallery': 'Our Work',
        'section-contact': 'Contact Us',
        'filter-all': 'All',
        'filter-coats': 'Coats',
        'filter-sportswear': 'Sportswear',
        'filter-traditional': 'Traditional',
        'service-traditional-title': 'Traditional Tailoring',
        'service-traditional-desc': 'Authentic Moroccan djellabas, kaftans and gandouras in the finest fabrics',
        'service-modern-title': 'Modern Clothing',
        'service-modern-desc': 'Suits, coats and sportswear with contemporary designs',
        'service-alterations-title': 'Alterations & Repairs',
        'service-alterations-desc': 'Professional alterations and repairs for all types of garments',
        'contact-address-title': 'Address',
        'contact-address-val': 'Tangier, Morocco',
        'contact-phone-title': 'Phone',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Send a Message',
        'wa-order': 'Order via WhatsApp',
        'wa-float-btn': 'Contact Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    es: {
        dir: 'ltr',
        flag: '🇪🇸',
        name: 'Español',
        'nav-gallery': 'Galería',
        'nav-services': 'Servicios',
        'nav-contact': 'Contacto',
        'hero-subtitle': 'Maestría en sastrería tradicional y moderna en Tánger',
        'hero-btn': 'Contáctenos',
        'section-services': 'Nuestros Servicios',
        'section-gallery': 'Nuestras Creaciones',
        'section-contact': 'Contáctenos',
        'filter-all': 'Todo',
        'filter-coats': 'Abrigos',
        'filter-sportswear': 'Deportivo',
        'filter-traditional': 'Tradicional',
        'service-traditional-title': 'Sastrería Tradicional',
        'service-traditional-desc': 'Djellabas, kaftanes y gandouras marroquíes auténticos en las mejores telas',
        'service-modern-title': 'Ropa Moderna',
        'service-modern-desc': 'Trajes, abrigos y ropa deportiva con diseños contemporáneos',
        'service-alterations-title': 'Retoques y Reparaciones',
        'service-alterations-desc': 'Retoques y reparaciones profesionales para todo tipo de prendas',
        'contact-address-title': 'Dirección',
        'contact-address-val': 'Tánger, Marruecos',
        'contact-phone-title': 'Teléfono',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Enviar un mensaje',
        'wa-order': 'Pedir por WhatsApp',
        'wa-float-btn': 'Contactar a Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    de: {
        dir: 'ltr',
        flag: '🇩🇪',
        name: 'Deutsch',
        'nav-gallery': 'Galerie',
        'nav-services': 'Leistungen',
        'nav-contact': 'Kontakt',
        'hero-subtitle': 'Meisterhafte traditionelle & moderne Schneiderei in Tanger',
        'hero-btn': 'Kontaktieren Sie uns',
        'section-services': 'Unsere Leistungen',
        'section-gallery': 'Unsere Werke',
        'section-contact': 'Kontakt',
        'filter-all': 'Alle',
        'filter-coats': 'Mäntel',
        'filter-sportswear': 'Sportbekleidung',
        'filter-traditional': 'Traditionell',
        'service-traditional-title': 'Traditionelle Schneiderei',
        'service-traditional-desc': 'Authentische marokkanische Djellabas, Kaftane und Gandouras aus feinsten Stoffen',
        'service-modern-title': 'Moderne Kleidung',
        'service-modern-desc': 'Anzüge, Mäntel und Sportbekleidung mit zeitgemäßem Design',
        'service-alterations-title': 'Änderungen & Reparaturen',
        'service-alterations-desc': 'Professionelle Änderungen und Reparaturen für alle Kleidungsarten',
        'contact-address-title': 'Adresse',
        'contact-address-val': 'Tanger, Marokko',
        'contact-phone-title': 'Telefon',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Nachricht senden',
        'wa-order': 'Per WhatsApp bestellen',
        'wa-float-btn': 'Maître Mohamed kontaktieren',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    it: {
        dir: 'ltr',
        flag: '🇮🇹',
        name: 'Italiano',
        'nav-gallery': 'Galleria',
        'nav-services': 'Servizi',
        'nav-contact': 'Contatti',
        'hero-subtitle': 'Maestria nella sartoria tradizionale e moderna a Tangeri',
        'hero-btn': 'Contattaci',
        'section-services': 'I Nostri Servizi',
        'section-gallery': 'Le Nostre Creazioni',
        'section-contact': 'Contattaci',
        'filter-all': 'Tutto',
        'filter-coats': 'Cappotti',
        'filter-sportswear': 'Sportivo',
        'filter-traditional': 'Tradizionale',
        'service-traditional-title': 'Sartoria Tradizionale',
        'service-traditional-desc': 'Djellaba, caftan e gandoura marocchini autentici nelle migliori stoffe',
        'service-modern-title': 'Abbigliamento Moderno',
        'service-modern-desc': 'Abiti, cappotti e abbigliamento sportivo con design contemporanei',
        'service-alterations-title': 'Ritocchi e Riparazioni',
        'service-alterations-desc': 'Ritocchi e riparazioni professionali per tutti i tipi di indumenti',
        'contact-address-title': 'Indirizzo',
        'contact-address-val': 'Tangeri, Marocco',
        'contact-phone-title': 'Telefono',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Invia un messaggio',
        'wa-order': 'Ordina via WhatsApp',
        'wa-float-btn': 'Contatta Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    tr: {
        dir: 'ltr',
        flag: '🇹🇷',
        name: 'Türkçe',
        'nav-gallery': 'Galeri',
        'nav-services': 'Hizmetler',
        'nav-contact': 'İletişim',
        'hero-subtitle': 'Tanca\'da geleneksel ve modern terzilikte ustalık',
        'hero-btn': 'Bize Ulaşın',
        'section-services': 'Hizmetlerimiz',
        'section-gallery': 'Çalışmalarımız',
        'section-contact': 'İletişim',
        'filter-all': 'Tümü',
        'filter-coats': 'Paltolar',
        'filter-sportswear': 'Spor Giyim',
        'filter-traditional': 'Geleneksel',
        'service-traditional-title': 'Geleneksel Terzilik',
        'service-traditional-desc': 'En kaliteli kumaşlardan özgün Fas djellaba, kaftan ve gandouraları',
        'service-modern-title': 'Modern Kıyafetler',
        'service-modern-desc': 'Çağdaş tasarımlarda takım elbise, palto ve spor kıyafetler',
        'service-alterations-title': 'Tadilat ve Onarım',
        'service-alterations-desc': 'Her tür kıyafetin profesyonel tadilat ve onarımı',
        'contact-address-title': 'Adres',
        'contact-address-val': 'Tanca, Fas',
        'contact-phone-title': 'Telefon',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Mesaj Gönder',
        'wa-order': 'WhatsApp\'tan Sipariş Ver',
        'wa-float-btn': 'Maître Mohamed ile İletişim',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    nl: {
        dir: 'ltr',
        flag: '🇳🇱',
        name: 'Nederlands',
        'nav-gallery': 'Galerij',
        'nav-services': 'Diensten',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Meesterlijke traditionele & moderne kleermakerij in Tanger',
        'hero-btn': 'Neem contact op',
        'section-services': 'Onze Diensten',
        'section-gallery': 'Ons Werk',
        'section-contact': 'Contact',
        'filter-all': 'Alles',
        'filter-coats': 'Jassen',
        'filter-sportswear': 'Sportkleding',
        'filter-traditional': 'Traditioneel',
        'service-traditional-title': 'Traditionele Kleermakerij',
        'service-traditional-desc': 'Authentieke Marokkaanse djellaba\'s, kaftans en gandoura\'s van de fijnste stoffen',
        'service-modern-title': 'Moderne Kleding',
        'service-modern-desc': 'Pakken, jassen en sportkleding met hedendaagse ontwerpen',
        'service-alterations-title': 'Aanpassingen & Reparaties',
        'service-alterations-desc': 'Professionele aanpassingen en reparaties voor alle soorten kleding',
        'contact-address-title': 'Adres',
        'contact-address-val': 'Tanger, Marokko',
        'contact-phone-title': 'Telefoon',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Stuur een bericht',
        'wa-order': 'Bestellen via WhatsApp',
        'wa-float-btn': 'Contact Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    pt: {
        dir: 'ltr',
        flag: '🇵🇹',
        name: 'Português',
        'nav-gallery': 'Galeria',
        'nav-services': 'Serviços',
        'nav-contact': 'Contacto',
        'hero-subtitle': 'Mestria em alfaiataria tradicional e moderna em Tânger',
        'hero-btn': 'Contacte-nos',
        'section-services': 'Os Nossos Serviços',
        'section-gallery': 'As Nossas Criações',
        'section-contact': 'Contacte-nos',
        'filter-all': 'Todos',
        'filter-coats': 'Casacos',
        'filter-sportswear': 'Desportivo',
        'filter-traditional': 'Tradicional',
        'service-traditional-title': 'Alfaiataria Tradicional',
        'service-traditional-desc': 'Autênticas djellabas, caftans e gandouras marroquinas nos melhores tecidos',
        'service-modern-title': 'Roupa Moderna',
        'service-modern-desc': 'Fatos, casacos e roupa desportiva com designs contemporâneos',
        'service-alterations-title': 'Retoques e Reparações',
        'service-alterations-desc': 'Retoques e reparações profissionais para todos os tipos de vestuário',
        'contact-address-title': 'Endereço',
        'contact-address-val': 'Tânger, Marrocos',
        'contact-phone-title': 'Telefone',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Enviar mensagem',
        'wa-order': 'Encomendar via WhatsApp',
        'wa-float-btn': 'Contactar Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    },
    ru: {
        dir: 'ltr',
        flag: '🇷🇺',
        name: 'Русский',
        'nav-gallery': 'Галерея',
        'nav-services': 'Услуги',
        'nav-contact': 'Контакты',
        'hero-subtitle': 'Мастерство традиционного и современного пошива в Танжере',
        'hero-btn': 'Связаться с нами',
        'section-services': 'Наши Услуги',
        'section-gallery': 'Наши Работы',
        'section-contact': 'Контакты',
        'filter-all': 'Все',
        'filter-coats': 'Пальто',
        'filter-sportswear': 'Спортивная Одежда',
        'filter-traditional': 'Традиционное',
        'service-traditional-title': 'Традиционный Пошив',
        'service-traditional-desc': 'Аутентичные марокканские джеллабы, кафтаны и гандуры из лучших тканей',
        'service-modern-title': 'Современная Одежда',
        'service-modern-desc': 'Костюмы, пальто и спортивная одежда в современном стиле',
        'service-alterations-title': 'Ретушь и Ремонт',
        'service-alterations-desc': 'Профессиональная переделка и ремонт одежды любого типа',
        'contact-address-title': 'Адрес',
        'contact-address-val': 'Танжер, Марокко',
        'contact-phone-title': 'Телефон',
        'contact-wa-title': 'WhatsApp',
        'contact-wa-link': 'Отправить сообщение',
        'wa-order': 'Заказать через WhatsApp',
        'wa-float-btn': 'Связаться с Maître Mohamed',
        'footer-text': '© 2026 Maître Mohamed - Tanger'
    }
};

let currentLang = 'ar';

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    currentLang = lang;

    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.getElementById('currentFlag').textContent = t.flag;
    document.getElementById('currentLang').textContent = t.name;

    closeLangMenu();

    localStorage.setItem('mm-lang', lang);
}

function toggleLangMenu() {
    const switcher = document.getElementById('langSwitcher');
    const dropdown = document.getElementById('langDropdown');
    const isOpen = switcher.classList.contains('open');
    if (isOpen) {
        closeLangMenu();
    } else {
        switcher.classList.add('open');
        dropdown.classList.add('open');
    }
}

function closeLangMenu() {
    document.getElementById('langSwitcher').classList.remove('open');
    document.getElementById('langDropdown').classList.remove('open');
}

document.addEventListener('click', function(e) {
    if (!document.getElementById('langSwitcher').contains(e.target)) {
        closeLangMenu();
    }
});

/* ══════════════════════════════════════════
   ORDER MODAL
══════════════════════════════════════════ */
let currentProductName = '';
const ORDER_WHATSAPP_NUMBER = '212695495670';

function openOrderModal(productName) {
    currentProductName = productName || '';
    document.getElementById('modalProductName').textContent = currentProductName;
    document.getElementById('orderModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    clearFormErrors();
    updatePaymentMode();
    updateOrderSummary();
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('orderModal')) closeOrderModal();
}

function toggleAddressField() {
    const delivery = document.getElementById('deliveryOption').value;
    const row = document.getElementById('addressRow');
    const needsAddress = delivery === 'توصيل منزلي في طنجة' || delivery === 'شحن إلى مدينة أخرى';
    row.style.display = needsAddress ? 'flex' : 'none';
    if (!needsAddress) {
        document.getElementById('clientAddress').value = '';
        hideError('address');
    }
}

function clearFormErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.classList.remove('visible'));
    document.querySelectorAll('.form-input').forEach(el => el.classList.remove('error'));
}

function showError(fieldId) {
    document.getElementById('err-' + fieldId).classList.add('visible');
}

function hideError(fieldId) {
    const el = document.getElementById('err-' + fieldId);
    if (el) el.classList.remove('visible');
}

function markInputError(inputId) {
    const el = document.getElementById(inputId);
    if (el) el.classList.add('error');
}

function submitOrder(e) {
    e.preventDefault();
    clearFormErrors();

    const name      = document.getElementById('clientName').value.trim();
    const phone     = document.getElementById('clientPhone').value.trim();
    const delivery  = document.getElementById('deliveryOption').value;
    const address   = document.getElementById('clientAddress').value.trim();
    const measures  = document.getElementById('measurements').value.trim();
    const agreed    = document.getElementById('advanceAgreement').checked;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || '';
    const estimatedTotal = Number(document.getElementById('estimatedTotal').value) || 0;
    const depositAmount = Number(document.getElementById('depositAmount').value) || 0;
    const isOnlinePayment = paymentMethod === 'الدفع الإلكتروني';
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardExpiry = document.getElementById('cardExpiry').value.trim();
    const cardCvv = document.getElementById('cardCvv').value.trim();

    const needsAddress = delivery === 'توصيل منزلي في طنجة' || delivery === 'شحن إلى مدينة أخرى';

    let valid = true;

    if (!name)     { showError('name');     markInputError('clientName');     valid = false; }
    if (!phone)    { showError('phone');    markInputError('clientPhone');    valid = false; }
    if (!delivery) { showError('delivery'); markInputError('deliveryOption'); valid = false; }
    if (needsAddress && !address) { showError('address'); markInputError('clientAddress'); valid = false; }
    if (!paymentMethod) { showError('payment'); valid = false; }
    if (!agreed)   { showError('checkbox'); valid = false; }
    if (estimatedTotal > 0 && depositAmount > estimatedTotal) {
        showError('payment');
        valid = false;
    }
    if (isOnlinePayment) {
        const cardDigits = cardNumber.replace(/\D/g, '');
        const expiryMatch = cardExpiry.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
        if (cardDigits.length < 16) {
            showError('cardNumber');
            markInputError('cardNumber');
            valid = false;
        }
        if (!expiryMatch) {
            showError('cardExpiry');
            markInputError('cardExpiry');
            valid = false;
        }
        if (!/^\d{3,4}$/.test(cardCvv)) {
            showError('cardCvv');
            markInputError('cardCvv');
            valid = false;
        }
    }

    if (!valid) return;

    const deliveryLine = needsAddress
        ? `🚚 *نوع التوصيل:* ${delivery}\n📍 *العنوان:* ${address}`
        : `🚚 *نوع التوصيل:* ${delivery}`;

    const measuresLine = measures
        ? `\n📐 *المقاسات والتعديلات:*\n${measures}`
        : '';
    const amountLine = estimatedTotal || depositAmount
        ? `\n💰 *السعر الإجمالي المتوقع:* ${estimatedTotal || 'غير محدد'} د.م\n🪙 *مبلغ التسبيق:* ${depositAmount || 'غير محدد'} د.م`
        : '';

    const message =
`🏅 *طلب تفصيل جديد — Maître Mohamed*
━━━━━━━━━━━━━━━━━━━━━━
📦 *المنتج المطلوب:*
${currentProductName}
━━━━━━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${name}
📞 *الهاتف / الواتساب:* ${phone}
${deliveryLine}${measuresLine}
━━━━━━━━━━━━━━━━━━━━━━
    💳 *طريقة الدفع:* ${paymentMethod}${amountLine}
    ✅ *تأكيد التسبيق:* موافق على دفع Avance لبدء التفصيل، والباقي عند الاستلام
━━━━━━━━━━━━━━━━━━━━━━
شكراً — Merci 🙏`;

    const encoded = encodeURIComponent(message);
    const orderRecord = {
        product: currentProductName,
        name,
        phone,
        delivery,
        address,
        measurements: measures,
        paymentMethod,
        totalAmount: estimatedTotal,
        depositAmount,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    fetch('/api/orders', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderRecord),
        keepalive: true
    }).catch(() => {
        /* WhatsApp remains the customer-facing fallback if the POS API is unavailable. */
    });
    window.open(`https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    closeOrderModal();
    document.getElementById('orderForm').reset();
    document.getElementById('addressRow').style.display = 'none';
}

/* Intercept all order buttons — read product name from card */
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.wa-order-btn, .order-now-btn');
        if (!btn) return;
        const card = btn.closest('.img-card');
        if (!card) return;
        e.preventDefault();
        const nameEl = card.querySelector('.product-name');
        openOrderModal(nameEl ? nameEl.textContent.trim() : '');
    });
});

/* Live clear errors on input */
['clientName','clientPhone','deliveryOption','clientAddress','estimatedTotal','depositAmount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', function() {
        this.classList.remove('error');
        const map = {clientName:'name', clientPhone:'phone', deliveryOption:'delivery', clientAddress:'address', estimatedTotal:'payment', depositAmount:'payment'};
        hideError(map[id]);
    });
});

document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
    input.addEventListener('change', () => {
        hideError('payment');
        updatePaymentMode();
    });
});

function updatePaymentMode() {
    const online = document.querySelector('input[name="paymentMethod"]:checked')?.value === 'الدفع الإلكتروني';
    const panel = document.getElementById('onlinePaymentPanel');
    const submitLabel = document.getElementById('modalSubmitLabel');
    const submitButton = document.querySelector('.modal-submit-btn');
    if (panel) panel.hidden = !online;
    if (submitLabel) submitLabel.textContent = online ? 'تكملة الشراء' : 'تأكيد الطلب وإرسال عبر الواتساب';
    if (submitButton) submitButton.classList.toggle('online-mode', online);
    updateOrderSummary();
}

function updateOrderSummary() {
    const product = document.getElementById('summaryProductName');
    const details = document.getElementById('summaryDetails');
    const total = document.getElementById('summaryTotal');
    if (!product || !details || !total) return;

    product.textContent = currentProductName || 'طلب تفصيل خاص';
    const delivery = document.getElementById('deliveryOption')?.value;
    const address = document.getElementById('clientAddress')?.value.trim();
    const measurements = document.getElementById('measurements')?.value.trim();
    const detailParts = [
        delivery || 'التوصيل يحدد لاحقاً',
        address || '',
        measurements ? `المقاسات: ${measurements}` : 'المقاسات تحدد مع المعلم'
    ].filter(Boolean);
    details.textContent = detailParts.join(' · ');

    const amount = Number(document.getElementById('estimatedTotal')?.value || 0);
    total.innerHTML = amount
        ? `${amount.toLocaleString('fr-MA', {maximumFractionDigits: 2})} <small>د.م</small>`
        : 'غير محدد <small>د.م</small>';
}

function formatCardNumber(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    hideError('cardNumber');
    input.classList.remove('error');
}

function formatCardExpiry(input) {
    const digits = input.value.replace(/\D/g, '').slice(0, 4);
    input.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    hideError('cardExpiry');
    input.classList.remove('error');
}

function clearCardError(input, errorId) {
    input.value = input.value.replace(/\D/g, '').slice(0, 4);
    hideError(errorId);
    input.classList.remove('error');
}

const cardNumberInput = document.getElementById('cardNumber');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCvvInput = document.getElementById('cardCvv');
if (cardNumberInput) cardNumberInput.addEventListener('input', () => formatCardNumber(cardNumberInput));
if (cardExpiryInput) cardExpiryInput.addEventListener('input', () => formatCardExpiry(cardExpiryInput));
if (cardCvvInput) cardCvvInput.addEventListener('input', () => clearCardError(cardCvvInput, 'cardCvv'));

['deliveryOption', 'measurements', 'clientAddress', 'estimatedTotal', 'depositAmount'].forEach(id => {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('input', updateOrderSummary);
        input.addEventListener('change', updateOrderSummary);
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeOrderModal();
        closePosDashboard();
    }
});

/* ══════════════════════════════════════════
   PRIVATE POS DASHBOARD
══════════════════════════════════════════ */
let posOrders = [];

function togglePosDashboard() {
    const panel = document.getElementById('posDashboard');
    const isOpen = panel.classList.contains('active');
    if (isOpen) {
        closePosDashboard();
    } else {
        panel.classList.add('active');
        panel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        loadPosOrders();
    }
}

function closePosDashboard() {
    const panel = document.getElementById('posDashboard');
    panel.classList.remove('active');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function handlePosOverlayClick(e) {
    if (e.target === document.getElementById('posDashboard')) closePosDashboard();
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[character]));
}

function formatMoney(value) {
    return `${Number(value || 0).toLocaleString('fr-MA', {maximumFractionDigits: 2})} د.م`;
}

function loadPosOrders() {
    const feedback = document.getElementById('posFeedback');
    feedback.textContent = 'جاري تحميل الطلبات…';
    fetch('/api/orders?limit=200', {cache: 'no-store'})
        .then(response => {
            if (!response.ok) throw new Error('Unable to load orders');
            return response.json();
        })
        .then(data => {
            posOrders = Array.isArray(data.orders) ? data.orders : [];
            renderPosDashboard();
            feedback.textContent = '';
            document.getElementById('posLastUpdated').textContent = `آخر تحديث: ${new Date().toLocaleTimeString('ar-MA')}`;
        })
        .catch(() => {
            feedback.textContent = 'تعذر تحميل الطلبات. حاول تحديث البيانات.';
        });
}

function renderPosDashboard() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const day = startOfDay.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    const startOfWeek = new Date(startOfDay);
    startOfWeek.setDate(startOfDay.getDate() + mondayOffset);
    const activeOrders = posOrders.filter(order => order.status !== 'cancelled');
    const collected = order => Number(order.depositAmount || 0);
    const inRange = (order, start) => {
        const date = new Date(order.createdAt);
        return !Number.isNaN(date.getTime()) && date >= start;
    };
    const todayRevenue = posOrders.filter(order => inRange(order, startOfDay) && order.status !== 'cancelled')
        .reduce((sum, order) => sum + collected(order), 0);
    const weekRevenue = posOrders.filter(order => inRange(order, startOfWeek) && order.status !== 'cancelled')
        .reduce((sum, order) => sum + collected(order), 0);
    const pending = activeOrders.reduce((sum, order) => Math.max(0, Number(order.totalAmount || 0) - collected(order)), 0);

    document.getElementById('posTodayRevenue').textContent = formatMoney(todayRevenue);
    document.getElementById('posWeekRevenue').textContent = formatMoney(weekRevenue);
    document.getElementById('posPendingDeposits').textContent = formatMoney(pending);
    document.getElementById('posOrderCount').textContent = posOrders.length;

    const body = document.getElementById('posOrdersBody');
    if (!posOrders.length) {
        body.innerHTML = '<tr><td colspan="5" class="pos-empty">لا توجد طلبات بعد</td></tr>';
        return;
    }
    body.innerHTML = posOrders.map(order => {
        const details = [
            order.phone ? `📞 ${escapeHtml(order.phone)}` : '',
            order.delivery ? `🚚 ${escapeHtml(order.delivery)}` : '',
            order.address ? `📍 ${escapeHtml(order.address)}` : '',
            order.measurements ? `📐 ${escapeHtml(order.measurements)}` : ''
        ].filter(Boolean).join('<br>');
        const date = new Date(order.createdAt);
        const dateLabel = Number.isNaN(date.getTime()) ? '' : date.toLocaleString('ar-MA', {dateStyle: 'short', timeStyle: 'short'});
        return `<tr>
            <td><strong>${escapeHtml(order.name || '—')}</strong><small>${escapeHtml(order.product || 'طلب تفصيل')}</small><time>${dateLabel}</time></td>
            <td>${details || '—'}</td>
            <td><span class="pos-payment">${escapeHtml(order.paymentMethod || '—')}</span></td>
            <td><span>الإجمالي: ${formatMoney(order.totalAmount)}</span><br><span>التسبيق: ${formatMoney(order.depositAmount)}</span></td>
            <td><select class="pos-status-select" data-order-id="${escapeHtml(order.id)}" onchange="updateOrderStatus(this.dataset.orderId, this.value)">
                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>قيد المتابعة</option>
                <option value="deposit-paid" ${order.status === 'deposit-paid' ? 'selected' : ''}>تم التسبيق</option>
                <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>مكتمل</option>
                <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>ملغى</option>
            </select></td>
        </tr>`;
    }).join('');
}

function updateOrderStatus(orderId, status) {
    fetch(`/api/orders/${encodeURIComponent(orderId)}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status})
    }).then(response => {
        if (!response.ok) throw new Error('Unable to update order');
        return response.json();
    }).then(() => loadPosOrders())
      .catch(() => {
          document.getElementById('posFeedback').textContent = 'تعذر حفظ حالة الطلب.';
      });
}

/* ── GALLERY FILTER ── */
function filterGallery(category, btn) {
    const cards = document.querySelectorAll('.img-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

/* ── MOBILE MENU ── */
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('show');
    });
});

/* ── LIGHTBOX ── */
document.querySelectorAll('.img-wrap').forEach(wrap => {
    wrap.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        document.getElementById('lightbox').classList.add('active');
    });
});

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});

/* ── NAVBAR FADE IN ── */
const navbar = document.querySelector('.navbar');
navbar.style.opacity = '0';
navbar.style.transition = 'opacity 0.5s';
setTimeout(() => { navbar.style.opacity = '1'; }, 100);

/* ── RESTORE SAVED LANGUAGE ── */
const savedLang = localStorage.getItem('mm-lang');
if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
}

/* ── GOLDEN PARTICLES ── */
(function() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 65;

    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: -Math.random() * 0.4 - 0.1,
            opacity: Math.random() * 0.5 + 0.1,
            fadeDir: Math.random() > 0.5 ? 1 : -1,
            fadeSpeed: Math.random() * 0.003 + 0.001
        };
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.opacity += p.fadeDir * p.fadeSpeed;
            if (p.opacity >= 0.6) p.fadeDir = -1;
            if (p.opacity <= 0.05) p.fadeDir = 1;
            if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
                p.x = Math.random() * canvas.width;
                p.y = canvas.height + 10;
                p.opacity = 0.05;
                p.fadeDir = 1;
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
            ctx.fill();
            if (p.size > 1.5) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212,175,55,${p.opacity * 0.15})`;
                ctx.fill();
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
})();
