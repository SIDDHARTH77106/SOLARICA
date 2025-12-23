import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, ShieldCheck, Zap, Maximize, Ruler, Box, ChevronRight } from 'lucide-react';

const SheetMetal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const stats = [
    { label: "Material Thickness", value: "0.5mm - 16mm", icon: <Maximize size={20} /> },
    { label: "Max Processing Length", value: "4 Meters", icon: <Ruler size={20} /> },
    { label: "Precision Level", value: "Fraction of Degrees", icon: <Zap size={20} /> },
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
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-xs">Manufacturing / Sheet-Metal</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white">
              Laser <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white italic font-serif text-5xl md:text-[7rem]">Precision.</span>
            </h1>
            
            <p className="text-white/50 text-xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-8 mb-10">
              We provide Aluminium, MS, SS, and GI sheet metal laser cut products at dazzling speed with unmatched accuracy and industrial-grade precision.
            </p>
          </motion.div>

          {/* High-End Industrial Image (Laser Sparks) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[450px] md:h-[550px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1534324482290-e147f8687790?q=80&w=2069&auto=format&fit=crop" 
              alt="Laser Cutting Process" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#5ce1e6]/5 to-transparent mix-blend-overlay" />
            
            {/* Floating Tag */}
            <div className="absolute top-10 right-10 px-6 py-3 bg-[#5ce1e6] rounded-full text-black font-black text-xs uppercase tracking-tighter shadow-lg shadow-[#5ce1e6]/20">
              Dazzling Speed
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECHNICAL STATS GRID --- */}
      <section className="px-8 md:px-24 mb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.05)] transition-all group"
            >
              <div className="text-[#5ce1e6] mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
              <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-white/50 transition-colors">{stat.label}</p>
              <h4 className="text-3xl font-bold uppercase tracking-tighter text-white group-hover:text-[#5ce1e6] transition-colors">{stat.value}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BENDING & FOLDING SECTION --- */}
      <section className="px-8 md:px-24 py-32 bg-[#14201a]/30 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden aspect-video border border-white/10 group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop" 
                  alt="CNC Bending" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#5ce1e6]/5 mix-blend-overlay" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-white">
                World-Class <br/> <span className="text-[#5ce1e6] italic font-serif">Folding.</span>
              </h2>
              <p className="text-white/40 mb-10 text-lg font-light leading-relaxed border-l-2 border-[#5ce1e6]/20 pl-6">
                We handle precision folding of angles, accurate to fraction of degrees. Our modular tooling ensures perfect bends across a wide range of materials.
              </p>
              
              <div className="space-y-4">
                {["Aluminium", "Mild Steel (MS)", "Stainless Steel (SS)", "Galvanized Iron (GI)"].map((metal) => (
                  <motion.div 
                    key={metal} 
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between p-5 bg-white/[0.03] rounded-2xl border border-white/5 group hover:bg-[#5ce1e6] hover:border-[#5ce1e6] transition-all cursor-default"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-black transition-colors">{metal}</span>
                    <ChevronRight size={16} className="text-[#5ce1e6] group-hover:text-black transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- KEY CAPABILITIES LIST --- */}
      <section className="px-8 md:px-24 py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto text-center">
           <h3 className="text-3xl font-bold uppercase mb-16 tracking-widest text-white">Core Capabilities</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-6 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#5ce1e6]/20 to-transparent" />

              {[
                { title: "Laser Cutting", desc: "High precision sparks" },
                { title: "CNC Bending", desc: "Fraction of degrees" },
                { title: "VMC Machining", desc: "Complex parts" },
                { title: "Tested Assembly", desc: "Turnkey ready" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center group relative z-10"
                >
                  <div className="w-12 h-12 rounded-full border border-[#5ce1e6]/30 bg-[#0b120f] flex items-center justify-center mb-6 group-hover:bg-[#5ce1e6] transition-colors duration-300 shadow-[0_0_15px_#5ce1e6]">
                    <ShieldCheck className="text-[#5ce1e6] group-hover:text-black transition-colors duration-300" size={20} />
                  </div>
                  <h5 className="text-xs font-black uppercase mb-2 tracking-widest text-white group-hover:text-[#5ce1e6] transition-colors">{item.title}</h5>
                  <p className="text-[10px] text-white/30 uppercase font-bold">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- BOTTOM DECORATION --- */}
      <div className="h-[20vh] flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[15vw] font-black uppercase select-none text-[#5ce1e6]">FABRICATION</h2>
      </div>

    </div>
  );
};

export default SheetMetal;