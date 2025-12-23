import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Leader = () => (
  <section className="py-32 bg-[#0b120f] relative overflow-hidden">
    
    {/* --- AMBIENT GLOWS --- */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2e3192]/20 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5ce1e6]/10 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-[#14201a] p-12 md:p-20 rounded-[3rem] border border-white/5 relative flex flex-col md:flex-row items-center gap-12 md:gap-24 shadow-2xl shadow-black/50"
      >
        
        {/* --- IMAGE SECTION (With Rotating Rings) --- */}
        <div className="relative shrink-0 group">
          {/* Rotating Cyan Ring */}
          <div className="absolute inset-0 rounded-full border border-[#5ce1e6]/30 animate-[spin_10s_linear_infinite]" />
          
          {/* Counter-Rotating White Ring */}
          <div className="absolute -inset-4 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[#5ce1e6] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

          {/* Leader Image */}
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" 
            alt="Prashant Shirode" 
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#0b120f] grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="text-center md:text-left flex-1">
          <Quote className="text-[#5ce1e6] w-12 h-12 mb-8 mx-auto md:mx-0 opacity-50" />
          
          <p className="text-2xl md:text-4xl text-[#e6e2d6] mb-10 font-light leading-relaxed">
            "At APS-TECH, we don't just manufacture parts; we engineer reliability. Our mission is to deliver <span className="text-[#5ce1e6] font-serif italic font-bold">world-class precision</span> that empowers Indian industries to compete globally."
          </p>
          
          <div>
            <h4 className="text-3xl font-bold text-white uppercase tracking-tight mb-2">Prashant Shirode</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="h-1px w-12 bg-[#5ce1e6]"></div>
                <p className="text-[#5ce1e6] font-mono tracking-widest uppercase text-xs font-bold">Founder & Director, APS-TECH</p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  </section>
);

export default Leader;