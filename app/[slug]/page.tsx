import type { Metadata } from 'next';
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
                <div className="mx-auto max-w-5xl">
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
                            className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white hover:bg-accent-dark transition-colors"
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
            </section>

            <div className="mx-auto max-w-5xl px-4 py-10 lg:px-8">
                {/* Why Choose */}
                <section className="mb-12">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                        Why Choose VIP Cab for {route.from} to {route.to}?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {route.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3">
                                <span className="text-accent mt-0.5">✓</span>
                                <span className="text-sm text-text-light">{h}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fleet for this route */}
                <section className="mb-12">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                        Cars Available for {route.from} to {route.to}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {fleet.map((car) => (
                            <FleetCard key={car.id} car={car} />
                        ))}
                    </div>
                </section>

                {/* Fare info */}
                <section className="mb-12 rounded-xl bg-surface-alt border border-border p-6">
                    <h2 className="font-heading text-xl font-bold text-primary mb-3">
                        {route.from} to {route.to} Cab Fare
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border text-left">
                                    <th className="py-2 pr-4 font-semibold text-primary">Car</th>
                                    <th className="py-2 text-right font-semibold text-primary">Rate/km</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fleet.map((car) => (
                                    <tr key={car.id} className="border-b border-border/50">
                                        <td className="py-2 pr-4 text-text-light">{car.name}</td>
                                        <td className="py-2 text-right font-semibold text-accent">₹{car.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <ul className="mt-4 space-y-1">
                        {fareNotes.map((note) => (
                            <li key={note} className="text-xs text-text-muted flex items-center gap-1.5">
                                <span className="text-accent">•</span> {note}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Trip Info */}
                <section className="mb-12">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                        {route.from} to {route.to} Trip Details
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-light">
                        <div className="rounded-lg border border-border bg-white p-4">
                            <div className="font-semibold text-primary mb-1">Distance</div>
                            <p>The {route.from} to {route.to} route covers approximately {route.distance}.</p>
                        </div>
                        <div className="rounded-lg border border-border bg-white p-4">
                            <div className="font-semibold text-primary mb-1">Duration</div>
                            <p>The journey takes approximately {route.duration} by road.</p>
                        </div>
                        <div className="rounded-lg border border-border bg-white p-4">
                            <div className="font-semibold text-primary mb-1">Pickup</div>
                            <p>Door-to-door pickup from any location in {route.from}.</p>
                        </div>
                        <div className="rounded-lg border border-border bg-white p-4">
                            <div className="font-semibold text-primary mb-1">Drop</div>
                            <p>Drop to any location in {route.to} — home, office, airport, or station.</p>
                        </div>
                    </div>
                </section>

                {/* Safety */}
                <section className="mb-12 rounded-xl dark-gradient p-8">
                    <h2 className="font-heading text-2xl font-bold text-white mb-4">
                        Safe &amp; Professional Service
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { icon: '👨‍✈️', title: 'Verified Drivers', desc: 'All drivers are background-verified, licensed, and experienced.' },
                            { icon: '🛡️', title: 'Insured Rides', desc: 'Travel with complete peace of mind — all vehicles are fully insured.' },
                            { icon: '📍', title: 'GPS Tracked', desc: 'Real-time vehicle tracking for your safety and transparency.' },
                        ].map((item) => (
                            <div key={item.title} className="glass rounded-lg p-5">
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <div className="text-sm font-semibold text-white">{item.title}</div>
                                <div className="mt-1 text-xs text-white/60">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                        {route.from} to {route.to} Cab — FAQs
                    </h2>
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
