export interface FAQ {
    question: string;
    answer: string;
}

export const generalFaqs: FAQ[] = [
    {
        question: 'How do I book a cab?',
        answer:
            'You can book a cab by calling us, sending a WhatsApp message, or filling out the inquiry form on our website. We respond within minutes and confirm your booking instantly.',
    },
    {
        question: 'What are the payment options?',
        answer:
            'We accept cash, UPI, Google Pay, PhonePe, Paytm, and bank transfers. Payment is made directly to the driver after your trip or in advance via UPI.',
    },
    {
        question: 'Are toll and parking charges included?',
        answer:
            'No, toll charges, parking fees, and driver food allowance are extra and paid directly as applicable during the trip. The per-km fare covers the cab service only.',
    },
    {
        question: 'Can I book a one-way cab?',
        answer:
            'Yes! We offer affordable one-way cab services. You pay only for one side — no return fare. Available on all major routes including Pune to Mumbai and Mumbai to Pune.',
    },
    {
        question: 'What types of cars are available?',
        answer:
            'We offer a range of cars including Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Rumion, Toyota Innova, Innova Crysta, and Mahindra Scorpio. Choose based on your group size and comfort needs.',
    },
    {
        question: 'Is the cab service available 24/7?',
        answer:
            'Yes, our cab service is available 24 hours a day, 7 days a week. We handle early morning airport pickups, late night drops, and everything in between.',
    },
    {
        question: 'Are your drivers experienced?',
        answer:
            'All our drivers are professionally trained, have valid commercial licenses, and extensive experience driving on highways and city roads. They are courteous, punctual, and know the routes well.',
    },
    {
        question: 'Can I modify or cancel my booking?',
        answer:
            'Yes, you can modify or cancel your booking by calling or messaging us on WhatsApp. We offer flexible cancellation with no charges up to 4 hours before pickup time.',
    },
    {
        question: 'Do you provide airport pickup and drop?',
        answer:
            'Yes, we provide reliable airport transfer services for Mumbai Airport (BOM), Pune Airport (PNQ), and Navi Mumbai International Airport (NMIA). Our drivers track flight arrivals for timely pickup.',
    },
    {
        question: 'Are the cabs clean and sanitized?',
        answer:
            'Yes, all our cabs are thoroughly cleaned and sanitized before every trip. We maintain high hygiene standards to ensure a comfortable and safe journey for our passengers.',
    },
];

export function generateRouteFaqs(from: string, to: string, distance?: string, duration?: string): FAQ[] {
    return [
        {
            question: `What is the fare for ${from} to ${to} cab?`,
            answer: `The ${from} to ${to} cab fare starts from ₹12/km for a Swift Dzire sedan. The actual fare depends on the car type you choose. Toll, parking, and driver food charges are extra.`,
        },
        {
            question: `How long does it take to travel from ${from} to ${to} by cab?`,
            answer: `The ${from} to ${to} cab journey takes approximately ${duration || '3-4 hours'} covering ${distance || '150 km'} depending on traffic and route conditions.`,
        },
        {
            question: `Is one-way cab available from ${from} to ${to}?`,
            answer: `Yes, we offer affordable one-way cab service from ${from} to ${to}. You pay only for one side — no return charges. Book via call or WhatsApp.`,
        },
        {
            question: `Which cars are available for ${from} to ${to} cab?`,
            answer: `We offer Swift Dzire (₹12/km), Toyota Etios (₹13/km), Maruti Ertiga (₹15/km), Toyota Rumion (₹16/km), Innova (₹18/km), Innova Crysta (₹20/km), and Scorpio (₹18/km) for the ${from} to ${to} route.`,
        },
        {
            question: `Can I book a ${from} to ${to} cab for an early morning or late night trip?`,
            answer: `Absolutely! Our ${from} to ${to} cab service is available 24/7. Whether you need an early morning airport transfer or a late night trip, we have you covered.`,
        },
        {
            question: `How do I book a cab from ${from} to ${to}?`,
            answer: `You can book a ${from} to ${to} cab by calling us, sending a WhatsApp message, or filling out the booking form on this page. We confirm your booking within minutes.`,
        },
    ];
}
