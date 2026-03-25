import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { routes, getRouteBySlug, getAllRouteSlugs, getRelatedRoutes } from '@/data/routes';
import { fleet, fareNotes } from '@/data/fleet';
import { generateRouteFaqs } from '@/data/faqs';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';
import FleetCard from '@/components/FleetCard';
import FAQAccordion from '@/components/FAQAccordion';
import RelatedRoutes from '@/components/RelatedRoutes';
import CTABanner from '@/components/CTABanner';
import RouteSEOContent from '@/components/RouteSEOContent';

// Generate all 100+ route pages at build time
export function generateStaticParams() {
    return getAllRouteSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    return params.then(({ slug }) => {
        const route = getRouteBySlug(slug);
        if (!route) return { title: 'Route Not Found' };
        return {
            title: route.title,
            description: route.metaDescription,
            openGraph: {
                title: route.title,
                description: route.metaDescription,
                url: `${siteConfig.url}/${route.slug}`,
            },
        };
    });
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const route = getRouteBySlug(slug);
    if (!route) notFound();

    const faqs = generateRouteFaqs(route.from, route.to, route.distance, route.duration);
    const related = getRelatedRoutes(route.relatedRoutes);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TaxiService',
        name: `${route.from} to ${route.to} Cab — ${siteConfig.name}`,
        description: route.metaDescription,
        provider: {
            '@type': 'Organization',
            name: siteConfig.name,
            telephone: siteConfig.phone,
            url: siteConfig.url,
        },
        areaServed: [route.from, route.to],
        url: `${siteConfig.url}/${route.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="dark-gradient py-12 md:py-16 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <Breadcrumb
                                items={[
                                    { label: route.from, href: `/${route.from.toLowerCase().replace(/\s+/g, '-')}-to-${route.to.toLowerCase().replace(/\s+/g, '-')}-cab` },
                                    { label: `${route.from} to ${route.to}` },
                                ]}
                            />
                            <h1 className="font-heading text-3xl font-bold text-white md:text-5xl mt-4">
                                {route.heroTitle}
                            </h1>
                            <p className="mt-4 text-base text-white/70 leading-relaxed max-w-2xl">
                                {route.intro}
                            </p>

                            {/* Quick stats */}
                            <div className="mt-6 flex flex-wrap gap-4">
                                <div className="glass rounded-lg px-4 py-2.5">
                                    <div className="text-xs text-white/60">Distance</div>
                                    <div className="text-sm font-bold text-accent">{route.distance}</div>
                                </div>
                                <div className="glass rounded-lg px-4 py-2.5">
                                    <div className="text-xs text-white/60">Duration</div>
                                    <div className="text-sm font-bold text-accent">{route.duration}</div>
                                </div>
                                <div className="glass rounded-lg px-4 py-2.5">
                                    <div className="text-xs text-white/60">Starting Fare</div>
                                    <div className="text-sm font-bold text-accent">₹12/km</div>
                                </div>
                                {route.isOneWay && (
                                    <div className="glass rounded-lg px-4 py-2.5">
                                        <div className="text-xs text-white/60">One Way</div>
                                        <div className="text-sm font-bold text-whatsapp">Available ✓</div>
                                    </div>
                                )}
                            </div>

                            {/* CTAs */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={getCallLink()}
                                    className="flex items-center justify-center gap-2 rounded-full bg-[#ff3366] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#e62e5c] transition-colors shadow-lg shadow-[#ff3366]/20"
                                >
                                    📞 Call for Instant Booking
                                </a>
                                <a
                                    href={getWhatsAppLink(`Hi, I need a cab from ${route.from} to ${route.to}`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-sm font-bold text-white hover:bg-green-500 transition-colors"
                                >
                                    💬 Get Fare on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group mt-8 lg:mt-0">
                            <Image
                                src={route.image || '/cars/innovacrysta.jpg'}
                                alt={`${route.from} to ${route.to} premium cab service`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-red-400/30">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                LIVE BOOKING
                            </div>
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white/90 text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-lg group-hover:bg-accent transition-colors">
                                Verified Service
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pointer-events-none">
                                <div className="text-white font-bold text-2xl drop-shadow-md">VIP Cab Premium Fleet</div>
                                <div className="text-white/90 text-sm mt-1 drop-shadow-md flex items-center gap-2">
                                    <span>✓ Highly Sanitized</span>
                                    <span>✓ AC Available</span>
                                    <span>✓ GPS Tracked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 space-y-24">
                {/* Why Choose */}
                <section>
                    <div className="mb-10">
                        <h2 className="font-heading text-3xl font-bold text-primary">
                            Why Choose VIP Cab for {route.from} to {route.to}?
                        </h2>
                        <div className="w-20 h-1.5 bg-accent mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {route.highlights.map((h, i) => (
                            <div key={h} className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-6 hover:shadow-md transition-shadow">
                                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 text-accent font-bold">
                                    0{i + 1}
                                </span>
                                <div>
                                    <span className="text-base font-semibold text-primary block mb-1">Feature</span>
                                    <span className="text-sm text-text-light leading-relaxed">{h}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fleet for this route */}
                <section>
                    <div className="mb-10">
                        <h2 className="font-heading text-3xl font-bold text-primary">
                            Cars Available for {route.from} to {route.to}
                        </h2>
                        <p className="text-text-muted mt-2">Select from our wide range of premium air-conditioned vehicles</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fleet.map((car) => (
                            <FleetCard key={car.id} car={car} />
                        ))}
                    </div>
                </section>

                {/* Fare info */}
                <section className="rounded-3xl bg-surface-alt border border-border p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3366]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                            <span className="text-2xl">💰</span> {route.from} to {route.to} Cab Fare
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border text-left">
                                        <th className="py-4 pr-4 font-bold text-primary uppercase tracking-wider text-xs">Vehicle Type</th>
                                        <th className="py-4 text-right font-bold text-primary uppercase tracking-wider text-xs">Rate per km</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fleet.map((car) => (
                                        <tr key={car.id} className="border-b border-border/50 group hover:bg-white/50 transition-colors">
                                            <td className="py-4 pr-4 text-text-light font-medium">{car.name}</td>
                                            <td className="py-4 text-right font-bold text-accent">₹{car.rate}*</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 flex flex-col gap-2">
                            {fareNotes.map((note) => (
                                <p key={note} className="text-xs text-text-muted flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> {note}
                                </p>
                            ))}
                        </div>
                        <p className="mt-4 text-[10px] text-text-muted italic">* Tolls, parking, and state taxes extra as per actual.</p>
                    </div>
                </section>

                <RouteSEOContent
                    from={route.from}
                    to={route.to}
                    distance={route.distance}
                    duration={route.duration}
                />

                {/* Trip Info */}
                <section>
                    <div className="mb-10 text-center">
                        <h2 className="font-heading text-3xl font-bold text-primary">
                            {route.from} to {route.to} Trip Details
                        </h2>
                        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Distance', val: route.distance, icon: '📍', desc: `Total road distance from ${route.from}.` },
                            { label: 'Duration', val: route.duration, icon: '⏱️', desc: `Approximate travel time via Highway.` },
                            { label: 'Pickup', val: 'Doorstep', icon: '🏠', desc: `Home/Office pickup from anywhere.` },
                            { label: 'Drop', val: 'Direct', icon: '🏢', desc: `Safe drop to your exact location.` },
                        ].map((item) => (
                            <div key={item.label} className="rounded-2xl border border-border bg-white p-6 hover:border-accent transition-colors">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <div className="font-bold text-primary text-lg mb-1">{item.label}</div>
                                <div className="text-accent font-bold text-sm mb-2">{item.val}</div>
                                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety */}
                <section className="rounded-3xl dark-gradient p-10 sm:p-14 text-center sm:text-left">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-md">
                            <h2 className="font-heading text-3xl font-bold text-white mb-4 leading-tight">
                                Safe & Professional <br className="hidden sm:block" /> Cab Service Guaranteed
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                We prioritize your safety above everything else. Our systems and training ensure you have a worry-free travel experience.
                            </p>
                            <a href={getCallLink()} className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
                                Learn about our safety protocols <span>→</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
                            {[
                                { icon: '👨‍✈️', title: 'Verified Drivers', desc: 'Background verified' },
                                { icon: '🛡️', title: 'Insured Rides', desc: 'Full coverage' },
                                { icon: '📍', title: 'GPS Tracked', desc: '24/7 Monitoring' },
                            ].map((item) => (
                                <div key={item.title} className="glass rounded-2xl p-6 flex flex-col items-center sm:items-start">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                                    <div className="text-[10px] text-white/50 uppercase tracking-widest">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <div className="mb-10">
                        <h2 className="font-heading text-3xl font-bold text-primary">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-text-muted mt-2">Common queries about {route.from} to {route.to} cab booking</p>
                    </div>
                    <FAQAccordion faqs={faqs} showSchema />
                </section>
            </div>

            {/* Related Routes */}
            <RelatedRoutes routes={related} />

            {/* Final CTA */}
            <CTABanner
                title={`Book ${route.from} to ${route.to} Cab Now`}
                subtitle={`Starting ₹12/km. Clean cars, professional drivers, 24/7 service.`}
                whatsappMessage={`Hi, I need a cab from ${route.from} to ${route.to}`}
            />
        </>
    );
}
