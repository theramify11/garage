'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/projects',  label: 'Gallery' },
  { href: '/faq',       label: 'FAQ' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: '0%' }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass shadow-nav' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-l-amber flex items-center justify-center shadow-amber">
                <span className="font-display text-[18px] text-white leading-none">A</span>
              </div>
              <div>
                <span className="font-display text-[18px] text-l-carbon tracking-[0.14em] leading-none block">
                  APEX
                </span>
                <span className="font-body text-[8px] tracking-[0.2em] uppercase text-l-muted leading-none">
                  Custom Garage
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-[11.5px] tracking-[0.08em] font-medium px-4 py-2 rounded-full transition-all duration-150 ${
                    pathname === link.href
                      ? 'text-l-amber bg-l-amber/8'
                      : 'text-l-mid hover:text-l-carbon hover:bg-l-warm'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:inline-flex btn-primary text-[11px] py-2.5 px-5">
                Book Now
              </Link>
              <button
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg border border-l-border bg-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-[1.5px] bg-l-carbon transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-l-carbon transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-l-carbon transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[360px]' : 'max-h-0'}`}>
            <div className="border-t border-l-border bg-white/95 backdrop-blur-md rounded-b-2xl pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 font-body text-sm font-medium rounded-xl mx-2 transition-colors ${
                    pathname === link.href ? 'text-l-amber bg-l-amber/8' : 'text-l-mid hover:text-l-carbon hover:bg-l-warm'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center block">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
