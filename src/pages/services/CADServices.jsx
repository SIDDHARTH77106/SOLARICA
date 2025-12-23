import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PenTool, ShieldCheck, Cpu, Layers, Settings, Box, Lightbulb } from 'lucide-react';

const CADServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Animation variants for staggered list
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] pt-32 pb-20 overflow-hidden relative">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2e3192]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#5ce1e6]/10 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION WITH IMAGE --- */}
      <section className="relative px-8 md:px-24 mb-32 z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#5ce1e6]" />
                <span className="text-[#5ce1e6] font-mono tracking-[0.3em] uppercase text-xs">Capabilities / Design</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white">
              CAD <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white italic font-serif">Solutions.</span>
            </h1>
            
            <p className="text-white/50 text-xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-8 mb-10">
              Our innovative and experienced CAD team designs with high-end 2D and 3D software 
              to turn your most complex ideas into reality.
            </p>
          </motion.div>

          {/* High-End Industrial Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt="CAD Engineering" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#5ce1e6]/5 to-transparent mix-blend-overlay" />
            
            <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-xl border border-[#5ce1e6]/30 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#5ce1e6] rounded-full shadow-[0_0_15px_#5ce1e6]"><Cpu size={20} className="text-black" /></div>
                    <p className="text-xs font-bold uppercase tracking-widest leading-tight text-white">High-End <br/> 3D Software</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE EXPERIENCE SECTION --- */}
      <section className="px-8 md:px-24 mb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* 1. Resource Integration Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-[#5ce1e6]/30 transition-all duration-500"
            >
              <Lightbulb className="text-[#5ce1e6] group-hover:scale-125 transition-transform duration-500" size={40} />
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4 mt-8 text-white group-hover:text-[#5ce1e6] transition-colors">Resource Integration</h3>
                <p className="text-white/40 font-light text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  We match the best people with the best resources to integrate your design into our system seamlessly.
                </p>
              </div>
            </motion.div>

            {/* 2. Ground-Up Design Card (Highlighted) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3.5rem] bg-[#5ce1e6] text-black flex flex-col justify-between shadow-[0_0_40px_rgba(92,225,230,0.2)]"
            >
              <Settings size={40} className="text-black" />
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4 mt-8">Ground-Up Design</h3>
                <p className="text-black/70 font-bold text-sm leading-relaxed">
                  We design projects from the ground up, regularly turning complexities into beautifully crafted products.
                </p>
              </div>
            </motion.div>

            {/* 3. Extreme Accuracy Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-[#5ce1e6]/30 transition-all duration-500"
            >
              <Layers className="text-[#5ce1e6] group-hover:scale-125 transition-transform duration-500" size={40} />
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4 mt-8 text-white group-hover:text-[#5ce1e6] transition-colors">Extreme Accuracy</h3>
                <p className="text-white/40 font-light text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  Striving for perfection in every product, especially at the most fundamental stages of manufacturing.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CORE MANUFACTURING EXPERIENCE (DETAILED) --- */}
      <section className="px-8 md:px-24 bg-[#14201a]/30 py-32 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="md:w-1/2">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 text-white">
                  Core <span className="text-[#5ce1e6] italic font-serif">Experience.</span>
                </h2>
                <p className="text-white/60 mb-12 max-w-lg border-l-2 border-[#5ce1e6]/20 pl-6">
                  Specialized in machine manufacturing and machine building as per customer needs with guaranteed accuracies.
                </p>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    "Custom Machine Building",
                    "Sheet-Metal Component Manufacturing",
                    "Precision Machined Parts",
                    "Complete Tested Machine Assembly"
                  ].map((text, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#5ce1e6]/10 flex items-center justify-center border border-[#5ce1e6]/20 group-hover:bg-[#5ce1e6] transition-colors duration-300">
                        <ShieldCheck className="text-[#5ce1e6] group-hover:text-black transition-colors duration-300" size={18} />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-[#5ce1e6] transition-colors duration-300">{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group">
                  <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Machining" />
               </div>
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mt-12 border border-white/10 group">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Metal Work" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA DECOR --- */}
      <section className="py-32 text-center relative z-10 pointer-events-none select-none">
         <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <h4 className="text-[#5ce1e6]/10 text-[12vw] font-black uppercase leading-none">APS TECH</h4>
         </motion.div>
      </section>

    </div>
  );
};

export default CADServices;