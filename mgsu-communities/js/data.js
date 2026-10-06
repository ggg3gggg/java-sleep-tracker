// Загружаем иконки
const communityIcons = {
    chechnya: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 180 L80 80 L90 70 L110 70 L120 80 L120 180 Z" fill="currentColor" opacity="0.2"/>
        <path d="M85 180 L85 85 L100 75 L115 85 L115 180" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M60 60 L70 50 L80 60 M120 60 L130 50 L140 60" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M20 100 L50 60 L80 90 L110 50 L140 80 L170 70 L180 100" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,
    ingushetia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="100" width="20" height="80" fill="currentColor" opacity="0.25"/>
        <rect x="110" y="80" width="20" height="100" fill="currentColor" opacity="0.25"/>
        <polygon points="70,100 80,90 90,100" fill="currentColor" opacity="0.3"/>
        <polygon points="110,80 120,70 130,80" fill="currentColor" opacity="0.3"/>
        <path d="M20 120 L60 70 L100 110 L140 60 L180 100" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="100" cy="40" r="15" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,
    dagestan: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="50" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
        <circle cx="100" cy="100" r="35" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
        <path d="M100 60 L120 100 L100 140 L80 100 Z" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <line x1="100" y1="30" x2="100" y2="90" stroke="currentColor" stroke-width="3" opacity="0.4"/>
        <path d="M95 35 L100 30 L105 35" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M30 150 L60 120 L90 140 L120 110 L150 130 L170 120" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,
    kchr: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 140 L60 80 L100 120 L140 60 L180 110" stroke="currentColor" stroke-width="3" fill="none" opacity="0.3"/>
        <path d="M40 150 L80 100 L120 130 L160 90 L180 120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
        <rect x="40" y="40" width="120" height="120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25" stroke-dasharray="10,5"/>
        <path d="M90 110 Q95 100 100 110 L105 115 L95 115 Z" fill="currentColor" opacity="0.3"/>
    </svg>`,
    kbr: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 140 L90 60 L110 80 L120 60 L150 140" fill="currentColor" opacity="0.15"/>
        <path d="M50 140 L90 60 L110 80 L120 60 L150 140" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="100" cy="100" r="30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M70 100 L100 70 L130 100 L100 130 Z" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
        <circle cx="100" cy="160" r="8" fill="currentColor" opacity="0.3"/>
        <line x1="100" y1="160" x2="110" y2="175" stroke="currentColor" stroke-width="3" opacity="0.3"/>
    </svg>`,
    georgia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="85" y="80" width="30" height="100" fill="currentColor" opacity="0.2"/>
        <polygon points="85,80 100,65 115,80" fill="currentColor" opacity="0.25"/>
        <rect x="95" y="120" width="10" height="15" fill="currentColor" opacity="0.4"/>
        <circle cx="50" cy="60" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="65" cy="50" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="150" cy="60" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M50 68 Q60 75 65 58" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M20 130 L50 100 L80 120 L110 90 L140 110 L170 100 L180 120" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,
    armenia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 150 L100 50 L160 150" fill="currentColor" opacity="0.15"/>
        <path d="M40 150 L100 50 L160 150" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M70 120 L90 85 L110 120" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
        <line x1="100" y1="160" x2="100" y2="190" stroke="currentColor" stroke-width="3" opacity="0.4"/>
        <line x1="85" y1="170" x2="115" y2="170" stroke="currentColor" stroke-width="3" opacity="0.4"/>
        <circle cx="100" cy="165" r="5" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="50" cy="40" r="10" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M45 35 L55 35 M47 37 L53 37 M48 39 L52 39" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    </svg>`,
    azerbaijan: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="100" height="100" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
        <circle cx="100" cy="100" r="30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M70 70 L130 70 L130 130 L70 130 Z" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.2"/>
        <circle cx="75" cy="75" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="125" cy="75" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="125" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="125" cy="125" r="5" fill="currentColor" opacity="0.3"/>
        <path d="M160 150 Q165 135 160 120 Q170 135 165 150" fill="currentColor" opacity="0.3"/>
        <path d="M160 150 Q165 135 160 120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
    </svg>`,
    ossetia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 140 L70 70 L110 110 L150 60 L180 120" fill="currentColor" opacity="0.15"/>
        <path d="M30 140 L70 70 L110 110 L150 60 L180 120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="100" cy="100" r="40" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M80 100 L100 80 L120 100 L100 120 Z" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="100" cy="100" r="15" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <line x1="160" y1="150" x2="160" y2="180" stroke="currentColor" stroke-width="3" opacity="0.35"/>
        <line x1="150" y1="155" x2="170" y2="155" stroke="currentColor" stroke-width="2" opacity="0.35"/>
    </svg>`
};

// Данные землячеств
const communities = [
    {
        id: 'chechnya',
        name: 'Чеченское землячество',
        nameEn: 'Chechen Community',
        country: 'Россия',
        region: 'Чеченская Республика',
        flag: '🇷🇺',
        members_count: 67,
        year_founded: 2015,
        description: 'Объединяем студентов из Чеченской Республики для поддержки и сохранения культурных традиций. Помогаем первокурсникам адаптироваться в Москве, проводим культурные мероприятия и поддерживаем связь с родиной.',
        fullDescription: 'Чеченское землячество НИУ МГСУ — одно из самых крупных и активных землячеств университета. Мы организуем культурные мероприятия, помогаем новым студентам адаптироваться к жизни в Москве и учебе в университете. Наша община — это не просто группа студентов, это семья, где каждый находит поддержку и понимание.',
        theme: {
            primary: '#2c7a3f',
            secondary: '#c41e3a',
            gradient: 'linear-gradient(135deg, #2c7a3f 0%, #c41e3a 100%)',
            pattern: 'chechenian'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Помощь в адаптации первокурсников',
            'Организация культурных мероприятий',
            'Празднование национальных праздников',
            'Совместные учебные сессии'
        ]
    },
    {
        id: 'ingushetia',
        name: 'Ингушское землячество',
        nameEn: 'Ingush Community',
        country: 'Россия',
        region: 'Республика Ингушетия',
        flag: '🇷🇺',
        members_count: 45,
        year_founded: 2016,
        description: 'Ингушское землячество объединяет студентов из Республики Ингушетия. Сохраняем традиции, помогаем земляками и создаем дружескую атмосферу.',
        fullDescription: 'Наше землячество создано для того, чтобы каждый студент из Ингушетии чувствовал себя как дома. Мы помогаем с учебой, общежитием, организуем встречи и мероприятия. У нас царит атмосфера взаимопомощи и братства.',
        theme: {
            primary: '#c8102e',
            secondary: '#00a651',
            gradient: 'linear-gradient(135deg, #c8102e 0%, #00a651 100%)',
            pattern: 'ingush'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Встречи и знакомства земляков',
            'Поддержка первокурсников',
            'Культурные вечера',
            'Спортивные мероприятия'
        ]
    },
    {
        id: 'dagestan',
        name: 'Дагестанское землячество',
        nameEn: 'Dagestani Community',
        country: 'Россия',
        region: 'Республика Дагестан',
        flag: '🇷🇺',
        members_count: 89,
        year_founded: 2014,
        description: 'Самое большое землячество! Объединяем студентов из Дагестана всех национальностей. Вместе мы сила!',
        fullDescription: 'Дагестанское землячество — это многонациональная семья, где аварцы, даргинцы, лезгины, кумыки, лакцы и представители других народов Дагестана находят поддержку и дружбу. Мы гордимся своим разнообразием и единством.',
        theme: {
            primary: '#0d4d96',
            secondary: '#de3831',
            gradient: 'linear-gradient(135deg, #0d4d96 0%, #de3831 100%)',
            pattern: 'dagestani'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Помощь землякам в любых вопросах',
            'Организация праздников народов Дагестана',
            'Спортивные соревнования',
            'Поддержка студенческих инициатив'
        ]
    },
    {
        id: 'kchr',
        name: 'Карачаево-Черкесское землячество',
        nameEn: 'Karachay-Cherkess Community',
        country: 'Россия',
        region: 'Карачаево-Черкесская Республика',
        flag: '🇷🇺',
        members_count: 34,
        year_founded: 2017,
        description: 'Объединяем карачаевцев и черкесов. Сохраняем культуру и традиции горских народов.',
        fullDescription: 'В нашем землячестве представлены карачаевцы, черкесы, абазины и другие народы КЧР. Мы проводим культурные мероприятия, помогаем первокурсникам и поддерживаем традиции наших народов.',
        theme: {
            primary: '#009fe3',
            secondary: '#00a651',
            gradient: 'linear-gradient(135deg, #009fe3 0%, #00a651 100%)',
            pattern: 'karachay'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Празднование национальных праздников',
            'Культурные встречи',
            'Помощь новичкам',
            'Поддержание горских традиций'
        ]
    },
    {
        id: 'kbr',
        name: 'Кабардино-Балкарское землячество',
        nameEn: 'Kabardino-Balkar Community',
        country: 'Россия',
        region: 'Кабардино-Балкарская Республика',
        flag: '🇷🇺',
        members_count: 52,
        year_founded: 2015,
        description: 'Землячество кабардинцев и балкарцев. Братство, традиции, взаимопомощь — наши главные ценности.',
        fullDescription: 'Кабардино-Балкарское землячество объединяет студентов-кабардинцев и балкарцев. Мы чтим традиции адыгэ хабзэ и таулу адет, помогаем друг другу и организуем культурные мероприятия.',
        theme: {
            primary: '#00a651',
            secondary: '#ffd100',
            gradient: 'linear-gradient(135deg, #00a651 0%, #ffd100 100%)',
            pattern: 'kabardino'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Соблюдение адыгских традиций',
            'Помощь землякам',
            'Культурные вечера',
            'Организация праздников'
        ]
    },
    {
        id: 'georgia',
        name: 'Грузинское землячество',
        nameEn: 'Georgian Community',
        country: 'Грузия',
        region: 'Грузия',
        flag: '🇬🇪',
        members_count: 28,
        year_founded: 2018,
        description: 'Объединяем грузинских студентов в МГСУ. Гаумарджос!',
        fullDescription: 'Грузинское землячество — это кусочек Сакартвело в МГСУ. Мы сохраняем грузинские традиции, отмечаем национальные праздники, помогаем новым студентам и создаем атмосферу грузинского гостеприимства.',
        theme: {
            primary: '#c8102e',
            secondary: '#ffffff',
            gradient: 'linear-gradient(135deg, #c8102e 0%, #fff 100%)',
            pattern: 'georgian'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Грузинские культурные вечера',
            'Празднование Тбилисоба',
            'Помощь грузинским студентам',
            'Кулинарные встречи'
        ]
    },
    {
        id: 'armenia',
        name: 'Армянское землячество',
        nameEn: 'Armenian Community',
        country: 'Армения',
        region: 'Армения',
        flag: '🇦🇲',
        members_count: 41,
        year_founded: 2016,
        description: 'Барев дзес! Армянское землячество МГСУ приветствует всех армян университета.',
        fullDescription: 'Наше землячество объединяет армянских студентов из России, Армении и других стран. Мы сохраняем армянскую культуру, помогаем землякам и организуем мероприятия. Добро пожаловать в нашу армянскую семью!',
        theme: {
            primary: '#d90012',
            secondary: '#0033a0',
            gradient: 'linear-gradient(135deg, #d90012 0%, #0033a0 100%)',
            pattern: 'armenian'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Празднование армянских праздников',
            'Культурные мероприятия',
            'Помощь армянским студентам',
            'Встречи и знакомства'
        ]
    },
    {
        id: 'azerbaijan',
        name: 'Азербайджанское землячество',
        nameEn: 'Azerbaijani Community',
        country: 'Азербайджан',
        region: 'Азербайджан',
        flag: '🇦🇿',
        members_count: 38,
        year_founded: 2017,
        description: 'Salam! Объединяем азербайджанских студентов МГСУ.',
        fullDescription: 'Азербайджанское землячество — это дружная семья студентов из Азербайджана. Мы помогаем новичкам, проводим культурные мероприятия, отмечаем Новруз и другие праздники. У нас царит атмосфера азербайджанского гостеприимства.',
        theme: {
            primary: '#00b5e2',
            secondary: '#ef3340',
            gradient: 'linear-gradient(135deg, #00b5e2 0%, #ef3340 100%)',
            pattern: 'azerbaijani'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Празднование Новруз байрамы',
            'Азербайджанские культурные вечера',
            'Помощь студентам',
            'Организация встреч'
        ]
    },
    {
        id: 'ossetia',
        name: 'Осетинское землячество',
        nameEn: 'Ossetian Community',
        country: 'Россия',
        region: 'Республика Северная Осетия-Алания',
        flag: '🇷🇺',
        members_count: 44,
        year_founded: 2015,
        description: 'Дæ бон хорз! Осетинское землячество объединяет студентов-осетин.',
        fullDescription: 'Осетинское землячество — это община, где сохраняются традиции нартов. Мы помогаем землякам, отмечаем национальные праздники и поддерживаем осетинскую культуру в стенах МГСУ.',
        theme: {
            primary: '#c8102e',
            secondary: '#ffd100',
            gradient: 'linear-gradient(135deg, #c8102e 0%, #ffd100 100%)',
            pattern: 'ossetian'
        },
        coordinator: {
            name: 'Председатель землячества',
            telegram: '@mgsuapp'
        },
        social_links: {
            telegram: 'https://t.me/mgsuapp'
        },
        activities: [
            'Празднование осетинских праздников',
            'Культурные мероприятия',
            'Помощь и поддержка',
            'Сохранение традиций'
        ]
    }
];
