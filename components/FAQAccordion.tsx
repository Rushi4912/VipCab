import type { FAQ } from '@/data/faqs';

interface FAQAccordionProps {
    faqs: FAQ[];
    showSchema?: boolean;
}

export default function FAQAccordion({ faqs, showSchema = false }: FAQAccordionProps) {
    const faqSchema = showSchema
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }
        : null;

    return (
        <>
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group rounded-xl border border-border bg-white shadow-sm overflow-hidden"
                    >
                        <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-primary cursor-pointer hover:bg-surface-alt transition-colors">
                            <span>{faq.question}</span>
                            <svg
                                className="faq-chevron w-4 h-4 text-text-muted shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="px-5 pb-4 text-sm text-text-light leading-relaxed">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </>
    );
}
