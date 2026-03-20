import Link from 'next/link';
import Image from 'next/image';
import type { ServiceType } from '@/data/services';

export default function ServiceCard({ service }: { service: ServiceType }) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200"
        >
            {/* Image Section */}
            <div className="relative h-44 overflow-hidden">
                {service.image ? (
                    <Image
                        src={service.image}
                        alt={`${service.shortName} — VIP Cab service`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center">
                        <span className="text-5xl">{service.icon}</span>
                    </div>
                )}
                {/* Subtle gradient at bottom of image for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

                {/* Floating icon badge */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-lg border border-white/50">
                    {service.icon}
                </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col flex-1 p-5">
                <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors leading-tight">
                    {service.shortName}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 uppercase tracking-wider">
                    Learn More
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}
