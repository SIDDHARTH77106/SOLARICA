import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, ShieldCheck, Zap, Award, Settings, CheckCircle2, Cog, Wrench } from 'lucide-react';

const AssemblyFinish = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const assemblyTools = [
    { name: "Manual Precision", desc: "Expert hand-assembly for intricate components.", icon: <Wrench size={24} /> },
    { name: "Electric Power", desc: "High-torque electric tools for secure fastening.", icon: <Zap size={24} /> },
    { name: "Pneumatic Force", desc: "Air-powered tools for consistent, heavy-duty assembly.", icon: <Settings size={24} /> },
  ];

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] pt-32 pb-20 overflow-hidden relative">
      
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2e3192]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#5ce1e6]/10 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION: ASSEMBLY EXCELLENCE --- */}
      <section className="relative px-8 md:px-24 mb-32 z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20" // Text ko image ke upar/niche control karne ke liye
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-xs">End-to-End / Assembly Unit</span>
            </div>
            
            {/* --- FIX: Font Size Adjusted to prevent Overlap --- */}
            <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] mb-8 uppercase text-white break-words">
              Flawless <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white italic font-serif">
                Integration.
              </span>
            </h1>
            
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-8 mb-10 max-w-lg">
              Our assembly unit is powered by skilled professionals using manual, electric, and pneumatic tools to ensure accurate, stress-free assembly ranging from small sub-parts to complex industrial machines.
            </p>
          </motion.div>

          {/* High-End Assembly Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop" 
              alt="Industrial Assembly" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Cyan Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#5ce1e6]/5 to-transparent mix-blend-overlay" />
            
            <div className="absolute top-8 right-8">
                <div className="px-6 py-3 bg-[#5ce1e6] rounded-full text-black font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-[#5ce1e6]/20">
                    Small to Complex
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TOOLS & CAPABILITIES GRID --- */}
      <section className="px-8 md:px-24 mb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
          {assemblyTools.map((tool, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 group hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.05)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#5ce1e6]/10 flex items-center justify-center text-[#5ce1e6] mb-8 group-hover:scale-110 group-hover:bg-[#5ce1e6] group-hover:text-black transition-all duration-500">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter text-white group-hover:text-[#5ce1e6] transition-colors">{tool.name}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINISHING UNIT: THE 9-TANK PROCESS --- */}
      <section className="px-8 md:px-24 py-32 bg-[#14201a]/30 border-y border-white/5 relative z-10 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Image with Badge */}
            <div className="relative rounded-[3rem] overflow-hidden aspect-video border border-white/10 group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590121431212-d740b54cd661?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industrial Powder Coating" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                
                {/* 9-Tank Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-black/40 backdrop-blur-xl rounded-full border border-[#5ce1e6]/30 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(92,225,230,0.1)] group-hover:scale-110 transition-transform duration-500">
                        <Award size={36} className="text-[#5ce1e6] mb-2 drop-shadow-lg" />
                        <span className="text-3xl font-black text-white italic font-serif">9-TANK</span>
                        <span className="text-[10px] font-bold text-[#5ce1e6] uppercase tracking-widest mt-1">Pre-Treatment</span>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-white">
                Industrial <br/> <span className="text-[#5ce1e6] italic font-serif">Finishing.</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-10 border-l-2 border-[#5ce1e6]/20 pl-6">
                To ensure a premium and durable finish, we employ a world-class 9-tank pre-treatment process followed by high-quality industrial powder coating.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Degreasing",
                  "Water Rinsing",
                  "Derusting",
                  "Phosphating",
                  "Passivation",
                  "Powder Coating"
                ].map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-[#5ce1e6]/40 transition-colors cursor-default"
                  >
                    <div className="p-1.5 rounded-full bg-[#5ce1e6]/20 text-[#5ce1e6]">
                        <CheckCircle2 size={14} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- QUALITY ASSURANCE SECTION --- */}
      <section className="px-8 md:px-24 py-32 relative z-10">
        <div className="max-w-[1200px] mx-auto text-center">
           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#5ce1e6]/5 border border-[#5ce1e6]/20 mb-12 backdrop-blur-md">
              <Cog className="text-[#5ce1e6] animate-spin-slow" size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ce1e6]">Certified Assembly Quality</span>
           </div>
           
           <h3 className="text-4xl md:text-6xl font-black uppercase mb-20 tracking-tighter text-white">
             Small to complete <br/> <span className="text-[#5ce1e6] italic font-serif">Tested Machines.</span>
           </h3>
           
           <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-[#5ce1e6]/30 to-transparent" />

              {[
                { title: "Manual Skill", detail: "Experienced technicians for precision work." },
                { title: "Fastener Integrity", desc: "Electric and Pneumatic torque control." },
                { title: "Final Inspection", detail: "Full machine testing before dispatch." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center relative z-10 group">
                  <div className="w-3 h-3 bg-[#0b120f] border-2 border-[#5ce1e6] rounded-full mb-8 relative z-10 group-hover:scale-150 transition-transform shadow-[0_0_15px_#5ce1e6]" />
                  <div className="w-[1px] h-12 bg-gradient-to-b from-[#5ce1e6]/50 to-transparent mb-6" />
                  
                  <h5 className="text-sm font-black uppercase mb-3 tracking-widest text-white group-hover:text-[#5ce1e6] transition-colors">{item.title}</h5>
                  <p className="text-xs text-white/40 uppercase leading-relaxed max-w-[200px] font-bold">{item.detail || item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FOOTER DECOR --- */}
      <div className="h-[20vh] flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-[#5ce1e6]">ASSEMBLY</h2>
      </div>

    </div>
  );
};

export default AssemblyFinish;