import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollProgress from '@/components/ScrollProgress';
import CarSceneClient from '@/components/CarSceneClient';

// ── SVG Icons ──────────────────────────────────────────────────────────────
function PaintIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3a2.5 2.5 0 1 1 3.5 3.5L7 17l-4 1 1-4L14 3z"/>
      <path d="M13 5l3 3"/>
    </svg>
  );
}
function EngineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="14" height="9" rx="1.5"/>
      <path d="M6 6V4M10 6V4M13 6V4M2 10H1M17 10h-1M6 15v2M13 15v2M17 8h2v4h-2"/>
    </svg>
  );
}
function SeatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3h6a2 2 0 0 1 2 2v6H3V3z"/>
      <path d="M3 11v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1"/>
      <path d="M15 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8"/>
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.7 5.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1A5 5 0 0 1 12.2 11l-5.9 5.9a1.77 1.77 0 0 1-2.5-2.5L9.7 8.6A5 5 0 0 1 15.8 2l-3.1 3.1z"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3 3 7-7" stroke="#e8650a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <PaintIcon />,
    title: 'Custom Paint & Bodywork',
    desc: 'Controlled-booth respray, PPF, ceramic coat and multi-stage paint correction for concours finishes.',
    bullets: ['Custom colour mixing', 'Xpel / 3M PPF', 'Gyeon / IGL ceramic'],
  },
  {
    icon: <EngineIcon />,
    title: 'Performance Upgrades',
    desc: 'Exhaust systems, big brake kits, coilover setup, aero body kits — sourced and fitted in-house.',
    bullets: ['Brembo / AP Racing brakes', 'KW / Bilstein suspension', 'Akrapovic / Milltek exhaust'],
  },
  {
    icon: <SeatIcon />,
    title: 'Interior & Tech',
    desc: 'Full leather and Alcantara re-trims, custom headliners, infotainment and roll cage fabrication.',
    bullets: ['Nappa / Alcantara upholstery', 'Custom ambient lighting', 'Infotainment integration'],
  },
  {
    icon: <WrenchIcon />,
    title: 'Restomod Projects',
    desc: 'Classic bodies rebuilt with modern powertrains — concept to road-registered, fully documented builds.',
    bullets: ['Coyote / LS / S-series engines', 'Full re-wire & CAN bus', 'RTA certification assist'],
  },
];

const builds = [
  {
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=90',
    car: '2021 Nissan GT-R R35',
    type: 'Full Respray',
    desc: 'Matte Midnight Pearl — 3-stage correction, custom pearl coat, ceramic clear seal.',
    duration: '14 days',
  },
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=90',
    car: '2020 Lamborghini Huracan',
    type: 'Satin Wrap',
    desc: '3M 1080 S10 Satin White full body, edge-sealed and PPF front-end.',
    duration: '8 days',
  },
  {
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=90',
    car: '1969 Ford Mustang',
    type: 'Full Restomod',
    desc: 'Coyote 5.0 swap, custom Nappa interior, modern geo — 18 months from bare shell.',
    duration: '18 months',
  },
];

const stats = [
  { value: '850+', label: 'Builds Completed' },
  { value: '12',   label: 'Years in Business' },
  { value: '98%',  label: 'Client Retention' },
  { value: '4',    label: 'Workshop Bays' },
];

const reviews = [
  {
    author: 'Marcus T.',
    location: 'Dubai, UAE',
    rating: 5,
    job: 'Full Matte Respray — GT-R R35',
    review: 'The finish rivals factory supercars from Maranello. Every panel measured to within a fraction. Zero dust inclusions, zero orange peel. Not cheap — but worth every dirham.',
  },
  {
    author: 'Lena S.',
    location: 'Abu Dhabi, UAE',
    rating: 5,
    job: 'Full Body PPF + Ceramic',
    review: "I've had PPF done in three countries. Apex is the only workshop that pressure-checked every edge and applied ceramic in a controlled booth. The 911 looks better than new.",
  },
  {
    author: 'Yousef A.',
    location: 'Sharjah, UAE',
    rating: 5,
    job: 'Restomod — Classic Mustang',
    review: "Two years from concept to keys. They sourced parts I couldn't find anywhere in the GCC and built a car that drives like nothing else here. Truly exceptional work.",
  },
  {
    author: 'Reem K.',
    location: 'Dubai, UAE',
    rating: 5,
    job: 'Interior Retrim — Porsche Taycan',
    review: 'The Alcantara headliner and Nappa re-trim completely transformed the cabin. Precision stitching, perfect colour match, and delivered two days early. Outstanding.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="13" height="13" viewBox="0 0 13 13" fill={s <= count ? '#e8650a' : '#e2ddd6'} aria-hidden="true">
          <path d="M6.5 1l1.5 3.1L11.5 4.6l-2.5 2.4.6 3.4L6.5 8.8 3.4 10.4l.6-3.4L1.5 4.6l3.5-.5L6.5 1z"/>
        </svg>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      {/* ═══════════════════════════════════════════ HERO ══ */}
      <section className="relative min-h-screen bg-l-cream overflow-hidden flex flex-col lg:flex-row items-center">

        {/* Left — text content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-28 pb-16 lg:py-0 max-w-2xl">
          <span className="chip mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-l-amber inline-block" />
            Dubai&apos;s Premier Custom Garage
          </span>

          <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-l-carbon leading-[0.88] tracking-wide mb-6">
            WHERE<br />
            <span className="grad-text">BUILDS</span><br />
            BECOME<br />
            LEGENDS.
          </h1>

          <p className="font-body text-base text-l-mid leading-relaxed mb-10 max-w-md">
            Elite custom paint, precision body modification and complete restomod
            engineering for clients who demand perfection on every panel.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn-outline">
              View Our Builds
              <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn-primary">
              Book Consultation
              <ArrowIcon />
            </Link>
          </div>

          {/* Mini stats */}
          <div className="flex gap-7 mt-12 pt-8 border-t border-l-border">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-l-carbon leading-none">{s.value}</p>
                <p className="font-body text-[10px] text-l-muted uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — 3D car scene */}
        <div className="flex-1 relative w-full lg:h-screen min-h-[420px] lg:min-h-0">
          {/* Soft radial background */}
          <div className="absolute inset-0 bg-gradient-to-br from-l-warm via-l-cream to-l-snow" />
          {/* Decorative ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-l-border/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-l-border/40" />

          <CarSceneClient />

          {/* Scroll hint overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none">
            <div className="w-6 h-10 border-2 border-l-border2 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-l-amber rounded-full animate-bounce" />
            </div>
            <span className="font-body text-[9px] tracking-[0.25em] uppercase text-l-muted">Scroll to rotate</span>
          </div>
        </div>

        {/* Decorative diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-l-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      </section>

      {/* ════════════════════════════════════ CAR SHOWCASE ══ */}
      <section className="bg-l-white py-20 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <span className="section-label">Our Fleet Specialisation</span>
                <h2 className="font-display text-5xl lg:text-6xl text-l-carbon leading-none mt-2">
                  VEHICLES WE BUILD ON
                </h2>
                <div className="amber-bar w-14 mt-3" />
              </div>
              <Link href="/services" className="btn-outline self-start sm:self-auto whitespace-nowrap">
                All Services <ArrowIcon />
              </Link>
            </div>
          </ScrollReveal>

          {/* Car image strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                name: 'Toyota Fortuner',
                tag: 'Premium SUV',
                img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&q=85',
                spec: 'Wrap, PPF & Lift Kits',
              },
              {
                name: 'Toyota Innova',
                tag: 'Family MPV',
                img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=85',
                spec: 'Interior Retrim & Tech',
              },
              {
                name: 'Mahindra Thar',
                tag: 'Off-Road Icon',
                img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
                spec: 'Full Build & Lift',
              },
            ].map((car) => (
              <ScrollReveal key={car.name}>
                <div className="card overflow-hidden group">
                  <div className="relative h-52 overflow-hidden rounded-t-lg2">
                    <Image
                      src={car.img}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 chip chip-dark text-[9px]">{car.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-l-carbon mb-1">{car.name}</h3>
                    <p className="font-body text-xs text-l-muted">{car.spec}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ SERVICES ══ */}
      <section className="bg-l-cream py-24 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">What We Do</span>
              <h2 className="font-display text-5xl lg:text-6xl text-l-carbon leading-none mt-2 mb-3">
                CORE SERVICES
              </h2>
              <div className="amber-bar w-12 mx-auto" />
              <p className="font-body text-l-mid text-sm mt-4 max-w-md mx-auto">
                Technical precision across every discipline of automotive customisation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 80}>
                <Link href="/services" className="card block p-6 group h-full">
                  <div className="w-11 h-11 rounded-xl bg-l-amber/10 flex items-center justify-center text-l-amber mb-5 group-hover:bg-l-amber group-hover:text-white transition-colors duration-200">
                    {svc.icon}
                  </div>
                  <h3 className="font-display text-[22px] text-l-carbon leading-tight mb-2 group-hover:text-l-amber transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="font-body text-xs text-l-muted leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckIcon />
                        <span className="font-body text-xs text-l-mid">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 mt-5 text-l-amber font-body text-[11px] font-semibold tracking-wide uppercase">
                    Learn More <ArrowIcon />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ FEATURED BUILDS ══ */}
      <section className="bg-l-dark py-24 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <span className="section-label" style={{ color: '#f97316' }}>Recent Work</span>
                <h2 className="font-display text-5xl lg:text-6xl text-white leading-none mt-2">
                  FEATURED BUILDS
                </h2>
                <div className="amber-bar w-14 mt-3" />
              </div>
              <Link href="/projects" className="btn-outline btn-outline-dark self-start sm:self-auto whitespace-nowrap">
                Full Gallery <ArrowIcon />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {builds.map((build, i) => (
              <ScrollReveal key={build.car} delay={i * 100}>
                <article className="card-dark overflow-hidden group">
                  <div className="relative h-64 overflow-hidden rounded-t-lg2">
                    <Image
                      src={build.image}
                      alt={build.car}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-l-dark/90 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 chip chip-dark">{build.type}</span>
                    <span className="absolute top-4 right-4 font-body text-[9px] text-white/60 tracking-widest uppercase">{build.duration}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-white leading-tight mb-1 group-hover:text-l-amber2 transition-colors duration-200">
                      {build.car}
                    </h3>
                    <div className="h-px bg-l-dborder my-3" />
                    <p className="font-body text-sm text-white/50 leading-relaxed">{build.desc}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ WHY APEX ══ */}
      <section className="bg-l-white py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left image */}
            <ScrollReveal>
              <div className="relative rounded-xl2 overflow-hidden h-[440px] shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=900&q=85"
                  alt="Apex Custom Garage paint booth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card max-w-[200px]">
                  <p className="font-display text-3xl text-l-carbon">12+</p>
                  <p className="font-body text-xs text-l-muted mt-0.5">Years of precision automotive builds in Dubai</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right content */}
            <ScrollReveal delay={120}>
              <span className="section-label">Why Choose Apex</span>
              <h2 className="font-display text-5xl text-l-carbon leading-none mt-2 mb-4">
                BUILT ON<br />PRECISION.
              </h2>
              <div className="amber-bar w-10 mb-6" />
              <p className="font-body text-sm text-l-mid leading-relaxed mb-8 max-w-md">
                Every vehicle that enters our workshop is treated as a portfolio piece. We don&apos;t cut corners, we don&apos;t rush, and we never use grey-market materials.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Certified Spray Booth', desc: 'HEPA-filtered, pressurised paint booth — zero contamination, zero compromise.' },
                  { title: 'Material Provenance', desc: 'Sikkens, PPG, Gyeon, IGL, 3M, Xpel — every material is authenticated and traceable.' },
                  { title: 'Documented Delivery', desc: 'Full photographic build record, spec sheet and 2-year warranty on all paint work.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-l-amber flex-shrink-0 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-sm text-l-carbon mb-0.5">{item.title}</h4>
                      <p className="font-body text-xs text-l-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ TESTIMONIALS ══ */}
      <section className="bg-l-cream py-24 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Client Feedback</span>
              <h2 className="font-display text-5xl lg:text-6xl text-l-carbon leading-none mt-2 mb-3">
                WHAT THEY SAY
              </h2>
              <div className="amber-bar w-12 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.author} delay={i * 70}>
                <div className="card p-6 flex flex-col h-full">
                  <Stars count={r.rating} />
                  <span className="section-label text-[9px] mt-3 mb-2 block">{r.job}</span>
                  <p className="font-body text-sm text-l-mid leading-relaxed flex-1 mb-4">
                    &ldquo;{r.review}&rdquo;
                  </p>
                  <div className="border-t border-l-border pt-3 flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-8 h-8 rounded-full bg-l-amber/15 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-sm text-l-amber leading-none">{r.author[0]}</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-xs text-l-carbon">{r.author}</p>
                      <p className="font-body text-[10px] text-l-muted">{r.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ CTA BAND ══ */}
      <section className="relative py-28 px-6 sm:px-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1920&q=85"
          alt="Apex Custom Garage at night"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-l-carbon/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="chip chip-dark mb-6">Ready to Begin</span>
            <h2 className="font-display text-6xl lg:text-8xl text-white leading-none mb-5">
              TRANSFORM<br />
              <span className="grad-text">YOUR BUILD.</span>
            </h2>
            <p className="font-body text-white/60 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Book a consultation and get a detailed written quotation within 48 hours. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm">
                Book a Consultation <ArrowIcon />
              </Link>
              <Link href="/services" className="btn-outline btn-outline-dark text-sm">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
