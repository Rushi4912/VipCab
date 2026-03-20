import Link from 'next/link';
import Image from 'next/image';
import type { RouteData } from '@/data/routes';

export default function RouteCard({ route }: { route: RouteData }) {
    return (
        <Link
            href={`/${route.slug}`}
            className="group relative block h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
        >
            {/* Background Image */}
            {route.image ? (
                <Image
                    src={route.image}
                    alt={`${route.from} to ${route.to} cab route`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-900" />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">


                {/* Route name */}
                <h3 className="font-heading text-xl font-bold text-white leading-tight mb-2">
                    {route.from} <span className="text-cyan-300">→</span> {route.to}
                </h3>

                {/* Stats row */}
                <div className="flex items-center gap-3 text-white/80 text-xs">
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {route.distance}
                    </span>
                    <span className="w-px h-3 bg-white/30" />
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {route.duration}
                    </span>
                    <span className="w-px h-3 bg-white/30" />
                    <span className="font-bold text-cyan-300">₹12/km</span>
                </div>

                {/* Hover arrow */}
                <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-cyan-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    View Route Details
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
