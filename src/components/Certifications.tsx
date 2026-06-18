import { motion } from 'motion/react';
import { ShieldCheck, Award, FileSpreadsheet, ShieldAlert, CheckCircle } from 'lucide-react';

interface CertIconProps {
  id: string;
}

function CertSvg({ id }: CertIconProps) {
  // Returns highly custom, crisp vector emblems for a premium, authentic corporate identity
  switch (id) {
    case 'nrca':
      return (
        <svg className="w-10 h-10 text-brand-slate opacity-85 group-hover:text-brand-crimson transition-colors duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M16 28V16L24 24L32 16V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 36H36" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'rcat':
      return (
        <svg className="w-10 h-10 text-brand-slate opacity-85 group-hover:text-brand-crimson transition-colors duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M16 28L24 14L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 22H28" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill="currentColor" className="animate-pulse" />
        </svg>
      );
    case 'gaf':
      return (
        <svg className="w-10 h-10 text-brand-slate opacity-85 group-hover:text-brand-crimson transition-colors duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L38 14V24C38 32.5 32 40 24 43C16 40 10 32.5 10 24V14L24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 20H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18 26H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 16V30" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'certainteed':
      return (
        <svg className="w-10 h-10 text-brand-slate opacity-85 group-hover:text-brand-crimson transition-colors duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <polyline points="24,4 24,44" stroke="currentColor" strokeWidth="1.5" />
          <polyline points="6,14 24,24 42,14" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="8" fill="currentColor" className="opacity-10 group-hover:opacity-20 transition-opacity" />
        </svg>
      );
    case 'osha':
      return (
        <svg className="w-10 h-10 text-brand-slate opacity-85 group-hover:text-brand-crimson transition-colors duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L8 10V22C8 31.5 14.5 40 24 44C33.5 40 40 31.5 40 22V10L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 22L22 28L32 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return <Award className="w-10 h-10 text-brand-slate opacity-85" />;
  }
}

export default function Certifications() {
  const certs = [
    {
      id: 'nrca',
      title: 'NRCA Certified',
      subtitle: 'National Roofing Association',
      desc: 'Active member since 2008, adhering to professional standards in shingle selection and elite installation processes.',
    },
    {
      id: 'rcat',
      title: 'RCAT Licensed',
      subtitle: 'Roofing Contractors of Texas',
      desc: 'Formally licensed through the Roofing Contractors Association of Texas. Rigorous safety, business, and tech audits.',
    },
    {
      id: 'gaf',
      title: 'GAF Master Elite',
      subtitle: 'Top 2% of US Builders',
      desc: 'Certified to offer exclusive GAF Golden Pledge warranty protections with 25-year structural workmanship guarantees.',
    },
    {
      id: 'certainteed',
      title: 'Select ShingleMaster',
      subtitle: 'Advanced Credentials',
      desc: 'Highest concrete certification available. Earned via continuous testing and strict quality compliance standards.',
    },
    {
      id: 'osha',
      title: 'OSHA-30 Certified',
      subtitle: 'Site Safety Compliant',
      desc: 'Every supervisor is OSHA-30 safety certified. Safe equipment rigs and absolute client liability protection on all estates.',
    }
  ];

  return (
    <section className="py-16 px-6 bg-brand-charcoal border-b border-brand-slate/15 relative overflow-hidden" id="certifications">
      <div className="container mx-auto max-w-6xl font-sans relative z-10">
        
        {/* Section meta header */}
        <div className="text-center mb-12">
          <span className="text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] block mb-2 font-sans">
            High-End Trust Pillars
          </span>
          <h3 className="text-xl md:text-2xl font-normal uppercase font-display text-brand-slate tracking-wide">
            Certified to Protect & Transform Your Estate
          </h3>
          <p className="text-xs text-brand-slate/50 mt-1 uppercase tracking-[0.2em] font-light">
            Guaranteed compliance with Texas’s strictest structural codes
          </p>
        </div>

        {/* Association badging grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4, backgroundColor: 'var(--color-brand-sand)' }}
              className="p-6 bg-brand-sand/50 border border-brand-slate/10 hover:border-brand-crimson/30 transition-all duration-300 flex flex-col items-center text-center group rounded-none"
            >
              {/* Emblem graphics */}
              <div className="mb-4 p-3 bg-brand-charcoal border border-brand-slate/10 group-hover:border-brand-crimson/20 group-hover:scale-105 transition-all duration-300">
                <CertSvg id={cert.id} />
              </div>

              {/* Text metadata */}
              <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-slate group-hover:text-brand-crimson transition-colors font-sans mb-1">
                {cert.title}
              </h4>
              <p className="text-[9px] font-extrabold tracking-wider text-brand-crimson uppercase mb-3">
                {cert.subtitle}
              </p>
              <p className="text-[11px] text-brand-slate/65 leading-relaxed font-light">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust disclaimer badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 p-4 border border-brand-slate/10 bg-brand-sand/20 max-w-2xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-brand-crimson shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-slate/80 text-center sm:text-left">
            V.L. Garza carries a full $2,000,000 general liability insurance package for ultimate homeowner peace of mind.
          </span>
        </div>

      </div>
    </section>
  );
}
