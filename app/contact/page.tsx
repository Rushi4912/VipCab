import type { Metadata } from 'next';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: `Contact ${siteConfig.name} for cab booking. Call ${siteConfig.phoneDisplay}, WhatsApp, or email. Available 24/7.`,
};

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
            <Breadcrumb items={[{ label: 'Contact Us' }]} />

            <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                Contact Us
            </h1>
            <p className="mt-3 text-base text-text-light">
                Reach out to book a cab or for any inquiries. We respond within minutes.
            </p>

            <div className="mt-10 grid lg:grid-cols-2 gap-10">
                {/* Inquiry Form */}
                <div>
                    <h2 className="font-heading text-xl font-bold text-primary mb-4">
                        Send an Inquiry
                    </h2>
                    <InquiryForm />
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="font-heading text-xl font-bold text-primary">
                        Get in Touch
                    </h2>

                    <a
                        href={getCallLink()}
                        className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md hover:border-accent/30 transition-all"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-call/10 text-call text-xl">📞</div>
                        <div>
                            <div className="text-sm font-semibold text-primary">Call Us</div>
                            <div className="text-sm text-accent font-medium">{siteConfig.phoneDisplay}</div>
                        </div>
                    </a>

                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md hover:border-whatsapp/30 transition-all"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp text-xl">💬</div>
                        <div>
                            <div className="text-sm font-semibold text-primary">WhatsApp</div>
                            <div className="text-sm text-whatsapp font-medium">Chat with us instantly</div>
                        </div>
                    </a>

                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md hover:border-accent/30 transition-all"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent text-xl">✉️</div>
                        <div>
                            <div className="text-sm font-semibold text-primary">Email</div>
                            <div className="text-sm text-accent font-medium">{siteConfig.email}</div>
                        </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt text-xl">📍</div>
                        <div>
                            <div className="text-sm font-semibold text-primary">Address</div>
                            <div className="text-sm text-text-light">{siteConfig.address}</div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-surface-alt border border-border p-5 text-center">
                        <div className="text-2xl mb-2">🕐</div>
                        <div className="text-sm font-semibold text-primary">Working Hours</div>
                        <div className="text-sm text-accent font-medium">{siteConfig.workingHours}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
