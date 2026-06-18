/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ServiceMap from './components/ServiceMap';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import MagneticCursor from './components/MagneticCursor';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-charcoal text-brand-slate selection:bg-brand-crimson selection:text-white antialiased overflow-x-hidden">
      {/* Custom Ultra-Premium Magnetic Cursor Overlay for Desktop interactions */}
      <MagneticCursor />

      {/* Persistent Navigation Header */}
      <Header />

      {/* Main Structural Blocks Layout */}
      <main>
        {/* Cinematic Hero */}
        <Hero />

        {/* Dynamic Continuous Stats Marquee Loop */}
        <StatsMarquee />

        {/* Trust verification certifications strip */}
        <Certifications />

        {/* Master services pillars */}
        <Services />

        {/* Filterable residential projects portfolio */}
        <Portfolio />

        {/* Laredo residents direct reviews */}
        <Testimonials />

        {/* Interactive service coordinate grid map */}
        <ServiceMap />

        {/* Advanced estimating lead generator */}
        <QuoteForm />
      </main>

      {/* Site map coordinates footer */}
      <Footer />

      {/* Floating active WhatsApp messaging portal */}
      <WhatsAppButton />
    </div>
  );
}
