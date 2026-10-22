import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  specs: string;
  duration?: string;
}

export default function ProjectCard({ image, title, category, specs, duration }: ProjectCardProps) {
  return (
    <div className="card overflow-hidden group cursor-pointer">
      <div className="relative h-56 overflow-hidden rounded-t-lg2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 bg-l-carbon/0 group-hover:bg-l-carbon/40 transition-all duration-300 flex items-center justify-center">
          <span className="font-body text-[10px] tracking-[0.18em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-l-amber px-5 py-2 rounded">
            View Specs
          </span>
        </div>
        <span className="absolute top-3 left-3 chip chip-dark text-[9px]">{category}</span>
        {duration && (
          <span className="absolute top-3 right-3 font-body text-[9px] text-white/70 tracking-wider uppercase">{duration}</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-l-carbon leading-tight mb-1.5 group-hover:text-l-amber transition-colors duration-200">
          {title}
        </h3>
        <p className="font-body text-xs text-l-muted leading-relaxed">{specs}</p>
      </div>
    </div>
  );
}
