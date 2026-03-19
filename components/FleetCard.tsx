import Image from 'next/image';
import type { CarType } from '@/data/fleet';

export default function FleetCard({ car }: { car: CarType }) {
    return (
        <div className="group rounded-xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
            {/* Car Image */}
            <div className="relative h-48 bg-white overflow-hidden">
                <Image
                    src={car.image}
                    alt={`${car.name} cab booking`}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {car.popular && (
                    <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider z-10 shadow-sm">
                        Popular
                    </span>
                )}
            </div>
            <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-primary">{car.name}</h3>
                <p className="mt-1.5 text-sm text-text-light line-clamp-2">{car.description}</p>

                {/* Features */}
                <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs text-text-light">
                        {car.seats} Seater
                    </span>
                    <span className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs text-text-light">
                        {car.bags} Bags
                    </span>
                    <span className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs text-text-light">
                        AC
                    </span>
                </div>

                {/* Price + CTA */}
                <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                    <div>
                        <div className="text-xs text-text-muted">Starting at</div>
                        <div className="text-2xl font-bold text-accent">
                            ₹{car.rate}<span className="text-sm font-normal text-text-light">/km</span>
                        </div>
                    </div>
                    <a
                        href="/contact"
                        className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-dark transition-colors"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
}
