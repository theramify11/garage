import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href = '/services' }: ServiceCardProps) {
  return (
    <Link href={href} className="card block p-6 group h-full">
      <div className="w-11 h-11 rounded-xl bg-l-amber/10 flex items-center justify-center text-l-amber mb-5 group-hover:bg-l-amber group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-display text-[22px] text-l-carbon leading-tight mb-2 group-hover:text-l-amber transition-colors duration-200">
        {title}
      </h3>
      <p className="font-body text-xs text-l-muted leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-1.5 mt-auto text-l-amber font-body text-[11px] font-semibold tracking-wide uppercase">
        Learn More
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}
