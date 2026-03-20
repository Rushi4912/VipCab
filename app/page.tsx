import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, getCallLink, getWhatsAppLink } from '@/data/site';
import { fleet } from '@/data/fleet';
import { services } from '@/data/services';
import { generalFaqs } from '@/data/faqs';
import { testimonials } from '@/data/testimonials';
import { getPopularRoutes } from '@/data/routes';
import SectionHeading from '@/components/SectionHeading';
import RouteCard from '@/components/RouteCard';
import FleetCard from '@/components/FleetCard';
import ServiceCard from '@/components/ServiceCard';

import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import InquiryForm from '@/components/InquiryForm';
import HeroCarCarousel from '@/components/HeroCarCarousel';

export default function Home() {
  const popularRoutes = getPopularRoutes();
  const topServices = services.slice(0, 5);
  const topTestimonials = testimonials.slice(0, 6);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-cyan-50/40" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 10% 100%)' }}></div>
          <div className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-200/40 to-transparent rotate-[12deg]"></div>
          <div className="absolute top-0 right-[18%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-100/30 to-transparent rotate-[12deg]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">

          {/* Main Grid: Text Left + Carousel Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

            {/* Left — Minimal Content */}
            <div className="flex flex-col items-start gap-5 animate-fade-in z-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-100 px-4 py-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                <span className="text-cyan-700 text-[11px] font-bold tracking-widest uppercase">
                  No.1 Pune To Mumbai Cab
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] font-bold">
                Premium <span className="text-cyan-600">Cab Service</span>
              </h1>

              <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                Book reliable cabs for intercity travel, airport transfers, and outstation trips.
              </p>

              <a
                href={getCallLink()}
                className="rounded-lg bg-[#ff3366] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ff3366]/25 hover:bg-[#e62e5c] transition-all hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>

            {/* Right — Car Carousel */}
            <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] animate-slide-up">
              <HeroCarCarousel />
            </div>
          </div>

          {/* Booking Form Strip — Right below hero content, not pushed far away */}
          <div className="mt-8 md:mt-10 w-full bg-white rounded-xl shadow-[0_8px_40px_rgba(8,145,178,0.12)] p-4 md:p-5 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="hidden sm:flex flex-col pr-4 border-r border-gray-100 min-w-max">
                <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">Quick</span>
                <span className="text-base font-bold text-gray-800">Booking</span>
              </div>
              <div className="w-full flex-grow">
                <InquiryForm variant="horizontal" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== POPULAR ROUTES ========== */}
      <section className="py-16 px-4 bg-surface-alt" id="popular-routes">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Popular Routes"
            subtitle="Most booked cab routes by our customers. Reliable service, every day."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pune-to-mumbai-cab"
              className="inline-flex items-center gap-1 rounded-full border border-accent text-accent px-6 py-2.5 text-sm font-semibold hover:bg-accent-dark hover:text-white transition-colors"
            >
              View All Routes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-16 px-4" id="services">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive cab services for every travel need — business, family, or solo."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {topServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FLEET ========== */}
      <section className="py-16 px-4 bg-surface-alt" id="fleet">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Fleet"
            subtitle="Choose from a range of clean, well-maintained cars for your journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {fleet.map((car) => (
              <FleetCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#f0f9ff] to-white" id="why-us">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose VIP Cab?"
            subtitle="We deliver premium cab experiences at honest prices."
          />
          <WhyChooseUs />
        </div>
      </section>


      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 px-4 bg-surface-alt" id="testimonials">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from real travellers who trust VIP Cab."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/testimonials" className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-16 px-4" id="faq">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Got questions? We have answers."
          />
          <FAQAccordion faqs={generalFaqs.slice(0, 6)} showSchema />
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <CTABanner />
    </>
  );
}
