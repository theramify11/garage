import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom paint, PPF, ceramic coating, performance accessories, interior upholstery, and restomod projects. Apex Custom Garage, Dubai.',
};

const services = [
  {
    title: 'CUSTOM PAINT & BODYWORK',
    subtitle:
      'From single-panel corrections to full-vehicle respray builds, our paint department operates in a certified, pressurised spray booth with zero contamination tolerance.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=900&q=85',
    imageAlt: 'Custom paint spray booth with vehicle in preparation',
    specs: [
      'Full vehicle disassembly and panel prep',
      'Factory-grade HEPA-filtered spray booth',
      'Spectrophotometer colour matching and custom formulation',
      'Paint Protection Film — full body and partial coverage',
      'Ceramic coating (Gyeon, IGL, Gtechniq)',
      'Multi-stage paint correction: single, dual, full correction',
    ],
    cta: 'Request a Paint Quote',
    accent: '#f97316',
  },
  {
    title: 'PERFORMANCE ACCESSORIES',
    subtitle:
      'Precision-fitted aftermarket upgrades from globally certified manufacturers, installed and aligned by our in-house technicians.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    imageAlt: 'Performance brake kit and alloy wheel fitment',
    specs: [
      'Stainless and titanium exhaust fabrication',
      'Big brake kits: Brembo, AP Racing, StopTech',
      'Coilover and air suspension setup and alignment',
      'Aero body kit fabrication — carbon fibre and fibreglass',
      'ECU remapping and dyno tuning',
      'Forged alloy wheel sourcing and fitment',
    ],
    cta: 'Enquire About Upgrades',
    accent: '#f97316',
  },
  {
    title: 'INTERIOR UPHOLSTERY & TECH',
    subtitle:
      'Our interior division combines traditional coachbuilding with modern material science to produce cabins that are both functional and visually precise.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85',
    imageAlt: 'Custom Alcantara and leather interior retrim',
    specs: [
      'Full leather and Alcantara seat and panel re-trim',
      'Custom headliner fabrication — suede, perforated, carbon',
      'Roll cage design and certified installation',
      'Factory and aftermarket infotainment integration',
      'Custom ambient and mood lighting systems',
      'Soundproofing and acoustic treatment packages',
    ],
    cta: 'Discuss Your Interior',
    accent: '#f97316',
  },
  {
    title: 'COMPLETE RESTOMOD PROJECTS',
    subtitle:
      'Classic aesthetics, modern engineering. We take iconic chassis and rebuild them from the ground up with contemporary powertrains, safety systems, and driver experience.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=85',
    imageAlt: 'Classic vehicle restomod build in progress',
    specs: [
      'Full chassis strip and corrosion treatment',
      'Modern powertrain integration: LS, Coyote, BMW S-series',
      'Custom fabricated sub-frames and suspension geometry',
      'Period-correct exterior with modern panel tolerances',
      'Full electrical re-wire with CAN bus integration',
      'UAE roadworthiness certification assistance',
    ],
    cta: 'Start a Restomod Project',
    accent: '#f97316',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-l-snow">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1920&q=90"
          alt="Apex Custom Garage paint bay"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-l-dark via-l-dark/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-16 pt-36 w-full">
          <span className="chip chip-dark mb-4">Our Specialisations</span>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-none tracking-wide mb-3">
            SERVICES &amp; CUSTOMISATION
          </h1>
          <div className="amber-bar w-16" />
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, index) => {
        const isEven = index % 2 === 1;
        return (
          <section key={service.title} className={`py-24 ${isEven ? 'bg-l-cream' : 'bg-l-white'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-stretch`}>
                {/* Image */}
                <div className="lg:w-1/2 min-h-[420px] relative rounded-xl2 overflow-hidden shadow-card-hover">
                  <Image src={service.image} alt={service.imageAlt} fill className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute bottom-5 left-5">
                    <span className="font-display text-7xl text-white/10 leading-none select-none">0{index+1}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <ScrollReveal>
                    <span className="section-label block mb-3">Service 0{index+1}</span>
                    <h2 className="font-display text-4xl lg:text-5xl text-l-carbon leading-none mb-2 tracking-wide">
                      {service.title}
                    </h2>
                    <div className="amber-bar w-10 mb-5" />
                    <p className="font-body text-sm text-l-muted leading-relaxed mb-7">{service.subtitle}</p>
                    <ul className="space-y-3 mb-8">
                      {service.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-3">
                          <span className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-l-amber/10 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-l-amber" />
                          </span>
                          <span className="font-body text-sm text-l-mid leading-relaxed">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary self-start">{service.cta}</Link>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Pricing Disclaimer ── */}
      <div className="bg-l-warm border-t border-l-border py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-sm text-l-muted max-w-2xl mx-auto">
            All pricing is project-specific.{' '}
            <Link href="/contact" className="text-l-amber hover:text-l-amber2 underline underline-offset-4 transition-colors">
              Contact us
            </Link>{' '}
            for a detailed assessment and written quotation.
          </p>
        </div>
      </div>
    </div>
  );
}
