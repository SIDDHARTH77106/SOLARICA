import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Mouse } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleLargeTextRaw = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Reduced scale for cleaner effect
  const springLargeScale = useSpring(scaleLargeTextRaw, springConfig);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full bg-[#0b120f] overflow-hidden flex items-center justify-center"
    >
      
      {/* --- AMBIENT GLOWS (New) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#2e3192]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-[#5ce1e6]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* --- BACKGROUND GHOST TEXT --- */}
      <motion.div 
        style={{ scale: springLargeScale, opacity: 0.03 }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none"
      >
        <h1 className="text-[25vw] font-black text-[#5ce1e6] uppercase tracking-tighter leading-none whitespace-nowrap">
          APSTECH
        </h1>
      </motion.div>

      {/* --- MAIN CONTENT LAYER --- */}
      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Industry Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-3 border border-[#5ce1e6]/30 bg-[#5ce1e6]/5 rounded-full px-6 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(92,225,230,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5ce1e6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5ce1e6]"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5ce1e6]">
              INDIA'S LEADING FABRICATION HUB
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-white"
        >
          <span className="font-serif italic font-light text-transparent bg-clip-text bg-linear-to-r from-[#5ce1e6] via-white to-[#5ce1e6] block mb-2 tracking-normal text-3xl md:text-5xl">
            Precision Engineering
          </span>
          METAL ASSEMBLY
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Manufacturing Special Purpose Machines and high-grade sheet metal products with an emphasis on
          <span className="text-[#5ce1e6] font-medium"> innovation</span> and
          <span className="text-[#5ce1e6] font-medium"> extreme accuracy</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button 
            variant="primary" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Quote
            <ArrowRight size={16} className="text-black" />
          </Button>
        </motion.div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#5ce1e6]/70">Scroll</span>
        <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            <Mouse size={24} className="text-[#5ce1e6]" />
        </motion.div>
      </motion.div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#0b120f] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;