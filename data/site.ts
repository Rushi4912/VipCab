export const siteConfig = {
  name: 'VIP Cab Service',
  shortName: 'VIPCab',
  tagline: 'Premium Cab Service — Pune, Mumbai & Beyond',
  description:
    'Book premium cab service for Pune to Mumbai, Mumbai to Pune, airport transfers, outstation trips & more. Clean cars, professional drivers, transparent fares.',
  phone: '+919503620603',
  phoneDisplay: '+91 950 362 0603',
  whatsapp: '919503620603',
  whatsappMessage: 'Hi, I want to book a cab. Please share details.',
  email: 'thevipcab01@gmail.com',
  address: 'Shop No 2, 7th Floor, Bhama Centre, near Bhujbal Chowk, Wakad, Pune, Maharashtra 411057',
  city: 'Pune',
  state: 'Maharashtra',
  country: 'India',
  postalCode: '411057',
  url: 'https://vipcab.com',
  social: {
    facebook: 'https://facebook.com/vipcab',
    instagram: 'https://instagram.com/vipcab',
    twitter: 'https://twitter.com/vipcab',
  },
  workingHours: '24/7 Available',
  foundedYear: 2015,
  tripsCompleted: '50,000+',
  happyCustomers: '25,000+',
  carsAvailable: '100+',
  citiesCovered: '50+',
} as const;

export type SiteConfig = typeof siteConfig;

export function getWhatsAppLink(message?: string) {
  const msg = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}

export function getCallLink() {
  return `tel:${siteConfig.phone}`;
}
