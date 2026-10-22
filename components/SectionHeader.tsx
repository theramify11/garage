interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({ label, title, subtitle, centered = false, dark = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <p className={`section-label mb-2 ${dark ? 'text-l-amber2' : ''}`}>
          {label}
        </p>
      )}
      <h2 className={`font-display text-5xl lg:text-6xl leading-none mt-1 mb-3 tracking-wide ${dark ? 'text-white' : 'text-l-carbon'}`}>
        {title}
      </h2>
      <div className={`amber-bar w-12 mb-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`font-body text-sm leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/60' : 'text-l-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
