import Image from 'next/image';
import type { CarType } from '@/data/fleet';

export default function PricingCard({ car }: { car: CarType }) {
    return (
        <div className="group rounded-xl border border-border bg-white p-6 text-center shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
            <div className="relative h-28 w-full mb-4 rounded-lg overflow-hidden bg-surface-alt mx-auto">
                <Image
                    src={car.image}
                    alt={`${car.name} pricing`}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                />
            </div>
            <h3 className="font-heading text-base font-semibold text-primary">{car.name}</h3>
            <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-accent">₹{car.rate}</span>
                <span className="text-sm text-text-light">/km</span>
            </div>
            <div className="mt-3 space-y-1.5 text-sm text-text-light">
                <p>{car.seats} Passengers</p>
                <p>{car.bags} Bags</p>
                <p>AC • {car.category.toUpperCase()}</p>
            </div>
            <a
                href="/contact"
                className="mt-4 block rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
                Book {car.name}
            </a>
        </div>
    );
}
