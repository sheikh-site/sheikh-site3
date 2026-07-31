// القاموس الشامل للغات الثلاث مع الأوقات الدقيقة ورابط البث المباشر
const translations = {
    ar: {
        sheikhName: " محمد زين بن آدم",
        honorific: " الشيخ",  
        prayer: "حفظه الله ورعاه", 
        subTitle: "حفظه الله ورعاه", 
        officialSite: "الموقع الرسمي لفضيلة ",
        honorificWelcome: "  أهلاً بكم في الموقع الرسمي لفضيلة  الشيخ",
        heroDesc: "المنصة العلمية الشاملة لنشر الشروحات، الدروس والمحاضرات المبنية على الكتاب والسنة بفهم سلف الأمة في شتى العلوم الشرعية واللغوية.",
        searchPlaceholder: "ابحث عن قسم أو كتاب أو شرح...", 
        loadText: "جاري التحميل", 
        secCategories: "الأقسام العلمية الكبرى", 
        catTafsir: "قسم التفسير", 
        descTafsir: "تفسير القرآن الكريم وعلوم نزوله وتدبر آياته والقواعد الحسان.",
        catAqeedah: "قسم العقيدة والتوحيد", 
        descAqeedah: "تقرير أصول الإيمان والتوحيد والردود على المبتدعة على منهج السلف.",
        catFiqh: "قسم الفقه وأصوله", 
        descFiqh: "شرح الأحكام الشرعية العملية في العبادات، المعاملات، والنوازل.",
        catSeerah: "قسم السيرة النبوية والتاريخ",
        descSeerah: "دراسة أحداث العهد النبوي، مغازي الرسول ﷺ، والتاريخ الإسلامي.",
        catArabic: "قسم اللغة العربية", 
        descArabic: "دروس النحو، الصرف، البلاغة، وقواعد الآجرومية وعلوم اللسان العربي.",
        catHadith: "قسم الحديث والمصطلح", 
        descHadith: "شرح الأحاديث النبوية، متون الأثر، وعلوم المصطلح والأسانيد.",
        
        // الأقسام والكتب
        secReadingNow: "يُقرأ حالياً في الدروس",
        readingNow: "🔴 بث مباشر | يقرأ حالياً",
        secLatestAdded: "آخر المواد المضافة حديثاً",
        newBadge: "جديد",

        // تفاصيل الكتب والأوقات
        bSaadiTitle: "تفسير السعدي (تيسير الكريم الرحمن)",
        bSaadiDesc: "الإثنين، الثلاثاء، الأربعاء، والخميس | ظهراً من 4:30 - 5:15",
        lSaadiDesc: "إضافة تسجيل درس اليوم والصوتيات",

        bRiyadTitle: "رياض الصالحين من كلام سيد المرسلين",
        bRiyadDesc: "الإثنين، الثلاثاء، الأربعاء، والخميس | بعد صلاة الصبح",
        lRiyadDesc: "إضافة الدرس الجديد والمفرغات",

        bNasaiTitle: "سنن النسائي (المجتبى)",
        bNasaiDesc: "الإثنين، الثلاثاء، الأربعاء، والخميس | ظهراً من 5:20 - 6:10",
        lNasaiDesc: "إضافة تسجيل الشريط الحديث",

        bQawlTitle: "فتح المجيد / القول المفيد على كتاب التوحيد",
        bQawlDesc: "الإثنين، الثلاثاء، والأربعاء | بين المغرب والعشاء",
        lQawlDesc: "تمت إضافة الدرس اليومي الجديد",

        bIbnMajahTitle: "سنن ابن ماجة",
        bIbnMajahDesc: "السبت والأحد | صباحاً 1:05 - 2:30 و ظهراً بعد العصر (مسجد أبو بكر)",
        lIbnMajahDesc: "رفع الدرس اليومي كاملاً",

        // البث المباشر على تلجرام
        telegramLiveLinkText: "🔴 انضم للبث المباشر للدروس على تلجرام",
        telegramLiveUrl: "https://t.me/SheikhMuhammedZainAdam/16844",
        telegram: "قناة البث المباشر والدروس الرسمية",
        rights: "جميع الحقوق محفوظة © 2026 | المنصة العلمية لفضيلة الشيخ محمد زين بن آدم"
    },
    en: {
        sheikhName: "Mohammed Zayn bin Adam", 
        honorific: "Sheikh", 
        prayer: "May Allah Protect Him",
        subTitle: "May Allah Protect Him", 
        officialSite: "Official Website of ",
        honorificWelcome: "Welcome to the Official Website of Sheikh",
        heroDesc: "The comprehensive scientific platform for publishing explanations and lectures based on Quran and Sunnah with the understanding of Salaf.",
        searchPlaceholder: "Search for category, book or lesson...", 
        loadText: "Loading",
        secCategories: "Major Scientific Sections", 
        catTafsir: "Tafsir Section", 
        descTafsir: "Interpretation of the Noble Qur'an, sciences of revelation, and Al-Qawa'id Al-Hisan.",
        catAqeedah: "Aqeedah & Tawheed", 
        descAqeedah: "Establishing core faith, monotheism, and principles of orthodox Islamic creed.",
        catFiqh: "Fiqh & Jurisprudence", 
        descFiqh: "Explanation of Islamic practical rulings regarding worship, dealings, and consensus.",
        catSeerah: "Prophetic Biography Section",
        descSeerah: "Study of the life of Prophet Muhammad ﷺ and Islamic history.",
        catArabic: "Arabic Language Section", 
        descArabic: "Lessons in Grammar (Nahw), Morphology (Sarf), Rhetoric, and linguistic rules.",
        catHadith: "Hadith & Terminology", 
        descHadith: "Explanations of prophetic Hadiths, text narrations, chains, and terminology.",
        
        // Sections
        secReadingNow: "Currently Being Read", 
        readingNow: "🔴 LIVE | Ongoing Lesson",
        secLatestAdded: "Recently Added Lessons", 
        newBadge: "New",

        // Book details and schedules
        bSaadiTitle: "Tafsir Al-Sa'di",
        bSaadiDesc: "Mon, Tue, Wed & Thu | Afternoon 4:30 - 5:15",
        lSaadiDesc: "Today's lesson recording added",

        bRiyadTitle: "Riyad Al-Salihin",
        bRiyadDesc: "Mon, Tue, Wed & Thu | After Subh (Fajr) Prayer",
        lRiyadDesc: "New lesson audio added",

        bNasaiTitle: "Sunan Al-Nasa'i",
        bNasaiDesc: "Mon, Tue, Wed & Thu | Afternoon 5:20 - 6:10",
        lNasaiDesc: "Latest lecture recording added",

        bQawlTitle: "Fath Al-Majeed / Al-Qawl Al-Mufid",
        bQawlDesc: "Mon, Tue & Wed | Between Maghrib and Isha",
        lQawlDesc: "New daily lecture added",

        bIbnMajahTitle: "Sunan Ibn Majah",
        bIbnMajahDesc: "Sat & Sun | Morning 1:05 - 2:30 & After Asr (Abubakr Masjid)",
        lIbnMajahDesc: "Full daily lesson uploaded",

        // Live stream Telegram link
        telegramLiveLinkText: "🔴 Join Live Stream on Telegram",
        telegramLiveUrl: "https://t.me/SheikhMuhammedZainAdam/16844",
        telegram: "Official Live & Lessons Channel", 
        rights: "All Rights Reserved © 2026 | Scientific Platform of Sheikh Mohammed Zayn"
    },
    am: {
        sheikhName: "መሐመድ ዘይን ቢን አደም", 
        honorific: "ሸይኽ", 
        prayer: "አላህ ይጠብቃቸው",
        subTitle: "አላህ ይጠብቃቸው", 
        officialSite: "የሸይኽ ይፋዊ ድረ-ገጽ ",
        honorificWelcome: "ወደ ታላቁ ሸይኽ ይፋዊ ሳይንሳዊ ድረ-ገጽ በደህና መጡ",
        heroDesc: "በቁርአንና በሱና ላይ የተመሰረቱ የሸሪዓዊና የቋንቋ ሳይንሶች ትምህርቶችና ማብራሪያዎች የሚለቀቁበት ሁሉን አቀፍ መድረክ።",
        searchPlaceholder: "ይፈልጉ...", 
        loadText: "በመጫን ላይ",
        secCategories: "ዋና ዋና የሳይንስ ክፍሎች", 
        catTafsir: "የተፍሲር ክፍል", 
        descTafsir: "የቁርዓን ትርጓሜ፣ የወረደባቸው ሳይንሶች እና አል-ቀዋኢድ አል-ሂሳን ማብራሪያ።",
        catAqeedah: "የአቂዳና ተውሂድ ክፍል", 
        descAqeedah: "የእምነት መሠረቶች፣ የተውሂድ ማረጋገጫ እና በሰለፎች መንገድ ላይ ያሉ ትምህርቶች።",
        catFiqh: "የፊቅህና መሠረቶቹ ክፍል", 
        descFiqh: "በአምልኮ، በዕለታዊ ግንኙነቶች እና በሸሪዓ ህግጋት ዙሪያ ተግባራዊ ማብራሪያዎች።",
        catArabic: "የአረብኛ ቋንቋ ክፍል", 
        descArabic: "የአረብኛ ሰዋሰው (ናህው)፣ ስነ-ቃል (ሰርፍ) እና የቋንቋ ሳይንስ ትምህርቶች።",
        catSeerah: "የነቢዩ ታሪክ (ሲራ) ክፍል",
        descSeerah: "የነቢዩ ሙሐመድ ﷺ የሕይወት ታሪክ እና የኢስላም ታሪክ ጥናት።",
        catHadith: "የሐዲስና ተያያዥ ሳይንሶች ክፍል", 
        descHadith: "የነቢዩ መሐመድ ሐዲሶች ማብራሪያ፣ የሐዲስ አሰነዋወር እና ደንቦች።",
        
        // Sections
        secReadingNow: "አሁን እየተቀራ ያለ",
        readingNow: "🔴 በቀጥታ ስርጭት | በመቅራት ላይ",
        secLatestAdded: "በቅርቡ የተጨመሩ",
        newBadge: "አዲስ",

        // Book details and schedules
        bSaadiTitle: "ተፍሲር አሥ-ሠዕዲ",
        bSaadiDesc: "ሰኞ፣ ማክሰኞ፣ ረቡዕ እና ሐሙስ | ቀን ከ 4:30 እስከ 5:15",
        lSaadiDesc: "የዛሬው ትምህርት ድምፅ ተጨምሯል",

        bRiyadTitle: "ሪያዱ ሷሊሂን",
        bRiyadDesc: "ሰኞ፣ ማክሰኞ፣ ረቡዕ እና ሐሙስ | ከሱብሒ ሶላት በኋላ",
        lRiyadDesc: "አዲሱ ትምህርት ተጨምሯል",

        bNasaiTitle: "ሱነን አል-ነሳኢ",
        bNasaiDesc: "ሰኞ፣ ማክሰኞ፣ ረቡዕ እና ሐሙስ | ቀን ከ 5:20 እስከ 6:10",
        lNasaiDesc: "የቅርቡ ትምህርት ተጨምሯል",

        bQawlTitle: "ፈትሑል መጂድ (ኪታቡ ተውሂድ)",
        bQawlDesc: "ሰኞ፣ ማክሰኞ እና ረቡዕ | ከመርብ እስከ ዒሻእ",
        lQawlDesc: "አዲሱ የዕለቱ ትምህርት ተጨምሯል",

        bIbnMajahTitle: "ሱነን ኢብኑ ማጃህ",
        bIbnMajahDesc: "ቅዳሜ እና እሁድ | ጧት ከ 1:05 - 2:30 እና ከዐስር ሶላት በኋላ (አቡበክር መስጂድ)",
        lIbnMajahDesc: "የዕለቱ ትምህርት በሙሉ ተጭኗል",

        // Live stream Telegram link
        telegramLiveLinkText: "🔴 በቴሌግራም የቀጥታ ስርጭቱን ይከታተሉ",
        telegramLiveUrl: "https://t.me/SheikhMuhammedZainAdam/16844",
        telegram: "የቀጥታ ስርጭት እና የትምህርት ቴሌግራም ቻናል", 
        rights: "መብቱ በህግ የተጠበቀ ነው © 2026 | የሸይኽ መሐመድ ዘይን መድረክ"
    }
};

// وظيفة تغيير اللغة وتفعيل النصوص والتوجيهات
function setLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = (lang === 'ar' ? 'rtl' : 'ltr');
    
    // تحديث الأزرار المحددة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.trim().toLowerCase() === lang.toLowerCase()) btn.classList.add('active');
    });

    // ترجمة جميع العناصر التي تحتوي على data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // تحديث رابط البث المباشر
    const liveBtn = document.getElementById('telegramLiveBtn');
    if (liveBtn && translations[lang]['telegramLiveUrl']) {
        liveBtn.href = translations[lang]['telegramLiveUrl'];
    }

    // تحديث نص خانة البحث
    const searchInput = document.getElementById('searchInput');
    if(searchInput && translations[lang].searchPlaceholder) {
        searchInput.placeholder = translations[lang].searchPlaceholder;
    }

    // حفظ اللغة المحددة بذاكرة المتصفح
    localStorage.setItem('selectedLang', lang);
}

// مؤقت شاشة الترحيب (Splash Screen) المصحح والمُعالج لاتجام النص
let step = 0;
const loadInterval = setInterval(() => {
    step += Math.floor(Math.random() * 8) + 3;
    if (step > 100) step = 100;
    
    const bar = document.getElementById('load-bar');
    const text = document.getElementById('load-text');
    
    if(bar) bar.style.width = step + '%';
    if(text) {
        const lang = document.documentElement.lang || 'ar';
        const loadWord = translations[lang]?.loadText || "جاري التحميل";
        // استخدام bdi لضمان عدم انقلاب الأرقام والعلامات
        text.innerHTML = `${loadWord} <bdi dir="ltr">${step}%</bdi>`;
    }

    if (step >= 100) {
        clearInterval(loadInterval);
        setTimeout(() => {
            const ss = document.getElementById('splash-screen');
            if(ss) {
                ss.style.opacity = '0';
                ss.style.visibility = 'hidden';
            }
        }, 400);
    }
}, 50);

// وظيفة الوضع الليلي (Dark Mode)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-icon');
    if(icon) {
        icon.className = document.body.classList.contains('dark-mode') ? 'fa-solid fa-lightbulb' : 'fa-regular fa-lightbulb';
    }
}

// وظيفة البحث داخل الموقع
function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.searchable').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(input) ? "flex" : "none";
    });
}

// تشغيل الترجمة تلقائياً فور فتح الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ar';
    setLanguage(savedLang);
});