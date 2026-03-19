with open("app/page.tsx", "r") as f:
    text = f.read()

start = text.find("{/* ========== HERO")
end_marker = "      {/* ========== POPULAR ROUTES ========== */}"
end = text.find(end_marker)

if start != -1 and end != -1:
    new_hero = """      {/* ========== HERO ========== */}
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

"""

    new_text = text[:start] + new_hero + text[end:]
    with open("app/page.tsx", "w") as f:
        f.write(new_text)
    print("Done - Hero section replaced")
else:
    print(f"Could not find markers. start={start}, end={end}")
