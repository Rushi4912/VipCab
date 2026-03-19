export interface Testimonial {
    id: string;
    name: string;
    route: string;
    rating: number;
    text: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Rajesh Patil',
        route: 'Pune to Mumbai',
        rating: 5,
        text: 'Excellent service! The driver was on time and the car was spotless. Very comfortable journey from Pune to Mumbai. Will definitely book again.',
        date: '2025-12-15',
    },
    {
        id: '2',
        name: 'Sneha Kulkarni',
        route: 'Mumbai Airport to Pune',
        rating: 5,
        text: 'Used VIP Cab for my airport transfer. The driver tracked my flight and was waiting right when I landed. Very professional and smooth ride to Pune.',
        date: '2025-11-28',
    },
    {
        id: '3',
        name: 'Amit Sharma',
        route: 'Pune to Shirdi',
        rating: 5,
        text: 'Booked an Innova Crysta for our family trip to Shirdi. The car was luxurious and the driver was very experienced. Great value for money.',
        date: '2025-11-10',
    },
    {
        id: '4',
        name: 'Priya Deshmukh',
        route: 'Mumbai to Pune',
        rating: 5,
        text: 'I regularly use VIP Cab for Mumbai to Pune travel. Consistently good service, clean cars, and transparent billing. Highly recommended!',
        date: '2025-10-22',
    },
    {
        id: '5',
        name: 'Vikram Joshi',
        route: 'Pune to Goa',
        rating: 5,
        text: 'Amazing road trip to Goa with VIP Cab. The Ertiga was comfortable for our group and the driver knew all the best routes. Wonderful experience!',
        date: '2025-10-05',
    },
    {
        id: '6',
        name: 'Anita Mehta',
        route: 'Navi Mumbai Airport to Pune',
        rating: 5,
        text: 'First time using the new Navi Mumbai airport and VIP Cab made it seamless. Reasonable fare, clean car, and friendly driver.',
        date: '2025-09-18',
    },
    {
        id: '7',
        name: 'Suresh Wagh',
        route: 'Pune to Nashik',
        rating: 4,
        text: 'Good service for our Pune to Nashik trip. The driver was polite and the fare was exactly as quoted. No hidden charges at all.',
        date: '2025-09-02',
    },
    {
        id: '8',
        name: 'Meera Nair',
        route: 'Corporate Travel',
        rating: 5,
        text: 'Our company uses VIP Cab for all corporate travel needs. Their billing is transparent, cars are always premium, and scheduling is reliable.',
        date: '2025-08-20',
    },
    {
        id: '9',
        name: 'Rahul Deshpande',
        route: 'Pune to Mahabaleshwar',
        rating: 5,
        text: 'Weekend getaway to Mahabaleshwar was made perfect by VIP Cab. The Scorpio handled the ghat roads effortlessly. Great driver!',
        date: '2025-08-11',
    },
    {
        id: '10',
        name: 'Kavita Pawar',
        route: 'Pune to Mumbai Airport',
        rating: 5,
        text: 'Early morning flight and the driver arrived 10 minutes before time. Clean Dzire, comfortable ride, and affordable fare. Thank you VIP Cab!',
        date: '2025-07-25',
    },
];
