import type { Metadata } from 'next';
import { getCarBySlug, fleet, fareNotes } from '@/data/fleet';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';
import CTABanner from '@/components/CTABanner';

const car = getCarBySlug('innova-crysta-cab-service')!;

export const metadata: Metadata = {
    title: 'Innova Crysta Cab Service — Book Premium MUV',
    description:
        'Book Innova Crysta cab service for premium travel. Captain seats, luxury interior, 7 seater. Starting ₹20/km. Available for Pune, Mumbai, and outstation.',
};

export default function InnovaCrystaPage() {
    return (
        <>
            <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'Fleet', href: '/fleet' }, { label: 'Innova Crysta' }]} />

                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    Innova Crysta Cab Service
                </h1>
                <p className="mt-4 text-base text-text-light leading-relaxed max-w-3xl">
                    {car.description} At just ₹{car.rate}/km, the Innova Crysta is the preferred choice
                    for VIP travel, corporate trips, family pilgrimages, and long-distance journeys.
                </p>

                {/* Features */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {car.features.map((f) => (
                        <div key={f} className="text-center rounded-xl border border-border bg-white p-4">
                            <div className="text-sm font-semibold text-primary">{f}</div>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <div className="mt-10 rounded-xl bg-surface-alt border border-border p-6 text-center">
                    <div className="text-sm text-text-muted">Starting at</div>
                    <div className="text-4xl font-bold text-accent mt-1">₹{car.rate}<span className="text-lg font-normal text-text-light">/km</span></div>
                    <ul className="mt-4 space-y-1 text-xs text-text-muted">
                        {fareNotes.map((n) => <li key={n}>{n}</li>)}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <a href={getCallLink()} className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white hover:bg-accent-dark transition-colors">
                        📞 Book Innova Crysta
                    </a>
                    <a href={getWhatsAppLink('Hi, I want to book an Innova Crysta cab')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-sm font-bold text-white hover:bg-green-500 transition-colors">
                        💬 WhatsApp Inquiry
                    </a>
                </div>
            </div>
            <CTABanner />
        </>
    );
}
