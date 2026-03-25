import React from 'react';

interface SEOContentProps {
    from: string;
    to: string;
    distance: string;
    duration: string;
}

export default function RouteSEOContent({ from, to, distance, duration }: SEOContentProps) {
    return (
        <section className="mb-16 mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-8 leading-tight">
                Complete Travel Guide: {from} to {to} Cab Booking
            </h2>

            <div className="prose prose-sm sm:prose-base text-text-light max-w-none">
                <p className="lead text-lg mb-8 text-primary/80">
                    Traveling from <strong>{from} to {to}</strong>? Whether you're heading out for a crucial business meeting, a relaxing family vacation, an important airport transfer, or a spiritual journey, VIP Cab provides the region's top-rated, most reliable <strong>{from} to {to} cab service</strong>. We guarantee comfort, punctuality, and zero-stress travel for the entire {distance} journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-surface-alt p-6 rounded-2xl border border-border">
                        <h3 className="text-lg font-bold text-primary mb-3 mt-0 flex items-center gap-2">
                            <span>🛣️</span> Route Overview
                        </h3>
                        <ul className="space-y-2 mb-0 pl-1 text-sm list-none">
                            <li className="flex items-center gap-2"><strong className="text-primary">Distance Covered:</strong> {distance}</li>
                            <li className="flex items-center gap-2"><strong className="text-primary">Expected Travel Time:</strong> {duration}</li>
                            <li className="flex items-center gap-2"><strong className="text-primary">Highway Conditions:</strong> Smooth, Express Routes</li>
                            <li className="flex items-center gap-2"><strong className="text-primary">Best Time to Travel:</strong> Early Morning or Late Evening</li>
                        </ul>
                    </div>
                    <div className="bg-surface-alt p-6 rounded-2xl border border-border">
                        <h3 className="text-lg font-bold text-primary mb-3 mt-0 flex items-center gap-2">
                            <span>💎</span> Premium Features
                        </h3>
                        <ul className="space-y-2 mb-0 pl-1 text-sm list-none">
                            <li className="flex items-center gap-2"><span className="text-accent">✓</span> Door-to-Door Pickup/Drop</li>
                            <li className="flex items-center gap-2"><span className="text-accent">✓</span> 100% Sanitized & Clean Cars</li>
                            <li className="flex items-center gap-2"><span className="text-accent">✓</span> Experienced Highway Drivers</li>
                            <li className="flex items-center gap-2"><span className="text-accent">✓</span> Real-Toll & Parking Tracking</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4 border-b border-border pb-3">
                    Why VIP Cab is the Best Choice for Your {from} to {to} Journey
                </h3>
                <p>
                    The corridor connecting {from} and {to} is one of our most highly serviced routes. Thousands of passengers trust VIP Cab daily because we prioritize passenger safety, absolute transparency, and luxury at an affordable price point. Reserving your <strong>{from} to {to} taxi</strong> with VIP Cab means unlocking a suite of unmatched benefits:
                </p>
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">1. Completely Transparent Cab Fares</h4>
                        <p className="m-0">We fiercely oppose hidden charges. The quote we provide for your {from} to {to} cab fare is fully inclusive of driver allowances. There are no sudden dynamic surges or unexplainable night charges. What you see is exactly what you pay.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">2. Exceptionally Maintained Fleet Options</h4>
                        <p className="m-0">Traveling {distance} requires a sturdy, comfortable vehicle. You can select an economical hatchback, a premium sedan (like Swift Dzire, Toyota Etios), or a spacious SUV (Innova Crysta, Maruti Ertiga) for larger groups or extra luggage. Every vehicle is thoroughly washed and AC-checked before dispatched for a {from} pickup.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">3. Verified & Polite Chauffeurs</h4>
                        <p className="m-0">Highway driving demands expertise. Our drivers navigating the {from} to {to} route possess years of experience. They are background-verified, incredibly polite, act as expert local guides, and know exactly where the best, most hygienic food stops are located.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">4. Seamless 24x7 Availability</h4>
                        <p className="m-0">Flight landing at 2 AM? Urgent meeting at 7 AM? VIP Cab operates around the clock. Our robust dispatch system guarantees that whenever you need a reliable <strong>cab from {from} to {to}</strong>, a premium car will be waiting at your doorstep.</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4 border-b border-border pb-3">
                    One-Way vs. Round-Trip: Flexible {from} to {to} Taxi Services
                </h3>
                <p>
                    We have tailored our cab packages to save you maximum money depending on your travel itinerary:
                </p>
                <ul className="space-y-4">
                    <li>
                        <strong>{from} to {to} One-Way Taxi:</strong> If you are simply relocating, heading to the airport, or visiting family with no immediate plans to return, our one-way drop is highly economical. You only pay for the exact distance of {distance} covered from {from} to {to}, completely eliminating the archaic "return fare" model that other vendors exploit.
                    </li>
                    <li>
                        <strong>Round-Trip Returns:</strong> For weekend getaways, business tours, or medical visits, you can retain our cab for the whole day. The driver will escort you from {from} to {to}, drive you to multiple local spots within {to}, and safely return you to your home in {from} at the end of the trip.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4 border-b border-border pb-3">
                    Making the Most of Your Drive from {from} to {to}
                </h3>
                <p>
                    The road connecting {from} to {to} features beautifully maintained expressways and scenic stretches. Assuming normal traffic parameters, you'll complete the {distance} transition in roughly {duration}.
                </p>
                <p>
                    Our drivers are instructed to follow your pace. If you wish to halt at local Dhabas or premium food courts for a quick chai/coffee, take photos at scenic viewpoints, or simply recline your seat and sleep in our perfectly air-conditioned cabin, you are the boss of your journey.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-4 border-b border-border pb-3">
                    How to Easily Book Your {from} to {to} Car Rental
                </h3>
                <p>
                    Renting your high-quality car for the {from} to {to} road trip is a frictionless, 2-minute process with VIP Cab:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-primary font-medium">
                    <li><strong className="text-text-light font-normal text-base">Direct Booking Hotline:</strong> Call our 24/7 dedicated helpline and our executive will instantly lock in the booking at the best {from} to {to} taxi fare.</li>
                    <li><strong className="text-text-light font-normal text-base">Instant WhatsApp Confirmation:</strong> Send a quick "Hi" on our WhatsApp number stating you need a cab from {from} to {to}. Receive an automated instant quote, confirm your car, and get driver details via WhatsApp!</li>
                    <li><strong className="text-text-light font-normal text-base">Transparent Online Experience:</strong> Use our ultra-fast web dashboard to select your date, pick a car from the fleet, and hit Book. Zero advanced payment tricks!</li>
                </ol>

                <div className="mt-12 bg-primary/5 p-6 rounded-2xl border-l-4 border-accent text-sm text-primary/80">
                    <strong>Pro Travel Tip:</strong> For the most luxurious experience and guaranteed car availability specifically on weekends or public holidays, we highly recommend confirming your <strong>{from} to {to} cab booking</strong> at least 12-24 hours in advance.
                </div>
            </div>
        </section>
    );
}
