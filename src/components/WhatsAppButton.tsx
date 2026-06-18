import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ArrowRight } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotified, setHasNotified] = useState(false);
  const [inputText, setInputText] = useState('');

  // Auto-prompt/notification alert after a short while to capture attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasNotified(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "19562427000"; // Laredo, TX number loaded from contact metadata

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setHasNotified(false);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(inputText.trim() || "Hello V.L. Garza Builds! I am a Laredo resident inquiring about a premium roofing or remodeling estimate.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setInputText('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end pointer-events-none">
      
      {/* Floating Interactive Widget Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-80 bg-brand-charcoal border border-brand-slate/15 shadow-2xl overflow-hidden mb-4 pointer-events-auto rounded-none"
          >
            {/* Header Area */}
            <div className="bg-brand-sand px-5 py-4 flex items-center justify-between border-b border-brand-slate/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-brand-charcoal text-white flex items-center justify-center border border-brand-slate/15 relative">
                    <span className="font-display font-medium text-xs tracking-wider text-brand-crimson">VLG</span>
                  </div>
                  {/* Pulsing Active Indicator Dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-brand-sand rounded-full" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate leading-normal">
                    V.L. Garza Builds
                  </h4>
                  <p className="text-[9px] text-brand-slate/50 font-bold tracking-widest uppercase flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Laredo Support Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-slate/40 hover:text-brand-crimson transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body Mock/Interaction */}
            <div className="p-5 space-y-4 max-h-64 overflow-y-auto bg-[#0F0F10] text-left">
              <div className="bg-brand-charcoal p-3 border border-brand-slate/10 rounded-none relative">
                <p className="text-[11px] text-brand-slate leading-relaxed">
                  Hi there! 👋 Welcome to Garza Builds. If you have any home remodeling, storm damage repairs, or roofing system questions, drop a quick note below.
                </p>
                <span className="text-[8px] text-brand-slate/35 absolute bottom-1 right-2 uppercase font-mono tracking-widest">
                  Assistant
                </span>
              </div>
              
              <div className="bg-brand-charcoal p-3 border border-brand-slate/10 rounded-none relative">
                <p className="text-[11px] text-brand-slate/85 font-semibold leading-relaxed">
                  📍 We are actively serving Del Mar, Alexander Area, Winfield, and all Laredo neighborhoods!
                </p>
                <span className="text-[8px] text-brand-slate/35 absolute bottom-1 right-2 uppercase font-mono tracking-widest">
                  ESTIMATES
                </span>
              </div>
            </div>

            {/* In-app Message Composer for premium feel */}
            <form onSubmit={handleSendWhatsApp} className="p-4 bg-brand-charcoal border-t border-brand-slate/10 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your inquiry here..."
                className="flex-grow bg-[#0F0F10] border border-brand-slate/10 px-3 py-2 text-xs text-brand-slate placeholder:text-brand-slate/30 focus:outline-none focus:border-brand-crimson transition-all"
              />
              <button
                type="submit"
                className="w-8 h-8 bg-brand-crimson flex items-center justify-center border border-brand-crimson hover:bg-brand-charcoal hover:text-brand-crimson text-brand-slate transition-all"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Greeting Notification Anchor */}
      <AnimatePresence>
        {hasNotified && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-brand-crimson/95 backdrop-blur-md px-4 py-2.5 border border-brand-crimson shadow-xl mb-3 flex items-center gap-3 pointer-events-auto max-w-xs text-left"
          >
            <div className="flex-grow">
              <p className="text-[9px] font-mono tracking-widest text-white/50 uppercase leading-none mb-0.5">
                Immediate Response
              </p>
              <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-tight">
                Inspect Roof Status in 2 Hours or less?
              </p>
            </div>
            <button
              onClick={handleOpenChat}
              className="bg-brand-charcoal text-brand-slate p-1.5 hover:text-brand-crimson transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Launcher Button Trigger */}
      <motion.button
        onClick={handleOpenChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-14 h-14 bg-brand-crimson text-brand-slate border border-brand-crimson hover:bg-brand-charcoal flex items-center justify-center hover:text-brand-crimson transition-all shadow-2xl select-none group relative rounded-none cursor-pointer"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -inset-[3px] border border-brand-crimson/30 animate-pulse pointer-events-none" />
        <MessageSquare className="w-6 h-6 transition-transform group-hover:scale-110" />

        {/* Pulsing indicator tag */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border border-brand-crimson flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
        </span>
      </motion.button>

    </div>
  );
}
