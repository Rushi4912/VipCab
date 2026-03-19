import Link from 'next/link';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';

const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/fleet', label: 'Our Fleet' },
    { href: '/tariff', label: 'Tariff' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQs' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms' },
];

const popularRoutes = [
    { href: '/pune-to-mumbai-cab', label: 'Pune to Mumbai' },
    { href: '/mumbai-to-pune-cab', label: 'Mumbai to Pune' },
    { href: '/pune-to-mumbai-airport-cab', label: 'Pune to Mumbai Airport' },
    { href: '/mumbai-airport-to-pune-cab', label: 'Mumbai Airport to Pune' },
    { href: '/navi-mumbai-airport-to-pune-cab', label: 'Navi Mumbai Airport to Pune' },
    { href: '/pune-to-goa-cab', label: 'Pune to Goa' },
    { href: '/pune-to-shirdi-cab', label: 'Pune to Shirdi' },
    { href: '/pune-to-nashik-cab', label: 'Pune to Nashik' },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-heading font-bold">
                            <span className="text-gold-gradient">VIP</span>Cab
                        </Link>
                        <p className="mt-3 text-sm text-white/70 leading-relaxed">
                            {siteConfig.tagline}
                        </p>
                        <p className="mt-4 text-sm text-white/60">
                            {siteConfig.tripsCompleted} trips completed<br />
                            {siteConfig.happyCustomers} happy customers
                        </p>
                        {/* Social */}
                        <div className="mt-4 flex gap-3">
                            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm">f</a>
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm">ig</a>
                            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm">tw</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Routes */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                            Popular Routes
                        </h3>
                        <ul className="space-y-2">
                            {popularRoutes.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={getCallLink()}
                                    className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
                                >
                                    <span>📞</span> {siteConfig.phoneDisplay}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={getWhatsAppLink()}
                                    className="flex items-center gap-2 text-sm text-white/70 hover:text-whatsapp transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>💬</span> WhatsApp Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
                                >
                                    <span>✉️</span> {siteConfig.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/70">
                                <span>📍</span> {siteConfig.address}
                            </li>
                        </ul>
                        <p className="mt-4 text-xs text-white/50">
                            Available {siteConfig.workingHours}
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
