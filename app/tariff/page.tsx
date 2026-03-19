import type { Metadata } from 'next';
import { fleet, fareNotes } from '@/data/fleet';
import Breadcrumb from '@/components/Breadcrumb';
import PricingCard from '@/components/PricingCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Tariff — Cab Fare Rates',
    description:
        'View transparent cab fare rates. Per-km pricing for all car types — Dzire ₹12/km, Etios ₹13/km, Ertiga ₹15/km, Innova ₹18/km, Crysta ₹20/km.',
};

export default function TariffPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'Tariff' }]} />
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    Cab Fare &amp; Tariff
                </h1>
                <p className="mt-3 text-base text-text-light max-w-2xl">
                    Transparent per-kilometer pricing. No hidden charges. Pick your car and know the fare upfront.
                </p>

                {/* Pricing Cards */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                    {fleet.map((car) => (
                        <PricingCard key={car.id} car={car} />
                    ))}
                </div>

                {/* Fare Table */}
                <div className="mt-12 overflow-x-auto">
                    <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="text-left px-4 py-3 font-semibold">Car Type</th>
                                <th className="text-center px-4 py-3 font-semibold">Category</th>
                                <th className="text-center px-4 py-3 font-semibold">Seats</th>
                                <th className="text-center px-4 py-3 font-semibold">Bags</th>
                                <th className="text-right px-4 py-3 font-semibold">Rate (₹/km)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fleet.map((car, i) => (
                                <tr key={car.id} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-alt'}>
                                    <td className="px-4 py-3 font-medium text-primary">{car.name}</td>
                                    <td className="px-4 py-3 text-center text-text-light uppercase text-xs">{car.category}</td>
                                    <td className="px-4 py-3 text-center text-text-light">{car.seats}</td>
                                    <td className="px-4 py-3 text-center text-text-light">{car.bags}</td>
                                    <td className="px-4 py-3 text-right font-bold text-accent">₹{car.rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Extra Charges */}
                <div className="mt-8 rounded-xl bg-surface-alt border border-border p-6">
                    <h2 className="font-heading text-lg font-semibold text-primary mb-3">Additional Charges</h2>
                    <ul className="space-y-2 text-sm text-text-light">
                        {fareNotes.map((note) => (
                            <li key={note} className="flex items-center gap-2">
                                <span className="text-accent">•</span> {note}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <CTABanner />
        </>
    );
}
