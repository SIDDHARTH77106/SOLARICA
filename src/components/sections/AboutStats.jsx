import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../../data/constants';

const AboutStats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Heading scroll ke saath thoda upar move karega
  const yHeading = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); 

  return (
    <section ref={containerRef} id="about-us" className="py-32 bg-[#e6e2d6] text-[#0f1c15] rounded-t-[4rem] relative z-20 -mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
              style={{ y: yHeading }} // <-- YAHAN TEXT PARALLAX HO RAHA HAI
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">
              Engineered for <br/>
              <span className="serif italic font-bold">Resilience.</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light mb-16 text-[#0f1c15]/80 max-w-md">
               Solarica Energy isn't just a manufacturer; we are the architects of a cleaner India. We build systems that withstand time, weather, and demand.
            </p>
          </motion.div>

          {/* Stats Cards (Staggered smooth entry) */}
          <div className="flex flex-col justify-center">
             <div className="space-y-12">
               {stats.map((stat, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 50 }} // Card move ho ke aayega
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.2 }}
                   viewport={{ once: true }}
                   className="flex items-center gap-8 border-b border-[#0f1c15]/10 pb-8 group"
                 >
                   <span className="text-5xl md:text-7xl font-bold text-orange-600 font-serif group-hover:text-orange-700 transition">{stat.num}</span>
                   <span className="text-sm font-bold uppercase tracking-widest text-[#0f1c15]/60 max-w-37.5">{stat.label}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStats;