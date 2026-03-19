with open("components/InquiryForm.tsx", "r") as f:
    text = f.read()

new_form = """'use client';

import { useState } from 'react';
import { siteConfig, getWhatsAppLink } from '@/data/site';
import { fleet } from '@/data/fleet';

export default function InquiryForm({ variant = 'vertical' }: { variant?: 'vertical' | 'horizontal' }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        car: '',
    });

    const isHorizontal = variant === 'horizontal';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `New Cab Inquiry:\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nCar: ${form.car || 'Any'}`;
        window.open(getWhatsAppLink(msg), '_blank');
    };

    const inputClass = isHorizontal 
        ? "w-full rounded border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs text-gray-800 placeholder:text-gray-400 focus:border-cyan-600 focus:bg-white focus:ring-1 focus:ring-cyan-600 outline-none transition-all shadow-inner"
        : "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors";

    return (
        <form onSubmit={handleSubmit} className={isHorizontal ? "flex flex-col lg:flex-row gap-3 w-full" : "space-y-4"}>
            <div className={isHorizontal ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 xl:gap-3 flex-grow" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                />
                <input
                    type="text"
                    placeholder="Pickup City"
                    required
                    value={form.pickup}
                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                    className={inputClass}
                />
                <input
                    type="text"
                    placeholder="Drop City"
                    required
                    value={form.drop}
                    onChange={(e) => setForm({ ...form, drop: e.target.value })}
                    className={inputClass}
                />
                <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputClass}
                />
                <select
                    value={form.car}
                    onChange={(e) => setForm({ ...form, car: e.target.value })}
                    className={inputClass}
                >
                    <option value="">Select Car (Optional)</option>
                    {fleet.map((car) => (
                        <option key={car.id} value={car.name}>
                            {car.name} — ₹{car.rate}/km
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className={isHorizontal 
                    ? "w-full lg:w-auto shrink-0 rounded bg-cyan-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-600/30 mt-2 lg:mt-0" 
                    : "w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-primary hover:bg-accent-light transition-colors shadow-md"}
            >
                {isHorizontal ? "Explore Cabs" : "Get Fare on WhatsApp →"}
            </button>
            
            {!isHorizontal && (
                <p className="text-center text-xs text-text-muted mt-2">
                    Or call directly: <a href={`tel:${siteConfig.phone}`} className="text-accent font-semibold">{siteConfig.phoneDisplay}</a>
                </p>
            )}
        </form>
    );
}
"""

with open("components/InquiryForm.tsx", "w") as f:
    f.write(new_form)
