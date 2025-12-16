import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Aggressive Motion Settings (Windore/Axiom Style)
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // Fast background move
  const opacityImage = useTransform(scrollYProgress, [0, 0.4], [1, 0.1]); 
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.4]); 

  const yLargeText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Fastest element move
  const scaleLargeText = useTransform(scrollYProgress, [0, 1], [1, 4]); // Massive zoom

  const yCard = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // Slowest move (Foreground)

  return (
    // Height badhayi taaki scroll effect visible ho
    <div ref={containerRef} id="home" className="relative h-[150vh] w-full bg-[#0f1c15]"> 
      
      {/* Sticky container for GSAP-style effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* 1. Background Image Layer */}
        <motion.div style={{ y: yImage, opacity: opacityImage, scale: scaleImage }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0f1c15]/50 backdrop-brightness-50"></div> 
        </motion.div>

        {/* 2. Massive Text Layer (Moves fastest) */}
        <motion.h1 
          style={{ y: yLargeText, scale: scaleLargeText }}
          className="absolute bottom-0 left-0 w-full text-[30vw] md:text-[20vw] font-black text-white/8 tracking-tight select-none pointer-events-none z-10 leading-none pb-0 transform translate-y-[20%] text-center"
        >
          SOLARICA
        </motion.h1>

        {/* 3. Foreground Content Layer (Slowest move) */}
        <motion.div 
          style={{ y: yCard }} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative z-20 h-full w-full flex flex-col justify-center items-center px-4 pt-24"
        >
          {/* ... (Headline and Button Content) ... */}
           <div className="text-center max-w-4xl text-[#e6e2d6]">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-3 border border-white/20 bg-black/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-300">FUTURE ENERGY INDIA</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-light mb-8 leading-[1.05] tracking-tight">
              <span className="serif italic font-normal text-orange-500 block">Energy Saving</span> 
              Renewable Solar
            </h2>

            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Merging industrial efficiency with aesthetic design. We build the energy infrastructure of tomorrow for a greener India.
            </p>

            <a href="#products">
              <Button variant="primary">
                Get a Free Quote <ArrowRight size={18}/>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;