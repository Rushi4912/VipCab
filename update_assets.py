with open("app/page.tsx", "r") as f:
    text = f.read()

start = text.find("{/* ========== ULTRA-PREMIUM HERO ========== */}")
if start == -1:
    start = text.find("{/* ========== HERO ========== */}")

end = text.find("{/* ========== POPULAR ROUTES ========== */}")

if start != -1 and end != -1:
    new_hero = """{/* ========== HERO ========== */}
      <section className="relative dark-gradient min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Car Image (Full Bleed) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cars/innovacrysta.jpg"
            alt="VIP Premium Fleet Presentation"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column — Content (7 cols) */}
            <div className="w-full lg:col-span-7 flex flex-col gap-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-alt/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-accent border border-white/10 w-max">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Trusted by {siteConfig.happyCustomers} customers
              </div>
              
              <h1 className="font-heading text-4xl font-bold text-white leading-tight md:text-5xl lg:text-6xl drop-shadow-md">
                Premium <span className="text-gold-gradient">Cab Service</span> for Pune &amp; Mumbai
              </h1>
              
              <p className="max-w-xl text-base text-white/80 leading-relaxed md:text-lg font-light drop-shadow">
                Book reliable cabs for intercity travel and airport transfers. Professional drivers, clean cars, transparent fares. Experience luxury on every journey.
              </p>

              {/* Micro Stats */}
              <div className="mt-4 flex gap-8">
                <div>
                  <div className="text-white text-2xl font-semibold">24/7</div>
                  <div className="text-accent text-[10px] tracking-widest uppercase mt-1 font-bold">Availability</div>
                </div>
                <div>
                  <div className="text-white text-2xl font-semibold">100%</div>
                  <div className="text-accent text-[10px] tracking-widest uppercase mt-1 font-bold">Sanitized Fleet</div>
                </div>
              </div>
            </div>

            {/* Right Column — Booking Form (5 cols) */}
            <div className="w-full lg:col-span-5 animate-slide-up">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative border border-white/20">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent-light rounded-t-2xl"></div>
                <h2 className="text-primary font-heading text-2xl font-bold mb-2">Book Your Ride</h2>
                <p className="text-text-light text-sm mb-6">Instant route fare calculation via WhatsApp.</p>
                
                <InquiryForm />
              </div>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {popularRoutes.slice(0, 5).map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                className="rounded-full bg-white/5 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white/80 hover:text-accent border border-white/10 hover:border-accent/40 hover:bg-white/10 shadow-sm transition-all"
              >
                {route.from} → {route.to}
              </Link>
            ))}
          </div>

        </div>
      </section>

      """
    new_text = text[:start] + new_hero + text[end:]
    with open("app/page.tsx", "w") as f:
        f.write(new_text)

print("Done Page")

with open("app/globals.css", "r") as f:
    text = f.read()

start = text.find("/* ---- New Ultra-Premium Hero Animations ---- */")
if start != -1:
    new_text = text[:start]
    with open("app/globals.css", "w") as f:
        f.write(new_text)
print("Done CSS")

