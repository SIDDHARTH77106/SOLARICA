import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../data/constants'; 
import { ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  const smoothTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    // Background updated to match site theme (#0b120f)
    <section className="bg-[#0b120f] py-32 px-6 md:px-24 min-h-screen flex flex-col justify-center transition-colors duration-500">
      
      <div className="mb-16">
        {/* Updated Text Color to Logo Cyan */}
        <span className="text-[#5ce1e6] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
          Precision & Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Our specialized <span className="text-transparent border-white/10 border-b-2">Services</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- LEFT: LIST --- */}
        <div className="lg:col-span-5 space-y-0 relative">
          {/* Active Indicator Dot - Updated to Cyan with Glow */}
          <motion.div 
            animate={{ y: servicesData.findIndex(s => s.id === activeService.id) * 88 }}
            transition={smoothTransition}
            className="absolute -left-6 top-[38px] w-2 h-2 bg-[#5ce1e6] rounded-full shadow-[0_0_15px_#5ce1e6] hidden md:block"
          />

          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setActiveService(service)}
              className="group cursor-pointer py-6 border-b border-white/5 flex items-center justify-between h-[88px]"
            >
              <div className="flex items-center gap-8">
                {/* ID Color - Updated Logic */}
                <span className={`text-[10px] font-mono transition-colors duration-500 ${
                  activeService.id === service.id ? 'text-[#5ce1e6]' : 'text-white/20'
                }`}>
                  {service.id}
                </span>
                <h3 className={`text-2xl md:text-4xl font-bold uppercase transition-all duration-700 ${
                  activeService.id === service.id ? 'text-white scale-105 origin-left' : 'text-white/20 group-hover:text-white/40'
                }`}>
                  {service.title}
                </h3>
              </div>
              <motion.div
                animate={{ x: activeService.id === service.id ? 0 : -20, opacity: activeService.id === service.id ? 1 : 0 }}
                transition={smoothTransition}
              >
                {/* Arrow Icon - Updated to Cyan */}
                <ArrowRight className="text-[#5ce1e6]" size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* --- RIGHT: THE VISUAL --- */}
        <div className="lg:col-span-7 relative h-[400px] md:h-[600px] w-full mt-10 lg:mt-0">
          <div className="absolute -inset-4 border border-white/5 rounded-[3rem] pointer-events-none" />

          {/* Container BG Updated */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0b120f] shadow-2xl">
            
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeService.id}
                initial={{ clipPath: 'inset(100% 0% 0% 0%)', zIndex: 20 }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)', zIndex: 20 }}
                exit={{ clipPath: 'inset(0% 0% 0% 0%)', zIndex: 10, opacity: 0.9 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/50 z-10" />
                
                <img
                  src={`/${activeService.image}`}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-10 left-10 z-20 right-10"
                >
                  <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-3">
                      {/* Sparkle Icon & Label - Updated to Cyan */}
                      <Sparkles className="text-[#5ce1e6]" size={14} />
                      <span className="text-[10px] font-bold text-[#5ce1e6] uppercase tracking-widest">Premium Service</span>
                    </div>
                    <h4 className="text-xl md:text-3xl font-black text-white uppercase mb-2">
                      {activeService.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed font-medium mb-4">
                      {activeService.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {activeService.details?.map((detail, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[9px] text-white/80 uppercase font-bold">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;