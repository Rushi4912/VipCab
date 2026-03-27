import Link from 'next/link';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';
import { routes } from '@/data/routes';
import MapEmbed from './MapEmbed';

const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/fleet', label: 'Our Fleet' },
    { href: '/tariff', label: 'Tariff' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQs' },
];

export default function Footer() {
    return (
        <footer className="bg-[#2D2D3F] text-white" itemScope itemType="http://schema.org/LocalBusiness">
            <meta itemProp="name" content={siteConfig.name} />
            <meta itemProp="url" content={siteConfig.url} />
            <meta itemProp="email" content={siteConfig.email} />
            <meta itemProp="telephone" content={siteConfig.phone} />
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:px-8">

                {/* TOP ROW: Core Material (Brand, Quick Links, Working Hours, Contact) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
                    {/* Brand */}
                    <div className="flex flex-col">
                        <Link href="/" className="flex items-center gap-2 group no-underline" aria-label="VIP Cab Home">
                            <div className="flex items-center gap-1.5 font-heading">
                                <span className="flex items-center justify-center bg-[#ff4b4b] text-[12px] font-black text-white px-2 py-0.5 rounded-sm transform -rotate-12 -translate-y-1 shadow-md group-hover:rotate-0 transition-transform duration-300">
                                    THE
                                </span>
                                <div className="flex items-baseline">
                                    <span className="text-3xl font-black text-gold-gradient drop-shadow-md">VIP</span>
                                    <span className="text-3xl font-bold text-white ml-1">Cab</span>
                                </div>
                            </div>
                        </Link>
                        <p className="mt-4 text-sm text-white/70 leading-relaxed pr-4">
                            {siteConfig.tagline} We provide highly reliable, affordable, and safe outstation and local cab services across Maharashtra with a premium fleet.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm">f</a>
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm">ig</a>
                            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm">tw</a>
                        </div>
                        <MapEmbed />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors block no-underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                            Operating Info
                        </h3>
                        <div className="space-y-4">
                            <div className="text-sm text-white/70">
                                <span className="block font-semibold text-white/90 mb-1">Working Hours:</span>
                                {siteConfig.workingHours}
                            </div>
                            <div className="text-sm text-white/70" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                <span className="block font-semibold text-white/90 mb-1">Our Location:</span>
                                <span itemProp="streetAddress">{siteConfig.address}</span>
                                <meta itemProp="addressLocality" content={siteConfig.city} />
                                <meta itemProp="addressRegion" content={siteConfig.state} />
                                <meta itemProp="postalCode" content={siteConfig.postalCode} />
                                <meta itemProp="addressCountry" content={siteConfig.country} />
                            </div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                            Contact Support
                        </h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li>
                                <a href={getCallLink()} className="flex items-start gap-3 hover:text-accent transition-colors no-underline">
                                    <span className="mt-0.5 text-base text-[#ff4b4b]">📞</span>
                                    <div className="font-semibold text-white/90" itemProp="telephone">{siteConfig.phoneDisplay}</div>
                                </a>
                            </li>
                            <li>
                                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-accent transition-colors no-underline">
                                    <span className="mt-0.5 text-base text-[#ff4b4b]">💬</span>
                                    <div className="font-semibold text-white/90">WhatsApp Us</div>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 hover:text-accent transition-colors no-underline">
                                    <span className="mt-0.5 text-base text-[#ff4b4b]">✉️</span>
                                    <div itemProp="email">{siteConfig.email}</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM ROW: Enormous list of Routes */}
                <div className="pt-10 border-t border-white/10">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 text-center sm:text-left">
                        Popular Cab Routes
                    </h3>
                    {/* Using columns-2 sm:columns-3 lg:columns-4 to handle large amounts intelligently without horizontal scroll */}
                    <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-6 gap-y-3">
                        {routes.map((route) => (
                            <li key={route.slug} className="mb-3 break-inside-avoid w-full">
                                <Link
                                    href={`/${route.slug}`}
                                    className="flex items-start gap-2.5 text-[13px] text-white/60 hover:text-accent transition-colors group no-underline"
                                >
                                    <span className="text-[#ff4b4b] opacity-80 group-hover:opacity-100 transition-opacity shrink-0 mt-[1px] text-[14px]">
                                        🚗
                                    </span>
                                    <span className="leading-snug truncate block overflow-hidden">
                                        {route.from === 'Pune' ? `Pune to ${route.to} Cab` :
                                            route.from === 'Mumbai' ? `Mumbai to ${route.to} Cab` :
                                                `${route.from} to ${route.to} Cab`}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. <span className="mx-1">|</span> Developed by <a href="https://www.rushikeshpawar.space/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:text-accent-light transition-colors no-underline">Rushikesh</a></p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors no-underline">Privacy Policy</Link>
                        <span className="text-white/30">|</span>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors no-underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
