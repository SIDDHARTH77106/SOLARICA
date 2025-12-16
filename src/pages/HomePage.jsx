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
    <>
      <Hero />
      <AboutStats />
      <Services />
      <GroupCompanies />
      <PMModiSection /> 
      <Scheme />
      <Products />
      <Testimonials />

      {/* CTA Section (Home Page ka final section) */}
      <section className="relative py-32 bg-[#e6e2d6] text-[#0b120f] overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="block text-sm font-bold tracking-[0.2em] uppercase text-teal-900 mb-6">
            Start Your Journey
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">
            Ready to <br /><span className="text-teal-800">Switch?</span>
          </h2>
          {/* Note: Contact link ab /contact par jayega */}
          <a href="/contact" className="inline-block group"> 
            <div className="relative overflow-hidden rounded-full bg-[#0b120f] text-[#e6e2d6] px-12 py-6 flex items-center gap-4 transition-all duration-500 hover:scale-105">
              <span className="text-xl font-bold uppercase tracking-widest relative z-10">
                Book Consultation
              </span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-teal-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </div>
          </a>
        </div>
      </section>

      <HorizontalScroll />
    </>
  );
};

export default HomePage;