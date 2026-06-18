import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Radio, Compass, Users, CheckSquare, Clock } from 'lucide-react';

interface ServiceArea {
  id: string;
  name: string;
  zones: string[];
  zipCodes: string[];
  activeProjects: number;
  responseTime: string;
  specialization: string;
  gridCoordinates: { [key: string]: boolean }; // Defines which coordinates in the map matrix belong to this region
}

export default function ServiceMap() {
  const regions: ServiceArea[] = [
    {
      id: 'north',
      name: 'North Laredo & Del Mar',
      zones: ['Del Mar', 'Regency', 'Winfield', 'Alexander', 'San Isidro'],
      zipCodes: ['78041', '78045'],
      activeProjects: 5,
      responseTime: '15 Mins',
      specialization: 'Custom Metal Systems & High-End Slate Trim',
      gridCoordinates: { '0-2': true, '0-3': true, '1-2': true, '1-3': true, '1-4': true }
    },
    {
      id: 'mines',
      name: 'Northwest / Mines Road',
      zones: ['Green Ranch', 'Greenblum', 'Riverbank', 'Mines Industrial'],
      zipCodes: ['78045'],
      activeProjects: 3,
      responseTime: '25 Mins',
      specialization: 'Ultra-Performance High-Wind Architectural Shingles',
      gridCoordinates: { '0-0': true, '0-1': true, '1-1': true, '2-1': true, '1-0': true }
    },
    {
      id: 'central',
      name: 'Central Laredo & Heights',
      zones: ['Laredo Heights', 'San Bernardo', 'Hillside', 'Downtown'],
      zipCodes: ['78040', '78041'],
      activeProjects: 4,
      responseTime: '18 Mins',
      specialization: 'Historic Restoration & Structural Framing Overhauls',
      gridCoordinates: { '2-2': true, '2-3': true, '3-2': true, '3-3': true }
    },
    {
      id: 'east',
      name: 'East Laredo Expressway',
      zones: ['Highway 359', 'Concord Hills', 'Laredo Ranch', 'Pueblo Nuevo'],
      zipCodes: ['78043', '78046'],
      activeProjects: 6,
      responseTime: '22 Mins',
      specialization: 'Premium Asphalt Shingles & Modern Decking Insulation',
      gridCoordinates: { '2-4': true, '3-4': true, '4-4': true, '4-3': true }
    },
    {
      id: 'south',
      name: 'South Laredo Estates',
      zones: ['Lomas Del Sur', 'Chacon', 'Las Flores', 'Sierra Vista'],
      zipCodes: ['78046'],
      activeProjects: 4,
      responseTime: '20 Mins',
      specialization: 'Reinforced Metal Underlayments & Storm Diagnostics',
      gridCoordinates: { '4-1': true, '4-2': true, '3-1': true, '4-0': true }
    }
  ];

  const [activeRegion, setActiveRegion] = useState<string>('north');
  const [dispatchedRegion, setDispatchedRegion] = useState<string | null>(null);
  const [dispatchProgress, setDispatchProgress] = useState<number>(0);

  // Trigger simulated crew dispatch mapping micro-interaction
  const handleTestDispatch = (regionId: string) => {
    setDispatchedRegion(regionId);
    setDispatchProgress(10);
    const interval = setInterval(() => {
      setDispatchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDispatchedRegion(null), 3000);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  const selectedRegion = regions.find(r => r.id === activeRegion) || regions[0];

  // Map representation matrix (5 columns x 5 rows grid)
  const rowsCount = 5;
  const colsCount = 5;

  const handleGridHover = (rIndex: number, cIndex: number) => {
    const key = `${rIndex}-${cIndex}`;
    const matchedRegion = regions.find(r => r.gridCoordinates[key]);
    if (matchedRegion) {
      setActiveRegion(matchedRegion.id);
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-charcoal border-b border-brand-slate/15 relative" id="servicemap">
      <div className="container mx-auto max-w-6xl font-sans relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-brand-slate/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-brand-crimson font-extrabold tracking-[0.3em] uppercase text-[10px] mb-3 font-sans">
              Municipal Precision
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-brand-slate font-display">
              Service Coordinates
            </h2>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-xs text-brand-slate/60 leading-relaxed font-light">
              Interactive structural coverage across Laredo & Webb County. Active zones are persistently monitored by real-time dispatchers ensuring immediate estimator arrival.
            </p>
          </div>
        </div>

        {/* Primary Interactive Map Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Regional interactive cards selection (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-3 bg-brand-slate text-brand-charcoal text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 border border-brand-slate">
              <Radio className="w-3.5 h-3.5 text-brand-crimson animate-pulse" />
              <span>Select Region to Track Fleet status & Active Spec</span>
            </div>

            <div className="space-y-3">
              {regions.map((region) => {
                const isActive = activeRegion === region.id;
                return (
                  <div
                    key={region.id}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onClick={() => setActiveRegion(region.id)}
                    className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative rounded-none ${
                      isActive 
                        ? 'bg-brand-sand/90 border-brand-crimson/50 shadow-sm' 
                        : 'bg-brand-sand/15 border-brand-slate/10 hover:border-brand-slate/30'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-crimson" />
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${isActive ? 'text-brand-crimson' : 'text-brand-slate/40'}`} />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-brand-slate">
                          {region.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-mono text-brand-slate/50 font-bold uppercase">
                          Zip: {region.zipCodes.join(', ')}
                        </span>
                        <span className="px-2.5 py-0.5 bg-brand-crimson/10 border border-brand-crimson/20 text-brand-crimson text-[9px] font-extrabold uppercase tracking-widest leading-none">
                          {region.activeProjects} Active Builds
                        </span>
                      </div>
                    </div>

                    {/* Collapsible expanded detail */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-brand-slate/10 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-[10px] text-brand-slate/40 uppercase tracking-widest font-extrabold mb-1">
                                Coverage Neighborhoods
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {region.zones.map((z, idx) => (
                                  <span key={idx} className="text-[10px] bg-brand-charcoal text-brand-slate border border-brand-slate/10 px-2 py-0.5 font-medium">
                                    {z}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] text-brand-slate/40 uppercase tracking-widest font-extrabold mb-1">
                                Core Spec Focus
                              </p>
                              <p className="text-xs text-brand-slate/80 leading-relaxed font-light">
                                {region.specialization}
                              </p>
                            </div>
                          </div>

                          {/* Crew Dispatch Simulator Button */}
                          <div className="mt-4 pt-3 border-t border-brand-slate/10 flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-[10px] text-brand-slate/60 font-bold uppercase">
                              <Clock className="w-3.5 h-3.5 text-brand-crimson" />
                              <span>Average Estimator Dispatch: <strong className="text-brand-slate">{region.responseTime}</strong></span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTestDispatch(region.id);
                              }}
                              disabled={dispatchedRegion !== null}
                              className="px-4 py-1.5 bg-brand-slate hover:bg-brand-crimson text-brand-charcoal hover:text-white border border-brand-slate hover:border-brand-crimson font-bold text-[9px] uppercase tracking-[0.15em] transition-all"
                            >
                              {dispatchedRegion === region.id ? `Simulating Dispatch... ${dispatchProgress}%` : 'Test Live Estimator Dispatch'}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Highly customized visual Grid Matrix Map of Laredo (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Map Container with technical borders and blueprint styling */}
            <div className="w-full bg-brand-sand border border-brand-slate/15 p-6 relative aspect-square max-w-sm flex flex-col justify-between group rounded-none">
              
              {/* Technical Compass and Grid Header */}
              <div className="flex items-center justify-between border-b border-brand-slate/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-brand-crimson animate-spin-slow" />
                  <span className="text-[9px] font-mono text-brand-slate/50 font-bold uppercase">
                    Map Matrix Grid v2.4
                  </span>
                </div>
                <div className="text-[9px] font-mono text-brand-slate/50 font-bold uppercase">
                  Laredo Texas Bounds
                </div>
              </div>

              {/* Dotted geometric background layer over index */}
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none" 
                style={{ 
                  backgroundImage: 'radial-gradient(#1A1A1A 0.8px, transparent 0.8px)', 
                  backgroundSize: '16px 16px' 
                }} 
              />

              {/* Coordinate Grid representation */}
              <div className="grid grid-cols-5 grid-rows-5 gap-2 w-full h-full relative z-10">
                {Array.from({ length: rowsCount }).map((_, rIdx) => 
                  Array.from({ length: colsCount }).map((_, cIdx) => {
                    const coordKey = `${rIdx}-${cIdx}`;
                    const belongsToRegions = regions.filter(r => r.gridCoordinates[coordKey]);
                    const isOccupiedByActive = belongsToRegions.some(r => r.id === activeRegion);
                    const hasRegion = belongsToRegions.length > 0;
                    
                    // Specific highlight labels on boundaries to make it look highly architectural
                    let textLabel = '';
                    if (rIdx === 0 && cIdx === 2) textLabel = 'DEL MAR';
                    if (rIdx === 2 && cIdx === 2) textLabel = 'HEIGHTS';
                    if (rIdx === 4 && cIdx === 1) textLabel = 'SOUTH';
                    if (rIdx === 1 && cIdx === 0) textLabel = 'MINES';
                    if (rIdx === 3 && cIdx === 4) textLabel = 'E-EXP';

                    // Simulation dispatch ripple
                    const isDispatchRipple = dispatchedRegion && regions.find(r => r.id === dispatchedRegion)?.gridCoordinates[coordKey];

                    return (
                      <div
                        key={coordKey}
                        onMouseEnter={() => handleGridHover(rIdx, cIdx)}
                        className={`relative transition-all duration-300 flex items-center justify-center cursor-pointer border ${
                          isOccupiedByActive 
                            ? 'bg-brand-crimson/25 border-brand-crimson scale-102 z-20' 
                            : isDispatchRipple
                            ? 'bg-brand-slate/40 border-brand-crimson/70 animate-pulse'
                            : hasRegion 
                            ? 'bg-brand-slate/5 border-brand-slate/10 hover:bg-brand-slate/10 hover:border-brand-slate/20'
                            : 'border-brand-slate/5 opacity-25'
                        }`}
                      >
                        {/* Pulse circle for highly active hubs */}
                        {isOccupiedByActive && (
                          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-crimson rounded-full animate-ping" />
                        )}

                        <span className="text-[7px] font-mono text-brand-slate/35 absolute bottom-1 left-1 leading-none select-none">
                          {rIdx},{cIdx}
                        </span>

                        {textLabel && (
                          <div className={`text-[7px] font-extrabold uppercase tracking-wide leading-tight text-center px-1 font-sans ${
                            isOccupiedByActive ? 'text-brand-slate' : 'text-brand-slate/60'
                          }`}>
                            {textLabel}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Bottom interactive status legend */}
              <div className="border-t border-brand-slate/10 pt-3 mt-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-brand-crimson/35 border border-brand-crimson block" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-slate">
                    Highlighted Zone
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-brand-slate/10 border border-brand-slate/15 block" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-slate/60">
                    Garza Coverage
                  </span>
                </div>
                <div className="text-[9px] text-brand-crimson font-light tracking-widest font-mono">
                  {selectedRegion.name.toUpperCase()} HUB ACTIVE
                </div>
              </div>

            </div>

            {/* Crew coordinates simulation output */}
            <div className="mt-4 p-4 bg-brand-slate text-brand-charcoal border border-brand-slate/20 w-full max-w-sm font-sans space-y-2">
              <div className="flex items-center gap-2 justify-between border-b border-brand-charcoal/20 pb-2">
                <div className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-brand-crimson" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Garza Fleet Monitor</span>
                </div>
                <span className="text-[9px] font-mono bg-brand-crimson px-1.5 py-0.5 text-brand-slate font-bold">LIVE STREAM</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] uppercase">
                <div>
                  <span className="block text-brand-charcoal/40">Tracking Station:</span>
                  <span className="font-bold text-xs">A-HUB LAREDO</span>
                </div>
                <div>
                  <span className="block text-brand-charcoal/40 font-sans">Active Crews Dispatching:</span>
                  <span className="font-bold text-xs">#1, #3, #5, #8</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
