import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8">
            <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
            <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-text-muted">Last updated: March 2026</p>

            <div className="mt-8 prose prose-sm max-w-none text-text-light space-y-6">
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Information We Collect</h2>
                    <p>When you book a cab or contact us, we may collect your name, phone number, email address, pickup and drop locations, and travel dates. This information is used solely for providing our cab services.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">How We Use Your Information</h2>
                    <p>We use your personal information to process bookings, communicate with you about your trips, improve our services, and send important updates. We do not sell your data to third parties.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Data Security</h2>
                    <p>We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Cookies</h2>
                    <p>Our website may use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings.</p>
                </section>
                <section>
                    <h2 className="font-heading text-xl font-semibold text-primary">Contact</h2>
                    <p>If you have questions about this privacy policy, please contact us at {siteConfig.email} or call {siteConfig.phoneDisplay}.</p>
                </section>
            </div>
        </div>
    );
}
