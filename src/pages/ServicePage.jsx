import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Settings, Award, ArrowRight, Zap, Target } from 'lucide-react';
import Services from '../components/sections/Services'; 

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Industrial Pillars Data (Icons Updated to Cyan)
  const pillars = [
    { title: "Turnkey Solutions", desc: "From CAD design to final assembly, we handle it all.", icon: <Settings size={24} className="text-[#5ce1e6]" /> },
    { title: "Precision Engineering", desc: "Fraction-of-degree accuracy in every bend and cut.", icon: <Target size={24} className="text-[#5ce1e6]" /> },
    { title: "Quality Assured", desc: "Rigorous 9-tank pre-treatment and testing protocols.", icon: <Award size={24} className="text-[#5ce1e6]" /> },
  ];

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] w-full pt-32 overflow-x-hidden relative">
      
      {/* --- BACKGROUND GHOST TEXT (Brand Identity) --- */}
      <div className="absolute top-40 -left-20 text-[20vw] font-black text-white/2 select-none pointer-events-none uppercase leading-none">
        APS TECH
      </div>

      <div className="max-w-350 mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* --- PREMIUM HEADER --- */}
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
                {/* Cyan Line */}
                <div className="h-[1px] w-12 bg-[#5ce1e6]" />
                {/* Cyan Text */}
                <span className="text-[#5ce1e6] font-mono tracking-[0.4em] uppercase text-xs">
                    Engineering Excellence
                </span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              INDUSTRIAL <br/> 
              {/* Cyan Italic Text */}
              <span className="text-[#5ce1e6] italic font-serif text-5xl md:text-[8rem]">SERVICES.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
                {/* Cyan Border Line */}
                <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/30 pl-8">
                  Leveraging technical expertise and years of experience to provide turnkey manufacturing 
                  solutions across various industrial sectors with an emphasis on innovation and extreme accuracy.
                </p>
                
                <div className="flex gap-4">
                    {/* Cyan Button (Black Text for Contrast) */}
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 py-4 bg-[#5ce1e6] text-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-white transition-colors duration-300"
                    >
                        Explore Capabilities <ArrowRight size={14} />
                    </motion.button>
                </div>
            </div>
          </motion.div>
        </header>

        {/* --- INDUSTRIAL PILLARS (Why Choose Us?) --- */}
        <section className="mb-40 grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    // Cyan Hover Border & Shadow
                    className="p-10 rounded-[3rem] bg-white/2 border border-white/5 group hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.05)] transition-all duration-500"
                >
                    <div className="mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                    <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter text-white group-hover:text-[#5ce1e6] transition-colors duration-500">{pillar.title}</h3>
                    <p className="text-white/30 text-xs font-medium leading-relaxed uppercase tracking-wider group-hover:text-white/50 transition-colors duration-500">{pillar.desc}</p>
                </motion.div>
            ))}
        </section>

        {/* --- MAIN SHUTTER EFFECT SECTION (The Services Component) --- */}
        <section className="mb-40">
            <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Core <span className="text-[#5ce1e6] italic">Departments.</span></h2>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] hidden md:block">Scroll to explore categories</span>
            </div>
            
            <div className="bg-white/1 rounded-[4rem] border border-white/5 overflow-hidden">
                <Services />
            </div>
        </section>

        {/* --- BOTTOM CTA SECTION --- */}
        <section className="py-40 text-center relative">
            {/* Cyan Glow Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#5ce1e6]/10 rounded-full blur-[150px] pointer-events-none" />
            
            <motion.div 
                whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                {/* Cyan Icon */}
                <Zap className="text-[#5ce1e6] mx-auto mb-8" size={48} />
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Ready to Build <br/> <span className="text-white/20 italic">The Future?</span></h2>
                {/* Cyan Outline Button */}
                <motion.a 
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block px-12 py-6 border-2 border-[#5ce1e6] text-[#5ce1e6] text-xs font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#5ce1e6] hover:text-black transition-all duration-300"
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