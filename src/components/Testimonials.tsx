import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-6 bg-brand-charcoal overflow-hidden relative" id="testimonials">
      <div className="container mx-auto max-w-5xl font-sans">
        {/* Title */}
        <div className="text-center mb-16 border-b border-brand-slate/10 pb-8">
          <p className="text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] mb-3 font-sans">
            Direct Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tight text-brand-slate font-display">
            Laredo Speaks
          </h2>
        </div>

        {/* Testimonials Showcase */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main Card Slider */}
          <div className="min-h-[380px] sm:min-h-[320px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-brand-sand p-8 sm:p-12 border border-brand-slate/15 relative w-full"
              >
                {/* Visual quote accent indicator */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-slate/5 pointer-events-none stroke-[1]" />

                {/* Stars container block */}
                <div className="flex items-center gap-1 mb-6 text-brand-crimson" aria-label="5 Star Rating">
                  {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current text-brand-crimson" />
                  ))}
                </div>

                {/* Quote details */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-brand-slate leading-relaxed font-normal italic font-display mb-8">
                  "{testimonialsData[activeIndex].quote}"
                </blockquote>

                {/* Reviewer details & bio */}
                <div className="flex items-center gap-4">
                  {/* Avatar block */}
                  <div className="w-12 h-12 bg-brand-slate text-brand-charcoal border border-brand-slate/10 flex items-center justify-center font-bold text-xs font-sans tracking-widest shrink-0">
                    {testimonialsData[activeIndex].initials}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-sm text-brand-slate uppercase tracking-[0.15em] block font-sans">
                      {testimonialsData[activeIndex].name}
                    </cite>
                    <span className="text-[10px] text-brand-crimson font-bold uppercase tracking-[0.2em] block mt-0.5 font-sans">
                      {testimonialsData[activeIndex].location}
                    </span>
                    <span className="text-[10px] text-brand-slate/50 block font-light mt-1 uppercase tracking-[0.15em] font-sans">
                      {testimonialsData[activeIndex].projectType}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls navigation block */}
          <div className="flex justify-between items-center mt-8 px-4">
            <div className="flex gap-1.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 transition-all duration-300 rounded-none cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-brand-crimson' : 'w-2 bg-brand-slate/20 hover:bg-brand-slate/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 flex items-center justify-center bg-brand-sand hover:bg-brand-slate text-brand-slate hover:text-brand-charcoal border border-brand-slate/15 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 flex items-center justify-center bg-brand-sand hover:bg-brand-slate text-brand-slate hover:text-brand-charcoal border border-brand-slate/15 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
