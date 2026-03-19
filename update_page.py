with open("app/page.tsx", "r") as f:
    text = f.read()

import_statement = "import HeroCarCarousel from '@/components/HeroCarCarousel';\n"
if "HeroCarCarousel" not in text:
    last_import = text.rfind("import ")
    end_of_last_import = text.find("\n", last_import) + 1
    text = text[:end_of_last_import] + import_statement + text[end_of_last_import:]


start = text.find("{/* ========== HERO ========== */}")
end = text.find("      <section className=\"py-16 px-4 bg-surface-alt\" id=\"popular-routes\">")

if start != -1 and end != -1:
    new_hero = """      {/* ========== HERO (LIGHT & PROFESSIONAL) ========== */}
      <section className="relative bg-[#f8fafc] pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-visible z-10 w-full">
        {/* Background Decorative Elements (Cyan/Blue Geometry) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 md:w-1/2 h-full bg-cyan-50/60" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
          {/* Soft gradient slashes */}
          <div className="absolute top-0 right-[25%] md:right-[35%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-cyan-200 to-transparent transform rotate-[15deg] -translate-y-1/4"></div>
          <div className="absolute top-0 right-[15%] md:right-[15%] w-[2px] h-[150%] bg-gradient-to-b from-transparent via-cyan-100 to-transparent transform rotate-[15deg] -translate-y-1/4"></div>
          
          {/* Abstract dots pattern (SVG) */}
          <div className="absolute left-4 bottom-16 md:left-12 md:bottom-24 lg:left-24 lg:bottom-40 opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="2" fill="#0891b2" />
              <circle cx="25" cy="5" r="2" fill="#0891b2" />
              <circle cx="45" cy="5" r="2" fill="#0891b2" />
              <circle cx="5" cy="25" r="2" fill="#0891b2" />
              <circle cx="25" cy="25" r="2" fill="#0891b2" />
              <circle cx="45" cy="25" r="2" fill="#0891b2" />
              <circle cx="5" cy="45" r="2" fill="#0891b2" />
              <circle cx="25" cy="45" r="2" fill="#0891b2" />
              <circle cx="45" cy="45" r="2" fill="#0891b2" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column — Minimal Content (5 cols) */}
            <div className="w-full lg:col-span-5 flex flex-col items-start gap-4 md:gap-6 animate-fade-in z-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 border border-cyan-100 w-max shadow-sm">
                 <span className="text-cyan-700 text-xs font-bold tracking-widest uppercase">
                   No.1 Pune To Mumbai Cab | Bus
                 </span>
              </div>
              
              {/* Exact SEO H1 */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] font-bold">
                Premium <span className="text-cyan-600">Cab Service</span>
              </h1>
              
              <Link
                href="/pricing"
                className="mt-2 md:mt-4 rounded bg-[#ff3366] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ff3366]/30 hover:bg-[#e62e5c] transition-all hover:-translate-y-1"
              >
                Book Now
              </Link>
            </div>

            {/* Right Column — Car Carousel (7 cols) */}
            <div className="w-full lg:col-span-7 relative h-[300px] sm:h-[400px] lg:h-[450px]">
               <HeroCarCarousel />
            </div>

          </div>
        </div>

        {/* The Overlapping Horizontal Booking Form */}
        <div className="absolute left-0 right-0 -bottom-[120px] lg:-bottom-12 z-20 px-4 w-full flex justify-center">
          <div className="w-full max-w-6xl bg-white rounded-xl shadow-[0_15px_60px_rgba(8,145,178,0.15)] p-4 md:p-5 border border-gray-100 flex flex-col md:flex-row items-center gap-4">
            <div className="hidden lg:flex flex-col pr-4 border-r border-gray-100 min-w-max">
               <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest leading-none">Quick</span>
               <span className="text-lg font-bold text-gray-800 leading-none mt-1">Booking</span>
            </div>
            <div className="w-full flex-grow">
               <InquiryForm variant="horizontal" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== POPULAR ROUTES ========== */}
      <section className="pt-40 lg:pt-28 pb-16 px-4 bg-white" id="popular-routes">
"""
    new_text = text[:start] + new_hero + text[end + len("      <section className=\"py-16 px-4 bg-surface-alt\" id=\"popular-routes\">\n"):]
    with open("app/page.tsx", "w") as f:
        f.write(new_text)

print("Done Page")

