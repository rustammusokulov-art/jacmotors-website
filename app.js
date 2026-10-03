// ==========================================================================
// SAMARQAND JAC MOTORS — INTERACTIVE APPLICATION SCRIPT
// ==========================================================================

// Translation Dictionary (RU & UZ)
const translations = {
    ru: {
        "menu-home": "Главная",
        "menu-models": "Модельный ряд",
        "menu-credit": "Кредит",
        "menu-about": "О нас",
        "menu-faq": "Вопросы",
        "menu-contacts": "Контакты",
        
        "hero-tag": "Официальный дилер в Самарканде, Узбекистан",
        "hero-title": "Инновации в движении с <span class='text-glow'>JAC MOTORS</span>",
        "hero-desc": "Премиальные кроссоверы, надежные пикапы и коммерческая техника JAC напрямую с гарантией от производителя. Подберите идеальный автомобиль для жизни и бизнеса.",
        "hero-btn-select": "Выбрать модель",
        "hero-btn-calc": "Рассчитать кредит",
        
        "feature-warranty-title": "Официальная гарантия",
        "feature-warranty-desc": "До 5 лет или 150 000 км пробега",
        "feature-service-title": "Автосервис и запчасти",
        "feature-service-desc": "Оригинальные детали и ТО",
        "feature-credit-title": "Выгодный автокредит",
        "feature-credit-desc": "От 10% первоначальный взнос",
        
        "models-tag": "Каталог автомобилей",
        "models-title": "Модельный ряд <span class='text-glow'>JAC</span>",
        "tab-all": "Все модели",
        "tab-passenger": "Пассажирские",
        "tab-minivans": "Минивэны",
        "tab-commercial": "Коммерческие",
        
        "badge-popular": "Популярно",
        "badge-new": "Новинка",
        "badge-business": "Бизнес-класс",
        
        "trans-auto": "<i class='fa-solid fa-gears'></i> Автомат",
        "trans-manual": "<i class='fa-solid fa-gears'></i> Механика",
        "price-from": "Цена от:",
        "btn-specs": "Характеристики",
        "btn-credit": "В кредит",
        "theme-toggle-text": "Светлая тема",
        
        "js8-type": "Премиальный семейный кроссовер",
        "js8-seats": "<i class='fa-solid fa-user-group'></i> 6-7 мест",
        "t9-type": "Мощный рамный пикап 4x4",
        "t9-seats": "<i class='fa-solid fa-user-group'></i> 5 мест",
        "t8-type": "Надежный рамный пикап 4x4",
        "t8-seats": "<i class='fa-solid fa-user-group'></i> 5 мест",
        "m3p-type": "Комфортабельный минивэн",
        "m3p-seats": "<i class='fa-solid fa-user-group'></i> 9 мест",
        "m3c-type": "Грузовой фургон для бизнеса",
        "m3c-seats": "<i class='fa-solid fa-user-group'></i> 2 места",
        "m3c-payload": "<i class='fa-solid fa-truck-ramp-box'></i> 1.6т г/п",
        "m4-type": "Многоместный бизнес-минивэн",
        "m4-seats": "<i class='fa-solid fa-user-group'></i> 11 мест",
        "rf8-type": "Люксовый интеллектуальный минивэн",
        "rf8-seats": "<i class='fa-solid fa-user-group'></i> 7 мест",
        "sunray-type": "Многоцелевой микроавтобус",
        "sunray-seats": "<i class='fa-solid fa-user-group'></i> 15-16 мест",
        "sunrayv-type": "Грузовой фургон повышенной вместимости",
        "sunrayv-seats": "<i class='fa-solid fa-user-group'></i> 2-3 места",
        
        "calc-tag": "Финансовый помощник",
        "calc-title": "Автокредит в <span class='text-glow'>Samarqand Jac Motors</span>",
        "calc-desc": "Рассчитайте параметры кредитования и ежемесячный платеж за 1 минуту. Условия подбираются индивидуально.",
        "calc-params": "<i class='fa-solid fa-sliders'></i> Параметры кредита",
        "calc-select-car-label": "Выберите модель автомобиля",
        "calc-custom-option": "Своя цена (введите вручную)",
        "calc-price-label": "Стоимость автомобиля (UZS)",
        "calc-downpayment-label": "Первоначальный взнос",
        "calc-term-label": "Срок кредитования",
        "calc-term-val-36": "36 мес. (3 года)",
        "m-12": "12 мес.",
        "m-24": "24 мес.",
        "m-36": "36 мес.",
        "m-48": "48 мес.",
        "m-60": "60 мес.",
        "calc-rate-label": "Процентная ставка (годовая)",
        
        "calc-results-title": "<i class='fa-solid fa-chart-pie'></i> Результаты расчета",
        "calc-monthly-payment": "Ежемесячный платеж",
        "calc-loan-sum": "Сумма кредита:",
        "calc-downpayment-sum": "Первоначальный взнос:",
        "calc-overpayment": "Переплата по процентам:",
        "calc-total-sum": "Итого к выплате:",
        "btn-apply": "Оформить заявку",
        "calc-disclaimer": "*Расчет является предварительным. Точные условия зависят от банка-партнера и подтверждения кредитоспособности.",
        
        "showroom-stat-label": "Официальный дилер",
        "about-tag": "О компании",
        "about-title": "Автосалон <br><span class='text-glow'>Samarqand Jac Motors</span>",
        "about-desc": "Добро пожаловать в современный дилерский центр JAC в Самаркандской области, Узбекистан (Registon Motors). Наш автосалон предлагает полный спектр услуг по продаже и техническому обслуживанию всей линейки автомобилей JAC Motors.",
        "adv-1-title": "Тест-драйв на месте:",
        "adv-1-desc": "Вы можете лично оценить ходовые качества и комфорт любой интересующей вас модели.",
        "adv-2-title": "Выгодный трейд-ин:",
        "adv-2-desc": "Обменяйте свой старый автомобиль на новый JAC с доплатой на месте.",
        "adv-3-title": "Современный сервис:",
        "adv-3-desc": "Квалифицированные мастера, профессиональное диагностическое оборудование и оригинальные комплектующие.",
        
        "faq-tag": "Часто задаваемые вопросы",
        "faq-title": "Вопросы и <span class='text-glow'>Ответы</span>",
        "faq-q1": "Какие условия автокредита доступны на автомобили JAC?",
        "faq-a1": "Предварительные условия зависят от выбранной модели, первоначального взноса, срока и решения банка. Точный расчёт предоставляет менеджер Samarqand Jac Motors.",
        "faq-q2": "Какая гарантия предоставляется на автомобили JAC?",
        "faq-a2": "Условия и срок официальной гарантии зависят от модели и комплектации. Актуальные условия указаны в договоре и подтверждаются дилером перед покупкой.",
        "faq-q3": "Как работает услуга Trade-In?",
        "faq-a3": "Автомобиль проходит оценку, после чего согласованная стоимость может быть зачтена при покупке нового JAC. Итоговые условия определяются после осмотра.",
        "faq-q4": "Как записаться на тест-драйв JAC в Самарканде?",
        "faq-a4": "Оставьте заявку на сайте, позвоните по номеру +998 (77) 707-99-54 или напишите в Telegram-бот. Менеджер подтвердит доступное время и модель.",

        "contacts-tag": "Обратная связь",
        "contacts-title": "Связаться с <span class='text-glow'>Нами</span>",
        "info-address-title": "Наш адрес",
        "info-address-ru": "Самаркандская область, Самаркандский район, Andijoniy MFY, автодорога Самарканд-Бухара, 55-дом, Узбекистан",
        "info-phone-title": "Колл-центр",
        "info-working-hours": "Режим работы: Ежедневно с 9:00 до 20:00",
        "info-telegram-desc": "Удобный бот для расчета кредита и связи с консультантом",
        "btn-open-yandex": "Локация в Яндекс Навигаторе",
        "btn-open-google": "Открыть в Google Maps",
        
        "form-title": "Заказать консультацию специалиста",
        "form-subtitle": "Заполните форму ниже, и менеджер Samarqand Jac Motors свяжется с вами в течение 15 минут.",
        "form-name-label": "Ваше имя",
        "form-phone-label": "Номер телефона",
        "form-car-label": "Интересующая модель",
        "form-option-other": "Другое / Общая консультация",
        "form-submit": "Получить консультацию",
        
        "footer-copy": "© 2026 Samarqand Jac Motors (Registon Motors). Все права защищены. Официальный дилер JAC Motors в Самарканде, Узбекистан.",
        "footer-nav-title": "Навигация",
        "footer-contacts-title": "Контакты",
        "footer-addr": "Самарканд-Бухара шоссе, 55-дом, Узбекистан",
        
        "lead-title": "Заявка на автокредит",
        "lead-subtitle": "Заполните форму для предварительного расчета кредита банком",
        "summary-car": "Автомобиль:",
        "summary-payment": "Ежемесячный платеж:",
        "lead-submit-btn": "Отправить заявку",
        "success-title": "Заявка успешно отправлена!",
        "success-desc": "Спасибо за обращение. Менеджер Samarqand Jac Motors свяжется с вами в ближайшее время по указанному номеру телефона.",
        "success-btn": "Отлично"
    },
    uz: {
        "menu-home": "Bosh sahifa",
        "menu-models": "Modellar qatori",
        "menu-credit": "Kredit",
        "menu-about": "Biz haqimizda",
        "menu-faq": "Savollar",
        "menu-contacts": "Kontaktlar",
        
        "hero-tag": "Samarqanddagi (O'zbekiston) rasmiy diler",
        "hero-title": "Harakatdagi innovatsiyalar <span class='text-glow'>JAC MOTORS</span> bilan",
        "hero-desc": "Ishlab chiqaruvchining rasmiy kafolatiga ega premium krossoverlar, ishonchli pikaplar va JAC tijorat texnikalari. Hayot va biznes uchun eng mos keladigan avtomobilni tanlang.",
        "hero-btn-select": "Modelni tanlash",
        "hero-btn-calc": "Kreditni hisoblash",
        
        "feature-warranty-title": "Rasmiy kafolat",
        "feature-warranty-desc": "5 yilgacha yoki 150 000 km masofagacha",
        "feature-service-title": "Avtoservis va ehtiyot qismlar",
        "feature-service-desc": "Original qismlar va texnik xizmat",
        "feature-credit-title": "Qulay avtokredit",
        "feature-credit-desc": "Boshlang'ich to'lov 10% dan boshlab",
        
        "models-tag": "Avtomobillar katalogi",
        "models-title": "JAC <span class='text-glow'>modellar qatori</span>",
        "tab-all": "Barcha modellar",
        "tab-passenger": "Yengil avtomobillar",
        "tab-minivans": "Minivenlar",
        "tab-commercial": "Tijorat avtomobillari",
        
        "badge-popular": "Ommabop",
        "badge-new": "Yangi",
        "badge-business": "Biznes-klass",
        
        "trans-auto": "<i class='fa-solid fa-gears'></i> Avtomat",
        "trans-manual": "<i class='fa-solid fa-gears'></i> Mexanika",
        "price-from": "Narxi:",
        "btn-specs": "Tavsiflar",
        "btn-credit": "Kreditga",
        "theme-toggle-text": "Yorug' mavzu",
        
        "js8-type": "Premium oilaviy krossover",
        "js8-seats": "<i class='fa-solid fa-user-group'></i> 6-7 o'rin",
        "t9-type": "Kuchli ramali 4x4 pikap",
        "t9-seats": "<i class='fa-solid fa-user-group'></i> 5 o'rin",
        "t8-type": "Ishonchli ramali 4x4 pikap",
        "t8-seats": "<i class='fa-solid fa-user-group'></i> 5 o'rin",
        "m3p-type": "Qulay miniven",
        "m3p-seats": "<i class='fa-solid fa-user-group'></i> 9 o'rin",
        "m3c-type": "Biznes uchun yuk furqoni",
        "m3c-seats": "<i class='fa-solid fa-user-group'></i> 2 o'rin",
        "m3c-payload": "<i class='fa-solid fa-truck-ramp-box'></i> 1.6t yuk ko'tarish",
        "m4-type": "Ko'p o'rinli biznes-miniven",
        "m4-seats": "<i class='fa-solid fa-user-group'></i> 11 o'rin",
        "rf8-type": "Hashamatli intellektual miniven",
        "rf8-seats": "<i class='fa-solid fa-user-group'></i> 7 o'rin",
        "sunray-type": "Ko'p funksiyali mikroavtobus",
        "sunray-seats": "<i class='fa-solid fa-user-group'></i> 15-16 o'rin",
        "sunrayv-type": "Keng sig'imli yuk furqoni",
        "sunrayv-seats": "<i class='fa-solid fa-user-group'></i> 2-3 o'rin",
        
        "calc-tag": "Moliyaviy yordamchi",
        "calc-title": "<span class='text-glow'>Samarqand Jac Motors</span> da avtokredit",
        "calc-desc": "Kredit parametrlari va oylik to'lovni 1 daqiqada hisoblang. Shartlar individual tarzda tanlanadi.",
        "calc-params": "<i class='fa-solid fa-sliders'></i> Kredit parametrlari",
        "calc-select-car-label": "Avtomobil modelini tanlang",
        "calc-custom-option": "O'zingizning narx (qo'lda kiritish)",
        "calc-price-label": "Avtomobil narxi (UZS)",
        "calc-downpayment-label": "Boshlang'ich to'lov",
        "calc-term-label": "Kredit muddati",
        "calc-term-val-36": "36 oy (3 yil)",
        "m-12": "12 oy",
        "m-24": "24 oy",
        "m-36": "36 oy",
        "m-48": "48 oy",
        "m-60": "60 oy",
        "calc-rate-label": "Foiz stavkasi (yillik)",
        
        "calc-results-title": "<i class='fa-solid fa-chart-pie'></i> Hisob-kitob natijalari",
        "calc-monthly-payment": "Oylik to'lov",
        "calc-loan-sum": "Kredit summasi:",
        "calc-downpayment-sum": "Boshlang'ich to'lov:",
        "calc-overpayment": "Foiz bo'yicha ortiqcha to'lov:",
        "calc-total-sum": "Jami to'lov:",
        "btn-apply": "Ariza qoldirish",
        "calc-disclaimer": "*Hisob-kitob dastlabki hisoblanadi. Aniq shartlar hamkor-bank va to'lov qobiliyatini tasdiqlashga bog'liq.",
        
        "showroom-stat-label": "Rasmiy diler",
        "about-tag": "Kompaniya haqida",
        "about-title": "Avtosalon <br><span class='text-glow'>Samarqand Jac Motors</span>",
        "about-desc": "JAC ning Samarqand viloyatidagi zamonaviy dilerlik markaziga xush kelibsiz (Registon Motors). Biz barcha JAC Motors avtomobillarini sotish va texnik xizmat ko'rsatish bo'yicha to'liq xizmatlarni taqdim etamiz.",
        "adv-1-title": "Joyida test-drayv:",
        "adv-1-desc": "Siz o'zingizni qiziqtirgan har qanday modelning qulayligi va haydash xususiyatlarini shaxsan sinab ko'rishingiz mumkin.",
        "adv-2-title": "Foydali Trade-In:",
        "adv-2-desc": "Eski avtomobilingizni yangi JAC avtomobiliga joyida qo'shimcha to'lov bilan almashtiring.",
        "adv-3-title": "Zamonaviy servis:",
        "adv-3-desc": "Malakali ustalar, professional diagnostika uskunalari va original ehtiyot qismlar.",
        
        "faq-tag": "Ko'p beriladigan savollar",
        "faq-title": "Savollar va <span class='text-glow'>Javoblar</span>",
        "faq-q1": "JAC avtomobillari uchun qanday avtokredit shartlari mavjud?",
        "faq-a1": "Dastlabki shartlar tanlangan model, boshlang'ich to'lov, muddat va bank qaroriga bog'liq. Aniq hisob-kitobni Samarqand Jac Motors menejeri taqdim etadi.",
        "faq-q2": "JAC avtomobillariga qanday kafolat beriladi?",
        "faq-a2": "Rasmiy kafolat shartlari va muddati model hamda komplektatsiyaga bog'liq. Amaldagi shartlar shartnomada ko'rsatiladi va xariddan oldin diler tomonidan tasdiqlanadi.",
        "faq-q3": "Trade-In xizmati qanday ishlaydi?",
        "faq-a3": "Avtomobil baholanadi, kelishilgan qiymat esa yangi JAC xaridida hisobga olinishi mumkin. Yakuniy shartlar ko'rikdan so'ng belgilanadi.",
        "faq-q4": "Samarqandda JAC test-drayviga qanday yozilish mumkin?",
        "faq-a4": "Saytda ariza qoldiring, +998 (77) 707-99-54 raqamiga qo'ng'iroq qiling yoki Telegram botga yozing. Menejer mavjud vaqt va modelni tasdiqlaydi.",

        "contacts-tag": "Qayta aloqa",
        "contacts-title": "Biz bilan <span class='text-glow'>Bog'lanish</span>",
        "info-address-title": "Bizning manzil",
        "info-address-ru": "Samarqand viloyati, Samarqand tumani, Andijoniy MFY, Samarqand-Buxoro shossesi, 55-uy",
        "info-phone-title": "Koll-markaz",
        "info-working-hours": "Ish tartibi: Har kuni 9:00 dan 20:00 gacha",
        "info-telegram-desc": "Kredit hisoblash va maslahatchi bilan bog'lanish uchun qulay bot",
        "btn-open-yandex": "Yandex Navigator orqali ochish",
        "btn-open-google": "Google Maps da ochish",
        
        "form-title": "Mutaxassis maslahatini olish",
        "form-subtitle": "Quyidagi formani to'ldiring, va Samarqand Jac Motors menejeri 15 daqiqa ichida siz bilan bog'lanadi.",
        "form-name-label": "Ismingiz",
        "form-phone-label": "Telefon raqamingiz",
        "form-car-label": "Sizni qiziqtirgan model",
        "form-option-other": "Boshqa / Umumiy maslahat",
        "form-submit": "Maslahat olish",
        
        "footer-copy": "© 2026 Samarqand Jac Motors (Registon Motors). Barcha huquqlar himoyalangan. O'zbekistonda JAC Motors rasmiy dileri.",
        "footer-nav-title": "Navigatsiya",
        "footer-contacts-title": "Kontaktlar",
        "footer-addr": "Samarqand-Buxoro yo'li, 55-uy, O'zbekiston",
        
        "lead-title": "Avtokreditga ariza",
        "lead-subtitle": "Bank orqali kreditni dastlabki hisoblash uchun formani to'ldiring",
        "summary-car": "Avtomobil:",
        "summary-payment": "Oylik to'lov:",
        "lead-submit-btn": "Arizani yuborish",
        "success-title": "Ariza muvaffaqiyatli yuborildi!",
        "success-desc": "Murojaatingiz uchun rahmat. Samarqand Jac Motors menejeri ko'rsatilgan telefon raqami bo'yicha tez orada siz bilan bog'lanadi.",
        "success-btn": "Ajoyib"
    }
};

// Model Specifications Database for Modal View
const modelSpecsData = {
    js8: {
        name: "JAC JS8 PRO",
        subtitle: "Флагманский 7-местный кроссовер",
        price: "313 950 000 UZS",
        image: "images/js8.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "1.5L Turbo (180 л.с.)" },
            { label: "Трансмиссия", val: "7-ступенчатый робот DCT" },
            { label: "Привод", val: "Передний (FWD)" },
            { label: "Количество мест", val: "6 или 7 мест" },
            { label: "Оснащение", val: "Панорамная крыша, камера 360°, цифровая панель приборов, кожаный салон" }
        ]
    },
    t9: {
        name: "JAC T9",
        subtitle: "Флагманский рамный пикап 4x4",
        price: "419 265 000 UZS",
        image: "images/jac_t9.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "2.0L Turbo Benzine (231 л.с.)" },
            { label: "Трансмиссия", val: "8-ступенчатый автомат (ZF)" },
            { label: "Привод", val: "Полный привод 4x4 с блокировкой" },
            { label: "Грузоподъемность", val: "1000 кг" },
            { label: "Оснащение", val: "Кожаный салон, беспроводная зарядка, адаптивный круиз, мультимедиа 10.4''" }
        ]
    },
    t8: {
        name: "JAC T8",
        subtitle: "Надежный внедорожный пикап",
        price: "330 330 000 UZS",
        image: "images/jac_t8.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "2.0L Turbo (139 л.с.)" },
            { label: "Трансмиссия", val: "6-ступенчатая механика" },
            { label: "Привод", val: "Подключаемый полный 4x4" },
            { label: "Клиренс", val: "220 мм" }
        ]
    },
    m3_passenger: {
        name: "JAC M3 PLUS",
        subtitle: "Комфортабельный минивэн (9 мест)",
        price: "226 233 000 UZS",
        image: "images/m3_front_11.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "1.8L Атмосферный (134 л.с.)" },
            { label: "Трансмиссия", val: "5-ступенчатая механика" },
            { label: "Количество мест", val: "9 посадочных мест" },
            { label: "Оснащение", val: "Двухзонный кондиционер, сдвижная боковая дверь" }
        ]
    },
    m3_cargo: {
        name: "JAC M3 VAN",
        subtitle: "Грузовой цельнометаллический фургон",
        price: "209 034 000 UZS",
        image: "images/m3_van_front_9.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "1.8L (134 л.с.)" },
            { label: "Грузоподъемность", val: "1.6 тонны" },
            { label: "Объем кузова", val: "5.5 куб. метров" },
            { label: "Мест в кабине", val: "2 места" }
        ]
    },
    m4: {
        name: "JAC M4 PLUS",
        subtitle: "11-местный бизнес-минивэн",
        price: "255 339 000 UZS",
        image: "images/m4_front_2.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "2.0L (147 л.с.)" },
            { label: "Трансмиссия", val: "Механика" },
            { label: "Количество мест", val: "11 мест (трансформируемый салон)" }
        ]
    },
    rf8: {
        name: "JAC Refine RF8",
        subtitle: "Интеллектуальный люкс-минивэн",
        price: "444 675 000 UZS",
        image: "images/rf8_8.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "2.0L Turbo (252 л.с.)" },
            { label: "Трансмиссия", val: "8-ступенчатый автомат" },
            { label: "Салон", val: "7 мест, капитанские кресла с вентиляцией и массажем" }
        ]
    },
    sunray: {
        name: "JAC SUNRAY",
        subtitle: "Пассажирский микроавтобус (16 мест)",
        price: "416 745 000 UZS",
        image: "images/sunray_front_2.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "2.8L Дизель с турбонаддувом" },
            { label: "Трансмиссия", val: "6-ступенчатая механика" },
            { label: "Количество мест", val: "15 + 1 пассажирских мест" }
        ]
    },
    sunray_van: {
        name: "JAC SUNRAY VAN",
        subtitle: "Крупногабаритный грузовой фургон",
        price: "383 670 000 UZS",
        image: "images/sunray_van_front_9.jpg?v=2.0",
        specs: [
            { label: "Двигатель", val: "2.8L Дизель" },
            { label: "Объем грузового отсека", val: "12 куб. метров" }
        ]
    }
};

// Application State
let currentLang = 'ru';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initCreditCalculator();
    initModelFilters();
    initFaqAccordion();
    initModals();
    initTheme();
    initMobileDrawer();
    initForms();
    initHeroBgSlider();
});

// Format Number with Spaces (e.g. 313 950 000)
function formatMoney(amount) {
    return Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function parseMoney(str) {
    return parseInt(str.toString().replace(/\s+/g, ''), 10) || 0;
}

// 1. LANGUAGE SWITCHER
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.dataset.lang;
            setLanguage(selectedLang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active class on all lang buttons
    document.querySelectorAll('.lang-btn').forEach(b => {
        if (b.dataset.lang === lang) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });

    // Update text content with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// 2. CREDIT CALCULATOR
function initCreditCalculator() {
    const carSelect = document.getElementById('calc-car-select');
    const priceInput = document.getElementById('calc-price-input');
    const priceRange = document.getElementById('calc-price-range');
    const downpaymentRange = document.getElementById('calc-downpayment-range');
    const downpaymentPercentDisplay = document.getElementById('downpayment-percent-display');
    const downpaymentSumDisplay = document.getElementById('downpayment-sum-display');
    const rateRange = document.getElementById('calc-rate-range');
    const rateDisplay = document.getElementById('rate-display');
    const termRadios = document.querySelectorAll('input[name="calc-term"]');
    const termDisplay = document.getElementById('term-display');

    // Results elements
    const monthlyPaymentVal = document.getElementById('monthly-payment-val');
    const loanAmountVal = document.getElementById('loan-amount-val');
    const loanDownpaymentVal = document.getElementById('loan-downpayment-val');
    const loanOverpaymentVal = document.getElementById('loan-overpayment-val');
    const loanTotalVal = document.getElementById('loan-total-val');

    function calculate() {
        const carPrice = parseMoney(priceInput.value);
        const downPercent = parseInt(downpaymentRange.value, 10);
        const downpaymentSum = carPrice * (downPercent / 100);
        const loanAmount = Math.max(0, carPrice - downpaymentSum);
        
        let termMonths = 36;
        termRadios.forEach(radio => {
            if (radio.checked) termMonths = parseInt(radio.value, 10);
        });

        const annualRate = parseFloat(rateRange.value);
        const monthlyRate = (annualRate / 100) / 12;

        // Annuity monthly payment formula: P * (r * (1 + r)^n) / ((1 + r)^n - 1)
        let monthlyPayment = 0;
        if (monthlyRate > 0 && loanAmount > 0) {
            monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
        }

        const totalPayment = (monthlyPayment * termMonths) + downpaymentSum;
        const overpayment = Math.max(0, totalPayment - carPrice);

        // Update displays
        downpaymentPercentDisplay.textContent = downPercent + '%';
        downpaymentSumDisplay.textContent = formatMoney(downpaymentSum) + ' UZS';
        rateDisplay.textContent = annualRate + '%';
        termDisplay.textContent = termMonths + (currentLang === 'uz' ? ' oy' : ' мес.');

        monthlyPaymentVal.textContent = formatMoney(monthlyPayment) + ' UZS';
        loanAmountVal.textContent = formatMoney(loanAmount) + ' UZS';
        loanDownpaymentVal.textContent = formatMoney(downpaymentSum) + ' UZS';
        loanOverpaymentVal.textContent = formatMoney(overpayment) + ' UZS';
        loanTotalVal.textContent = formatMoney(totalPayment) + ' UZS';
    }

    // Car Select change
    if (carSelect) {
        carSelect.addEventListener('change', (e) => {
            if (e.target.value !== 'custom') {
                const price = parseInt(e.target.value, 10);
                priceInput.value = formatMoney(price);
                priceRange.value = price;
                calculate();
            }
        });
    }

    // Price range & input sync
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            priceInput.value = formatMoney(e.target.value);
            if (carSelect) carSelect.value = 'custom';
            calculate();
        });
    }

    if (priceInput) {
        priceInput.addEventListener('input', (e) => {
            const rawVal = parseMoney(e.target.value);
            priceRange.value = rawVal;
            calculate();
        });
    }

    // Downpayment range
    if (downpaymentRange) {
        downpaymentRange.addEventListener('input', calculate);
    }

    // Rate range
    if (rateRange) {
        rateRange.addEventListener('input', calculate);
    }

    // Term Radios
    termRadios.forEach(radio => {
        radio.addEventListener('change', calculate);
    });

    // Model Card "В кредит" Buttons
    document.querySelectorAll('.calc-trigger-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const price = parseInt(btn.dataset.price, 10);
            const modelName = btn.dataset.modelName;
            
            if (priceInput && priceRange) {
                priceInput.value = formatMoney(price);
                priceRange.value = price;
                if (carSelect) {
                    carSelect.value = price.toString();
                    if (!carSelect.value) carSelect.value = 'custom';
                }
                calculate();
            }

            const calcSection = document.getElementById('calculator');
            if (calcSection) {
                calcSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Run initial calculation
    calculate();
}

// 3. MODEL FILTERS
function initModelFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const modelCards = document.querySelectorAll('.model-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;

            modelCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 4. FAQ ACCORDION
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// 5. MODALS & SPECIFICATIONS
function initModals() {
    const specModal = document.getElementById('spec-modal');
    const leadModal = document.getElementById('lead-modal');
    const successModal = document.getElementById('success-modal');

    // Close Modals
    document.querySelectorAll('.modal-close, .success-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // Specs Modal trigger
    document.querySelectorAll('.spec-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modelKey = btn.dataset.model;
            const data = modelSpecsData[modelKey];

            if (data && specModal) {
                                const modalBody = document.getElementById('modal-body-content');
                const priceLabel = currentLang === 'uz' ? 'Narxi: ' : 'Цена: ';
                const specsTitle = currentLang === 'uz' ? 'Texnik tavsiflari:' : 'Технические характеристики:';
                const calcBtnText = currentLang === 'uz' ? 'Kreditga hisoblash' : 'Рассчитать в кредит';
                
                let specsHtml = `
                    <div class="modal-car-image-wrap">
                        <img src="${data.image}" alt="${data.name}">
                    </div>
                    <h2 class="modal-car-name">${data.name}</h2>
                    <p class="modal-car-sub">${data.subtitle}</p>
                    <div class="modal-price-box">
                        ${priceLabel}<span>${data.price}</span>
                    </div>
                    <h4 class="modal-specs-title">${specsTitle}</h4>
                    <div class="modal-specs-list">
                `;

                data.specs.forEach(s => {
                    specsHtml += `
                        <div class="modal-spec-row">
                            <span class="modal-spec-label">${s.label}:</span>
                            <strong class="modal-spec-val">${s.val}</strong>
                        </div>
                    `;
                });

                specsHtml += `
                    </div>
                    <button class="btn btn-primary btn-block calc-trigger-btn" data-price="${parseMoney(data.price)}" data-model-name="${data.name}" style="margin-top: 25px;">
                        ${calcBtnText}
                    </button>
                `;
                modalBody.innerHTML = specsHtml;
                specModal.classList.add('active');

                // Bind click to inner calc button
                modalBody.querySelector('.calc-trigger-btn').addEventListener('click', () => {
                    specModal.classList.remove('active');
                    const priceInput = document.getElementById('calc-price-input');
                    const priceRange = document.getElementById('calc-price-range');
                    if (priceInput && priceRange) {
                        priceInput.value = formatMoney(parseMoney(data.price));
                        priceRange.value = parseMoney(data.price);
                    }
                    const calcSection = document.getElementById('calculator');
                    if (calcSection) calcSection.scrollIntoView({ behavior: 'smooth' });
                });
            }
        });
    });

    // Open Lead Modal
    document.querySelectorAll('.open-lead-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const carSelect = document.getElementById('calc-car-select');
            const selectedOption = carSelect ? carSelect.options[carSelect.selectedIndex] : null;
            const carName = selectedOption ? (selectedOption.dataset.name || 'JAC') : 'JAC';
            const monthlyPayment = document.getElementById('monthly-payment-val').textContent;

            document.getElementById('summary-car-name').textContent = carName;
            document.getElementById('summary-monthly-payment').textContent = monthlyPayment;

            if (leadModal) leadModal.classList.add('active');
        });
    });
}

// 6. MOBILE DRAWER
function initMobileDrawer() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const closeBtn = document.querySelector('.drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('active');
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// 7. FORM SUBMISSIONS
function initForms() {
    const inlineForm = document.getElementById('inline-callback-form');
    const leadForm = document.getElementById('modal-lead-form');
    const successModal = document.getElementById('success-modal');

    function handleSubmission(e, formType) {
        e.preventDefault();
        
        // Close other modals if open
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        
        // Show success modal
        if (successModal) {
            successModal.classList.add('active');
        }

        e.target.reset();
    }

    if (inlineForm) {
        inlineForm.addEventListener('submit', (e) => handleSubmission(e, 'callback'));
    }

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => handleSubmission(e, 'credit_lead'));
    }
}

// 8. HERO BACKGROUND AUTO-ROTATING SLIDER
function initHeroBgSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides || slides.length < 1) return;
    
    // Ensure initial state
    slides.forEach((s, idx) => {
        if (idx === 0) s.classList.add('active');
        else s.classList.remove('active');
    });
    
    if (slides.length < 2) return;
    
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4500);
}




// ==========================================================================
// THEME SWITCHER (DARK / LIGHT MODE)
// ==========================================================================
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const drawerThemeBtn = document.getElementById('drawer-theme-btn');
    
    function updateThemeUI(theme) {
        const isLight = theme === 'light';
        const labelText = isLight 
            ? (currentLang === 'uz' ? "Qorong'i mavzu" : "Темная тема")
            : (currentLang === 'uz' ? "Yorug' mavzu" : "Светлая тема");
            
        document.querySelectorAll('.theme-label-text').forEach(el => {
            el.textContent = labelText;
        });
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        if (newTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('jac_theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('jac_theme', 'dark');
        }
        updateThemeUI(newTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    if (drawerThemeBtn) {
        drawerThemeBtn.addEventListener('click', toggleTheme);
    }

    // Initial label setup
    const savedTheme = localStorage.getItem('jac_theme') || 'dark';
    updateThemeUI(savedTheme);
}
