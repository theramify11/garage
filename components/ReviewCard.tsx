interface ReviewCardProps {
  author: string;
  location: string;
  rating: number;
  review: string;
  job: string;
}

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

export default function ReviewCard({ author, location, rating, review, job }: ReviewCardProps) {
  return (
    <div className="card p-6 flex flex-col h-full">
      <Stars count={rating} />
      <span className="section-label text-[9px] mt-3 mb-2 block">{job}</span>
      <p className="font-body text-sm text-l-mid leading-relaxed flex-1 mb-4">
        &ldquo;{review}&rdquo;
      </p>
      <div className="border-t border-l-border pt-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-l-amber/15 flex items-center justify-center flex-shrink-0">
          <span className="font-display text-sm text-l-amber leading-none">{author[0]}</span>
        </div>
        <div>
          <p className="font-body font-semibold text-xs text-l-carbon">{author}</p>
          <p className="font-body text-[10px] text-l-muted">{location}</p>
        </div>
      </div>
    </div>
  );
}
