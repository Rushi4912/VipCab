import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';

interface CTABannerProps {
    title?: string;
    subtitle?: string;
    whatsappMessage?: string;
}

export default function CTABanner({
    title = 'Ready to Book Your Ride?',
    subtitle = 'Get instant fare quotes and book your cab in seconds. Available 24/7.',
    whatsappMessage,
}: CTABannerProps) {
    return (
        <section className="dark-gradient py-16 px-4">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                    {title}
                </h2>
                <p className="mt-4 text-base text-white/70">{subtitle}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={getCallLink()}
                        className="flex items-center gap-2 rounded-full bg-[#ff3366] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#e62e5c] transition-colors shadow-lg shadow-[#ff3366]/20"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call {siteConfig.phoneDisplay}
                    </a>
                    <a
                        href={getWhatsAppLink(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-sm font-bold text-white hover:bg-green-500 transition-colors shadow-lg"
                    >
                        💬 Get Fare on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
