import { motion } from 'motion/react';
import { HeroImageUrl } from '../data';
import { ShieldCheck, ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-20 overflow-hidden">
      {/* Cinematic Background with subtle scale animation */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          alt="Modern Architectural Home Laredo" 
          className="w-full h-full object-cover object-center" 
          src={HeroImageUrl}
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradient/vignette overlays for superb 4k clarity and pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none z-[1]" />
      </div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* 5-Star Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-brand-charcoal/95 backdrop-blur-md px-4 py-2.5 border border-brand-slate/20 mb-8"
          >
            <div className="flex text-brand-crimson text-xs gap-0.5">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-slate/90 font-sans">
              Top Rated in Laredo
            </span>
          </motion.div>

          {/* Majestic Hero Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight mb-8 font-display text-brand-charcoal drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          >
            Laredo's <br/>
            <span className="font-bold italic text-brand-crimson select-none inline-block relative">
              Premier
              {/* Luxury underline flourish */}
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-brand-crimson/35 rounded-full"></span>
            </span> <br/>
            Roofing
          </motion.h1>

          {/* Subtle summary text for luxury design agency feel */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-brand-charcoal/90 text-lg md:text-xl font-light tracking-wide max-w-xl mb-10 leading-relaxed font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
          >
            Mastering clean residential roofing execution and customized modern transformations in South Texas for over 20 years.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button 
              onClick={() => handleScrollTo('quote')}
              className="bg-brand-crimson hover:bg-brand-charcoal hover:text-brand-slate text-white text-center py-5 px-10 font-bold text-xs font-sans uppercase tracking-[0.25em] transition-all duration-300 border border-brand-crimson hover:border-brand-charcoal hover:scale-[1.02] cursor-pointer"
            >
              Get a Free Quote
            </button>
            <button 
              onClick={() => handleScrollTo('portfolio')}
              className="border border-brand-charcoal/30 hover:border-brand-crimson bg-black/20 backdrop-blur-md text-brand-charcoal hover:text-white text-center py-5 px-10 font-bold text-xs font-sans uppercase tracking-[0.25em] transition-all duration-300 hover:bg-brand-crimson hover:scale-[1.02] cursor-pointer"
            >
              Our Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* Down indicators */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 text-brand-charcoal/50 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold rotate-90 transform origin-right mb-8">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-4 h-4 text-brand-crimson animate-bounce" />
      </div>
    </section>
  );
}
