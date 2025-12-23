import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, ShieldCheck, Award, Sparkles, Layers, Ruler, FlaskConical } from 'lucide-react';

const SSSpecialization = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const features = [
    {
      title: "Argon Welding (TIG)",
      desc: "Our welders are certified in TIG/Argon welding, ensuring seamless joints with zero carbon contamination and extreme durability.",
      icon: <Layers size={32} />
    },
    {
      title: "Mirror Aesthetics",
      desc: "Specialized in High-Gloss Mirror and Matte buffing for pharmaceutical and food-grade industrial standards.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Grade Integrity",
      desc: "Expertise in handling high-grade alloys like SS-304, SS-316, and SS-410 for extreme corrosion resistance.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] pt-32 pb-20 overflow-hidden relative">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2e3192]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#5ce1e6]/10 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative px-8 md:px-24 mb-24 z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-xs">Material Excellence / Stainless Steel</span>
            </div>
            
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white">
              Surgical <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white italic font-serif text-5xl md:text-[7rem]">Precision.</span>
            </h1>
            
            <p className="text-white/50 text-xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-8 mb-10">
              We provide end-to-end Stainless Steel solutions, from precision sheet metal jobs to heavy-duty major assembly benches, finished to the highest mirror-polish standards.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] md:h-[550px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop" 
              alt="Stainless Steel Finishing" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#5ce1e6]/5 to-transparent mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* --- CORE CAPABILITIES --- */}
      <section className="px-8 md:px-24 mb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.05)] transition-all duration-500"
            >
              <div className="text-[#5ce1e6] mb-8 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter text-white group-hover:text-[#5ce1e6] transition-colors">{feat.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINISHING & TREATMENT (The 9-Tank Process) --- */}
      <section className="px-8 md:px-24 py-32 bg-[#14201a]/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[3rem] overflow-hidden aspect-square border border-white/10 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531269223141-bc730419614c?q=80&w=1974&auto=format&fit=crop" 
                alt="SS Surface Treatment" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#5ce1e6]/5 mix-blend-overlay" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-[#5ce1e6]/30">
                      <h5 className="text-[#5ce1e6] text-2xl font-black">9-TANK</h5>
                      <p className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Pre-Treatment</p>
                   </div>
                 </div>
              </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-white">
              Surface <br/> <span className="text-[#5ce1e6] italic font-serif">Integrity.</span>
            </h2>
            <div className="space-y-6">
               <div className="flex gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#5ce1e6]/30 transition-all group">
                  <FlaskConical className="text-[#5ce1e6] shrink-0 group-hover:rotate-12 transition-transform" />
                  <div>
                    <h4 className="text-sm font-bold uppercase mb-1 text-white group-hover:text-[#5ce1e6] transition-colors">Chemical Passivation</h4>
                    <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">Ensuring zero rust and maximum material life for SS components.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#5ce1e6]/30 transition-all group">
                  <Hammer className="text-[#5ce1e6] shrink-0 group-hover:rotate-12 transition-transform" />
                  <div>
                    <h4 className="text-sm font-bold uppercase mb-1 text-white group-hover:text-[#5ce1e6] transition-colors">Mirror-Buffing</h4>
                    <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">Achieving mirror-like finishes that exceed standard industrial aesthetics.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECOR --- */}
      <div className="h-[20vh] flex items-center justify-center opacity-[0.03] select-none uppercase font-black text-[12vw] text-[#5ce1e6] pointer-events-none">
        Stainless
      </div>

    </div>
  );
};

export default SSSpecialization;