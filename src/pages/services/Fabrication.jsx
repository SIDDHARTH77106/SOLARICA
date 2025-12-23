import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Pipette, Hammer, Award, Boxes, Target } from 'lucide-react';

const Fabrication = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const capabilities = [
    {
      title: "Welding Expertise",
      desc: "Fully equipped department specialized in MIG, TIG, and Spot Welding for MS, SS, and Aluminium.",
      icon: <Flame size={32} />
    },
    {
      title: "Material Range",
      desc: "From delicate thin sheet metal to robust square tubes, pipes, and heavy industrial plates.",
      icon: <Boxes size={32} />
    },
    {
      title: "In-house Finishing",
      desc: "Comprehensive polishing and finishing done on-site to ensure the highest quality standards.",
      icon: <Target size={32} />
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
            className="relative z-20"
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-xs">Precision / Fabrication</span>
            </div>
            
            {/* FIX: Font size adjusted to prevent overlap */}
            <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] mb-8 uppercase text-white break-words">
              Heavy <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white italic font-serif">
                Structural.
              </span>
            </h1>
            
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-8 mb-10 max-w-lg">
              Our welding department combines skilled craftsmanship with high-end technology to deliver fabrication solutions that meet the highest global specifications.
            </p>
          </motion.div>

          {/* Industrial Image Frame (Welding Sparks) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] md:h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
              alt="Industrial Welding" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#5ce1e6]/5 to-transparent mix-blend-overlay" />
            
            <div className="absolute bottom-8 right-8 p-6 bg-black/60 backdrop-blur-2xl rounded-3xl border border-[#5ce1e6]/30 shadow-2xl">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-[#5ce1e6] rounded-full animate-pulse shadow-[0_0_10px_#5ce1e6]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Live Shop Floor Accuracy</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE CAPABILITIES (Cards) --- */}
      <section className="px-8 md:px-24 mb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.05)] transition-all duration-500"
            >
              <div className="text-[#5ce1e6] mb-8 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                {cap.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter text-white group-hover:text-[#5ce1e6] transition-colors">{cap.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL SPECS & FINISHING --- */}
      <section className="px-8 md:px-24 py-32 bg-[#14201a]/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                {/* Image 1: Metal Polishing */}
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 group">
                   <img 
                     src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
                     alt="Metal Polish" 
                     className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                   />
                </div>
                {/* Image 2: Heavy Welding (Fixed URL) */}
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mt-12 border border-white/10 group">
                   <img 
                     src="https://images.unsplash.com/photo-1530124560676-4fbc912f270a?q=80&w=2070&auto=format&fit=crop" 
                     alt="TIG Welding" 
                     className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                   />
                </div>
             </div>
             
             {/* Decorative Badge */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#5ce1e6] rounded-full flex flex-col items-center justify-center text-black shadow-[0_0_50px_rgba(92,225,230,0.3)] z-20">
                <Award size={32} />
                <span className="text-[10px] font-black uppercase mt-2">Elite Finish</span>
             </div>
          </div>

          <div>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-none text-white">
               Welding <br/> <span className="text-[#5ce1e6] italic font-serif">Perfection.</span>
             </h2>
             
             <div className="space-y-8">
                <div>
                   <h4 className="text-xs font-black uppercase tracking-widest text-[#5ce1e6] mb-4">Material Specialization</h4>
                   <div className="flex flex-wrap gap-3">
                      {["Mild Steel (MS)", "Stainless Steel (SS)", "Aluminium", "Heavy Plates"].map(tag => (
                        <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest text-white/70 hover:border-[#5ce1e6]/50 hover:text-[#5ce1e6] transition-all cursor-default">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-[#5ce1e6]/30 transition-all duration-500">
                   <h4 className="text-lg font-bold uppercase mb-4 flex items-center gap-3 text-white">
                     <Hammer className="text-[#5ce1e6]" size={20} /> In-house Polishing
                   </h4>
                   <p className="text-white/40 text-sm font-light leading-relaxed">
                     Every fabricated component goes through a rigorous in-house buffing and polishing process, ensuring the highest specification and aesthetic quality before delivery.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 text-center opacity-10 pointer-events-none select-none relative z-10">
         <h2 className="text-[12vw] font-black uppercase leading-none tracking-[0.1em] text-[#5ce1e6]">WELDING</h2>
      </section>

    </div>
  );
};

export default Fabrication;