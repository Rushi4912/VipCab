import type { Metadata } from 'next';
import { testimonials } from '@/data/testimonials';
import Breadcrumb from '@/components/Breadcrumb';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Customer Testimonials',
    description:
        'Read real reviews and testimonials from VIP Cab customers. Trusted by thousands of travellers for Pune-Mumbai cab service.',
};

export default function TestimonialsPage() {
    return (
        <>
            <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'Testimonials' }]} />
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    Customer Reviews
                </h1>
                <p className="mt-3 text-base text-text-light">
                    Real stories from real travellers who choose VIP Cab.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </div>
            </div>
            <CTABanner />
        </>
    );
}
