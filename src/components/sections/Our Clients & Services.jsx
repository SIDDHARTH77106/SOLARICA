import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, CheckCircle, ArrowUpRight, Briefcase, Users, Globe } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ClientsAndServices = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Background Parallax
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Pop-up variants
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

  const floatAnimation = {
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const leadingClients = [
    "ATLAS COPCO INDIA LIMITED",
    "KPIT ENGINEERING LTD.",
    "VOLKSWAGEN, Pune",
    "OGNIBENE, Pune",
    "AUBOTZ LABS, Mumbai"
  ];

  return (
    <section 
      ref={containerRef} 
      id="clients" 
      className="py-32 bg-[#0f1c15] relative overflow-hidden min-h-[95vh] flex flex-col justify-center"
    >
      
      {/* --- 1. Cinematic Background (The Industrial Core) --- */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-teal-500/20 via-blue-500/10 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[80px_80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
            <SectionHeading title="Trusted by Industry Leaders" subtitle="Our Clients & Services" light={true} />
        </div>

        {/* --- 2. The 3D Composition --- */}
        <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[500px]">
          
          {/* CENTER PIECE: Global Presence Orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <div className="relative">
                <div className="w-72 h-72 bg-linear-to-b from-teal-500/40 to-blue-900/60 rounded-full shadow-[0_0_120px_rgba(20,184,166,0.3)] flex items-center justify-center backdrop-blur-3xl">
                    <Globe size={100} className="text-white/80 animate-pulse-slow" />
                </div>
                <div className="absolute inset-0 border border-teal-500/20 rounded-full scale-125 animate-[spin_12s_linear_infinite]"></div>
                <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-[1.7] animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>


          {/* --- LEFT POPUP: Services & Skills --- */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={popUpVariant}
            animate={floatAnimation}
            drag
            dragConstraints={containerRef}
            className="absolute top-0 left-0 md:left-5 z-20 w-80 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-3xl group">
                <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-teal-500/20 rounded-2xl text-teal-400"><Briefcase size={24}/></div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Our Expertise</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Leveraging technical, linguistic, and commercial skills with years of professional experience.
                </p>
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-widest">
                   <CheckCircle size={14} /> Turnkey Solutions
                </div>
            </div>
          </motion.div>


          {/* --- RIGHT POPUP: Leading Clients --- */}
          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            variants={popUpVariant}
            animate={{ ...floatAnimation, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
            drag
            dragConstraints={containerRef}
            className="absolute top-10 right-0 md:right-5 z-20 w-80 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-[#0b120f]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent"></div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400"><Building2 size={24}/></div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Top Clients</h3>
                </div>
                <ul className="space-y-3">
                    {leadingClients.map((client, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                        <span className="text-blue-500 mt-1">▹</span> {client}
                      </li>
                    ))}
                    <li className="pt-2 text-[10px] font-bold text-blue-400/60 uppercase tracking-widest">
                      & many others overall India
                    </li>
                </ul>
            </div>
          </motion.div>


          {/* --- BOTTOM CENTER: Statistics/Trust Badge --- */}
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            variants={popUpVariant}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="flex items-center gap-6 px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f1c15] bg-teal-800 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                      <Users size={14} />
                    </div>
                  ))}
                </div>
                <div className="h-8 w-[1px] bg-white/20"></div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg leading-none">100% Reliability</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-tighter">Professional Turnkey Solutions</div>
                </div>
                <ArrowUpRight className="text-teal-500 ml-4 group-hover:rotate-45 transition-transform" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ClientsAndServices;