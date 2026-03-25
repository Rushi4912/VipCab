import Link from 'next/link';
import type { RouteData } from '@/data/routes';

export default function RelatedRoutes({ routes }: { routes: RouteData[] }) {
    if (routes.length === 0) return null;

    return (
        <section className="py-20 px-4 bg-surface-alt/50 border-t border-border">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-primary">
                            Explore Other Popular Routes
                        </h2>
                        <p className="text-text-muted mt-2">Connecting you to top destinations across the region</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {routes.map((route) => (
                        <Link
                            key={route.slug}
                            href={`/${route.slug}`}
                            className="group relative flex flex-col rounded-2xl border border-border bg-white p-5 hover:border-accent hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2.5 rounded-xl bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-xl">
                                    🚗
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">
                                    {route.distance}
                                </div>
                            </div>

                            <h3 className="font-bold text-primary text-lg group-hover:text-accent transition-colors">
                                {route.from} to {route.to}
                            </h3>
                            <p className="text-xs text-text-muted mt-1 leading-relaxed line-clamp-2">
                                Premium cab service with professional drivers and clean cars.
                            </p>

                            <div className="mt-5 flex items-center text-xs font-bold text-primary/60 group-hover:text-accent transition-colors">
                                BOOK NOW <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
