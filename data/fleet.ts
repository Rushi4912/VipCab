export interface CarType {
    id: string;
    name: string;
    slug: string;
    rate: number;
    seats: number;
    bags: number;
    ac: boolean;
    category: 'sedan' | 'suv' | 'muv';
    description: string;
    features: string[];
    image: string;
    popular?: boolean;
}

export const fleet: CarType[] = [
    {
        id: 'dzire',
        name: 'Swift Dzire',
        slug: 'dzire-cab-service',
        rate: 12,
        seats: 4,
        bags: 2,
        ac: true,
        category: 'sedan',
        description:
            'Comfortable and fuel-efficient sedan, perfect for intercity travel. Ideal for solo travellers, couples, and small families.',
        features: ['AC', '4 Seater', 'Fuel Efficient', 'Spacious Boot'],
        image: '/cars/swiftdesire.jpg',
        popular: true,
    },
    {
        id: 'etios',
        name: 'Toyota Etios',
        slug: 'etios-cab-service',
        rate: 13,
        seats: 4,
        bags: 2,
        ac: true,
        category: 'sedan',
        description:
            'Reliable Toyota sedan known for comfort and durability. A great choice for business and leisure trips.',
        features: ['AC', '4 Seater', 'Toyota Reliability', 'Comfortable Ride'],
        image: '/cars/toyotoetios.jpg',
    },
    {
        id: 'ertiga',
        name: 'Maruti Ertiga',
        slug: 'ertiga-cab-service',
        rate: 15,
        seats: 6,
        bags: 3,
        ac: true,
        category: 'muv',
        description:
            'Spacious 7-seater MUV ideal for family trips and group travel. Comfortable seating with ample luggage space.',
        features: ['AC', '6 Seater', 'Family Friendly', 'Ample Luggage Space'],
        image: '/cars/marutiErtiga.jpg',
        popular: true,
    },
    {
        id: 'rumion',
        name: 'Toyota Rumion',
        slug: 'rumion-cab-service',
        rate: 16,
        seats: 6,
        bags: 3,
        ac: true,
        category: 'muv',
        description:
            'Modern Toyota MUV with premium comfort. Perfect for family and business group travel.',
        features: ['AC', '6 Seater', 'Premium Interior', 'Smooth Ride'],
        image: '/cars/toyotarumion.jpg',
    },
    {
        id: 'innova',
        name: 'Toyota Innova',
        slug: 'innova-cab-service',
        rate: 18,
        seats: 7,
        bags: 4,
        ac: true,
        category: 'muv',
        description:
            'The gold standard of Indian road travel. Spacious, comfortable, and built for long-distance journeys.',
        features: ['AC', '7 Seater', 'Highway King', 'Maximum Comfort'],
        image: '/cars/toyotaInova.jpg',
        popular: true,
    },
    {
        id: 'innova-crysta',
        name: 'Innova Crysta',
        slug: 'innova-crysta-cab-service',
        rate: 20,
        seats: 7,
        bags: 4,
        ac: true,
        category: 'muv',
        description:
            'Premium luxury MUV with captain seats, extra legroom, and top-tier comfort. The best choice for VIP and corporate travel.',
        features: ['AC', '7 Seater', 'Captain Seats', 'Luxury Interior'],
        image: '/cars/innovacrysta.jpg',
        popular: true,
    },
    {
        id: 'scorpio',
        name: 'Mahindra Scorpio',
        slug: 'scorpio-cab-service',
        rate: 18,
        seats: 7,
        bags: 4,
        ac: true,
        category: 'suv',
        description:
            'Powerful SUV built for all terrains. Perfect for group travel, hill station trips, and adventure routes.',
        features: ['AC', '7 Seater', 'SUV Power', 'All-Terrain'],
        image: '/cars/mahindrascorpio.avif',
    },
];

export const fareNotes = [
    'Toll charges extra',
    'Parking charges extra',
    'Driver food allowance extra',
    'Night charges may apply (10 PM – 6 AM)',
    'GST as applicable',
];

export function getCarBySlug(slug: string): CarType | undefined {
    return fleet.find((car) => car.slug === slug);
}

export function getCarById(id: string): CarType | undefined {
    return fleet.find((car) => car.id === id);
}
