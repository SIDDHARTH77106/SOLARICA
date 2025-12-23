import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  
  // 1. Scroll Progress for Parallax Effect
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // 2. Animations
  const yText = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacityText = useTransform(scrollYProgress, [0.5, 1], [0.05, 0.1]);
  const scaleText = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
  
  // Smooth spring for the form tilt effect
  const springConfig = { stiffness: 100, damping: 30 };
  const yForm = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), springConfig);

  return (
    // Wrapper div for sticky reveal height
    <div 
      ref={footerRef} 
      className="relative h-[110vh] md:h-screen" 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      
      {/* --- STICKY FIXED FOOTER BACKGROUND --- */}
      <div className="fixed bottom-0 left-0 w-full h-full bg-[#0b120f] text-[#e8e4dc] flex flex-col justify-end overflow-hidden">
        
        {/* 3D GRID FLOOR */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
             style={{ 
               backgroundImage: `linear-gradient(to right, #5ce1e6 1px, transparent 1px), linear-gradient(to bottom, #5ce1e6 1px, transparent 1px)`,
               backgroundSize: '60px 60px',
               maskImage: 'linear-gradient(to top, black, transparent)',
               transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
             }}>
        </div>

        {/* BIG BACKGROUND GHOST TEXT (3D PARALLAX) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-max">
            <motion.h1 
                style={{ y: yText, opacity: opacityText, scale: scaleText }}
                className="text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/20 to-transparent select-none whitespace-nowrap uppercase text-center blur-sm"
            >
                APSTECH
            </motion.h1>
        </div>

        {/* --- MAIN CONTENT LAYER --- */}
        <div className="container mx-auto px-6 relative z-10 pb-12 pt-24">
          
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
            
            {/* Left Column: Vision & Contact */}
            <div>
               <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
               >
                 <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-[#5ce1e6]"></div>
                    <span className="text-[#5ce1e6] font-mono uppercase tracking-[0.3em] text-xs">Let's Build Future</span>
                 </div>

                 <h3 className="text-5xl md:text-7xl font-light mb-10 leading-[1.1] text-white">
                   Precision engineering <br/> 
                   <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-[#5ce1e6] to-[#2e3192] font-bold">
                     for your vision.
                   </span>
                 </h3>
               </motion.div>

               {/* 3D Contact Cards */}
               <div className="flex flex-col md:flex-row gap-8 mt-12">
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#5ce1e6]/50 transition-all group backdrop-blur-sm">
                    <MapPin className="text-[#5ce1e6] mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-white/60 text-xs uppercase tracking-widest leading-relaxed">
                      Shed No. 1, Wadekar Estate,<br/> Narhe, Pune 411041
                    </p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#5ce1e6]/50 transition-all group backdrop-blur-sm">
                    <Phone className="text-[#5ce1e6] mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-white/60 text-xs uppercase tracking-widest leading-relaxed">
                      +91 8793566741<br/> info@apstechent.com
                    </p>
                 </div>
               </div>
            </div>
            
            {/* Right Column: 3D GLASS FORM */}
            <div className="flex justify-start lg:justify-end perspective-1000">
                <motion.form 
                  style={{ y: yForm }}
                  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="space-y-6 w-full max-w-md bg-[#14201a]/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                >
                  {/* Glossy Reflection */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#5ce1e6] mb-2 block font-bold">Full Identity</label>
                    <input type="text" placeholder="Name" className="w-full bg-black/20 border-b border-white/10 py-3 text-lg focus:border-[#5ce1e6] outline-none transition text-white placeholder:text-white/20" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#5ce1e6] mb-2 block font-bold">Direct Line</label>
                    <input type="tel" placeholder="Phone" className="w-full bg-black/20 border-b border-white/10 py-3 text-lg focus:border-[#5ce1e6] outline-none transition text-white placeholder:text-white/20" />
                  </div>
                  
                  <button className="group w-full bg-[#5ce1e6] text-black px-8 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 overflow-hidden relative shadow-[0_0_20px_rgba(92,225,230,0.4)] hover:shadow-[0_0_40px_rgba(92,225,230,0.6)] transition-all">
                    <span className="relative z-10">Initialize Request</span>
                    <ArrowUpRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform" />
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </motion.form>
            </div>

          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8 gap-6">
            
            <div className="flex flex-col gap-4">
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono">© 2025 Apstech Enterprises. Engineering Future.</p>
                <div className="flex gap-6 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    <span className="hover:text-[#5ce1e6] cursor-pointer transition">LinkedIn</span>
                    <span className="hover:text-[#5ce1e6] cursor-pointer transition">Instagram</span>
                    <span className="hover:text-[#5ce1e6] cursor-pointer transition">Legal</span>
                </div>
            </div>

            {/* --- DEVELOPER CREDIT (Enhanced 3D Pill) --- */}
            <div className="flex flex-col items-center md:items-end">
                <p className="text-[9px] text-[#5ce1e6]/40 uppercase tracking-[0.2em] mb-3">Crafted by</p>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/5 hover:border-[#5ce1e6]/30 shadow-lg cursor-pointer group"
                >
                    {/* User Name: Nitish Mishra */}
                    <span className="font-bold text-sm tracking-wide text-transparent bg-clip-text bg-linear-to-r from-[#5ce1e6] to-purple-400 group-hover:brightness-125 transition-all">
                       Siddharth Gautam
                    </span>
                    
                    <span className="text-white/10 text-[10px]">|</span>
                    
                    {/* Company: DW Innovation */}
                    <span className="font-medium text-[10px] text-white/60 hover:text-white transition-colors uppercase tracking-widest">
                        DW Innovation
                    </span>
                </motion.div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;