import React from 'react';
import { ArrowRight } from 'lucide-react';
// Import saare Sections
import Hero from '../components/sections/Hero';
import AboutStats from '../components/sections/AboutStats';
import Services from '../components/sections/Services';
import GroupCompanies from '../components/sections/GroupCompanies';
import PMModiSection from '../components/sections/PMModiSection'; 
import Scheme from '../components/sections/Scheme';
import Products from '../components/sections/Products';
import Testimonials from '../components/sections/Testimonials';
import HorizontalScroll from '../components/HorizontalScroll';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden bg-[#e6e2d6]"> {/* Global Background & Overflow Fix */}
      
      <Hero />
      
      {/* Added spacing between sections for breathing room */}
      <div className="space-y-0"> 
        <AboutStats />
        <Services />
        <GroupCompanies />
        <PMModiSection /> 
        <Scheme />
        <Products />
        <Testimonials />
      </div>

      {/* CTA Section - Centered & Professional */}
      <section className="relative py-32 bg-[#0b120f] text-[#e6e2d6] overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="block text-sm font-bold tracking-[0.2em] uppercase text-teal-500 mb-6">
            Start Your Journey
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">
            Ready to <br /><span className="text-teal-500">Switch?</span>
          </h2>
          
          <a href="/contact" className="inline-block group"> 
            <div className="relative overflow-hidden rounded-full bg-[#e6e2d6] text-[#0b120f] px-12 py-6 flex items-center gap-4 transition-all duration-500 hover:scale-105 shadow-2xl shadow-teal-900/20">
              <span className="text-xl font-bold uppercase tracking-widest relative z-10">
                Book Consultation
              </span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </div>
          </a>
        </div>
      </section>

      <HorizontalScroll />
    </div>
  );
};

export default HomePage;