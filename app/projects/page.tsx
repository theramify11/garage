'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

type Category = 'All' | 'Paint' | 'Wraps' | 'Performance' | 'Body Kits' | 'Interior';

const categories: Category[] = ['All', 'Paint', 'Wraps', 'Performance', 'Body Kits', 'Interior'];

interface Project {
  id: number;
  image: string;
  title: string;
  category: Exclude<Category, 'All'>;
  specs: string;
  duration: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    title: '2022 Nissan GT-R — Matte Pearl Black Respray',
    category: 'Paint',
    specs: 'Custom mixed pearl, 3-stage correction, ceramic seal',
    duration: '14 working days',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    title: '2020 Lamborghini Huracan — Satin White Wrap',
    category: 'Wraps',
    specs: '3M 1080 S10 Satin White, full body',
    duration: '8 working days',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: '2021 BMW M3 — Big Brake Kit + Coilovers',
    category: 'Performance',
    specs: 'AP Racing 6-pot fronts, KW V3 coilovers, geometry reset',
    duration: '5 working days',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    title: '1970 Dodge Charger — Restomod Build',
    category: 'Paint',
    specs: 'LS7 swap, full respray Tor Red, custom interior',
    duration: '18 months',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    title: '2023 Porsche Taycan — Full Leather Interior',
    category: 'Interior',
    specs: 'Nappa leather, Alcantara headliner, custom stitching',
    duration: '12 days',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
    title: '2019 Ferrari 488 — Carbon Fibre Aero Kit',
    category: 'Body Kits',
    specs: 'Front splitter, rear diffuser, side blades — full carbon',
    duration: '6 days',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80',
    title: '2021 Porsche 911 GT3 — Full PPF Package',
    category: 'Wraps',
    specs: 'Xpel Ultimate Plus, full body PPF',
    duration: '10 working days',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    title: '2020 Audi RS6 — Gloss Black Wrap + Tints',
    category: 'Wraps',
    specs: '3M 1080 G12 Gloss Black, ceramic window tints',
    duration: '7 days',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=800&q=80',
    title: '2022 Mercedes G63 — Matte Grey Respray',
    category: 'Paint',
    specs: 'Sikkens matte basecoat, satin clear, full disassembly',
    duration: '16 days',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    title: '2018 Toyota Supra A80 — Wide Body Kit',
    category: 'Body Kits',
    specs: 'Rocket Bunny V2 overfenders, custom painted, +35mm track',
    duration: '12 days',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    title: '1967 Ford Mustang — Full Restomod',
    category: 'Interior',
    specs: 'Coyote 5.0 swap, custom leather, AC integration',
    duration: '22 months',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
    title: '2021 Audi R8 V10 — Coilover + Exhaust',
    category: 'Performance',
    specs: 'KW DDC coilovers, Akrapovic titanium, dyno verified',
    duration: '4 days',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-l-snow">

      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden flex items-end">
        <Image src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1920&q=85"
          alt="Portfolio of custom automotive builds" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-l-dark via-l-dark/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-14 pt-36 w-full">
          <span className="chip chip-dark mb-4">Our Portfolio</span>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-none tracking-wide mb-3">
            GALLERY &amp; PAST BUILDS
          </h1>
          <div className="amber-bar w-14" />
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="bg-white border-b border-l-border sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-wrap overflow-x-auto">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`font-body text-[11px] tracking-[0.12em] font-medium uppercase px-5 py-4 border-b-2 transition-all whitespace-nowrap ${
                activeCategory === cat ? 'border-l-amber text-l-amber' : 'border-transparent text-l-muted hover:text-l-carbon'
              }`}>
              {cat}
            </button>
          ))}
          <div className="ml-auto flex items-center pr-1">
            <span className="font-body text-[10px] text-l-subtle">{filtered.length} build{filtered.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="py-14 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <div key={project.id} className="card overflow-hidden group">
                  <div className="relative h-60 overflow-hidden rounded-t-lg2">
                    <Image src={project.image} alt={project.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-l-carbon/0 group-hover:bg-l-carbon/40 transition-all duration-300 flex items-center justify-center">
                      <span className="font-body text-[10px] tracking-[0.18em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity bg-l-amber px-5 py-2 rounded">
                        View Specs
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 chip chip-dark text-[9px]">{project.category}</span>
                    <span className="absolute top-3 right-3 font-body text-[9px] text-white/60 uppercase tracking-wide">{project.duration}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-l-carbon leading-tight mb-1.5 group-hover:text-l-amber transition-colors">{project.title}</h3>
                    <p className="font-body text-xs text-l-muted">{project.specs}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="font-body text-l-muted">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="bg-l-warm border-t border-l-border py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-display text-3xl text-l-carbon mb-2">YOUR BUILD COULD BE NEXT.</p>
          <p className="font-body text-sm text-l-muted mb-6 max-w-md mx-auto">
            Every vehicle we work on is treated as a portfolio piece.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">Start Your Project</Link>
        </div>
      </div>
    </div>
  );
}
