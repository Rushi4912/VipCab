import Link from 'next/link';
import type { ServiceType } from '@/data/services';

export default function ServiceCard({ service }: { service: ServiceType }) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="group block rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"
        >
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                {service.shortName}
            </h3>
            <p className="mt-2 text-sm text-text-light line-clamp-3">{service.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                Learn More
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </span>
        </Link>
    );
}
