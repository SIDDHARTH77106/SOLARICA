import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleLargeTextRaw = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const springLargeScale = useSpring(scaleLargeTextRaw, springConfig);

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
      className="relative h-screen w-full bg-[#0b120f] overflow-hidden"
    >
      {/* --- BACKGROUND GHOST TEXT --- */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.h1
          style={{ scale: springLargeScale }}
          className="text-[22vw] font-black text-white/3 uppercase tracking-tighter leading-none whitespace-nowrap text-center"
        >
          APSTECH
        </motion.h1>
      </div>

      {/* --- MAIN CONTENT LAYER (Centered) --- */}
      <motion.div
        className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Industry Badge - Updated to Logo Cyan */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-1.5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5ce1e6] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
              INDIA'S LEADING FABRICATION HUB
            </span>
          </div>
        </motion.div>

        {/* Main Headline - Updated to Logo Cyan */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tighter text-[#e8e4dc]"
        >
          <span className="font-serif italic font-light text-[#5ce1e6] block mb-2 tracking-normal text-3xl md:text-5xl">
            Precision Engineering
          </span>
          Metal Assembly
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-white/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Manufacturing Special Purpose Machines and high-grade sheet metal products with an emphasis on
          <span className="text-white/90 font-medium"> innovation</span> and
          <span className="text-white/90 font-medium"> extreme accuracy</span>.
        </motion.p>

        {/* CTA Button - Arrow Icon Updated to Logo Cyan */}
        <motion.div variants={itemVariants}>
          <Button 
            variant="primary" 
            className="px-10 py-4 text-xs font-bold uppercase tracking-widest flex items-center group bg-[#5ce1e6] text-black hover:bg-white transition-colors border-none"
          >
            Get a Free Quote
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2 text-black" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b120f] to-transparent z-20"></div>
    </section>
  );
};

export default Hero;