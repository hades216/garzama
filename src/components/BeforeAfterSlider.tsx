import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Paintbrush, Home, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = "/images/before_roof_damage_1781767228863.jpg";
  const afterImage = "/images/after_premium_roof_1781767248597.jpg";

  const handleUpdate = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleUpdate(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleUpdate(e.touches[0].clientX);
    }
  };

  // Listen to mouseup to release drag outside bounds
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="py-16 border-b border-brand-slate/15 bg-brand-charcoal text-white relative">
      <div className="max-w-4xl mx-auto px-6 font-sans">
        
        {/* Component Header Info */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] mb-2 font-display">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Transformation
          </span>
          <h3 className="text-2xl font-normal uppercase font-display text-brand-slate tracking-wide">
            Before & After Comparison
          </h3>
          <p className="text-xs text-brand-slate/50 mt-1 uppercase tracking-[0.2em] font-light">
            Slide or drag the divider to inspect the luxury reconstruction quality
          </p>
        </div>

        {/* The slider viewport card */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative h-[480px] w-full bg-brand-sand overflow-hidden select-none border border-brand-slate/10 cursor-col-resize shadow-2xl group rounded-none"
        >
          {/* Before Image (Shows on right of divider, clipped from left) */}
          <div className="absolute inset-0">
            <img 
              src={beforeImage} 
              alt="Weathered Storm Damaged Roof before V.L. Garza Restoration"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Dark status badge for Before side */}
            <div className="absolute bottom-6 left-6 bg-black/75 backdrop-blur-md px-4 py-2 border border-white/10 z-25">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#E53E3E] uppercase font-sans">
                BEFORE: STORM DAMAGED SHEATHING
              </span>
            </div>
          </div>

          {/* After Image (Shows on left of divider, takes up sliding width, clipped from right) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)` }}
          >
            <img 
              src={afterImage} 
              alt="Pristine slate metal roof post V.L. Garza transformation"
              className="absolute inset-0 h-[480px] w-full max-w-none object-contain scale-100 object-cover object-center pointer-events-none"
              style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
              referrerPolicy="no-referrer"
            />
            {/* Deluxe Status badge for After side */}
            <div className="absolute bottom-6 right-6 bg-brand-crimson/95 backdrop-blur-md px-4 py-2 border border-brand-crimson/30 z-25">
              <span className="text-[10px] tracking-[0.2em] font-black text-white uppercase font-sans">
                AFTER: GARZA MASTER ELITE SPEC
              </span>
            </div>
          </div>

          {/* Vertical divider line & Handle bars */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-brand-crimson z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Smooth animated glowing orb on slide bar */}
            <div className="absolute top-[45%] -translate-y-1/2 -left-5 w-10 h-10 bg-brand-charcoal text-brand-slate hover:text-brand-crimson border-2 border-brand-crimson flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-250 select-none">
              <ArrowLeftRight className="w-4 h-4 text-brand-crimson animate-pulse" />
            </div>
            {/* Grid Coordinates Label floating with pointer */}
            <div className="absolute top-6 -left-10 bg-brand-charcoal border border-brand-slate/15 text-brand-slate text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase whitespace-nowrap">
              ALIGN: {sliderPosition.toFixed(0)}%
            </div>
          </div>

          {/* Floating Instructions Banner on Top */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-brand-charcoal/90 border border-brand-slate/10 px-4 py-2 pointer-events-none z-10 flex items-center gap-2 backdrop-blur-sm shadow-md">
            <span className="w-1.5 h-1.5 bg-brand-crimson rounded-full animate-ping" />
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-slate leading-none">
              Drag Indicator left or right to inspect materials
            </p>
          </div>

        </div>

        {/* Informative Specs Footer highlighting difference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-brand-slate/10 pt-8 font-sans">
          <div className="p-4 bg-brand-sand/5 border border-brand-slate/5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-[#E53E3E] rounded-full" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate">Outdated / Damaged Profile</h4>
            </div>
            <p className="text-[11px] text-brand-slate/60 leading-relaxed font-light">
              Failing composite sheets with moisture seepage, curling edge fibers, zero deck insulation, and severe thermal crack leaks capable of structurally compromising ceilings.
            </p>
          </div>
          <div className="p-4 bg-brand-sand/10 border border-brand-crimson/10 relative">
            <div className="absolute top-3 right-3 text-[8px] font-bold text-brand-crimson border border-brand-crimson/20 px-1.5 uppercase tracking-widest">
              Laredo Standard Elite
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-[#48BB78] rounded-full animate-pulse" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate">Garza Engineering Transformation</h4>
            </div>
            <p className="text-[11px] text-brand-slate/85 leading-relaxed font-light">
              Completed using heavy underlayment deck protections, double moisture seals, custom wind vents, and high-impact GAF Master Elite shingles backed by a 25-Year warranty.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
