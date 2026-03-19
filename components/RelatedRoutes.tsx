import Link from 'next/link';
import type { RouteData } from '@/data/routes';

export default function RelatedRoutes({ routes }: { routes: RouteData[] }) {
    if (routes.length === 0) return null;

    return (
        <section className="py-12 px-4 bg-surface-alt">
            <div className="mx-auto max-w-5xl">
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                    Related Routes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {routes.map((route) => (
                        <Link
                            key={route.slug}
                            href={`/${route.slug}`}
                            className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 text-sm hover:border-accent/40 hover:shadow-sm transition-all"
                        >
                            <span className="font-medium text-primary">
                                {route.from} → {route.to}
                            </span>
                            <span className="text-xs text-text-muted">{route.distance}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
