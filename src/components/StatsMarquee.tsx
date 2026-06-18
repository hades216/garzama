export default function StatsMarquee() {
  const marqueeItems = [
    "500+ PROJECTS COMPLETED",
    "20+ YEARS EXPERIENCE",
    "100% LOCAL OWNED",
    "CUSTOM CRAFT GUARANTEED",
    "LAREDO'S FINEST ARTISANS"
  ];

  return (
    <section className="bg-brand-crimson py-4 overflow-hidden border-y border-brand-slate/10" aria-label="Key Facts Summary">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Repeating text tracks to facilitate a seamless continuous loop regardless of viewport size */}
        <div className="animate-marquee flex items-center space-x-12 shrink-0">
          {marqueeItems.concat(marqueeItems).map((text, index) => (
            <div key={index} className="flex items-center space-x-12">
              <span className="text-brand-slate font-sans text-xs md:text-sm font-extrabold tracking-[0.25em] leading-none">
                {text}
              </span>
              <span className="text-brand-slate/35 text-xl">•</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex items-center space-x-12 shrink-0" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((text, index) => (
            <div key={`dup-${index}`} className="flex items-center space-x-12">
              <span className="text-brand-slate font-sans text-xs md:text-sm font-extrabold tracking-[0.25em] leading-none">
                {text}
              </span>
              <span className="text-brand-slate/35 text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
