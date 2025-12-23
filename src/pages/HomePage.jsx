import React from 'react';
import { ArrowRight, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Sections
import Hero from '../components/sections/Hero';
import AboutStats from '../components/sections/AboutStats';
import Services from '../components/sections/Services';
import GroupCompanies from '../components/sections/GroupCompanies';
import Scheme from '../components/sections/Our Clients & Services';
import Products from '../components/sections/Products';
import Testimonials from '../components/sections/Testimonials';
import HorizontalScroll from '../components/HorizontalScroll';

// --- READY TO SWITCH COMPONENT (Updated to Logo Theme) ---
const ReadyToSwitch = () => {
  return (
    <section className="relative py-40 bg-[#0b120f] text-[#e6e2d6] overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial Precision"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        {/* Gradient Fades for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b120f] via-transparent to-[#0b120f]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b120f] via-transparent to-[#0b120f]"></div>
      </div>

      {/* 2. Cyan Ambient Glow (3D Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5ce1e6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[#5ce1e6] mb-8 border border-[#5ce1e6]/30 px-6 py-2 rounded-full bg-[#5ce1e6]/5 backdrop-blur-md">
            <Zap size={14} fill="currentColor" /> Start Your Project
          </span>
          
          {/* Heading */}
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 uppercase leading-[0.85] text-white drop-shadow-2xl">
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] via-white to-[#5ce1e6] italic">
              TRANSFORM?
            </span>
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Partner with APS-TECH for world-class manufacturing solutions.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="/contact" className="group relative"> 
              <div className="relative overflow-hidden rounded-full bg-[#5ce1e6] text-black px-12 py-6 flex items-center gap-4 transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(92,225,230,0.3)] border-none">
                <span className="text-sm font-black uppercase tracking-[0.2em] relative z-10">
                  Book Consultation
                </span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" size={18} />
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    // Global Background Updated to Dark Theme (#0b120f)
    <div className="overflow-x-hidden bg-[#0b120f] text-[#e6e2d6]"> 
      
      {/* 1. Hero Section: Entry point */}
      <Hero />
      
      <div className="space-y-0 relative z-10"> 
        {/* 2. Stats Section */}
        <AboutStats />
        
        {/* 3. Services */}
        <Services />
        
        {/* 4. Group Companies */}
        <GroupCompanies />
        
        {/* 6. Scheme (Ensure this component handles dark mode internally or is wrapped) */}
        <Scheme />
        
        {/* 7. Products */}
        <Products />
        
        {/* 8. Testimonials */}
        <Testimonials />
      </div>

      {/* 9. Final CTA: High-end conversion point */}
      <ReadyToSwitch />

      {/* 10. Horizontal Scroll: Moving brand identity */}
      <div className="border-t border-white/5">
        <HorizontalScroll />
      </div>
    </div>
  );
};

export default HomePage;