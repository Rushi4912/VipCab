'use client';

import { useState } from 'react';
import { siteConfig, getWhatsAppLink } from '@/data/site';

export default function InquiryForm({ variant = 'vertical' }: { variant?: 'vertical' | 'horizontal' }) {
    const [form, setForm] = useState({
        name: '',
        pickup: '',
        destination: '',
    });

    const isHorizontal = variant === 'horizontal';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `New Cab Booking Request:
Name: ${form.name}
Pickup: ${form.pickup}
Destination: ${form.destination}
Contact: ${siteConfig.phoneDisplay}`;
        window.open(getWhatsAppLink(msg), '_blank');
    };

    const inputClass = isHorizontal
        ? 'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all'
        : 'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors';

    return (
        <form onSubmit={handleSubmit} className={isHorizontal ? 'flex flex-col sm:flex-row gap-3 w-full' : 'space-y-4'}>
            <div className={isHorizontal ? 'grid grid-cols-1 sm:grid-cols-3 gap-3 flex-grow' : 'space-y-4'}>
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                />
                <input
                    type="text"
                    placeholder="Pickup Location"
                    required
                    value={form.pickup}
                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                    className={inputClass}
                />
                <input
                    type="text"
                    placeholder="Destination"
                    required
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    className={inputClass}
                />
            </div>
            <button
                type="submit"
                className={
                    isHorizontal
                        ? 'w-full sm:w-auto shrink-0 rounded-lg bg-cyan-600 px-8 py-3 text-sm font-bold text-white hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-600/20'
                        : 'w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-primary hover:bg-accent-light transition-colors shadow-md'
                }
            >
                {isHorizontal ? 'Explore Cabs' : 'Get Fare on WhatsApp →'}
            </button>

            {!isHorizontal && (
                <p className="text-center text-xs text-text-muted mt-2">
                    Or call directly:{' '}
                    <a href={`tel:${siteConfig.phone}`} className="text-accent font-semibold">
                        {siteConfig.phoneDisplay}
                    </a>
                </p>
            )}
        </form>
    );
}
