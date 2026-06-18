import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { PortfolioProject } from '../types';
import { Calendar, Layers, Clock, X, Eye, ArrowUpRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Roofing' | 'Remodeling' | 'Storm Damage'>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories: Array<'All' | 'Roofing' | 'Remodeling' | 'Storm Damage'> = [
    'All',
    'Roofing',
    'Remodeling',
    'Storm Damage',
  ];

  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 bg-brand-slate relative font-sans" id="portfolio">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-brand-charcoal/20 pb-8">
          <div>
            <p className="text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] mb-3 font-sans">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-brand-charcoal font-display">
              The Portfolio
            </h2>
          </div>

          {/* Filtering Controller */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-none cursor-pointer font-sans ${
                  filter === cat
                    ? 'bg-brand-crimson text-brand-slate font-black'
                    : 'bg-brand-charcoal/10 text-brand-charcoal/70 hover:bg-brand-charcoal/25 hover:text-white border border-brand-charcoal/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid with Animated Layout Shifts */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: 'spring', damping: 20 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer bg-brand-charcoal relative overflow-hidden border border-brand-charcoal/15 flex flex-col justify-between"
              >
                {/* Image panel with hover amplification */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-slate/20 group-hover:bg-brand-slate/10 transition-all duration-500 z-10" />
                  <img
                    alt={project.title}
                    src={project.imageUrl}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category overlay tags */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-charcoal/95 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-brand-crimson border-l-2 border-brand-crimson">
                      {project.category}
                    </span>
                  </div>

                  {/* Aesthetic view magnifier overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-brand-crimson text-brand-slate p-4 rounded-none hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info Text Elements */}
                <div className="p-8 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase text-brand-slate/50 tracking-[0.2em] font-bold font-sans">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal uppercase text-brand-slate font-display group-hover:text-brand-crimson transition-all flex items-center justify-between gap-4">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 text-brand-crimson transition-all duration-300" />
                  </h3>

                  {/* Compact horizontal spec summaries */}
                  <div className="mt-6 pt-4 border-t border-brand-slate/10 flex items-center gap-6 text-[11px] text-brand-slate/75 font-sans font-light uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-crimson shrink-0" /> {project.stats.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-crimson shrink-0" /> {project.stats.duration}
                    </span>
                    <span className="flex items-center gap-1.5 max-w-[180px] truncate">
                      <Layers className="w-3.5 h-3.5 text-brand-crimson shrink-0" /> {project.stats.scope}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Elegant Interactive Before/After slider inside the portfolio section */}
        <div className="mt-16 pt-16 border-t border-brand-charcoal/10">
          <BeforeAfterSlider />
        </div>
      </div>

      {/* Deluxe Immersive Project Lightbox Modals */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-brand-slate/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative bg-brand-charcoal border border-brand-slate/15 w-full max-w-4xl p-0 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 z-10"
            >
              {/* Image box */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  alt={activeProject.title}
                  src={activeProject.imageUrl}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent hidden md:block" />
              </div>

              {/* Specification Box */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  {/* Close button indicators */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-slate/15">
                    <span className="text-[10px] uppercase font-bold text-brand-crimson tracking-[0.25em] font-sans">
                      Laredo Completed Project
                    </span>
                    <button
                      onClick={() => setActiveProject(null)}
                      className="p-1.5 text-brand-slate/50 hover:text-brand-slate hover:bg-brand-slate/5 rounded-full transition-colors cursor-pointer"
                      aria-label="Close details"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <span className="text-[10px] bg-brand-sand text-brand-crimson px-3 py-1 font-bold uppercase tracking-wider rounded-none font-sans border border-brand-slate/5">
                    {activeProject.category}
                  </span>

                  <h3 className="text-3xl font-normal uppercase text-brand-slate mt-4 font-display leading-tight">
                    {activeProject.title}
                  </h3>

                  <p className="text-[10px] text-brand-crimson font-bold tracking-[0.2em] uppercase mt-2 mb-6 font-sans">
                    {activeProject.location}
                  </p>

                  <p className="text-brand-slate/85 font-light leading-relaxed text-sm font-sans font-sans">
                    {activeProject.highlight}
                  </p>
                </div>

                {/* Visual stats cards */}
                <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-brand-slate/10 font-sans">
                  <div className="bg-brand-sand p-3 text-center border-l-2 border-brand-crimson">
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-brand-crimson">
                      Year
                    </span>
                    <span className="block text-xs font-bold text-brand-slate mt-1">
                      {activeProject.stats.year}
                    </span>
                  </div>
                  <div className="bg-brand-sand p-3 text-center border-l-2 border-brand-crimson">
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-brand-crimson">
                      Timeline
                    </span>
                    <span className="block text-xs font-bold text-brand-slate mt-1">
                      {activeProject.stats.duration}
                    </span>
                  </div>
                  <div className="bg-brand-sand p-3 text-center border-l-2 border-brand-crimson">
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-brand-crimson">
                      Scope
                    </span>
                    <span className="block text-[11px] font-bold text-brand-slate mt-1.5 truncate uppercase">
                      {activeProject.stats.scope.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
