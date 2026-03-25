export const siteConfig = {
  name: 'VIP Cab Service',
  shortName: 'VIPCab',
  tagline: 'Premium Cab Service — Pune, Mumbai & Beyond',
  description:
    'Book premium cab service for Pune to Mumbai, Mumbai to Pune, airport transfers, outstation trips & more. Clean cars, professional drivers, transparent fares.',
  phone: '+918669768272',
  phoneDisplay: '+91 866 976 8272',
  whatsapp: '918669768272',
  whatsappMessage: 'Hi, I want to book a cab. Please share details.',
  email: 'booking@vipcab.in',
  address: 'Pune, Maharashtra, India',
  city: 'Pune',
  state: 'Maharashtra',
  country: 'India',
  postalCode: '411001',
  url: 'https://vipcab.in',
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
