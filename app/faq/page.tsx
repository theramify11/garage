'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

const faqData = [
  {
    category: 'General & Booking',
    items: [
      {
        q: 'Do you require a deposit to book a slot?',
        a: 'Yes. All bookings require a 25% deposit to secure your workshop slot. This deposit is non-refundable for cancellations within 72 hours of the scheduled start date.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'Our standard lead time is 2 to 4 weeks for most paint and accessory work. Full restomod projects are scheduled on a project-by-project basis. We recommend contacting us as early as possible.',
      },
      {
        q: 'What information do I need when booking?',
        a: 'Vehicle make, model, year, current condition photos (if possible), and a clear description of the work you want completed. The more detail you provide, the more accurate our initial assessment will be.',
      },
      {
        q: 'Can I visit the workshop before committing to a project?',
        a: 'Absolutely. We encourage site visits by appointment. Call or email us to arrange a walkthrough of our facility and a preliminary discussion with our lead technician.',
      },
    ],
  },
  {
    category: 'Paint & Bodywork',
    items: [
      {
        q: 'What warranty do you offer on paint work?',
        a: 'We offer a 2-year warranty on all full respray and paint correction work covering peeling, delamination, and verified application defects. This warranty is void if the vehicle is not maintained to our care guidelines.',
      },
      {
        q: 'Can I submit an insurance claim for paint damage repairs?',
        a: 'Yes. We work directly with all major UAE insurers and provide detailed written assessments, photographic documentation, and repair quotations for insurance approval.',
      },
      {
        q: 'How do you match custom or original factory colours?',
        a: 'We use a calibrated spectrophotometer to read existing paint codes and mix custom colours using a computerised mixing system. For bespoke shades, we create a unique formulation from your design brief.',
      },
      {
        q: 'How long does a full respray typically take?',
        a: 'A full vehicle respray including disassembly, preparation, priming, painting, and reassembly takes between 10 to 21 working days depending on vehicle size, panel count, and finish complexity.',
      },
    ],
  },
  {
    category: 'Wraps & PPF',
    items: [
      {
        q: 'How long does a full body wrap last in the UAE climate?',
        a: 'When professionally installed and maintained correctly, a high-quality vinyl wrap (3M 1080 or Avery Dennison) lasts 5 to 7 years. Parking in shade and regular washing extends the lifespan significantly.',
      },
      {
        q: 'Does a wrap damage my factory paint?',
        a: 'No — provided the factory paint is in good condition and cured. Vinyl wrap acts as a protective layer. When removed correctly, it leaves the underlying paint completely intact.',
      },
      {
        q: 'What is PPF and why is it recommended?',
        a: 'Paint Protection Film is a thermoplastic urethane film that absorbs stone chips, minor scratches, and road debris. It has self-healing properties when exposed to heat and is standard on all high-value vehicles we work on.',
      },
    ],
  },
  {
    category: 'Custom & Restomod Projects',
    items: [
      {
        q: 'How long does a full restomod project take?',
        a: 'Typical restomod builds run between 12 to 24 months depending on scope, parts availability, and custom fabrication requirements. We provide a detailed timeline at the proposal stage.',
      },
      {
        q: 'Can you source parts internationally?',
        a: 'Yes. We have established relationships with suppliers in the US, UK, Germany, and Japan. Import duties and customs clearance are handled by our procurement team.',
      },
      {
        q: 'Will the finished vehicle pass UAE roadworthiness inspection?',
        a: 'Our restomod projects are engineered with UAE registration requirements in mind. We coordinate with certified inspection centres throughout the build to ensure the vehicle meets all RTA standards.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const totalQuestions = faqData.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="min-h-screen bg-l-snow">

      {/* ── Hero ── */}
      <section className="bg-l-cream pt-28 pb-14 px-6 sm:px-8 border-b border-l-border">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Common Questions" title="FREQUENTLY ASKED"
            subtitle={`Straight answers on our process, warranties, and what to expect. ${totalQuestions} questions across 4 categories.`} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqData.map((section, sIdx) => (
            <div key={section.category}>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-display text-3xl text-l-amber/20 leading-none select-none">0{sIdx + 1}</span>
                <div>
                  <h2 className="font-display text-2xl text-l-carbon tracking-wide">{section.category.toUpperCase()}</h2>
                  <div className="amber-bar w-8 mt-1" />
                </div>
              </div>
              <div className="space-y-2">
                {section.items.map((item, idx) => {
                  const id = `${section.category}-${idx}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={id} className={`card overflow-hidden transition-all duration-200 ${isOpen ? 'shadow-card-hover' : ''}`}
                      style={{ borderColor: isOpen ? 'rgba(232,101,10,0.3)' : undefined }}>
                      <button className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                        onClick={() => toggleItem(id)} aria-expanded={isOpen}>
                        <span className={`font-body text-sm leading-snug ${isOpen ? 'text-l-carbon font-semibold' : 'text-l-mid'}`}>{item.q}</span>
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen ? 'border-l-amber text-l-amber bg-l-amber/8 rotate-45' : 'border-l-border text-l-muted'}`}>
                          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                            <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        </span>
                      </button>
                      <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                        <div className="px-5 pb-5">
                          <div className="amber-bar w-full mb-3 opacity-20" />
                          <p className="font-body text-sm text-l-muted leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="bg-l-warm border-t border-l-border py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-label block mb-3">Not finding your answer?</span>
          <h3 className="font-display text-4xl text-l-carbon mb-3">TALK TO OUR TEAM</h3>
          <div className="amber-bar w-10 mx-auto mb-5" />
          <p className="font-body text-sm text-l-muted mb-8 max-w-md mx-auto leading-relaxed">
            Our lead technicians are available for direct consultations — no sales pressure, just honest technical advice.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
