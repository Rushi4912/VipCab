const features = [
    {
        icon: '👨‍✈️',
        title: 'Professional Drivers',
        description: 'Experienced, licensed, courteous drivers who know every route.',
    },
    {
        icon: '✨',
        title: 'Clean & Sanitized Cars',
        description: 'Every vehicle thoroughly cleaned and sanitized before each trip.',
    },
    {
        icon: '💰',
        title: 'Transparent Fares',
        description: 'No hidden charges. Pay per-km with clear upfront pricing.',
    },
    {
        icon: '⏰',
        title: 'On-Time Pickup',
        description: 'We value your time. Guaranteed punctual pickup, every time.',
    },
    {
        icon: '📞',
        title: '24/7 Support',
        description: 'Round-the-clock availability. Book anytime, travel anytime.',
    },
    {
        icon: '🛡️',
        title: 'Safe & Secure',
        description: 'GPS-tracked vehicles, verified drivers, and insured rides.',
    },
];

export default function WhyChooseUs({ light = false }: { light?: boolean }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className={`rounded-xl p-6 ${light
                            ? 'glass text-white'
                            : 'border border-border bg-white shadow-sm'
                        }`}
                >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3
                        className={`font-heading text-lg font-semibold ${light ? 'text-white' : 'text-primary'
                            }`}
                    >
                        {feature.title}
                    </h3>
                    <p
                        className={`mt-2 text-sm ${light ? 'text-white/70' : 'text-text-light'
                            }`}
                    >
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
