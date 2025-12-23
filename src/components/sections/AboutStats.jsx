import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../../data/constants';

const AboutStats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yHeading = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]); 

  return (
    // Background updated to Dark (#0b120f) to match the site theme
    <section ref={containerRef} id="about" className="py-24 md:py-32 bg-[#0b120f] text-[#e6e2d6] relative z-20 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* 1. CENTERED HEADING & TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div style={{ y: yHeading }}>
                {/* Orange removed -> Logo Cyan */}
                <span className="text-[#5ce1e6] font-bold tracking-[0.3em] uppercase text-xs mb-6 block font-mono">
                    Who We Are
                </span>
                <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-white">
                  Engineered for <br/>
                  {/* Highlight text updated to Logo Cyan */}
                  <span className="font-serif italic font-bold text-[#5ce1e6]">Resilience.</span>
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-light text-white/50 max-w-3xl mx-auto">
                    APS Tech Enterprises isn't just a manufacturer; we are the architects of industrial precision. We build systems that withstand time, weather, and demand.
                </p>
            </motion.div>
        </div>

        {/* 2. STATS IN A CENTERED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            {stats.map((stat, idx) => (
                <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
                >
                {/* Stats Number -> Logo Cyan with Glow effect */}
                <h3 className="text-6xl md:text-7xl font-bold text-[#5ce1e6] font-serif mb-4 group-hover:scale-110 transition-transform duration-500 inline-block drop-shadow-[0_0_15px_rgba(92,225,230,0.4)]">
                    {stat.num}
                </h3>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                    {stat.label}
                </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;