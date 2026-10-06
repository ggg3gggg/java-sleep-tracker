/* SVG Icons для землячеств */

const communityIcons = {
    chechnya: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Боевая башня -->
        <path d="M80 180 L80 80 L90 70 L110 70 L120 80 L120 180 Z" fill="currentColor" opacity="0.2"/>
        <path d="M85 180 L85 85 L100 75 L115 85 L115 180" stroke="currentColor" stroke-width="2" fill="none"/>
        <!-- Вайнахский орнамент -->
        <path d="M60 60 L70 50 L80 60 M120 60 L130 50 L140 60" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- Горы на фоне -->
        <path d="M20 100 L50 60 L80 90 L110 50 L140 80 L170 70 L180 100" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,

    ingushetia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Ингушские башни (силуэт) -->
        <rect x="70" y="100" width="20" height="80" fill="currentColor" opacity="0.25"/>
        <rect x="110" y="80" width="20" height="100" fill="currentColor" opacity="0.25"/>
        <polygon points="70,100 80,90 90,100" fill="currentColor" opacity="0.3"/>
        <polygon points="110,80 120,70 130,80" fill="currentColor" opacity="0.3"/>
        <!-- Горы -->
        <path d="M20 120 L60 70 L100 110 L140 60 L180 100" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- Геометрический орнамент -->
        <circle cx="100" cy="40" r="15" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,

    dagestan: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Кубачинский орнамент -->
        <circle cx="100" cy="100" r="50" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
        <circle cx="100" cy="100" r="35" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
        <path d="M100 60 L120 100 L100 140 L80 100 Z" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <!-- Кинжал стилизованный -->
        <line x1="100" y1="30" x2="100" y2="90" stroke="currentColor" stroke-width="3" opacity="0.4"/>
        <path d="M95 35 L100 30 L105 35" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- Горный рельеф -->
        <path d="M30 150 L60 120 L90 140 L120 110 L150 130 L170 120" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,

    kchr: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Домбайские горы -->
        <path d="M20 140 L60 80 L100 120 L140 60 L180 110" stroke="currentColor" stroke-width="3" fill="none" opacity="0.3"/>
        <path d="M40 150 L80 100 L120 130 L160 90 L180 120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
        <!-- Карачаево-балкарский орнамент (рамка) -->
        <rect x="40" y="40" width="120" height="120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25" stroke-dasharray="10,5"/>
        <!-- Лошадь силуэт (упрощенный) -->
        <path d="M90 110 Q95 100 100 110 L105 115 L95 115 Z" fill="currentColor" opacity="0.3"/>
    </svg>`,

    kbr: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Эльбрус (две вершины) -->
        <path d="M50 140 L90 60 L110 80 L120 60 L150 140" fill="currentColor" opacity="0.15"/>
        <path d="M50 140 L90 60 L110 80 L120 60 L150 140" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- Адыгский орнамент -->
        <circle cx="100" cy="100" r="30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M70 100 L100 70 L130 100 L100 130 Z" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
        <!-- Всадник силуэт (упрощенный) -->
        <circle cx="100" cy="160" r="8" fill="currentColor" opacity="0.3"/>
        <line x1="100" y1="160" x2="110" y2="175" stroke="currentColor" stroke-width="3" opacity="0.3"/>
    </svg>`,

    georgia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Сванская башня -->
        <rect x="85" y="80" width="30" height="100" fill="currentColor" opacity="0.2"/>
        <polygon points="85,80 100,65 115,80" fill="currentColor" opacity="0.25"/>
        <rect x="95" y="120" width="10" height="15" fill="currentColor" opacity="0.4"/>
        <!-- Виноградная лоза -->
        <circle cx="50" cy="60" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="65" cy="50" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="150" cy="60" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M50 68 Q60 75 65 58" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <!-- Горы -->
        <path d="M20 130 L50 100 L80 120 L110 90 L140 110 L170 100 L180 120" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,

    armenia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Гора Арарат -->
        <path d="M40 150 L100 50 L160 150" fill="currentColor" opacity="0.15"/>
        <path d="M40 150 L100 50 L160 150" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M70 120 L90 85 L110 120" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.3"/>
        <!-- Хачкар (армянский крест) -->
        <line x1="100" y1="160" x2="100" y2="190" stroke="currentColor" stroke-width="3" opacity="0.4"/>
        <line x1="85" y1="170" x2="115" y2="170" stroke="currentColor" stroke-width="3" opacity="0.4"/>
        <circle cx="100" cy="165" r="5" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- Гранат -->
        <circle cx="50" cy="40" r="10" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M45 35 L55 35 M47 37 L53 37 M48 39 L52 39" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    </svg>`,

    azerbaijan: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Ковровый орнамент (геометрический) -->
        <rect x="50" y="50" width="100" height="100" stroke="currentColor" stroke-width="2" fill="none" opacity="0.2"/>
        <circle cx="100" cy="100" r="30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M70 70 L130 70 L130 130 L70 130 Z" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.2"/>
        <circle cx="75" cy="75" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="125" cy="75" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="125" r="5" fill="currentColor" opacity="0.3"/>
        <circle cx="125" cy="125" r="5" fill="currentColor" opacity="0.3"/>
        <!-- Пламя -->
        <path d="M160 150 Q165 135 160 120 Q170 135 165 150" fill="currentColor" opacity="0.3"/>
        <path d="M160 150 Q165 135 160 120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
    </svg>`,

    ossetia: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Горы -->
        <path d="M30 140 L70 70 L110 110 L150 60 L180 120" fill="currentColor" opacity="0.15"/>
        <path d="M30 140 L70 70 L110 110 L150 60 L180 120" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
        <!-- Аланский орнамент -->
        <circle cx="100" cy="100" r="40" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
        <path d="M80 100 L100 80 L120 100 L100 120 Z" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="100" cy="100" r="15" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
        <!-- Нартский мотив (меч) -->
        <line x1="160" y1="150" x2="160" y2="180" stroke="currentColor" stroke-width="3" opacity="0.35"/>
        <line x1="150" y1="155" x2="170" y2="155" stroke="currentColor" stroke-width="2" opacity="0.35"/>
    </svg>`
};
