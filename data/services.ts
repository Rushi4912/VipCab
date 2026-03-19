export interface ServiceType {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    icon: string;
    description: string;
    longDescription: string;
    features: string[];
    metaTitle: string;
    metaDescription: string;
}

export const services: ServiceType[] = [
    {
        id: 'one-way',
        slug: 'one-way-cab',
        name: 'One Way Cab Service',
        shortName: 'One Way Cab',
        icon: '➡️',
        description:
            'Pay only for one side. No return fare. Affordable one-way cab service between Pune, Mumbai, and all major cities.',
        longDescription:
            'Our one-way cab service lets you travel between cities without paying for the return trip. This is the most affordable option for intercity travel. We offer one-way cabs for Pune to Mumbai, Mumbai to Pune, and all major routes across Maharashtra and beyond. All our one-way cabs come with professional drivers, clean vehicles, and transparent pricing with no hidden charges.',
        features: [
            'Pay only one-way fare',
            'No return charges',
            'Available on all routes',
            'Multiple car options',
            'Instant booking',
            '24/7 availability',
        ],
        metaTitle: 'One Way Cab Service | Pune Mumbai One Way Cab — VIP Cab',
        metaDescription:
            'Book affordable one-way cab service between Pune and Mumbai. Pay only for one side. Clean cars, professional drivers, and transparent fares.',
    },
    {
        id: 'round-trip',
        slug: 'round-trip-cab',
        name: 'Round Trip Cab Service',
        shortName: 'Round Trip',
        icon: '🔄',
        description:
            'Book a round trip cab for multi-day travel. Dedicated driver and car for your entire journey.',
        longDescription:
            'Our round trip cab service is perfect for multi-day trips, family vacations, and business tours. You get a dedicated car and driver for your entire journey. Round trip rates include the return journey, making it the most convenient option for trips where you need flexibility. Available for all destinations across Maharashtra, Goa, Karnataka, and more.',
        features: [
            'Dedicated car & driver',
            'Multi-day trips',
            'Flexible itinerary',
            'Comfortable travel',
            'Package deals available',
            'All-inclusive pricing',
        ],
        metaTitle: 'Round Trip Cab Service | Multi-Day Cab Booking — VIP Cab',
        metaDescription:
            'Book round trip cab service with dedicated driver. Perfect for multi-day trips, vacations, and business travel. Affordable packages available.',
    },
    {
        id: 'airport-transfer',
        slug: 'airport-transfer',
        name: 'Airport Transfer Service',
        shortName: 'Airport Transfer',
        icon: '✈️',
        description:
            'Reliable airport pickup and drop service. Mumbai Airport, Pune Airport, and Navi Mumbai Airport.',
        longDescription:
            'Never miss a flight with our reliable airport transfer service. We provide timely pickup and drop to Mumbai Airport (BOM), Pune Airport (PNQ), and Navi Mumbai International Airport (NMIA). Our drivers track your flight status and adjust pickup times accordingly. We offer both premium and economy car options for airport transfers.',
        features: [
            'Flight tracking',
            'Meet & greet service',
            'On-time guarantee',
            'All airports covered',
            'Early morning/late night',
            'Premium cars available',
        ],
        metaTitle:
            'Airport Cab Service | Mumbai & Pune Airport Transfer — VIP Cab',
        metaDescription:
            'Book reliable airport transfer service for Mumbai, Pune, and Navi Mumbai airports. On-time pickup, flight tracking, and premium cars.',
    },
    {
        id: 'outstation',
        slug: 'outstation-cab',
        name: 'Outstation Cab Service',
        shortName: 'Outstation Cab',
        icon: '🏞️',
        description:
            'Comfortable outstation cabs for intercity travel. Pune, Mumbai, Goa, Shirdi, Nashik, and across India.',
        longDescription:
            'Travel beyond city limits with our outstation cab service. We cover all major destinations from Pune and Mumbai including Goa, Shirdi, Nashik, Kolhapur, Mahabaleshwar, Lonavala, and more. Our outstation cabs are well-maintained, air-conditioned, and driven by experienced highway drivers who know the routes well.',
        features: [
            'All major destinations',
            'Experienced highway drivers',
            'Well-maintained vehicles',
            'Transparent per-km pricing',
            'One-way & round trip',
            'Multi-city tours',
        ],
        metaTitle:
            'Outstation Cab Service from Pune & Mumbai — VIP Cab',
        metaDescription:
            'Book outstation cab from Pune or Mumbai to any destination. Experienced drivers, clean cars, and the best per-km rates.',
    },
    {
        id: 'corporate',
        slug: 'corporate-cab',
        name: 'Corporate Cab Service',
        shortName: 'Corporate Travel',
        icon: '💼',
        description:
            'Professional corporate cab solutions. Employee transport, client pickup, and business travel.',
        longDescription:
            'Our corporate cab service is designed for businesses that need reliable, professional transportation. We offer employee commute solutions, client pickup services, event transportation, and executive travel. All our corporate cabs feature premium vehicles, professional uniformed drivers, and punctual service with detailed billing.',
        features: [
            'Monthly billing',
            'Dedicated account manager',
            'Professional drivers',
            'Premium vehicles',
            'GST invoicing',
            'Real-time tracking',
        ],
        metaTitle: 'Corporate Cab Service | Business Travel Solutions — VIP Cab',
        metaDescription:
            'Professional corporate cab service for businesses. Employee transport, client pickup, and executive travel with premium cars.',
    },
    {
        id: 'local-pune',
        slug: 'local-pune-cab',
        name: 'Local Pune Cab Service',
        shortName: 'Local Pune Cab',
        icon: '🏙️',
        description:
            'Affordable local cab service within Pune. Hourly packages and point-to-point rides.',
        longDescription:
            'Need a cab within Pune? Our local Pune cab service offers affordable hourly packages and point-to-point rides across the city. Whether you need to visit multiple locations, attend meetings, or shop in the city, our local cabs provide comfortable, air-conditioned travel with professional drivers who know Pune inside out.',
        features: [
            'Hourly packages (4hr/40km, 8hr/80km)',
            'Point-to-point rides',
            'Local area expertise',
            'AC cabs',
            'Multiple car options',
            'Same-day booking',
        ],
        metaTitle: 'Local Pune Cab Service | City Cab Rental — VIP Cab',
        metaDescription:
            'Book local Pune cab service for city travel. Hourly packages starting at affordable rates. AC cars with experienced drivers.',
    },
    {
        id: 'local-mumbai',
        slug: 'local-mumbai-cab',
        name: 'Local Mumbai Cab Service',
        shortName: 'Local Mumbai Cab',
        icon: '🌊',
        description:
            'Comfortable local cab service within Mumbai. Navigate the city with ease.',
        longDescription:
            'Our local Mumbai cab service provides comfortable, air-conditioned travel across the city. From South Mumbai to the suburbs, our drivers know every route and shortcut. Choose from hourly packages or book point-to-point rides for meetings, sightseeing, or business.',
        features: [
            'Hourly packages available',
            'All Mumbai areas covered',
            'Expert Mumbai drivers',
            'AC cabs',
            'Traffic-smart routing',
            'Flexible scheduling',
        ],
        metaTitle: 'Local Mumbai Cab Service | City Cab Rental — VIP Cab',
        metaDescription:
            'Book local Mumbai cab service. Expert drivers, AC cars, and hourly packages. Comfortable city travel across all Mumbai areas.',
    },
    {
        id: 'package-tours',
        slug: 'package-tours',
        name: 'Package Tours',
        shortName: 'Tour Packages',
        icon: '🗺️',
        description:
            'Curated multi-day tour packages. Pilgrimage trips, hill station tours, and holiday packages.',
        longDescription:
            'Explore Maharashtra and beyond with our curated tour packages. We offer pilgrimage tours (Ashtavinayak, 5 Jyotirling, Pandharpur), hill station getaways (Mahabaleshwar, Lonavala, Matheran), beach trips (Goa, Alibag, Dapoli), and custom holiday packages. All tours include comfortable cars, experienced drivers, and flexible itineraries.',
        features: [
            'Pilgrimage tours',
            'Hill station getaways',
            'Beach trip packages',
            'Custom itineraries',
            'Family packages',
            'Group discounts',
        ],
        metaTitle: 'Tour Packages | Pilgrimage & Holiday Tours — VIP Cab',
        metaDescription:
            'Book curated tour packages for pilgrimage, hill stations, and holidays. Comfortable cars with experienced drivers. Custom itineraries available.',
    },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
    return services.find((s) => s.slug === slug);
}
