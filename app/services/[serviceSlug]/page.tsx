import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { fleet } from '@/data/fleet';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';
import FleetCard from '@/components/FleetCard';
import CTABanner from '@/components/CTABanner';

// Generate all service pages at build time
export function generateStaticParams() {
    return services.map((s) => ({ serviceSlug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }): Promise<Metadata> {
    return params.then(({ serviceSlug }) => {
        const service = getServiceBySlug(serviceSlug);
        if (!service) return { title: 'Service Not Found' };
        return {
            title: service.metaTitle,
            description: service.metaDescription,
        };
    });
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
    const { serviceSlug } = await params;
    const service = getServiceBySlug(serviceSlug);
    if (!service) notFound();

    return (
        <>
            <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
                <Breadcrumb
                    items={[
                        { label: 'Services', href: '/services' },
                        { label: service.shortName },
                    ]}
                />

                <div className="mb-3 text-4xl">{service.icon}</div>
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    {service.name}
                </h1>
                <p className="mt-4 text-base text-text-light leading-relaxed max-w-3xl">
                    {service.longDescription}
                </p>

                {/* Features */}
                <section className="mt-10">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3"
                            >
                                <span className="text-accent">✓</span>
                                <span className="text-sm text-text-light">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fleet */}
                <section className="mt-12">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4">Available Cars</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {fleet.slice(0, 6).map((car) => (
                            <FleetCard key={car.id} car={car} />
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-12 rounded-2xl dark-gradient p-8 text-center">
                    <h2 className="font-heading text-2xl font-bold text-white">
                        Book {service.shortName} Now
                    </h2>
                    <p className="mt-2 text-sm text-white/70">
                        Get instant fare quote. Available 24/7.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={getCallLink()}
                            className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-white hover:bg-accent-dark transition-colors"
                        >
                            📞 Call {siteConfig.phoneDisplay}
                        </a>
                        <a
                            href={getWhatsAppLink(`Hi, I want to book ${service.name}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-whatsapp px-8 py-3 text-sm font-bold text-white hover:bg-green-500 transition-colors"
                        >
                            💬 WhatsApp Inquiry
                        </a>
                    </div>
                </section>
            </div>
            <CTABanner />
        </>
    );
}
