import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: `Terms and conditions for using ${siteConfig.name} cab services. Read before booking.`,
};

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8">
            <Breadcrumb items={[{ label: 'Terms and Conditions' }]} />
            <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">Terms &amp; Conditions</h1>
            <p className="mt-2 text-sm text-text-muted">Last updated: March 2026</p>

            <div className="mt-8 prose prose-sm max-w-none text-text-light space-y-6">
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Booking &amp; Cancellation</h2>
                    <p>Bookings can be made via phone, WhatsApp, or the inquiry form. Cancellations made more than 4 hours before pickup time are free of charge. Late cancellations may attract a nominal fee.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Fare &amp; Charges</h2>
                    <p>Fares are charged on a per-km basis as per the tariff. Toll charges, parking fees, driver food allowance, and night charges (10 PM – 6 AM) are additional and payable directly.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Passenger Responsibilities</h2>
                    <p>Passengers must provide accurate pickup/drop details and travel timing. Passengers should not ask drivers to exceed speed limits or violate traffic rules. Consumption of alcohol or tobacco inside the vehicle is prohibited.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Luggage</h2>
                    <p>Reasonable luggage is allowed based on car capacity. Excess luggage may require a larger vehicle at applicable rates.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Liability</h2>
                    <p>{siteConfig.name} shall not be liable for any delays due to traffic, road conditions, weather, or other circumstances beyond our control. We will always endeavor to provide the best possible service.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Contact</h2>
                    <p>For any queries regarding these terms, reach us at {siteConfig.email} or {siteConfig.phoneDisplay}.</p>
                </section>
            </div>
        </div>
    );
}
