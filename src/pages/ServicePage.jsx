import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Award, ArrowRight, Zap, Target } from 'lucide-react';
import Services from '../components/sections/Services'; 

const ServicePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // --- PARALLAX ANIMATION SETUP ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Text Move Speed
  const yBgText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.2], [0.1, 0]);

  // Industrial Pillars Data
  const pillars = [
    { title: "Turnkey Solutions", desc: "From CAD design to final assembly, we handle it all.", icon: <Settings size={24} className="text-[#5ce1e6]" /> },
    { title: "Precision Engineering", desc: "Fraction-of-degree accuracy in every bend and cut.", icon: <Target size={24} className="text-[#5ce1e6]" /> },
    { title: "Quality Assured", desc: "Rigorous 9-tank pre-treatment and testing protocols.", icon: <Award size={24} className="text-[#5ce1e6]" /> },
  ];

  return (
    <div ref={containerRef} className="bg-[#0b120f] min-h-screen text-[#e6e2d6] w-full pt-24 md:pt-32 overflow-hidden relative">
      
      {/* --- ANIMATED BACKGROUND GHOST TEXT (Parallax Restored) --- */}
      <motion.div 
        style={{ y: yBgText, opacity: opacityBg }}
        className="absolute top-20 md:top-40 -left-10 md:-left-20 text-[20vw] font-black text-white pointer-events-none uppercase leading-none z-0 select-none"
      >
        APS TECH
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* --- PREMIUM HEADER --- */}
        <header className="mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Smooth Ease
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: 48 }} 
                  transition={{ delay: 0.5, duration: 0.8 }} 
                  className="h-[1px] bg-[#5ce1e6]" 
                />
                <span className="text-[#5ce1e6] font-mono tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
                    Engineering Excellence
                </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 uppercase">
              INDUSTRIAL <br/> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[#5ce1e6] italic font-serif text-4xl md:text-7xl lg:text-[8rem]"
              >
                SERVICES.
              </motion.span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/40 text-base md:text-2xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/30 pl-6 md:pl-8"
                >
                  Leveraging technical expertise and years of experience to provide turnkey manufacturing 
                  solutions across various industrial sectors with an emphasis on innovation and extreme accuracy.
                </motion.p>
                
                <div className="flex gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 md:px-8 py-3 md:py-4 bg-[#5ce1e6] text-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-white transition-colors duration-300 w-full md:w-auto justify-center"
                    >
                        Explore Capabilities <ArrowRight size={14} />
                    </motion.button>
                </div>
            </div>
          </motion.div>
        </header>

        {/* --- INDUSTRIAL PILLARS (Staggered Entry Animation) --- */}
        <section className="mb-20 md:mb-40 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 group hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.05)] transition-all duration-500"
                >
                    <div className="mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold uppercase mb-4 tracking-tighter text-white group-hover:text-[#5ce1e6] transition-colors duration-500">{pillar.title}</h3>
                    <p className="text-white/30 text-xs font-medium leading-relaxed uppercase tracking-wider group-hover:text-white/50 transition-colors duration-500">{pillar.desc}</p>
                </motion.div>
            ))}
        </section>

        {/* --- MAIN SHUTTER EFFECT SECTION --- */}
        <section className="mb-20 md:mb-40">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/5 pb-8 gap-4"
            >
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">Core <span className="text-[#5ce1e6] italic">Departments.</span></h2>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] hidden md:block">Scroll to explore categories</span>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] rounded-[2rem] md:rounded-[4rem] border border-white/5 overflow-hidden"
            >
                <Services />
            </motion.div>
        </section>

        {/* --- BOTTOM CTA SECTION --- */}
        <section className="py-20 md:py-40 text-center relative">
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-80 h-40 md:h-80 bg-[#5ce1e6]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" 
            />
            
            <motion.div 
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <Zap className="text-[#5ce1e6] mx-auto mb-6 md:mb-8" size={32} />
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12">Ready to Build <br/> <span className="text-white/20 italic">The Future?</span></h2>
                
                <motion.a 
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 md:px-12 py-4 md:py-6 border-2 border-[#5ce1e6] text-[#5ce1e6] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#5ce1e6] hover:text-black transition-all duration-300 w-full md:w-auto"
                >
                    Get a Technical Quote
                </motion.a>
            </motion.div>
        </section>

      </div>
    </div>
  );
};

export default ServicePage;