lucide.createIcons();
document.getElementById('year').textContent = new Date().getFullYear();

const uiTranslations = {
  uz: {
    nav_home: 'Bosh sahifa',
    nav_about: 'Men haqimda',
    nav_skills: 'Texnologiyalar',
    nav_projects: 'Loyihalar',
    nav_contact: 'Aloqa',
    btn_contact: "Bog'lanish",
    hero_badge: 'Yangi loyihalar va hamkorlik uchun ochiqman',
    hero_greeting: 'Salom, men',
    hero_name: 'Sultonbek Shavkatov',
    hero_desc: "Zamonaviy, tezkor va har qanday ekranga moslashuvchan (responsive) veb-saytlar yaratuvchi Frontend dasturchiman. G'oyalarni toza kod va chiroyli interfeysga aylantiraman.",
    hero_projects_btn: "Loyihalarimni ko'rish",
    hero_github_btn: 'GitHub Profil',
    stat_projects: 'Tayyor loyihalar',
    stat_tech: 'Texnologiyalar',
    stat_ui: 'Responsive UI',
    roles: [
      'Frontend Developer',
      'UI / UX Enthusiast',
      'React & Next.js Developer',
      'Clean Code Architect'
    ],
    about_sub: '01 / Men haqimda',
    about_title: 'Men kimman va nima qilaman?',
    about_card_title: 'Sultonbek Shavkatov — Frontend Developer',
    about_p1: "Men veb-interfeyslar yaratish, mavjud dizaynlarni aniq va toza kodga o'tkazish hamda foydalanuvchilar uchun qulay va tezkor saytlar ishlab chiqish bilan shug'ullanaman.",
    about_p2: "Amaliyot davomida tijorat saytlari, ekologiya va sanoat yo'nalishidagi veb-platformalar hamda mashhur servislarning interfeys klonlarini ishlab chiqib, barcha loyihalarimni GitHub profilimda yuritib kelmoqdaman.",
    about_feat1_title: 'Toza Kod',
    about_feat1_desc: "Tartibli va o'qishga qulay struktura",
    about_feat2_title: 'Moslashuvchanlik',
    about_feat2_desc: 'Telefon, planshet va kompyuterda ideal',
    about_feat3_title: 'Interaktivlik',
    about_feat3_desc: 'Jonli effektlar va qulay boshqaruv',
    about_info_title: "Asosiy ma'lumotlar",
    info_lbl_name: 'Ism-familiya',
    info_lbl_role: 'Mutaxassislik',
    info_lbl_tg: 'Telegram',
    info_lbl_ig: 'Instagram',
    info_lbl_gh: 'GitHub',
    about_cta_btn: "Men bilan bog'laning",
    skills_sub: '02 / Texnologiyalar',
    skills_title: "Texnik ko'nikmalarim",
    skills_hint: "Qisqa ma'lumotni ko'rish uchun istalgan texnologiya ustiga bosing.",
    skill_card_cta: "Ma'lumot →",
    modal_select_label: "Ma'lumot turini tanlang:",
    tab_usage: "Qo'llanilishi",
    tab_level: 'Daraja',
    tab_projects: 'Loyihalar',
    modal_close_btn: 'Tushunarli',
    projects_sub: '03 / Portfolio',
    projects_title: 'Tanlangan loyihalarim',
    filter_all: 'Barchasi (5)',
    filter_web: 'Veb-saytlar',
    filter_clone: 'Clone & UI',
    filter_system: 'Tizimlar',
    btn_live: 'Live Demo',
    btn_code: 'Kod',
    contact_sub: '04 / Aloqa',
    contact_title_line1: 'Loyihangiz bormi?',
    contact_title_line2: 'Birgalikda yaratamiz!',
    contact_desc: "Veb-sayt yaratish, mavjud dizaynni kodga o'tkazish yoki hamkorlik bo'yicha takliflaringiz bo'lsa, quyidagi tarmoqlar orqali yozishingiz mumkin.",
    form_title: 'Tezkor xabar yuborish',
    label_name: 'Ismingiz',
    placeholder_name: 'Ismingizni kiriting',
    label_contact: 'Telegram yoki Telefon raqamingiz',
    placeholder_contact: '@username yoki +998...',
    label_msg: 'Xabar matni',
    placeholder_msg: 'Loyiha haqida qisqacha yozing...',
    form_btn: 'Telegram orqali yuborish',
    footer_rights: 'Sultonbek Shavkatov. Barcha huquqlar himoyalangan.'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Technologies',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    btn_contact: 'Contact',
    hero_badge: 'Open for new projects and collaboration',
    hero_greeting: "Hi, I'm",
    hero_name: 'Sultonbek Shavkatov',
    hero_desc: 'I am a Frontend Developer building modern, fast, and responsive websites. I turn ideas into clean code and user-friendly interfaces.',
    hero_projects_btn: 'View Projects',
    hero_github_btn: 'GitHub Profile',
    stat_projects: 'Completed Projects',
    stat_tech: 'Technologies',
    stat_ui: 'Responsive UI',
    roles: [
      'Frontend Developer',
      'UI / UX Enthusiast',
      'React & Next.js Developer',
      'Clean Code Architect'
    ],
    about_sub: '01 / About Me',
    about_title: 'Who am I and what do I do?',
    about_card_title: 'Sultonbek Shavkatov — Frontend Developer',
    about_p1: 'I focus on building web interfaces, turning designs into clean and reliable code, and creating fast, user-friendly websites.',
    about_p2: 'Through practical projects, I have worked on business sites, ecology and industry web platforms, and UI clones of popular services, keeping all my code organized on GitHub.',
    about_feat1_title: 'Clean Code',
    about_feat1_desc: 'Structured and readable codebase',
    about_feat2_title: 'Responsiveness',
    about_feat2_desc: 'Fits mobile, tablet, and desktop',
    about_feat3_title: 'Interactivity',
    about_feat3_desc: 'Smooth UI feedback and controls',
    about_info_title: 'Quick Details',
    info_lbl_name: 'Full Name',
    info_lbl_role: 'Role',
    info_lbl_tg: 'Telegram',
    info_lbl_ig: 'Instagram',
    info_lbl_gh: 'GitHub',
    about_cta_btn: 'Get in Touch',
    skills_sub: '02 / Technologies',
    skills_title: 'Technical Skills',
    skills_hint: 'Click on any technology to see quick details.',
    skill_card_cta: 'Details →',
    modal_select_label: 'Select info type:',
    tab_usage: 'Usage',
    tab_level: 'Level',
    tab_projects: 'Projects',
    modal_close_btn: 'Got it',
    projects_sub: '03 / Portfolio',
    projects_title: 'Featured Projects',
    filter_all: 'All (5)',
    filter_web: 'Websites',
    filter_clone: 'Clone & UI',
    filter_system: 'Systems',
    btn_live: 'Live Demo',
    btn_code: 'Code',
    contact_sub: '04 / Contact',
    contact_title_line1: 'Have a project?',
    contact_title_line2: "Let's build it together!",
    contact_desc: 'If you need a website, want to turn a design into code, or have a collaboration idea, reach out via the channels below.',
    form_title: 'Send a quick message',
    label_name: 'Your Name',
    placeholder_name: 'Enter your name',
    label_contact: 'Telegram or Phone Number',
    placeholder_contact: '@username or +998...',
    label_msg: 'Message',
    placeholder_msg: 'Write briefly about your project...',
    form_btn: 'Send via Telegram',
    footer_rights: 'Sultonbek Shavkatov. All rights reserved.'
  },
  ru: {
    nav_home: 'Главная',
    nav_about: 'Обо мне',
    nav_skills: 'Технологии',
    nav_projects: 'Проекты',
    nav_contact: 'Контакты',
    btn_contact: 'Связаться',
    hero_badge: 'Открыт для новых проектов и сотрудничества',
    hero_greeting: 'Привет, я',
    hero_name: 'Султонбек Шавкатов',
    hero_desc: 'Я Frontend-разработчик, создающий современные, быстрые и адаптивные веб-сайты. Превращаю идеи в чистый код и удобный интерфейс.',
    hero_projects_btn: 'Смотреть проекты',
    hero_github_btn: 'Профиль GitHub',
    stat_projects: 'Готовых проектов',
    stat_tech: 'Технологий',
    stat_ui: 'Адаптивный UI',
    roles: [
      'Frontend Developer',
      'UI / UX Enthusiast',
      'React & Next.js Developer',
      'Clean Code Architect'
    ],
    about_sub: '01 / Обо мне',
    about_title: 'Кто я и чем занимаюсь?',
    about_card_title: 'Султонбек Шавкатов — Frontend Developer',
    about_p1: 'Я занимаюсь разработкой веб-интерфейсов, переносом макетов в аккуратный код и созданием быстрых и удобных сайтов.',
    about_p2: 'В ходе практики я создавал бизнес-сайты, экологические и производственные веб-платформы, а также клоны интерфейсов популярных сервисов, размещая проекты на GitHub.',
    about_feat1_title: 'Чистый код',
    about_feat1_desc: 'Понятная и аккуратная структура',
    about_feat2_title: 'Адаптивность',
    about_feat2_desc: 'Удобно на смартфонах и ПК',
    about_feat3_title: 'Интерактивность',
    about_feat3_desc: 'Плавные отклики и элементы UI',
    about_info_title: 'Основные данные',
    info_lbl_name: 'Имя и фамилия',
    info_lbl_role: 'Специализация',
    info_lbl_tg: 'Telegram',
    info_lbl_ig: 'Instagram',
    info_lbl_gh: 'GitHub',
    about_cta_btn: 'Связаться со мной',
    skills_sub: '02 / Технологии',
    skills_title: 'Технические навыки',
    skills_hint: 'Нажмите на любую технологию, чтобы увидеть краткую информацию.',
    skill_card_cta: 'Подробнее →',
    modal_select_label: 'Выберите тип информации:',
    tab_usage: 'Применение',
    tab_level: 'Уровень',
    tab_projects: 'Проекты',
    modal_close_btn: 'Понятно',
    projects_sub: '03 / Портфолио',
    projects_title: 'Избранные проекты',
    filter_all: 'Все (5)',
    filter_web: 'Веб-сайты',
    filter_clone: 'Clone и UI',
    filter_system: 'Системы',
    btn_live: 'Демо',
    btn_code: 'Код',
    contact_sub: '04 / Контакты',
    contact_title_line1: 'Есть проект?',
    contact_title_line2: 'Создадим вместе!',
    contact_desc: 'Если вам нужен сайт, верстка макета или предложение о сотрудничестве, напишите мне через соцсети ниже.',
    form_title: 'Быстрое сообщение',
    label_name: 'Ваше имя',
    placeholder_name: 'Введите ваше имя',
    label_contact: 'Telegram или номер телефона',
    placeholder_contact: '@username или +998...',
    label_msg: 'Текст сообщения',
    placeholder_msg: 'Кратко опишите ваш проект...',
    form_btn: 'Отправить в Telegram',
    footer_rights: 'Султонбек Шавкатов. Все права защищены.'
  }
};

const skillsData = [
  {
    id: 'html5',
    name: 'HTML5',
    icon: 'HTML',
    colorClass: 'text-orange-400',
    bgGlow: 'from-orange-500/20 via-amber-500/10 to-transparent',
    meta: 'Markup • Web Core',
    category: { uz: 'Tuzilma', en: 'Structure', ru: 'Структура' },
    shortDesc: {
      uz: 'Veb-sahifalarning asosiy skeleti va semantik tuzilmasini yaratuvchi standart belgilash tili.',
      en: 'Standard markup language for creating semantic structure and skeleton of web pages.',
      ru: 'Стандартный язык разметки для создания семантической структуры и каркаса веб-страниц.'
    },
    tabs: {
      usage: {
        uz: 'Semantik teglar, qulay formalar, multimedia va SEO-ga mos sahifa arxitekturasini qurishda.',
        en: 'Building semantic tags, accessible forms, media, and SEO-friendly page structure.',
        ru: 'Создание семантических тегов, удобных форм, медиа и SEO-структуры страниц.'
      },
      level: {
        uz: '98% — Mukammal daraja (W3C standartlari asosida).',
        en: '98% — Advanced level following W3C standards.',
        ru: '98% — Высокий уровень по стандартам W3C.'
      },
      projects: {
        uz: 'Darvoza Web Site, Ecology Web Site, Bellissimo Pizza va barcha veb-loyihalarda.',
        en: 'Used across Darvoza Web Site, Ecology Web Site, Bellissimo Pizza, and all web projects.',
        ru: 'Применяется в Darvoza Web Site, Ecology Web Site, Bellissimo Pizza и других проектах.'
      }
    }
  },
  {
    id: 'css3',
    name: 'CSS3',
    icon: 'CSS',
    colorClass: 'text-sky-400',
    bgGlow: 'from-sky-500/20 via-blue-500/10 to-transparent',
    meta: 'Styling • Responsive',
    category: { uz: 'Dizayn', en: 'Styling', ru: 'Стилизация' },
    shortDesc: {
      uz: 'Saytga zamonaviy ko‘rinish, silliq animatsiyalar va barcha ekranlarga moslashuvchanlik beruvchi stil tili.',
      en: 'Stylesheet language providing modern visuals, smooth animations, and responsive layouts.',
      ru: 'Язык стилей для современного оформления, плавных анимаций и адаптивности.'
    },
    tabs: {
      usage: {
        uz: 'Flexbox, CSS Grid, Glassmorphism effektlari va silliq animatsiyalar yaratishda.',
        en: 'Creating Flexbox, CSS Grid layouts, glassmorphism effects, and smooth transitions.',
        ru: 'Верстка на Flexbox и CSS Grid, эффекты стекла и плавные анимации.'
      },
      level: {
        uz: '95% — Pixel-perfect dizayn va mobil qurilmalarga to‘liq moslashtirish.',
        en: '95% — Pixel-perfect UI and full mobile responsiveness.',
        ru: '95% — Точная верстка и полная адаптация под любые экраны.'
      },
      projects: {
        uz: 'Bellissimo Pizza (Copy Version), Personal Portfolio va Lazer System interfeyslarida.',
        en: 'Used in Bellissimo Pizza (Copy Version), Personal Portfolio, and Lazer System.',
        ru: 'Использован в Bellissimo Pizza (Copy Version), Personal Portfolio и Lazer System.'
      }
    }
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'TW',
    colorClass: 'text-cyan-400',
    bgGlow: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    meta: 'Utility-First • v3.4',
    category: { uz: 'Framework', en: 'Framework', ru: 'Фреймворк' },
    shortDesc: {
      uz: 'Tezkor va tartibli zamonaviy interfeyslarni to‘g‘ridan-to‘g‘ri HTML ichida qurish imkonini beruvchi CSS freymvork.',
      en: 'Utility-first CSS framework for building fast, consistent modern interfaces directly in markup.',
      ru: 'Утилитарный CSS-фреймворк для быстрой сборки современных интерфейсов.'
    },
    tabs: {
      usage: {
        uz: 'Dark mode tizimlari, maxsus rang palitralari va tezkor UI komponentlarni yig‘ishda.',
        en: 'Building dark mode UIs, custom color themes, and rapid component layouts.',
        ru: 'Создание темных тем, кастомных палитр и быстрая сборка компонентов.'
      },
      level: {
        uz: '96% — Kundalik asosiy stil vositasi.',
        en: '96% — Daily primary styling tool.',
        ru: '96% — Основной инструмент стилизации в повседневной работе.'
      },
      projects: {
        uz: 'Personal Portfolio va zamonaviy veb-sahifalarda.',
        en: 'Used in Personal Portfolio and modern web pages.',
        ru: 'Применен в Personal Portfolio и современных веб-страницах.'
      }
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    colorClass: 'text-yellow-400',
    bgGlow: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    meta: 'ES6+ • Logic',
    category: { uz: 'Dasturlash', en: 'Programming', ru: 'Программирование' },
    shortDesc: {
      uz: 'Veb-sahifalarga jonlilik, interaktivlik, savatcha tizimlari va murakkab mantiq qo‘shuvchi asosiy til.',
      en: 'Core programming language adding interactivity, dynamic state, carts, and app logic to websites.',
      ru: 'Основной язык программирования для интерактивности, логики, корзин и динамики.'
    },
    tabs: {
      usage: {
        uz: 'DOM manipulyatsiyasi, modal oynalar, dinamik filtrlar va LocalStorage bilan ishlashda.',
        en: 'DOM manipulation, modals, dynamic filters, and LocalStorage state persistence.',
        ru: 'Работа с DOM, модальными окнами, фильтрами и сохранением данных в LocalStorage.'
      },
      level: {
        uz: '92% — ES6+, Async/Await va API integratsiyalari.',
        en: '92% — Confident with ES6+, Async/Await, and API integrations.',
        ru: '92% — Уверенное владение ES6+, Async/Await и интеграциями API.'
      },
      projects: {
        uz: 'Bellissimo Pizza savatchasi, Lazer System va interaktiv filtr tizimlarida.',
        en: 'Used in Bellissimo Pizza cart logic, Lazer System, and project filters.',
        ru: 'Реализован в корзине Bellissimo Pizza, Lazer System и фильтрах проектов.'
      }
    }
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    colorClass: 'text-blue-400',
    bgGlow: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    meta: 'Typed JS • Safe Code',
    category: { uz: 'Dasturlash', en: 'Programming', ru: 'Программирование' },
    shortDesc: {
      uz: 'JavaScript-ga qat’iy tiplar (types) qo‘shib, katta loyihalarda xatolarni oldindan ushlaydigan kuchli til.',
      en: 'Strongly typed superset of JavaScript that catches bugs early in scalable codebases.',
      ru: 'Строго типизированное надмножество JavaScript для надежного кода.'
    },
    tabs: {
      usage: {
        uz: 'Katta hajmdagi ma’lumotlar strukturasi va xatosiz komponentlar yozishda.',
        en: 'Structuring reliable data models and type-safe UI components.',
        ru: 'Описание структур данных и написание типобезопасных компонентов.'
      },
      level: {
        uz: '85% — Interface, Type va Generics bilan erkin ishlash.',
        en: '85% — Working comfortably with interfaces, types, and generics.',
        ru: '85% — Уверенная работа с интерфейсами, типами и дженериками.'
      },
      projects: {
        uz: 'Murakkab boshqaruv panellari va React ilovalarida.',
        en: 'Used in structured dashboards and React applications.',
        ru: 'Используется в структурированных интерфейсах и React-приложениях.'
      }
    }
  },
  {
    id: 'react',
    name: 'React.js',
    icon: '⚛️',
    colorClass: 'text-sky-300',
    bgGlow: 'from-sky-400/20 via-cyan-500/10 to-transparent',
    meta: 'UI Library • SPA',
    category: { uz: 'Kutubxona', en: 'Library', ru: 'Библиотека' },
    shortDesc: {
      uz: 'Qayta ishlatiluvchi komponentlar asosida tezkor Single Page Application (SPA) yaratuvchi eng mashhur kutubxona.',
      en: 'Popular component-based UI library for building fast Single Page Applications.',
      ru: 'Популярная компонентная библиотека для создания быстрых SPA-приложений.'
    },
    tabs: {
      usage: {
        uz: 'State boshqaruvi (Hooks), tezkor sahifa almashinuvi va modulli arxitektura qurishda.',
        en: 'Managing state with Hooks, reusable components, and modular frontend architecture.',
        ru: 'Управление состоянием через Hooks и модульная архитектура интерфейса.'
      },
      level: {
        uz: '90% — Custom Hooks, Context API va optimizatsiya.',
        en: '90% — Hooks, Context API, and performance optimization.',
        ru: '90% — Хуки, Context API и оптимизация рендеринга.'
      },
      projects: {
        uz: 'Zamonaviy veb-ilovalar va interaktiv interfeyslarda.',
        en: 'Applied in modern interactive web applications.',
        ru: 'Применяется в современных интерактивных веб-приложениях.'
      }
    }
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    colorClass: 'text-white',
    bgGlow: 'from-zinc-500/20 via-neutral-500/10 to-transparent',
    meta: 'Full-Stack React • SSR',
    category: { uz: 'Framework', en: 'Framework', ru: 'Фреймворк' },
    shortDesc: {
      uz: 'Yuqori tezlik va mukammal SEO ko‘rsatkichlariga ega React freymvorki.',
      en: 'React framework designed for high performance, routing, and strong SEO.',
      ru: 'React-фреймворк с высокой скоростью загрузки, роутингом и отличным SEO.'
    },
    tabs: {
      usage: {
        uz: 'Server-Side Rendering (SSR), App Router va tezkor tijorat saytlarini yaratishda.',
        en: 'Building SEO-friendly pages, routing, and fast web platforms.',
        ru: 'Создание SEO-оптимизированных страниц и быстрых веб-платформ.'
      },
      level: {
        uz: '85% — SEO-optimallashtirilgan ilovalar qurish.',
        en: '85% — Building fast, SEO-ready React apps.',
        ru: '85% — Разработка быстрых и SEO-оптимизированных приложений.'
      },
      projects: {
        uz: 'Katalog va taqdimot veb-platformalarida.',
        en: 'Used for showcase and catalog web platforms.',
        ru: 'Используется для каталогов и презентационных веб-платформ.'
      }
    }
  },
  {
    id: 'vue',
    name: 'Vue.js',
    icon: 'V',
    colorClass: 'text-emerald-400',
    bgGlow: 'from-emerald-500/20 via-green-500/10 to-transparent',
    meta: 'Progressive • v3',
    category: { uz: 'Framework', en: 'Framework', ru: 'Фреймворк' },
    shortDesc: {
      uz: 'Yengil, tushunarli va reaktiv foydalanuvchi interfeyslarini tez qurishga mo‘ljallangan freymvork.',
      en: 'Progressive framework for building reactive and clean user interfaces.',
      ru: 'Прогрессивный фреймворк для создания реактивных пользовательских интерфейсов.'
    },
    tabs: {
      usage: {
        uz: 'Reaktiv formalar, dinamik jadvallar va tezkor prototiplar yaratishda.',
        en: 'Reactive forms, dynamic lists, and fast UI prototypes.',
        ru: 'Реактивные формы, динамические списки и быстрые прототипы.'
      },
      level: {
        uz: '82% — Composition API va komponentlar bilan ishlash.',
        en: '82% — Components and reactive state management.',
        ru: '82% — Работа с компонентами и реактивным состоянием.'
      },
      projects: {
        uz: 'Interaktiv boshqaruv interfeyslarida.',
        en: 'Used in interactive UI prototypes.',
        ru: 'Применяется в интерактивных интерфейсах.'
      }
    }
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: 'GIT',
    colorClass: 'text-purple-400',
    bgGlow: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
    meta: 'Version Control • CI/CD',
    category: { uz: 'Vosita', en: 'Tooling', ru: 'Инструмент' },
    shortDesc: {
      uz: 'Kod tarixini nazorat qilish, jamoaviy ishlash va loyihalarni GitHub Pages orqali joylash tizimi.',
      en: 'Version control system for tracking code changes, collaboration, and GitHub Pages hosting.',
      ru: 'Система контроля версий для отслеживания изменений и публикации через GitHub Pages.'
    },
    tabs: {
      usage: {
        uz: 'Branchlar bilan ishlash, kodni bulutda saqlash va bepul hostingga chiqarishda.',
        en: 'Managing repositories, commits, branches, and deploying sites via GitHub Pages.',
        ru: 'Ведение репозиториев, коммитов, веток и публикация на GitHub Pages.'
      },
      level: {
        uz: '94% — Barcha loyihalar GitHub profilida tartibli joylashtirilgan.',
        en: '94% — All 5 projects organized and published on GitHub.',
        ru: '94% — Все 5 проектов аккуратно размещены на GitHub.'
      },
      projects: {
        uz: 'Barcha 5 ta loyihaning ochiq kodli repozitoriylarida.',
        en: 'Used across all 5 portfolio repositories.',
        ru: 'Используется во всех 5 проектах портфолио.'
      }
    }
  },
  {
    id: 'api',
    name: 'REST API',
    icon: 'API',
    colorClass: 'text-rose-400',
    bgGlow: 'from-rose-500/20 via-pink-500/10 to-transparent',
    meta: 'JSON • Fetch / Axios',
    category: { uz: 'Integratsiya', en: 'Integration', ru: 'Интеграция' },
    shortDesc: {
      uz: 'Frontend qismini Backend serverlar, ma’lumotlar bazasi va Telegram botlar bilan bog‘lash texnologiyasi.',
      en: 'Connecting frontend interfaces with external services, JSON data, and messaging flows.',
      ru: 'Связь фронтенда с внешними сервисами, JSON-данными и сценариями отправки.'
    },
    tabs: {
      usage: {
        uz: 'Real vaqtda ma’lumot olish, xabarlarni Telegramga yuborish va JSON bilan ishlashda.',
        en: 'Handling JSON payloads, dynamic data rendering, and Telegram message links.',
        ru: 'Обработка JSON-данных, динамический вывод и отправка сообщений в Telegram.'
      },
      level: {
        uz: '90% — Fetch API, Axios va JSON ma’lumotlar bilan ishlash.',
        en: '90% — Working with Fetch API, JSON, and async responses.',
        ru: '90% — Работа с Fetch API, JSON и асинхронными запросами.'
      },
      projects: {
        uz: 'Aloqa formasi va dinamik ma’lumot bloklarida.',
        en: 'Used in contact workflows and dynamic UI data.',
        ru: 'Используется в форме обратной связи и динамических блоках.'
      }
    }
  }
];

const projectsData = [
  {
    title: 'Darvoza Web Site',
    category: 'web',
    badge: { uz: 'Biznes & Katalog', en: 'Business & Catalog', ru: 'Бизнес и каталог' },
    description: {
      uz: 'Zamonaviy darvozalar va metall konstruksiyalar katalogi, mahsulot xususiyatlari hamda mijozlar uchun tezkor buyurtma berish veb-sayti.',
      en: 'Modern catalog website for gates and metal structures with product specs and quick order flow.',
      ru: 'Современный сайт-каталог ворот и металлоконструкций с характеристиками и быстрой заявкой.'
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    gradient: 'from-amber-500/20 via-orange-600/10 to-zinc-900',
    icon: 'door-open',
    liveUrl: 'https://sultonbekshavkatov74-rgb.github.io/DARVOZA-WEB-SITE/',
    githubUrl: 'https://github.com/sultonbekshavkatov74-rgb'
  },
  {
    title: 'Ecology Web Site',
    category: 'web',
    badge: { uz: 'Ijtimoiy Loyiha', en: 'Eco Project', ru: 'Эко-проект' },
    description: {
      uz: 'Atrof-muhitni muhofaza qilish, yashil energiya va ekologik madaniyatni targ‘ib qiluvchi zamonaviy axborot platformasi.',
      en: 'Informational web platform promoting environmental protection, clean energy, and eco awareness.',
      ru: 'Информационный веб-проект об охране природы, зеленой энергии и экологии.'
    },
    tags: ['HTML5', 'Tailwind CSS', 'JS Animations'],
    gradient: 'from-emerald-500/20 via-teal-600/10 to-zinc-900',
    icon: 'leaf',
    liveUrl: 'https://sultonbekshavkatov74-rgb.github.io/ecology-web-site/',
    githubUrl: 'https://github.com/sultonbekshavkatov74-rgb'
  },
  {
    title: 'Lazer System',
    category: 'system',
    badge: { uz: 'Texnologiya & Sanoat', en: 'Tech & Industry', ru: 'Технологии и производство' },
    description: {
      uz: 'Lazerli kesish va gravirovka xizmatlari uchun texnik imkoniyatlar, narxlar kalkulyatori va buyurtma qabul qilish veb-tizimi.',
      en: 'Web interface for laser cutting and engraving services with specs and interactive controls.',
      ru: 'Веб-система для услуг лазерной резки и гравировки с техническими возможностями.'
    },
    tags: ['JavaScript', 'CSS Grid', 'UI/UX', 'Interactive'],
    gradient: 'from-rose-500/20 via-red-600/10 to-zinc-900',
    icon: 'cpu',
    liveUrl: 'https://sultonbekshavkatov74-rgb.github.io/LAZER-system/',
    githubUrl: 'https://github.com/sultonbekshavkatov74-rgb'
  },
  {
    title: 'Bellissimo Pizza (Copy Version)',
    category: 'clone',
    badge: { uz: 'E-Commerce Clone', en: 'E-Commerce Clone', ru: 'Клон магазина' },
    description: {
      uz: 'Bellissimo Pizza veb-saytining amaliy kloni: menyu, mahsulot tanlash oynasi, savatcha va dinamik narx hisoblash tizimi.',
      en: 'Practical clone of Bellissimo Pizza featuring product selection, cart controls, and live totals.',
      ru: 'Практический клон Bellissimo Pizza с выбором позиций, корзиной и подсчетом суммы.'
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Cart Logic'],
    gradient: 'from-red-500/20 via-yellow-500/10 to-zinc-900',
    icon: 'pizza',
    liveUrl: 'https://sultonbekshavkatov74-rgb.github.io/bellissimo.uz-design-for-phones/',
    githubUrl: 'https://github.com/sultonbekshavkatov74-rgb'
  },
  {
    title: 'Personal Portfolio',
    category: 'clone',
    badge: { uz: 'Shaxsiy Brend', en: 'Personal Brand', ru: 'Личный бренд' },
    description: {
      uz: 'Frontend dasturchi sifatidagi ko‘nikmalarim, texnologiyalar stekim va 5 ta loyihamni jamlagan zamonaviy Dark Mode portfolio.',
      en: 'Modern dark-mode developer portfolio showcasing my skills, tech stack, and 5 projects.',
      ru: 'Современное портфолио в темной теме с навыками, технологиями и 5 проектами.'
    },
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'UI Design'],
    gradient: 'from-indigo-500/20 via-purple-600/10 to-zinc-900',
    icon: 'sparkles',
    liveUrl: 'https://sultonbekshavkatov74-rgb.github.io/portfolio/',
    githubUrl: 'https://github.com/sultonbekshavkatov74-rgb'
  }
];

let currentLang = localStorage.getItem('portfolio_lang') || 'uz';
let currentProjectFilter = 'all';
let activeSkill = null;
let activeModalTab = 'usage';

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typeEffect() {
  const roles = uiTranslations[currentLang].roles;
  const current = roles[roleIdx % roles.length];

  if (isDeleting) {
    typeEl.textContent = current.substring(0, Math.max(0, charIdx - 1));
    charIdx--;
  } else {
    typeEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 45 : 95;
  if (!isDeleting && charIdx === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx <= 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    charIdx = 0;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

function renderSkills() {
  const t = uiTranslations[currentLang];
  const skillsGrid = document.getElementById('skills-grid');

  skillsGrid.innerHTML = skillsData.map(skill => `
    <button type="button" onclick="openTechModal('${skill.id}')"
            class="glass-card p-5 rounded-2xl flex flex-col items-center justify-center gap-3 text-center group hover:-translate-y-1 cursor-pointer">
      <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${skill.colorClass} font-mono font-bold text-lg group-hover:scale-110 transition-transform">
        ${skill.icon}
      </div>
      <div>
        <span class="text-sm font-semibold text-zinc-200 block">${skill.name}</span>
        <span class="theme-text text-[11px] opacity-80 group-hover:opacity-100 transition-opacity">${t.skill_card_cta}</span>
      </div>
    </button>
  `).join('');
}

function openTechModal(skillId) {
  activeSkill = skillsData.find(s => s.id === skillId);
  if (!activeSkill) return;

  activeModalTab = 'usage';
  updateTechModalTexts();

  const modal = document.getElementById('tech-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function updateTechModalTexts() {
  if (!activeSkill) return;
  const t = uiTranslations[currentLang];

  document.getElementById('modal-icon').textContent = activeSkill.icon;
  document.getElementById('modal-icon').className = `font-mono font-extrabold text-3xl ${activeSkill.colorClass}`;
  document.getElementById('modal-left-bg').className = `md:col-span-5 p-8 flex flex-col items-center justify-center bg-gradient-to-br ${activeSkill.bgGlow} border-b md:border-b-0 md:border-r border-white/10`;
  document.getElementById('modal-category-tag').textContent = activeSkill.category[currentLang];
  document.getElementById('modal-meta').textContent = activeSkill.meta;
  document.getElementById('modal-title').textContent = activeSkill.name;
  document.getElementById('modal-desc').textContent = activeSkill.shortDesc[currentLang];

  document.getElementById('modal-select-label').textContent = t.modal_select_label;
  document.getElementById('tab-usage').textContent = t.tab_usage;
  document.getElementById('tab-level').textContent = t.tab_level;
  document.getElementById('tab-projects').textContent = t.tab_projects;
  document.getElementById('modal-close-btn').textContent = t.modal_close_btn;

  switchModalTab(activeModalTab);
}

function switchModalTab(tabKey) {
  if (!activeSkill) return;
  activeModalTab = tabKey;

  ['usage', 'level', 'projects'].forEach(key => {
    const btn = document.getElementById(`tab-${key}`);
    if (key === tabKey) {
      btn.className = 'theme-bg py-2 px-2 rounded-lg text-xs font-semibold shadow transition-all';
    } else {
      btn.className = 'py-2 px-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all';
    }
  });

  document.getElementById('modal-tab-content').textContent = activeSkill.tabs[tabKey][currentLang];
}

function forceCloseTechModal() {
  const modal = document.getElementById('tech-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function closeTechModal(e) {
  if (e.target.id === 'tech-modal') {
    forceCloseTechModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') forceCloseTechModal();
});

function renderProjects() {
  const t = uiTranslations[currentLang];
  const grid = document.getElementById('projects-grid');

  const filtered = currentProjectFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === currentProjectFilter);

  grid.innerHTML = filtered.map(project => `
    <article class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
      <div>
        <div class="h-44 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
          <div class="flex items-center justify-between z-10">
            <span class="px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-[11px] font-medium text-zinc-200 border border-white/10">
              ${project.badge[currentLang]}
            </span>
            <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <i data-lucide="${project.icon}" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="z-10">
            <h3 class="text-xl font-bold text-white group-hover:underline transition-all">${project.title}</h3>
          </div>
        </div>

        <div class="p-6 space-y-4">
          <p class="text-sm text-zinc-400 leading-relaxed">
            ${project.description[currentLang]}
          </p>
          <div class="flex flex-wrap gap-2">
            ${project.tags.map(tag => `
              <span class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 font-mono text-[11px] text-zinc-300">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="px-6 pb-6 pt-2 flex items-center gap-3">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
           class="theme-bg flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5">
          <span>${t.btn_live}</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
           class="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-medium text-xs transition-all flex items-center justify-center gap-1.5">
          <i data-lucide="github" class="w-3.5 h-3.5"></i>
          <span>${t.btn_code}</span>
        </a>
      </div>
    </article>
  `).join('');

  lucide.createIcons();
}

const filterBtns = document.querySelectorAll('.filter-btn');
function updateFilterButtonsUI() {
  const t = uiTranslations[currentLang];
  const labels = {
    all: t.filter_all,
    web: t.filter_web,
    clone: t.filter_clone,
    system: t.filter_system
  };

  filterBtns.forEach(btn => {
    const f = btn.dataset.filter;
    if (labels[f]) btn.textContent = labels[f];

    if (f === currentProjectFilter) {
      btn.className = 'filter-btn theme-bg px-4 py-2 rounded-xl text-xs font-semibold transition-all';
    } else {
      btn.className = 'filter-btn glass-card px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white transition-all';
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentProjectFilter = btn.dataset.filter;
    updateFilterButtonsUI();
    renderProjects();
  });
});

const themeBtn = document.getElementById('theme-toggle-btn');
const themeMenu = document.getElementById('theme-menu');
const langBtn = document.getElementById('lang-toggle-btn');
const langMenu = document.getElementById('lang-menu');

themeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langMenu.classList.add('hidden');
  themeMenu.classList.toggle('hidden');
});

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  themeMenu.classList.add('hidden');
  langMenu.classList.toggle('hidden');
});

document.addEventListener('click', () => {
  themeMenu.classList.add('hidden');
  langMenu.classList.add('hidden');
});

function setAccentColor(hexColor) {
  const root = document.documentElement;
  root.style.setProperty('--accent-color', hexColor);
  root.style.setProperty('--accent-soft', `${hexColor}26`);
  root.style.setProperty('--accent-glow', `${hexColor}59`);

  localStorage.setItem('portfolio_accent', hexColor);
  themeMenu.classList.add('hidden');
}

const savedColor = localStorage.getItem('portfolio_accent');
if (savedColor) {
  setAccentColor(savedColor);
}

function setLanguage(lang) {
  currentLang = uiTranslations[lang] ? lang : 'uz';
  localStorage.setItem('portfolio_lang', currentLang);
  document.documentElement.lang = currentLang;

  const t = uiTranslations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.getElementById('hero-badge-text').textContent = t.hero_badge;
  document.getElementById('hero-title').innerHTML = `${t.hero_greeting} <br /><span class="text-gradient">${t.hero_name}</span>`;
  document.getElementById('hero-desc-text').textContent = t.hero_desc;
  document.getElementById('hero-projects-btn-text').textContent = t.hero_projects_btn;
  document.getElementById('hero-github-btn-text').textContent = t.hero_github_btn;
  document.getElementById('stat-projects-label').textContent = t.stat_projects;
  document.getElementById('stat-tech-label').textContent = t.stat_tech;
  document.getElementById('stat-ui-label').textContent = t.stat_ui;

  document.getElementById('about-sub-text').textContent = t.about_sub;
  document.getElementById('about-title-text').textContent = t.about_title;
  document.getElementById('about-card-title').textContent = t.about_card_title;
  document.getElementById('about-p1-text').textContent = t.about_p1;
  document.getElementById('about-p2-text').textContent = t.about_p2;
  document.getElementById('about-feat1-title').textContent = t.about_feat1_title;
  document.getElementById('about-feat1-desc').textContent = t.about_feat1_desc;
  document.getElementById('about-feat2-title').textContent = t.about_feat2_title;
  document.getElementById('about-feat2-desc').textContent = t.about_feat2_desc;
  document.getElementById('about-feat3-title').textContent = t.about_feat3_title;
  document.getElementById('about-feat3-desc').textContent = t.about_feat3_desc;
  document.getElementById('about-info-title').textContent = t.about_info_title;
  document.getElementById('info-lbl-name').textContent = t.info_lbl_name;
  document.getElementById('info-lbl-role').textContent = t.info_lbl_role;
  document.getElementById('info-lbl-tg').textContent = t.info_lbl_tg;
  document.getElementById('info-lbl-ig').textContent = t.info_lbl_ig;
  document.getElementById('info-lbl-gh').textContent = t.info_lbl_gh;
  document.getElementById('about-cta-btn').textContent = t.about_cta_btn;

  document.getElementById('skills-sub-text').textContent = t.skills_sub;
  document.getElementById('skills-title-text').textContent = t.skills_title;
  document.getElementById('skills-hint-text').textContent = t.skills_hint;

  document.getElementById('projects-sub-text').textContent = t.projects_sub;
  document.getElementById('projects-title-text').textContent = t.projects_title;

  document.getElementById('contact-sub-text').textContent = t.contact_sub;
  document.getElementById('contact-title-text').innerHTML = `${t.contact_title_line1} <br /><span class="text-gradient">${t.contact_title_line2}</span>`;
  document.getElementById('contact-desc-text').textContent = t.contact_desc;
  document.getElementById('form-title-text').textContent = t.form_title;
  document.getElementById('label-name-text').textContent = t.label_name;
  document.getElementById('sender-name').placeholder = t.placeholder_name;
  document.getElementById('label-contact-text').textContent = t.label_contact;
  document.getElementById('sender-contact').placeholder = t.placeholder_contact;
  document.getElementById('label-msg-text').textContent = t.label_msg;
  document.getElementById('sender-msg').placeholder = t.placeholder_msg;
  document.getElementById('form-btn-text').textContent = t.form_btn;


  document.getElementById('footer-copy-text').innerHTML = `&copy; <span id="year">${new Date().getFullYear()}</span> ${t.footer_rights}`;


  document.querySelectorAll('.lang-opt').forEach(btn => {
    if (btn.dataset.langOpt === currentLang) {
      btn.className = 'lang-opt w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm text-white bg-white/10 font-medium transition-colors text-left';
    } else {
      btn.className = 'lang-opt w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition-colors text-left';
    }
  });

  renderSkills();
  updateFilterButtonsUI();
  renderProjects();
  if (activeSkill) updateTechModalTexts();

  langMenu.classList.add('hidden');
}

setLanguage(currentLang);

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('sender-name').value.trim();
  const contact = document.getElementById('sender-contact').value.trim();
  const msg = document.getElementById('sender-msg').value.trim();

  const text = `Assalomu alaykum Sultonbek!\n\nIsm: ${name}\nAloqa: ${contact}\nXabar: ${msg}`;
  const tgUrl = `https://t.me/Shavkatov_Sultonbek_722?text=${encodeURIComponent(text)}`;
  window.open(tgUrl, '_blank');
});