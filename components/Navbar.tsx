'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, getCallLink } from '@/data/site';

const navLinks = [
    { href: '/', label: 'Home' },
    {
        label: 'Services',
        children: [
            { href: '/services', label: 'All Services' },
            { href: '/services/one-way-cab', label: 'One Way Cab' },
            { href: '/services/round-trip-cab', label: 'Round Trip Cab' },
            { href: '/services/airport-transfer', label: 'Airport Transfer' },
            { href: '/services/outstation-cab', label: 'Outstation Cab' },
            { href: '/services/corporate-cab', label: 'Corporate Cab' },
            { href: '/services/local-pune-cab', label: 'Local Pune Cab' },
            { href: '/services/local-mumbai-cab', label: 'Local Mumbai Cab' },
            { href: '/services/package-tours', label: 'Package Tours' },
        ],
    },
    { href: '/fleet', label: 'Fleet' },
    { href: '/tariff', label: 'Tariff' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" aria-label="VIP Cab Home">
                    <span className="text-2xl font-bold font-heading">
                        <span className="text-gold-gradient">VIP</span>
                        <span className="text-white">Cab</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div key={link.label} className="relative group">
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-accent transition-colors"
                                    aria-expanded={servicesOpen}
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                >
                                    {link.label}
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 top-full mt-2 w-52 rounded-lg bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block px-4 py-2.5 text-sm text-primary hover:bg-surface-alt hover:text-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-white/90 hover:text-accent transition-colors"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={getCallLink()}
                        className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {siteConfig.phoneDisplay}
                    </a>
                    <Link
                        href="/contact"
                        className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <span className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <nav className="lg:hidden border-t border-white/10 bg-primary-light" aria-label="Mobile navigation">
                    <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
                        {navLinks.map((link) =>
                            link.children ? (
                                <div key={link.label}>
                                    <button
                                        className="w-full flex items-center justify-between py-3 px-2 text-sm font-medium text-white/90 hover:text-accent"
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                    >
                                        {link.label}
                                        <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {servicesOpen && (
                                        <div className="pl-4 space-y-1">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block py-2 px-2 text-sm text-white/70 hover:text-accent"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block py-3 px-2 text-sm font-medium text-white/90 hover:text-accent"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <div className="pt-3 border-t border-white/10">
                            <a
                                href={getCallLink()}
                                className="flex items-center gap-2 py-3 px-2 text-accent font-semibold"
                            >
                                📞 {siteConfig.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}
