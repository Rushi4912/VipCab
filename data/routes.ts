export interface RouteData {
    slug: string;
    from: string;
    to: string;
    title: string;
    metaDescription: string;
    heroTitle: string;
    intro: string;
    distance: string;
    duration: string;
    highlights: string[];
    isAirport: boolean;
    isOneWay: boolean;
    fareNote?: string;
    image?: string;
    relatedRoutes: string[];
    category: 'pune-mumbai' | 'airport' | 'pilgrimage' | 'outstation' | 'intercity';
}

// ---------- helper ----------
function createRoute(
    from: string,
    to: string,
    overrides: Partial<RouteData> = {},
): RouteData {
    const slug =
        overrides.slug ??
        `${from.toLowerCase().replace(/\s+/g, '-')}-to-${to.toLowerCase().replace(/\s+/g, '-')}-cab`;
    const title = overrides.title ?? `${from} to ${to} Cab Service — Book Online | VIP Cab`;
    const metaDescription =
        overrides.metaDescription ??
        `Book ${from} to ${to} cab at best rates. Clean cars, professional drivers, 24/7 service. Starting ₹12/km. Call or WhatsApp to book now.`;
    const heroTitle = overrides.heroTitle ?? `${from} to ${to} Cab`;
    const intro =
        overrides.intro ??
        `Looking for a reliable cab from ${from} to ${to}? VIP Cab offers premium, comfortable cab service on this route with professional drivers, clean air-conditioned cars, and transparent pricing. Whether you need a one-way drop or a round trip, we have the right car for you at the best fare.`;
    const distance = overrides.distance ?? '150 km';
    const duration = overrides.duration ?? '3–4 hours';
    const highlights = overrides.highlights ?? [
        `Comfortable ${from} to ${to} cab with AC`,
        'Professional, experienced highway drivers',
        'Transparent per-km pricing — no hidden charges',
        'One-way and round trip options available',
        'Multiple car options: Dzire, Ertiga, Innova, Crysta',
        '24/7 booking — early morning & late night trips',
        'Door-to-door pickup and drop',
        'Clean, sanitized, and well-maintained cars',
    ];
    const isAirport =
        overrides.isAirport ??
        (from.toLowerCase().includes('airport') || to.toLowerCase().includes('airport'));
    const isOneWay = overrides.isOneWay ?? true;
    const category = overrides.category ?? 'outstation';
    const relatedRoutes = overrides.relatedRoutes ?? [];

    return {
        slug,
        from,
        to,
        title,
        metaDescription,
        heroTitle,
        intro,
        distance,
        duration,
        highlights,
        isAirport,
        isOneWay,
        fareNote: overrides.fareNote,
        image: overrides.image,
        relatedRoutes,
        category,
    };
}

// ===========================
//   ALL ROUTES
// ===========================

export const routes: RouteData[] = [
    // ---- Primary Pune ↔ Mumbai routes ----
    createRoute('Pune', 'Mumbai', {
        distance: '150 km',
        duration: '2.5–3.5 hours',
        category: 'pune-mumbai',
        image: '/routes/punetomumbai.jpg',
        intro:
            'Travel from Pune to Mumbai in comfort with VIP Cab. The Pune to Mumbai Expressway connects the two cities in under 3 hours. Our professional drivers ensure a safe, smooth, and on-time journey. Available 24/7 for one-way drops, round trips, and airport transfers.',
        relatedRoutes: [
            'mumbai-to-pune-cab',
            'pune-to-mumbai-airport-cab',
            'pune-to-navi-mumbai-cab',
            'pune-to-andheri-cab',
            'pune-to-dadar-cab',
        ],
    }),
    createRoute('Mumbai', 'Pune', {
        distance: '150 km',
        duration: '2.5–3.5 hours',
        category: 'pune-mumbai',
        image: '/routes/mumbaitopune.jpg',
        intro:
            'Book a reliable Mumbai to Pune cab with VIP Cab. Whether you are heading from Mumbai suburbs, South Mumbai, or the airport, we pick you up from your doorstep and drop you anywhere in Pune — Hinjewadi, Kothrud, Baner, Wakad, Aundh, and more.',
        relatedRoutes: [
            'pune-to-mumbai-cab',
            'mumbai-to-hinjewadi-cab',
            'mumbai-to-wakad-cab',
            'mumbai-to-baner-cab',
            'mumbai-to-pune-airport-cab',
        ],
    }),

    // ---- Airport routes ----
    createRoute('Pune', 'Mumbai Airport', {
        distance: '155 km',
        duration: '3–3.5 hours',
        category: 'airport',
        isAirport: true,
        image: '/routes/punetomumbaiairport.jpg',
        intro:
            'Book a Pune to Mumbai Airport cab for your flight. Our drivers monitor flight schedules and ensure you reach the terminal well in time. Available for both domestic (T1) and international (T2) terminals at Chhatrapati Shivaji Maharaj International Airport.',
        relatedRoutes: [
            'mumbai-airport-to-pune-cab',
            'pune-to-mumbai-cab',
            'pune-to-navi-mumbai-airport-cab',
        ],
    }),
    createRoute('Mumbai Airport', 'Pune', {
        slug: 'mumbai-airport-to-pune-cab',
        distance: '155 km',
        duration: '3–3.5 hours',
        category: 'airport',
        isAirport: true,
        image: '/routes/mumbaitopuneairport.jpg',
        intro:
            'Arriving at Mumbai Airport? Book your Mumbai Airport to Pune cab in advance. Our driver will meet you at the arrival gate, help with luggage, and drive you comfortably to any location in Pune. We track your flight status for timely pickup.',
        relatedRoutes: [
            'pune-to-mumbai-airport-cab',
            'mumbai-to-pune-cab',
            'navi-mumbai-airport-to-pune-cab',
        ],
    }),
    createRoute('Navi Mumbai Airport', 'Pune', {
        slug: 'navi-mumbai-airport-to-pune-cab',
        distance: '120 km',
        duration: '2–2.5 hours',
        category: 'airport',
        isAirport: true,
        image: '/routes/navimumbaiairporttopune.jpg',
        intro:
            'Book a cab from the new Navi Mumbai International Airport (NMIA) to Pune. With our reliable service, your driver will be waiting as you land. The route via the expressway takes just 2–2.5 hours to reach Pune.',
        relatedRoutes: [
            'pune-to-navi-mumbai-cab',
            'mumbai-airport-to-pune-cab',
            'pune-to-mumbai-cab',
        ],
    }),
    createRoute('Pune', 'Navi Mumbai Airport', {
        slug: 'pune-to-navi-mumbai-airport-cab',
        distance: '120 km',
        duration: '2–2.5 hours',
        category: 'airport',
        isAirport: true,
        relatedRoutes: [
            'navi-mumbai-airport-to-pune-cab',
            'pune-to-mumbai-airport-cab',
        ],
    }),
    createRoute('Mumbai', 'Pune Airport', {
        distance: '155 km',
        duration: '3–3.5 hours',
        category: 'airport',
        isAirport: true,
        relatedRoutes: ['pune-to-mumbai-cab', 'mumbai-to-pune-cab'],
    }),
    createRoute('Pune', 'Goa Airport', {
        distance: '450 km',
        duration: '8–9 hours',
        category: 'airport',
        isAirport: true,
        relatedRoutes: ['pune-to-goa-cab'],
    }),

    // ---- Pune to Mumbai suburbs ----
    createRoute('Pune', 'Andheri', { distance: '155 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-bandra-cab', 'pune-to-juhu-cab'] }),
    createRoute('Pune', 'CST', { slug: 'pune-to-cst-cab', distance: '160 km', duration: '3.5–4.5 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-dadar-cab'] }),
    createRoute('Pune', 'Kurla', { distance: '150 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-andheri-cab'] }),
    createRoute('Pune', 'Dadar', { distance: '155 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-cst-cab'] }),
    createRoute('Pune', 'Panvel', { distance: '110 km', duration: '2–2.5 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-navi-mumbai-cab'] }),
    createRoute('Pune', 'Borivali', { distance: '170 km', duration: '3.5–4.5 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-mira-road-cab'] }),
    createRoute('Pune', 'Bandra', { distance: '155 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-andheri-cab', 'pune-to-juhu-cab'] }),
    createRoute('Pune', 'Mira Road', { distance: '175 km', duration: '3.5–4.5 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-borivali-cab'] }),
    createRoute('Pune', 'Thane', { distance: '140 km', duration: '2.5–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-dombivali-cab', 'pune-to-kalyan-cab'] }),
    createRoute('Pune', 'Dombivali', { distance: '135 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-thane-cab', 'pune-to-kalyan-cab'] }),
    createRoute('Pune', 'Powai', { distance: '155 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-andheri-cab'] }),
    createRoute('Pune', 'Juhu', { distance: '160 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-bandra-cab', 'pune-to-andheri-cab'] }),
    createRoute('Pune', 'Kalyan', { distance: '130 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-thane-cab', 'pune-to-dombivali-cab'] }),
    createRoute('Pune', 'Vile Parle', { distance: '155 km', duration: '3–4 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-mumbai-airport-cab', 'pune-to-andheri-cab'] }),
    createRoute('Pune', 'Mumbai Darshan', { distance: '155 km', duration: 'Full Day', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab'] }),
    createRoute('Pune', 'Ratnagiri', { distance: '330 km', duration: '6–7 hours', category: 'outstation', relatedRoutes: ['pune-to-goa-cab', 'pune-to-dapoli-cab'] }),

    // ---- Mumbai to Pune suburbs ----
    createRoute('Mumbai', 'Wakad', { distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-hinjewadi-cab'] }),
    createRoute('Mumbai', 'New Sangvi', { distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-aundh-cab'] }),
    createRoute('Mumbai', 'Hinjewadi', { distance: '150 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-wakad-cab', 'mumbai-to-baner-cab'] }),
    createRoute('Mumbai', 'Swargate', { slug: 'mumbai-to-swarget-cab', distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab'] }),
    createRoute('Mumbai', 'Aundh', { distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-baner-cab'] }),
    createRoute('Mumbai', 'Pune Station', { distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-swarget-cab'] }),
    createRoute('Mumbai', 'Baner', { distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-aundh-cab', 'mumbai-to-hinjewadi-cab'] }),
    createRoute('Mumbai', 'Bavdhan', { distance: '150 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-baner-cab'] }),
    createRoute('Mumbai', 'Warje', { distance: '150 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-kothrud-cab'] }),
    createRoute('Mumbai', 'Navle Bridge', { distance: '145 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-warje-cab'] }),
    createRoute('Mumbai', 'Ravet', { distance: '145 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-wakad-cab'] }),
    createRoute('Mumbai', 'Pimpri', { distance: '145 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-chinchwad-cab', 'mumbai-to-nigdi-cab'] }),
    createRoute('Mumbai', 'Chinchwad', { distance: '145 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-pimpri-cab', 'mumbai-to-nigdi-cab'] }),
    createRoute('Mumbai', 'Pimple Saudagar', { distance: '150 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-wakad-cab'] }),
    createRoute('Mumbai', 'Nigdi', { distance: '140 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-pimpri-cab', 'mumbai-to-chinchwad-cab'] }),
    createRoute('Mumbai', 'Kothrud', { distance: '155 km', duration: '3–3.5 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-warje-cab'] }),
    createRoute('Mumbai', 'PCMC', { distance: '140 km', duration: '2.5–3 hours', category: 'pune-mumbai', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-pimpri-cab'] }),

    // ---- Intercity routes from other cities ----
    createRoute('Shirdi', 'Mumbai', { distance: '250 km', duration: '5–6 hours', category: 'pilgrimage', relatedRoutes: ['shirdi-to-pune-cab', 'pune-to-shirdi-cab'] }),
    createRoute('Shirdi', 'Pune', { distance: '190 km', duration: '4–5 hours', category: 'pilgrimage', relatedRoutes: ['shirdi-to-mumbai-cab', 'pune-to-shirdi-cab'] }),
    createRoute('Nashik', 'Mumbai', { distance: '170 km', duration: '3.5–4 hours', category: 'intercity', relatedRoutes: ['nashik-to-pune-cab', 'pune-to-nashik-cab'] }),
    createRoute('Nashik', 'Pune', { distance: '210 km', duration: '4–5 hours', category: 'intercity', relatedRoutes: ['nashik-to-mumbai-cab', 'pune-to-nashik-cab'] }),
    createRoute('Kolhapur', 'Mumbai', { distance: '395 km', duration: '7–8 hours', category: 'intercity', relatedRoutes: ['kolhapur-to-pune-cab', 'pune-to-kolhapur-cab'] }),
    createRoute('Kolhapur', 'Pune', { distance: '250 km', duration: '4.5–5 hours', category: 'intercity', relatedRoutes: ['kolhapur-to-mumbai-cab', 'pune-to-kolhapur-cab'] }),
    createRoute('Lonavala', 'Mumbai', { distance: '85 km', duration: '1.5–2 hours', category: 'intercity', relatedRoutes: ['lonavala-to-pune-cab', 'pune-to-lonavala-cab'] }),
    createRoute('Lonavala', 'Pune', { distance: '65 km', duration: '1–1.5 hours', category: 'intercity', relatedRoutes: ['lonavala-to-mumbai-cab', 'pune-to-lonavala-cab'] }),
    createRoute('Aurangabad', 'Mumbai', { distance: '340 km', duration: '6–7 hours', category: 'intercity', relatedRoutes: ['aurangabad-to-pune-cab', 'pune-to-aurangabad-cab'] }),
    createRoute('Aurangabad', 'Pune', { distance: '240 km', duration: '4.5–5 hours', category: 'intercity', relatedRoutes: ['aurangabad-to-mumbai-cab', 'pune-to-aurangabad-cab'] }),
    createRoute('Nagpur', 'Mumbai', { distance: '840 km', duration: '14–15 hours', category: 'intercity', relatedRoutes: ['nagpur-to-pune-cab', 'pune-to-nagpur-cab'] }),
    createRoute('Nagpur', 'Pune', { distance: '720 km', duration: '12–13 hours', category: 'intercity', relatedRoutes: ['nagpur-to-mumbai-cab', 'pune-to-nagpur-cab'] }),
    createRoute('Goa', 'Mumbai', { distance: '590 km', duration: '10–11 hours', category: 'outstation', relatedRoutes: ['goa-to-pune-cab', 'pune-to-goa-cab'] }),
    createRoute('Goa', 'Pune', { distance: '450 km', duration: '8–9 hours', category: 'outstation', relatedRoutes: ['goa-to-mumbai-cab', 'pune-to-goa-cab'] }),
    createRoute('Solapur', 'Mumbai', { distance: '400 km', duration: '7–8 hours', category: 'intercity', relatedRoutes: ['solapur-to-pune-cab', 'pune-to-solapur-cab'] }),
    createRoute('Solapur', 'Pune', { distance: '260 km', duration: '4.5–5 hours', category: 'intercity', relatedRoutes: ['solapur-to-mumbai-cab', 'pune-to-solapur-cab'] }),
    createRoute('Jalna', 'Mumbai', { distance: '380 km', duration: '7–8 hours', category: 'intercity', relatedRoutes: ['jalna-to-pune-cab', 'pune-to-jalna-cab'] }),
    createRoute('Jalna', 'Pune', { distance: '270 km', duration: '5–6 hours', category: 'intercity', relatedRoutes: ['jalna-to-mumbai-cab', 'pune-to-jalna-cab'] }),
    createRoute('Sangli', 'Mumbai', { distance: '395 km', duration: '7–8 hours', category: 'intercity', relatedRoutes: ['sangli-to-pune-cab', 'pune-to-sangli-cab'] }),
    createRoute('Sangli', 'Pune', { distance: '240 km', duration: '4.5–5 hours', category: 'intercity', relatedRoutes: ['sangli-to-mumbai-cab', 'pune-to-sangli-cab'] }),

    // ---- Pune outstation routes ----
    createRoute('Pune', 'Lonavala', { distance: '65 km', duration: '1–1.5 hours', category: 'outstation', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-matheran-cab', 'pune-to-mahabaleshwar-cab'] }),
    createRoute('Pune', 'Nashik', { distance: '210 km', duration: '4–5 hours', category: 'outstation', image: '/routes/punetonashik.jpg', relatedRoutes: ['pune-to-shirdi-cab', 'pune-to-mumbai-cab'] }),
    createRoute('Pune', 'Shirdi', { distance: '190 km', duration: '4–5 hours', category: 'pilgrimage', image: '/routes/punetoshirdi.jpg', relatedRoutes: ['pune-to-nashik-cab', 'pune-to-pandharpur-cab', 'pune-to-ashtavinayak-cab'] }),
    createRoute('Pune', 'Kolhapur', { distance: '250 km', duration: '4.5–5 hours', category: 'outstation', relatedRoutes: ['pune-to-sangli-cab', 'pune-to-goa-cab'] }),
    createRoute('Pune', 'Goa', { distance: '450 km', duration: '8–9 hours', category: 'outstation', image: '/routes/punetogoa.jpg', relatedRoutes: ['pune-to-kolhapur-cab', 'pune-to-ratnagiri-cab'] }),
    createRoute('Pune', 'Bhimashankar', { distance: '110 km', duration: '2.5–3 hours', category: 'pilgrimage', relatedRoutes: ['pune-to-shirdi-cab', 'pune-to-5-jyotirling-cab'] }),
    createRoute('Pune', 'Alibag', { distance: '145 km', duration: '3–3.5 hours', category: 'outstation', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-lonavala-cab'] }),
    createRoute('Pune', 'Mahabaleshwar', { distance: '120 km', duration: '2.5–3 hours', category: 'outstation', relatedRoutes: ['pune-to-satara-cab', 'pune-to-lonavala-cab'] }),
    createRoute('Pune', 'Ashtavinayak', { distance: 'Varies', duration: '2–3 days tour', category: 'pilgrimage', relatedRoutes: ['pune-to-shirdi-cab', 'pune-to-pandharpur-cab', 'pune-to-jejuri-cab'] }),
    createRoute('Pune', 'Satara', { distance: '115 km', duration: '2–2.5 hours', category: 'outstation', relatedRoutes: ['pune-to-mahabaleshwar-cab', 'pune-to-kolhapur-cab'] }),
    createRoute('Pune', 'Sangli', { distance: '240 km', duration: '4.5–5 hours', category: 'outstation', relatedRoutes: ['pune-to-kolhapur-cab', 'pune-to-satara-cab'] }),
    createRoute('Pune', '5 Jyotirling', { distance: 'Varies', duration: 'Multi-day tour', category: 'pilgrimage', relatedRoutes: ['pune-to-shirdi-cab', 'pune-to-bhimashankar-cab', 'pune-to-ashtavinayak-cab'] }),
    createRoute('Pune', 'Nagpur', { distance: '720 km', duration: '12–13 hours', category: 'outstation', relatedRoutes: ['pune-to-aurangabad-cab', 'pune-to-jalna-cab'] }),
    createRoute('Pune', 'Matheran', { distance: '120 km', duration: '2.5–3 hours', category: 'outstation', relatedRoutes: ['pune-to-lonavala-cab', 'pune-to-mumbai-cab'] }),
    createRoute('Pune', 'Solapur', { distance: '260 km', duration: '4.5–5 hours', category: 'outstation', relatedRoutes: ['pune-to-pandharpur-cab', 'pune-to-akkalkot-cab'] }),
    createRoute('Pune', 'Lavasa', { distance: '60 km', duration: '1.5–2 hours', category: 'outstation', relatedRoutes: ['pune-to-lonavala-cab', 'pune-to-mahabaleshwar-cab'] }),
    createRoute('Pune', 'Dapoli', { distance: '200 km', duration: '4–5 hours', category: 'outstation', relatedRoutes: ['pune-to-ratnagiri-cab', 'pune-to-alibag-cab'] }),
    createRoute('Pune', 'Aurangabad', { distance: '240 km', duration: '4.5–5 hours', category: 'outstation', relatedRoutes: ['pune-to-shirdi-cab', 'pune-to-jalna-cab'] }),
    createRoute('Pune', 'Jejuri', { distance: '50 km', duration: '1–1.5 hours', category: 'pilgrimage', relatedRoutes: ['pune-to-pandharpur-cab', 'pune-to-ashtavinayak-cab'] }),
    createRoute('Pune', 'Akkalkot', { distance: '290 km', duration: '5–6 hours', category: 'pilgrimage', relatedRoutes: ['pune-to-solapur-cab', 'pune-to-pandharpur-cab'] }),
    createRoute('Pune', 'Pandharpur', { distance: '215 km', duration: '4–4.5 hours', category: 'pilgrimage', relatedRoutes: ['pune-to-solapur-cab', 'pune-to-tuljapur-cab'] }),
    createRoute('Pune', 'Tuljapur', { distance: '280 km', duration: '5–6 hours', category: 'pilgrimage', relatedRoutes: ['pune-to-pandharpur-cab', 'pune-to-solapur-cab'] }),
    createRoute('Pune', 'Ganagapur', { slug: 'pune-to-ganagapur-cab', distance: '350 km', duration: '6–7 hours', category: 'pilgrimage', relatedRoutes: ['pune-to-akkalkot-cab', 'pune-to-solapur-cab'] }),
    createRoute('Pune', 'Karnataka', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['pune-to-goa-cab', 'pune-to-kolhapur-cab'] }),
    createRoute('Pune', 'Gujarat', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-nashik-cab'] }),
    createRoute('Pune', 'Rajasthan', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-gujarat-cab'] }),
    createRoute('Pune', 'UP', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['pune-to-nagpur-cab', 'pune-to-mumbai-cab'] }),
    createRoute('Pune', 'MP', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['pune-to-nagpur-cab'] }),
    createRoute('Pune', 'Jalna', { distance: '270 km', duration: '5–6 hours', category: 'outstation', relatedRoutes: ['pune-to-aurangabad-cab'] }),
    createRoute('Pune', 'Ahmednagar', { distance: '120 km', duration: '2.5–3 hours', category: 'outstation', relatedRoutes: ['pune-to-shirdi-cab', 'pune-to-nashik-cab'] }),
    createRoute('Pune', 'Navi Mumbai', { distance: '110 km', duration: '2–2.5 hours', category: 'pune-mumbai', relatedRoutes: ['pune-to-mumbai-cab', 'pune-to-panvel-cab'] }),

    // ---- Mumbai outstation routes ----
    createRoute('Mumbai', 'Lonavala', { distance: '85 km', duration: '1.5–2 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-matheran-cab'] }),
    createRoute('Mumbai', 'Nashik', { distance: '170 km', duration: '3.5–4 hours', category: 'outstation', relatedRoutes: ['mumbai-to-shirdi-cab'] }),
    createRoute('Mumbai', 'Shirdi', { distance: '250 km', duration: '5–6 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-nashik-cab', 'mumbai-to-pune-cab'] }),
    createRoute('Mumbai', 'Kolhapur', { distance: '395 km', duration: '7–8 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-goa-cab'] }),
    createRoute('Mumbai', 'Goa', { distance: '590 km', duration: '10–11 hours', category: 'outstation', relatedRoutes: ['mumbai-to-kolhapur-cab', 'mumbai-to-pune-cab'] }),
    createRoute('Mumbai', 'Bhimashankar', { distance: '200 km', duration: '4.5–5 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-shirdi-cab'] }),
    createRoute('Mumbai', 'Alibag', { distance: '95 km', duration: '2–2.5 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-lonavala-cab'] }),
    createRoute('Mumbai', 'Mahabaleshwar', { distance: '265 km', duration: '5–6 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-lonavala-cab'] }),
    createRoute('Mumbai', 'Ashtavinayak', { distance: 'Varies', duration: '2–3 days tour', category: 'pilgrimage', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-shirdi-cab'] }),
    createRoute('Mumbai', 'Satara', { distance: '260 km', duration: '5–5.5 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-mahabaleshwar-cab'] }),
    createRoute('Mumbai', 'Sangli', { distance: '395 km', duration: '7–8 hours', category: 'outstation', relatedRoutes: ['mumbai-to-kolhapur-cab'] }),
    createRoute('Mumbai', '5 Jyotirling', { distance: 'Varies', duration: 'Multi-day tour', category: 'pilgrimage', relatedRoutes: ['mumbai-to-shirdi-cab', 'mumbai-to-bhimashankar-cab'] }),
    createRoute('Mumbai', 'Nagpur', { distance: '840 km', duration: '14–15 hours', category: 'outstation', relatedRoutes: ['mumbai-to-aurangabad-cab'] }),
    createRoute('Mumbai', 'Matheran', { distance: '80 km', duration: '2–2.5 hours', category: 'outstation', relatedRoutes: ['mumbai-to-lonavala-cab', 'mumbai-to-pune-cab'] }),
    createRoute('Mumbai', 'Solapur', { distance: '400 km', duration: '7–8 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab'] }),
    createRoute('Mumbai', 'Lavasa', { distance: '195 km', duration: '4–4.5 hours', category: 'outstation', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-lonavala-cab'] }),
    createRoute('Mumbai', 'Dapoli', { distance: '230 km', duration: '5–6 hours', category: 'outstation', relatedRoutes: ['mumbai-to-alibag-cab'] }),
    createRoute('Mumbai', 'Aurangabad', { distance: '340 km', duration: '6–7 hours', category: 'outstation', relatedRoutes: ['mumbai-to-shirdi-cab'] }),
    createRoute('Mumbai', 'Jejuri', { distance: '200 km', duration: '4–4.5 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-pune-cab'] }),
    createRoute('Mumbai', 'Akkalkot', { distance: '430 km', duration: '8–9 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-solapur-cab'] }),
    createRoute('Mumbai', 'Karnataka', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['mumbai-to-goa-cab'] }),
    createRoute('Mumbai', 'Gujarat', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['mumbai-to-nashik-cab'] }),
    createRoute('Mumbai', 'Rajasthan', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['mumbai-to-gujarat-cab'] }),
    createRoute('Mumbai', 'Ganagapur', { slug: 'mumbai-to-ganagapur-cab', distance: '490 km', duration: '9–10 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-solapur-cab'] }),
    createRoute('Mumbai', 'UP', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['mumbai-to-nagpur-cab'] }),
    createRoute('Mumbai', 'MP', { distance: 'Varies', duration: 'Varies', category: 'outstation', relatedRoutes: ['mumbai-to-nagpur-cab'] }),
    createRoute('Mumbai', 'Jalna', { distance: '380 km', duration: '7–8 hours', category: 'outstation', relatedRoutes: ['mumbai-to-aurangabad-cab'] }),
    createRoute('Mumbai', 'Ahmednagar', { distance: '260 km', duration: '5–5.5 hours', category: 'outstation', relatedRoutes: ['mumbai-to-shirdi-cab'] }),
    createRoute('Mumbai', 'Pandharpur', { distance: '360 km', duration: '6.5–7.5 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-pune-cab', 'mumbai-to-solapur-cab'] }),
    createRoute('Mumbai', 'Tuljapur', { distance: '420 km', duration: '7.5–8.5 hours', category: 'pilgrimage', relatedRoutes: ['mumbai-to-solapur-cab'] }),
    createRoute('Mumbai', 'Ratnagiri', { distance: '340 km', duration: '6–7 hours', category: 'outstation', relatedRoutes: ['mumbai-to-goa-cab', 'mumbai-to-dapoli-cab'] }),
];

// ===========================
//   LOOKUP HELPERS
// ===========================

export function getRouteBySlug(slug: string): RouteData | undefined {
    return routes.find((r) => r.slug === slug);
}

export function getAllRouteSlugs(): string[] {
    return routes.map((r) => r.slug);
}

export function getPopularRoutes(): RouteData[] {
    const popular = [
        'pune-to-mumbai-cab',
        'mumbai-to-pune-cab',
        'pune-to-mumbai-airport-cab',
        'mumbai-airport-to-pune-cab',
        'navi-mumbai-airport-to-pune-cab',
        'pune-to-goa-cab',
        'pune-to-shirdi-cab',
        'pune-to-nashik-cab',
    ];
    return popular
        .map((slug) => routes.find((r) => r.slug === slug))
        .filter((r): r is RouteData => r !== undefined);
}

export function getRelatedRoutes(slugs: string[]): RouteData[] {
    return slugs
        .map((slug) => routes.find((r) => r.slug === slug))
        .filter((r): r is RouteData => r !== undefined);
}

export function getRoutesByCategory(category: RouteData['category']): RouteData[] {
    return routes.filter((r) => r.category === category);
}
