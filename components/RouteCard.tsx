import Link from 'next/link';
import type { RouteData } from '@/data/routes';

export default function RouteCard({ route }: { route: RouteData }) {
    return (
        <Link
            href={`/${route.slug}`}
            className="group block rounded-xl border border-border bg-white p-5 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent transition-colors truncate">
                        {route.from} → {route.to}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-text-light">
                        <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {route.distance}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {route.duration}
                        </span>
                    </div>
                </div>
                <div className="text-right shrink-0">
                    <div className="text-xs text-text-muted">From</div>
                    <div className="text-lg font-bold text-accent">₹12<span className="text-xs font-normal text-text-light">/km</span></div>
                </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
}
