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
    <section ref={containerRef} id="about" className="py-24 md:py-32 bg-[#e6e2d6] text-[#0f1c15] relative z-20 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* 1. CENTERED HEADING & TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div style={{ y: yHeading }}>
                <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                    Who We Are
                </span>
                <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">
                  Engineered for <br/>
                  <span className="font-serif italic font-bold text-[#0f1c15]">Resilience.</span>
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-light text-[#0f1c15]/70 max-w-2xl mx-auto">
                    Solarica Energy isn't just a manufacturer; we are the architects of a cleaner India. We build systems that withstand time, weather, and demand.
                </p>
            </motion.div>
        </div>

        {/* 2. STATS IN A CENTERED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#0f1c15]/10 pt-16">
            {stats.map((stat, idx) => (
                <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
                >
                <h3 className="text-6xl md:text-7xl font-bold text-orange-600 font-serif mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">
                    {stat.num}
                </h3>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f1c15]/60">
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