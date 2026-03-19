import type { Metadata } from 'next';
import { generalFaqs } from '@/data/faqs';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
    description:
        'Find answers to common questions about cab booking, fares, payment options, car types, and more. VIP Cab FAQ.',
};

export default function FAQPage() {
    return (
        <>
            <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'FAQs' }]} />
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    Frequently Asked Questions
                </h1>
                <p className="mt-3 text-base text-text-light">
                    Got questions? Here are answers to the most common queries about our cab services.
                </p>
                <div className="mt-8">
                    <FAQAccordion faqs={generalFaqs} showSchema />
                </div>
            </div>
            <CTABanner />
        </>
    );
}
