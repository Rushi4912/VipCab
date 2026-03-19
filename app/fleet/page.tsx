import type { Metadata } from 'next';
import { fleet, fareNotes } from '@/data/fleet';
import Breadcrumb from '@/components/Breadcrumb';
import FleetCard from '@/components/FleetCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Our Fleet — Cars Available for Booking',
    description:
        'Explore our fleet of clean, well-maintained cabs. Swift Dzire, Toyota Etios, Ertiga, Innova, Innova Crysta, and more. Book your preferred car.',
};

export default function FleetPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
                <Breadcrumb items={[{ label: 'Fleet' }]} />
                <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                    Our Fleet
                </h1>
                <p className="mt-3 text-base text-text-light max-w-2xl">
                    Choose from a wide range of cars for your trip. All vehicles are clean, well-maintained,
                    and air-conditioned for a comfortable journey.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {fleet.map((car) => (
                        <FleetCard key={car.id} car={car} />
                    ))}
                </div>

                {/* Fare Notes */}
                <div className="mt-10 rounded-xl bg-surface-alt border border-border p-6">
                    <h2 className="font-heading text-lg font-semibold text-primary mb-3">
                        Important Fare Information
                    </h2>
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
