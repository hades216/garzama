import { useState, useEffect } from 'react';
import { LogoUrl, contactInfo } from '../data';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-charcoal/90 backdrop-blur-md py-4 border-b border-brand-slate/20 shadow-md' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 transform hover:scale-[1.02] transition-transform"
        >
          <img 
            alt="V.L. Garza Logo" 
            className="h-10 md:h-12 w-auto object-contain select-none mix-blend-multiply" 
            src={LogoUrl}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => handleScrollTo('services')} 
            className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors"
          >
            Our Expertise
          </button>
          <button 
            onClick={() => handleScrollTo('portfolio')} 
            className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors"
          >
            The Portfolio
          </button>
          <button 
            onClick={() => handleScrollTo('testimonials')} 
            className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors"
          >
            Laredo Speaks
          </button>
          <button 
            onClick={() => handleScrollTo('servicemap')} 
            className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors"
          >
            Service Areas
          </button>
          <button 
            onClick={() => handleScrollTo('quote')} 
            className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors"
          >
            Estimate
          </button>
        </nav>

        {/* Action Button & Mobile Controller */}
        <div className="flex items-center gap-4">
          <a 
            href={`tel:${contactInfo.phone}`}
            className="relative overflow-hidden bg-brand-slate hover:bg-brand-crimson text-brand-charcoal hover:text-white font-bold py-3 px-6 rounded-none transition-all duration-300 uppercase tracking-[0.2em] text-[10px] font-sans flex items-center gap-2 border border-brand-slate hover:border-brand-crimson hover:scale-[1.03]"
          >
            <PhoneCall className="w-3 h-3 animate-pulse" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:inline lg:hidden">Call</span>
          </a>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-slate hover:text-brand-crimson transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Interactive Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-brand-charcoal backdrop-blur-lg z-30 lg:hidden flex flex-col justify-start items-center pt-12 animate-fade-in border-t border-brand-slate/25">
          <nav className="flex flex-col items-center gap-8 w-full max-w-xs px-6">
            <button 
              onClick={() => handleScrollTo('services')} 
              className="text-[11px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors py-2 border-b border-brand-slate/10 w-full text-center"
            >
              Our Expertise
            </button>
            <button 
              onClick={() => handleScrollTo('portfolio')} 
              className="text-[11px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors py-2 border-b border-brand-slate/10 w-full text-center"
            >
              The Portfolio
            </button>
            <button 
              onClick={() => handleScrollTo('testimonials')} 
              className="text-[11px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors py-2 border-b border-brand-slate/10 w-full text-center"
            >
              Laredo Speaks
            </button>
            <button 
              onClick={() => handleScrollTo('servicemap')} 
              className="text-[11px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors py-2 border-b border-brand-slate/10 w-full text-center"
            >
              Service Areas
            </button>
            <button 
              onClick={() => handleScrollTo('quote')} 
              className="text-[11px] font-bold uppercase tracking-[0.3em] font-sans text-brand-slate/80 hover:text-brand-crimson transition-colors py-2 border-b border-brand-slate/10 w-full text-center"
            >
              Estimate
            </button>
            <div className="pt-8 text-center text-[10px] text-brand-slate/40 uppercase tracking-[0.25em] font-sans">
              <span className="block mb-2">Laredo, Texas</span>
              <a href={`mailto:${contactInfo.email}`} className="text-brand-crimson hover:underline">{contactInfo.email}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
