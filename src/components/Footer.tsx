import { LogoUrl, contactInfo } from '../data';
import { MapPin, Phone, Mail, FileText, Compass, ExternalLink } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-slate pt-20 pb-12 px-6 border-t border-brand-charcoal/20 relative" id="footer">
      <div className="container mx-auto max-w-6xl font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Logo & Description Box */}
          <div className="space-y-6">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-block transform hover:scale-[1.01] transition-transform"
            >
              <img 
                alt="V.L. Garza Logo" 
                className="h-16 w-auto object-contain brightness-110 select-none" 
                src={LogoUrl}
              />
            </a>
            <p className="text-brand-charcoal/70 text-sm leading-relaxed max-w-md font-light font-sans">
              Setting the standard for quality and craftsmanship in Laredo, Texas. Dedicated to excellence in structural shingle systems, metal siding, and luxury interior remodeling since 2004.
            </p>

            {/* Coordinates Panel */}
            <div className="w-full max-w-md h-40 bg-brand-charcoal border border-brand-charcoal/10 relative overflow-hidden group">
              {/* Subtle coordinates display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-10 h-10 bg-brand-sand border border-brand-slate/10 flex items-center justify-center mb-3">
                  <MapPin className="h-4 w-4 text-brand-crimson" />
                </div>
                <p className="text-[11px] font-bold tracking-[0.2em] text-brand-slate uppercase font-sans">
                  Tilden Ave, Laredo, TX 78041
                </p>
                <div className="text-[9px] font-mono text-brand-crimson tracking-widest mt-1.5 flex items-center gap-1.5 justify-center">
                  <Compass className="w-3 h-3" /> {contactInfo.coordinates}
                </div>
              </div>
            </div>
          </div>

          {/* Links grid panel */}
          <div className="grid grid-cols-2 gap-8 lg:justify-items-end font-sans">
            {/* Navigation links block */}
            <div>
              <h4 className="font-display font-normal text-brand-charcoal mb-6 uppercase tracking-[0.2em] text-xs border-b border-brand-charcoal/20 pb-2">
                Navigation
              </h4>
              <ul className="space-y-4 text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-[0.2em]">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-brand-crimson transition-colors cursor-pointer text-left"
                  >
                    Home Base
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollTo('services')}
                    className="hover:text-brand-crimson transition-colors cursor-pointer text-left"
                  >
                    Services Systems
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollTo('portfolio')}
                    className="hover:text-brand-crimson transition-colors cursor-pointer text-left"
                  >
                    Completed Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollTo('quote')}
                    className="hover:text-brand-crimson transition-colors cursor-pointer text-left"
                  >
                    Free Estimate
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal / License items */}
            <div>
              <h4 className="font-display font-normal text-brand-charcoal mb-6 uppercase tracking-[0.2em] text-xs border-b border-brand-charcoal/20 pb-2">
                Legal
              </h4>
              <ul className="space-y-4 text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-[0.2em]">
                <li>
                  <a href="#" className="hover:text-brand-crimson transition-colors">
                    Privacy Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-crimson transition-colors">
                    Terms & Coverages
                  </a>
                </li>
                <li className="flex items-center gap-1.5 text-brand-crimson font-extrabold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Lic: {contactInfo.license}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom legal copyrights block */}
        <div className="pt-8 border-t border-brand-charcoal/20 flex flex-col sm:flex-row gap-4 items-center justify-between text-center sm:text-left">
          <p className="text-[9px] text-brand-charcoal/45 font-extrabold uppercase tracking-[0.15em] leading-relaxed">
            © 2026 V.L. Garza Roofing & Remodeling, Inc. All Rights Reserved. Crafted for structural performance in South Texas.
          </p>
          <div className="flex items-center gap-6 text-[9px] text-brand-charcoal/60 tracking-[0.15em] font-extrabold uppercase">
            <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-crimson transition-colors">{contactInfo.phone}</a>
            <span>•</span>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-crimson transition-colors">{contactInfo.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
