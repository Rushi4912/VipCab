import type { Metadata } from 'next';
import { getCarBySlug, fareNotes } from '@/data/fleet';
import { getCallLink, getWhatsAppLink } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';
import CTABanner from '@/components/CTABanner';

const car = getCarBySlug('dzire-cab-service')!;

export const metadata: Metadata = {
    title: 'Swift Dzire Cab Service — Book Affordable Sedan',
    description:
        'Book Swift Dzire cab for affordable intercity travel. 4 seater, fuel efficient, AC. Starting ₹12/km. Pune to Mumbai and all routes.',
};

export default function DzirePage() {
    return (
        <>
            <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'Fleet', href: '/fleet' }, { label: 'Swift Dzire' }]} />
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">Dzire Cab Service</h1>
                <p className="mt-4 text-base text-text-light leading-relaxed max-w-3xl">
                    {car.description} Starting at just ₹{car.rate}/km, the Dzire is the most affordable option for intercity travel.
                </p>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {car.features.map((f) => (
                        <div key={f} className="text-center rounded-xl border border-border bg-white p-4">
                            <div className="text-sm font-semibold text-primary">{f}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 rounded-xl bg-surface-alt border border-border p-6 text-center">
                    <div className="text-sm text-text-muted">Starting at</div>
                    <div className="text-4xl font-bold text-accent mt-1">₹{car.rate}<span className="text-lg font-normal text-text-light">/km</span></div>
                    <ul className="mt-4 space-y-1 text-xs text-text-muted">{fareNotes.map((n) => <li key={n}>{n}</li>)}</ul>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <a href={getCallLink()} className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white hover:bg-accent-dark transition-colors">📞 Book Dzire</a>
                    <a href={getWhatsAppLink('Hi, I want to book a Dzire cab')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-sm font-bold text-white hover:bg-green-500 transition-colors">💬 WhatsApp Inquiry</a>
                </div>
            </div>
            <CTABanner />
        </>
    );
}
