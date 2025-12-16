import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, CheckCircle, ArrowUpRight, Zap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Scheme = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Background Parallax
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Animation Variants for Pop-up effect
  const popUpVariant = {
    hidden: { opacity: 0, scale: 0.5, y: 100, rotateX: 45 },
    visible: (delay) => ({
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 15, 
        delay: delay 
      }
    })
  };

  // Continuous Floating Animation
  const floatAnimation = {
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="finance" 
      className="py-32 bg-[#0f1c15] relative overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      
      {/* --- 1. Cinematic Background Core (The Sun) --- */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-orange-500/20 via-yellow-500/10 to-teal-500/0 rounded-full blur-[120px] pointer-events-none"
      />
      
      {/* Decorative Grid Lines (Video UI feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
            <SectionHeading title="PM Surya Ghar Yojana" subtitle="Government Subsidy" light={true} />
        </div>

        {/* --- 2. The 3D Composition (No Grid) --- */}
        <div className="relative w-full max-w-5xl mx-auto h-150 md:h-125">
          
          {/* CENTER PIECE: The Main Energy Orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <div className="relative">
                <div className="w-64 h-64 bg-linear-to-b from-orange-400 to-red-600 rounded-full shadow-[0_0_100px_rgba(249,115,22,0.4)] flex items-center justify-center animate-pulse-slow">
                    <Sun size={80} className="text-white drop-shadow-lg" />
                </div>
                {/* Orbit Rings */}
                <div className="absolute inset-0 border border-white/20 rounded-full scale-150 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-0 border border-white/10 rounded-full scale-[2] animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>


          {/* --- FLOATING POPUP 1: The Details (Left) --- */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={popUpVariant}
            animate={floatAnimation}
            drag
            dragConstraints={containerRef}
            className="absolute top-0 left-0 md:left-10 z-10 w-72 md:w-80 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal-500/20 rounded-lg text-teal-300"><Zap size={20}/></div>
                    <h3 className="text-xl font-bold text-[#e6e2d6]">The Scheme</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                   Launched Feb 2024. A massive initiative to provide free electricity up to 300 units for 1 crore households.
                </p>
            </div>
          </motion.div>


          {/* --- FLOATING POPUP 2: The Benefits (Right) --- */}
          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            variants={popUpVariant}
            animate={{ ...floatAnimation, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }} // Slightly different timing
            drag
            dragConstraints={containerRef}
            className="absolute top-10 right-0 md:right-10 z-10 w-72 md:w-80 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300"><CheckCircle size={20}/></div>
                    <h3 className="text-xl font-bold text-[#e6e2d6]">Your Profit</h3>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex gap-2"><span className="text-emerald-400">✔</span> ₹78,000 Subsidy</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✔</span> Zero Bills</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✔</span> Earn by selling power</li>
                </ul>
            </div>
          </motion.div>


          {/* --- FLOATING POPUP 3: CTA Button (Bottom Center) --- */}
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            variants={popUpVariant}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-auto"
          >
            <div className="relative group">
                {/* Glow behind button */}
                <div className="absolute -inset-1 bg-linear-to-r from-teal-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                
                <button className="relative bg-[#0b120f] border border-teal-500/50 text-white px-10 py-5 rounded-full flex items-center gap-4 text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    Apply Now
                    <ArrowUpRight className="text-teal-400" />
                </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Scheme;