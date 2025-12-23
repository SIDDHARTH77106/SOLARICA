import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Activity, Target, Droplets, Cog, PenTool, Award } from 'lucide-react';

const MachiningUnit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const machineTools = [
    { name: "Turning", icon: <Cog size={20} /> },
    { name: "Milling", icon: <Activity size={20} /> },
    { name: "DRO Systems", icon: <Target size={20} /> },
    { name: "VMC Ops", icon: <Settings size={20} /> },
    { name: "Grinding", icon: <PenTool size={20} /> },
    { name: "Rotary", icon: <Activity size={20} /> },
  ];

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] pt-32 pb-20 overflow-hidden relative">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2e3192]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#5ce1e6]/10 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO: MACHINING EXCELLENCE --- */}
      <section className="relative px-8 md:px-24 mb-24 z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-xs">Ecosystem / Machining</span>
            </div>
            
            <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white">
              Micro <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white italic font-serif text-5xl md:text-[7rem]">Accuracy.</span>
            </h1>
            
            <p className="text-white/50 text-xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-8 mb-10">
              Our facility is equipped with branded machine tools and managed by highly trained operators to deliver extreme accuracy at every fundamental stage of manufacturing.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {machineTools.map((tool, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#5ce1e6]/80 hover:border-[#5ce1e6]/50 hover:text-[#5ce1e6] transition-all cursor-default">
                   {React.cloneElement(tool.icon, { className: "text-[#5ce1e6]" })} {tool.name}
                 </div>
               ))}
            </div>
          </motion.div>

          {/* High-Tech Machining Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop" 
              alt="CNC Machining" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#5ce1e6]/5 to-transparent mix-blend-overlay" />
            
            <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-2xl rounded-3xl border border-[#5ce1e6]/30 shadow-2xl">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-[#5ce1e6] rounded-full animate-pulse shadow-[0_0_10px_#5ce1e6]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Branded Machine Tools</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SS SPECIALIZATION SECTION --- */}
      <section className="px-8 md:px-24 mb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 md:p-20 overflow-hidden relative hover:border-[#5ce1e6]/20 transition-all duration-500">
          {/* Ghost Text */}
          <div className="absolute -top-10 -right-10 text-[15vw] font-black text-[#5ce1e6]/[0.02] select-none pointer-events-none uppercase">STAINLESS</div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none text-white">
                 SS Metal <br/> <span className="text-[#5ce1e6] italic font-serif">Mastery.</span>
               </h2>
               <p className="text-white/50 text-lg font-light mb-10 max-w-lg">
                 We have a specialized team for SS metal working, featuring properly trained Argon welders who deliver flawlessly welded and polished products.
               </p>
               
               <div className="space-y-4">
                 {[
                   "Major Assembly Benches",
                   "Argon Welded Precision",
                   "Buffed & Mirror Polished Jobs"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/80 group">
                     <div className="w-8 h-8 rounded-full bg-[#5ce1e6]/10 flex items-center justify-center border border-[#5ce1e6]/20 group-hover:bg-[#5ce1e6] transition-colors duration-300">
                       <ShieldCheck size={16} className="text-[#5ce1e6] group-hover:text-black transition-colors duration-300" />
                     </div>
                     <span className="group-hover:text-[#5ce1e6] transition-colors duration-300">{item}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
               <div className="h-96 rounded-[3rem] overflow-hidden border border-white/10 group">
                  <img src="https://images.unsplash.com/photo-1530124560676-4fbc912f270a?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Welding" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINISHES: 9-TANK & COATING --- */}
      <section className="px-8 md:px-24 py-32 border-y border-white/5 bg-[#0f1c15]/30 backdrop-blur-sm relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-[10px]">Surface Treatment</span>
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">Ultimate <span className="italic font-serif text-[#5ce1e6]">Finishes.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {/* Sand Blasting */}
              <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-[#5ce1e6]/30 transition-all group">
                 <div className="w-16 h-16 rounded-full bg-[#5ce1e6]/10 flex items-center justify-center text-[#5ce1e6] mb-8 group-hover:bg-[#5ce1e6] group-hover:text-black transition-all">
                    <Droplets size={28} />
                 </div>
                 <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-[#5ce1e6] transition-colors">Sand Blasting</h3>
                 <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">Preparation of surfaces through high-pressure abrasive treatment for perfect coating adhesion.</p>
              </motion.div>

              {/* 9-Tank Process (Highlighted) */}
              <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3.5rem] bg-[#5ce1e6] text-black flex flex-col justify-between shadow-[0_0_40px_rgba(92,225,230,0.2)]">
                 <Award size={40} className="text-black" />
                 <div>
                    <h3 className="text-2xl font-bold uppercase mb-4 mt-8 italic">9-Tank Process</h3>
                    <p className="text-black/70 font-bold text-sm leading-relaxed">Our rigorous nine-tank pre-treatment ensures industrial-grade longevity and anti-corrosion protection.</p>
                 </div>
              </motion.div>

              {/* Powder Coating */}
              <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-[#5ce1e6]/30 transition-all group">
                 <div className="w-16 h-16 rounded-full bg-[#5ce1e6]/10 flex items-center justify-center text-[#5ce1e6] mb-8 group-hover:bg-[#5ce1e6] group-hover:text-black transition-all">
                    <Settings size={28} />
                 </div>
                 <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-[#5ce1e6] transition-colors">Powder Coating</h3>
                 <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">High-quality electrostatic application providing a premium, durable, and aesthetic finish to every product.</p>
              </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA DECOR --- */}
      <section className="py-20 text-center select-none opacity-[0.03] pointer-events-none relative z-10">
         <h4 className="text-[12vw] font-black uppercase leading-none text-[#5ce1e6]">PRECISION</h4>
      </section>

    </div>
  );
};

export default MachiningUnit;