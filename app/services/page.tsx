import type { Metadata } from 'next';
import { services } from '@/data/services';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Our Cab Services',
    description:
        'Explore all cab services — one-way, round trip, airport transfer, outstation, corporate, and local cab services in Pune and Mumbai.',
};

export default function ServicesPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'Services' }]} />
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    Our Cab Services
                </h1>
                <p className="mt-3 text-base text-text-light max-w-2xl">
                    Comprehensive cab solutions for every travel need. From quick airport transfers to
                    multi-day outstation tours, we have you covered.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
            <CTABanner />
        </>
    );
}
