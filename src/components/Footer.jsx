import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  
  // 1. Scroll Progress for Parallax
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // 2. Animations
  const yText = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacityText = useTransform(scrollYProgress, [0.5, 1], [0.2, 1]);

  return (
    // Wrapper div for height spacing
    <div 
      ref={footerRef} 
      className="relative h-screen" 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      
      {/* --- STICKY FIXED FOOTER --- */}
      <div className="fixed bottom-0 left-0 w-full h-screen bg-[#0f1c15] text-[#e8e4dc] flex flex-col justify-end">
        
        {/* BIG BACKGROUND TEXT (Parallax) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden pointer-events-none z-0">
            <motion.h1 
                style={{ y: yText, opacity: opacityText }}
                className="text-[15vw] leading-none font-bold tracking-tighter text-white/5 select-none whitespace-nowrap"
            >
                SOLARICA ENERGY
            </motion.h1>
        </div>

        {/* --- MAIN CONTENT (Z-Index High) --- */}
        <div className="container mx-auto px-6 relative z-10 pb-10 pt-20">
          
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
            
            {/* Left Column: Heading */}
            <div>
               <motion.h3 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="text-5xl md:text-7xl font-light mb-10 leading-tight"
               >
                 Let's energize <br/> <span className="text-orange-500 font-serif italic">your world.</span>
               </motion.h3>

               {/* Address & Contact Block */}
               <div className="flex flex-col md:flex-row gap-12 text-sm tracking-widest uppercase text-gray-400">
                 <div>
                   <h4 className="text-white font-bold mb-4 border-b border-orange-500/50 inline-block pb-1">Headquarters</h4>
                   <p className="mb-1">Audumbar Nivya Complex</p>
                   <p className="mb-1">Office No 203, Shree Control Chauk</p>
                   <p>Pune, MH 411041</p>
                 </div>
                 <div>
                   <h4 className="text-white font-bold mb-4 border-b border-orange-500/50 inline-block pb-1">Contact</h4>
                   <p className="mb-1 text-white hover:text-orange-500 transition cursor-pointer">+91 9758122902</p>
                   <a href="mailto:siddharth@solarica.in" className="text-white hover:text-orange-500 transition cursor-pointer">siddharth@solarica.in</a>
                 </div>
               </div>
            </div>
            
            {/* Right Column: Form */}
            <div className="flex justify-start lg:justify-end">
                <motion.form 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 transition-colors duration-500"
                >
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-lg focus:border-orange-500 outline-none transition text-white" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 py-2 text-lg focus:border-orange-500 outline-none transition text-white" />
                  </div>
                  <button className="group relative w-full bg-[#e8e4dc] text-[#0f1c15] px-8 py-4 rounded-full font-bold uppercase tracking-widest overflow-hidden mt-4">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Request Call Back</span>
                    <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                  </button>
                </motion.form>
            </div>

          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8 gap-6">
            
            {/* Copyright & Socials */}
            <div className="flex flex-col gap-4">
                <p className="text-xs text-gray-600 uppercase tracking-widest">© 2025 Solarica Energy India</p>
                <div className="flex gap-4 text-xs text-gray-400 uppercase tracking-widest">
                    <span className="hover:text-orange-500 cursor-pointer transition">Instagram</span>
                    <span className="hover:text-orange-500 cursor-pointer transition">LinkedIn</span>
                </div>
            </div>

            {/* --- DEVELOPER CREDIT (DW INNOVATION) --- */}
            <div className="flex flex-col items-center md:items-end">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Designed & Developed by</p>
                
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 transition-colors">
                    {/* Aapka Naam: Light font + Multicolor Gradient */}
                    <span className="font-light text-sm bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent hover:brightness-125 transition-all cursor-default">
                        Siddharth Gautam
                    </span>
                    
                    <span className="text-white/20 text-[10px]">@</span>
                    
                    {/* Company Name: Clean & Professional */}
                    <span className="font-medium text-xs text-white/80 hover:text-white transition-colors cursor-pointer uppercase tracking-wider">
                        DW Innovation
                    </span>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;