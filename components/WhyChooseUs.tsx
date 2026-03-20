import Image from 'next/image';

const features = [
    {
        image: '/why/professionaldrivers.jpg',
        title: 'Professional Drivers',
        description: 'Experienced, licensed, courteous drivers who know every route.',
    },
    {
        image: '/why/cleancars.jpg',
        title: 'Clean & Sanitized Cars',
        description: 'Every vehicle thoroughly cleaned and sanitized before each trip.',
    },
    {
        image: '/why/transparentfare.jpg',
        title: 'Transparent Fares',
        description: 'No hidden charges. Pay per-km with clear upfront pricing.',
    },
    {
        image: '/why/ontimecar.jpg',
        title: 'On-Time Pickup',
        description: 'We value your time. Guaranteed punctual pickup, every time.',
    },
    {
        image: '/why/customer-service.jpg',
        title: '24/7 Support',
        description: 'Round-the-clock availability. Book anytime, travel anytime.',
    },
    {
        image: '/why/safeandsecure.jpg',
        title: 'Safe & Secure',
        description: 'GPS-tracked vehicles, verified drivers, and insured rides.',
    },
];

export default function WhyChooseUs() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-500"
                >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Subtle shimmer overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Text */}
                    <div className="p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                                {feature.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed pl-11">
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
