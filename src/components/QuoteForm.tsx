import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ClipboardList, Send, Loader2, Compass, Shield, Users } from 'lucide-react';
import { LeadFormData } from '../types';

export default function QuoteForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Roofing',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionStep, setSubmissionStep] = useState(0);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});

  useEffect(() => {
    if (submitted) {
      setSubmissionStep(1);
      const t1 = setTimeout(() => setSubmissionStep(2), 800);
      const t2 = setTimeout(() => setSubmissionStep(3), 1600);
      const t3 = setTimeout(() => setSubmissionStep(4), 2400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      setSubmissionStep(0);
    }
  }, [submitted]);

  const validate = () => {
    const tempErrors: Partial<LeadFormData> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email syntax';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      tempErrors.phone = 'Please provide a valid 10-digit number';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Live validation clearance
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating rapid premium server ingestion latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Let's reset the data cleanly
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Roofing',
        projectDetails: '',
      });
    }, 1800);
  };

  return (
    <section className="py-24 px-6 bg-brand-charcoal" id="quote">
      <div className="container mx-auto max-w-4xl font-sans">
        <div className="text-center mb-16">
          <p className="text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] mb-3 font-sans">
            Begin Your Project
          </p>
          <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tight text-brand-slate font-display border-b border-brand-slate/10 pb-6 mb-4 max-w-xl mx-auto">
            Start Your Build Today
          </h2>
          <p className="text-brand-slate/75 mt-4 max-w-md mx-auto text-sm font-light">
            Request an on-site consultation and structured cost draft with zero obligation.
          </p>
        </div>

        {/* Form panel container */}
        <div className="bg-brand-slate border border-brand-slate/10 p-8 md:p-12 relative shadow-sm">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 max-w-2xl mx-auto"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="fullName" className="sr-only">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-charcoal border-none focus:ring-2 focus:ring-brand-crimson text-brand-slate p-5 text-xs font-bold tracking-[0.15em] placeholder:text-brand-slate/40 transition-all rounded-none uppercase ${
                        errors.fullName ? 'ring-2 ring-red-500' : ''
                      }`}
                      placeholder="FULL NAME"
                    />
                    {errors.fullName && (
                      <span className="text-[9px] text-red-400 font-extrabold uppercase tracking-widest mt-1">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-charcoal border-none focus:ring-2 focus:ring-brand-crimson text-brand-slate p-5 text-xs font-bold tracking-[0.15em] placeholder:text-brand-slate/40 transition-all rounded-none uppercase ${
                        errors.email ? 'ring-2 ring-red-500' : ''
                      }`}
                      placeholder="EMAIL ADDRESS"
                    />
                    {errors.email && (
                      <span className="text-[9px] text-red-400 font-extrabold uppercase tracking-widest mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-charcoal border-none focus:ring-2 focus:ring-brand-crimson text-brand-slate p-5 text-xs font-bold tracking-[0.15em] placeholder:text-brand-slate/40 transition-all rounded-none uppercase ${
                        errors.phone ? 'ring-2 ring-red-500' : ''
                      }`}
                      placeholder="PHONE NUMBER"
                    />
                    {errors.phone && (
                      <span className="text-[9px] text-red-400 font-extrabold uppercase tracking-widest mt-1">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Select Service Type */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="service" className="sr-only">Select Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-brand-charcoal border-none focus:ring-2 focus:ring-brand-crimson text-brand-slate p-5 text-xs font-bold tracking-[0.15em] uppercase transition-all rounded-none"
                    >
                      <option value="Roofing">Roofing System</option>
                      <option value="Remodeling">Luxury Remodeling</option>
                      <option value="Storm Repair">Storm Damage Recovery</option>
                    </select>
                  </div>
                </div>

                {/* Project details comments */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="projectDetails" className="sr-only">Tell Us About Your Project</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className="w-full bg-brand-charcoal border-none focus:ring-2 focus:ring-brand-crimson text-brand-slate p-5 text-xs font-bold tracking-[0.15em] placeholder:text-brand-slate/40 transition-all rounded-none uppercase"
                    placeholder="TELL US ABOUT YOUR PROJECT (SQUARE FOOTAGE, ROOF MATERIAL PREF, TIMELINES)"
                    rows={4}
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-crimson hover:bg-brand-charcoal text-brand-slate font-extrabold py-5 px-8 transition-all duration-300 uppercase tracking-[0.2em] text-xs active:scale-[0.99] flex items-center justify-center gap-3 rounded-none cursor-pointer border border-brand-crimson hover:border-brand-charcoal"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Ingesting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              // Success submission container
              <AnimatePresence mode="wait">
                {submissionStep < 4 ? (
                  <motion.div
                    key="ingesting-steps"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 max-w-lg mx-auto text-left font-sans"
                  >
                    <div className="flex items-center gap-3 mb-8 border-b border-brand-charcoal/15 pb-4">
                      <Loader2 className="w-5 h-5 text-brand-crimson animate-spin shrink-0" />
                      <span className="text-[10px] uppercase font-black tracking-[0.25em] text-brand-charcoal">
                        SECURE TRANSMISSION SECUREMENT PORTAL
                      </span>
                    </div>

                    <h4 className="text-xl uppercase font-display text-brand-charcoal mb-6">
                      Syncing Estimate Parameters
                    </h4>

                    <div className="space-y-5">
                      {/* Step 1 */}
                      <div className={`flex items-start gap-4 p-4 transition-all duration-300 ${submissionStep >= 1 ? 'bg-brand-charcoal/5 border-l-2 border-brand-crimson' : 'opacity-40'}`}>
                        <div className="mt-1 shrink-0">
                          {submissionStep > 1 ? (
                            <div className="w-5 h-5 bg-emerald-500 rounded-none flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                          ) : submissionStep === 1 ? (
                            <Loader2 className="w-5 h-5 text-brand-crimson animate-spin" />
                          ) : (
                            <div className="w-5 h-5 border border-brand-charcoal/30 flex items-center justify-center text-[10px] font-mono">01</div>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                            1. Ingesting Metadata Specifications
                          </p>
                          <p className="text-[10px] text-brand-charcoal/60 uppercase tracking-widest mt-1">
                            {submissionStep > 1 ? 'METADATA INGESTED & HASHED VIA SECURE CHANNEL' : 'PARSING MATERIALS, BUDGETING & PROPERTY SCOPE...'}
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className={`flex items-start gap-4 p-4 transition-all duration-300 ${submissionStep >= 2 ? 'bg-brand-charcoal/5 border-l-2 border-brand-crimson' : 'opacity-40'}`}>
                        <div className="mt-1 shrink-0">
                          {submissionStep > 2 ? (
                            <div className="w-5 h-5 bg-emerald-500 rounded-none flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                          ) : submissionStep === 2 ? (
                            <Loader2 className="w-5 h-5 text-brand-crimson animate-spin" />
                          ) : (
                            <div className="w-5 h-5 border border-brand-charcoal/30 flex items-center justify-center text-[10px] font-mono">02</div>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                            2. Regional Cadastral Mapping
                          </p>
                          <p className="text-[10px] text-brand-charcoal/60 uppercase tracking-widest mt-1">
                            {submissionStep > 2 ? 'COORDINATE COUPLING SECURED' : 'SYNCING SOUTH TEXAS LAREDO FIELD MAP GRID...'}
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className={`flex items-start gap-4 p-4 transition-all duration-300 ${submissionStep >= 3 ? 'bg-brand-charcoal/5 border-l-2 border-brand-crimson' : 'opacity-40'}`}>
                        <div className="mt-1 shrink-0">
                          {submissionStep > 3 ? (
                            <div className="w-5 h-5 bg-emerald-500 rounded-none flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                          ) : submissionStep === 3 ? (
                            <Loader2 className="w-5 h-5 text-brand-crimson animate-spin" />
                          ) : (
                            <div className="w-5 h-5 border border-brand-charcoal/30 flex items-center justify-center text-[10px] font-mono">03</div>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                            3. Match Certification Manager
                          </p>
                          <p className="text-[10px] text-brand-charcoal/60 uppercase tracking-widest mt-1">
                            {submissionStep > 3 ? 'CHIEF FIELD ESTIMATOR LOCKED FOR DISPATCH' : 'POLLING MASTER ELITE ROOFING SUPERVISOR STATUS...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="final-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 max-w-md mx-auto"
                  >
                    {/* Animated Ripple Success Rings */}
                    <div className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-brand-crimson/10 rounded-full border border-brand-crimson/20"
                      />
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        className="absolute inset-2 bg-brand-crimson/15 rounded-full border border-brand-crimson/30"
                      />
                      <div className="relative w-14 h-14 bg-brand-crimson rounded-none flex items-center justify-center shadow-lg border border-brand-crimson/45">
                        <Check className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-normal uppercase tracking-tight text-brand-charcoal font-display mb-4">
                      Request Transmitted
                    </h3>
                    
                    <div className="bg-brand-charcoal/5 border-l-2 border-brand-crimson p-4 text-left my-6">
                      <p className="text-[9px] font-mono tracking-widest text-brand-crimson uppercase mb-1 font-bold">
                        MATCHING STATUS: VERIFIED
                      </p>
                      <p className="text-[11px] text-brand-charcoal/85 uppercase tracking-wider leading-relaxed">
                        OFF-SITE SATELLITE PLOTTING COMPLETED. PRELIMINARY ESTIMATE REPORT REPORTED AND ASSIGNED.
                      </p>
                    </div>

                    <p className="text-brand-charcoal/80 font-light text-sm leading-relaxed mb-8">
                      Thank you for submitting your specifications. Our chief estimation manager on duty will reach out to schedule your on-site physical consultation within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 border border-brand-charcoal/20 text-brand-charcoal bg-transparent hover:bg-brand-crimson hover:text-brand-slate hover:border-brand-crimson transition-all text-[10px] font-bold uppercase tracking-widest rounded-none cursor-pointer"
                    >
                      Request Another Estimate
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
