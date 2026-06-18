import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';
import { Home, Building, CloudRain, CheckCircle2, ShieldCheck, ArrowRight, X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Dynamic icon selector based on schema
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-8 h-8" />;
      case 'Building':
        return <Building className="w-8 h-8" />;
      case 'CloudRain':
        return <CloudRain className="w-8 h-8" />;
      default:
        return <Home className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-charcoal border-b border-brand-slate/15 relative" id="services">
      <div className="container mx-auto max-w-6xl relative z-10 font-sans">
        {/* Section Header */}
        <div className="mb-16 border-b border-brand-slate/10 pb-8">
          <p className="text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] mb-3 font-sans">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-brand-slate font-display">
            Mastering Every Detail
          </h2>
        </div>

        {/* Asymmetric Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            // Card 2 (Home Remodeling) gets a distinct highlight style like the user's mockup:
            // bg-brand-slate (ink black) with beige text to contrast nicely in a magazine spread look
            const isHighlighted = idx === 1;

            return (
              <motion.div
                key={service.id}
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={{
                  rest: { y: 0 },
                  hover: { y: -10 }
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                onClick={() => setSelectedService(service)}
                className={`group cursor-pointer relative p-10 flex flex-col justify-between min-h-[380px] transition-all duration-300 border border-brand-slate/15 ${
                  isHighlighted 
                    ? 'bg-brand-slate text-brand-charcoal relative shadow-xl' 
                    : 'bg-brand-sand text-brand-slate hover:shadow-lg'
                }`}
              >
                {/* Numeric background badge */}
                <span className={`absolute top-6 right-8 text-7xl font-bold font-display transition-colors select-none ${
                  isHighlighted ? 'text-brand-charcoal/10 group-hover:text-brand-charcoal/15' : 'text-brand-slate/5 group-hover:text-brand-slate/10'
                }`}>
                  {service.num}
                </span>

                <div className="relative z-10 flex-grow">
                  {/* Icon Block with premium continuous float & hover reactive spin */}
                  <motion.div 
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5
                    }}
                    variants={{
                      rest: { scale: 1, rotate: 0 },
                      hover: { scale: 1.15, rotate: 12 }
                    }}
                    className={`w-14 h-14 mb-8 flex items-center justify-center border shadow-sm ${
                      isHighlighted 
                        ? 'bg-brand-charcoal/10 text-brand-crimson border-brand-charcoal/20' 
                        : 'bg-brand-crimson/10 text-brand-crimson border-brand-crimson/25'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-normal mb-4 tracking-tight uppercase font-display group-hover:text-brand-crimson transition-colors">
                    {service.title}
                  </h3>

                  {/* Description Info */}
                  <p className={`text-sm md:text-base leading-relaxed mb-6 font-light ${
                    isHighlighted ? 'text-brand-charcoal/80' : 'text-brand-slate/80'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Explore Trigger */}
                <div className={`pt-6 border-t flex items-center justify-between mt-auto ${
                  isHighlighted ? 'border-brand-charcoal/10' : 'border-brand-slate/10'
                }`}>
                  <span className={`text-[10px] uppercase font-bold tracking-[0.2em] font-sans transition-colors ${
                    isHighlighted ? 'text-brand-charcoal/90 group-hover:text-brand-crimson' : 'text-brand-slate/90 group-hover:text-brand-crimson'
                  }`}>
                    Explore Structural Systems
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-crimson transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide-out Specification Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Blur lock */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-slate/40 backdrop-blur-sm"
            />

            {/* Main Drawer Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative w-full max-w-lg bg-brand-charcoal h-full overflow-y-auto p-8 sm:p-12 shadow-2xl flex flex-col justify-between border-l border-brand-slate/10 z-10"
            >
              <div>
                {/* Header Close triggers */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-brand-slate/10">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-slate font-bold text-lg font-display">System Spec</span>
                    <span className="text-[10px] bg-brand-crimson/15 text-brand-crimson px-3 py-1 font-bold tracking-widest uppercase font-sans">
                      {selectedService.num}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="p-2 text-brand-slate/60 hover:text-brand-slate hover:bg-brand-slate/5 rounded-full transition-all"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Service Details info */}
                <h3 className="text-3xl font-normal mb-6 uppercase tracking-tight text-brand-slate font-display">
                  {selectedService.title}
                </h3>

                <p className="text-brand-slate/80 leading-relaxed text-base font-light mb-8 font-sans">
                  {selectedService.fullDesc}
                </p>

                {/* Key Benefits List */}
                <div className="mb-8">
                  <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-brand-crimson mb-4">
                    Key Performance Indicators
                  </h4>
                  <ul className="space-y-4">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-crimson shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-slate/75 font-sans font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials list */}
                <div className="mb-8 font-sans">
                  <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-brand-crimson mb-4">
                    Certified Materials Specified
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.materials.map((mat, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-brand-sand text-brand-slate px-3 py-1.5 font-medium border border-brand-slate/10 rounded-none uppercase tracking-wider"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer warranties */}
              <div className="bg-brand-slate p-6 border-l-2 border-brand-crimson mt-8 text-brand-charcoal">
                <div className="flex items-center gap-3 mb-2 text-brand-charcoal">
                  <ShieldCheck className="w-5 h-5 text-brand-crimson" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans">Guaranteed Warranty Protection</span>
                </div>
                <p className="text-xs text-brand-charcoal/80 font-sans font-light leading-relaxed">
                  {selectedService.warranty}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
