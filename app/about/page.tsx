import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'About Us',
    description: `Learn about ${siteConfig.name} — your trusted premium cab service for Pune, Mumbai, and beyond. ${siteConfig.tripsCompleted} trips completed with ${siteConfig.happyCustomers} happy customers.`,
};

export default function AboutPage() {
    return (
        <>
            <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'About Us' }]} />

                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    About <span className="text-gold-gradient">VIP Cab</span>
                </h1>
                <p className="mt-4 text-base text-text-light leading-relaxed max-w-3xl">
                    Since {siteConfig.foundedYear}, VIP Cab has been the trusted choice for premium cab
                    services across Pune, Mumbai, and Maharashtra. What started as a small fleet has
                    grown into a reliable cab network with {siteConfig.carsAvailable} vehicles serving
                    {' '}{siteConfig.citiesCovered} cities.
                </p>

                {/* Mission */}
                <section className="mt-12">
                    <h2 className="font-heading text-2xl font-bold text-primary">Our Mission</h2>
                    <p className="mt-3 text-sm text-text-light leading-relaxed">
                        We are committed to providing safe, reliable, and comfortable cab services at
                        transparent prices. Every trip with VIP Cab is backed by professional drivers,
                        clean vehicles, and round-the-clock customer support.
                    </p>
                </section>

                {/* Stats */}
                <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: siteConfig.tripsCompleted, label: 'Trips Completed' },
                        { value: siteConfig.happyCustomers, label: 'Happy Customers' },
                        { value: siteConfig.carsAvailable, label: 'Cars Available' },
                        { value: siteConfig.citiesCovered, label: 'Cities Covered' },
                    ].map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-surface-alt border border-border p-5 text-center">
                            <div className="text-2xl font-bold text-accent">{stat.value}</div>
                            <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
                        </div>
                    ))}
                </section>

                {/* Values */}
                <section className="mt-12">
                    <h2 className="font-heading text-2xl font-bold text-primary mb-6">What Sets Us Apart</h2>
                    <WhyChooseUs />
                </section>

                {/* Coverage */}
                <section className="mt-12">
                    <h2 className="font-heading text-2xl font-bold text-primary">Coverage Area</h2>
                    <p className="mt-3 text-sm text-text-light leading-relaxed">
                        We provide cab services from Pune and Mumbai to all major cities in Maharashtra,
                        Goa, Karnataka, Gujarat, Rajasthan, and beyond. Our most popular routes include
                        Pune to Mumbai, Mumbai Airport to Pune, Pune to Goa, Pune to Shirdi, and many more.
                    </p>
                </section>
            </div>

            <CTABanner />
        </>
    );
}
