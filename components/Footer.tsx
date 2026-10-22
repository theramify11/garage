import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-l-dark text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-l-amber flex items-center justify-center">
                <span className="font-display text-[18px] text-white leading-none">A</span>
              </div>
              <div>
                <p className="font-display text-[18px] text-white tracking-[0.14em] leading-none">APEX</p>
                <p className="font-body text-[8px] tracking-[0.2em] uppercase text-white/40 leading-none">Custom Garage</p>
              </div>
            </div>
            <p className="font-body text-xs text-white/50 leading-relaxed mb-1">Workshop 14, Al Quoz Industrial Area 3</p>
            <p className="font-body text-xs text-white/50">Dubai, United Arab Emirates</p>
            <div className="amber-bar w-10 mt-4" />
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-l-amber mb-4 font-semibold">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { href: '/',         label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Gallery' },
                { href: '/faq',      label: 'FAQ' },
                { href: '/contact',  label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-xs text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-l-amber2 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-l-amber mb-4 font-semibold">Services</p>
            <ul className="space-y-2.5">
              {['Custom Paint & Bodywork','PPF & Ceramic Coating','Vinyl Wraps','Performance Upgrades','Interior Upholstery','Restomod Projects'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="font-body text-xs text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-l-amber2 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-l-amber mb-4 font-semibold">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+97143889200" className="font-body text-xs text-white/50 hover:text-white transition-colors">
                  +971 4 388 9200
                </a>
              </li>
              <li>
                <a href="mailto:builds@apexcustomgarage.ae" className="font-body text-xs text-white/50 hover:text-white transition-colors break-all">
                  builds@apexcustomgarage.ae
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="btn-primary text-[11px] py-2.5 px-5 inline-flex">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] text-white/30">
            &copy; {year} Apex Custom Garage. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="font-body text-[10px] text-white/30 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="font-body text-[10px] text-white/30 hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
          <p className="font-body text-[10px] text-white/30">
            Demo site by <span className="text-l-amber font-medium">Ramify Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
