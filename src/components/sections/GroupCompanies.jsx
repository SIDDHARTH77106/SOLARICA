import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companies } from '../../data/constants'; 
import SectionHeading from '../ui/SectionHeading';
import { ArrowUpRight, Globe, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GroupCompanies = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const stripRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const sections = gsap.utils.toArray(".company-item");
      const totalSections = sections.length;
      
      // Horizontal Scroll Tween
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (totalSections - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1, 
          end: () => "+=" + triggerRef.current.offsetWidth * 3, 
          snap: 1 / (totalSections - 1), 
        }
      });

      // --- PARALLAX EFFECT ---
      sections.forEach((section) => {
        const visual = section.querySelector(".parallax-visual");
        
        gsap.fromTo(visual, 
          { xPercent: -20 },
          { 
            xPercent: 20, 
            ease: "none",
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween, 
              start: "left right",
              end: "right left",
              scrub: true,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#e8e4dc] text-[#0f1c15] overflow-hidden relative">
      
      <div ref={triggerRef} className="h-screen flex flex-col relative">
        
        {/* Header - Fixed Position with High Z-Index */}
        <div className="absolute top-8 left-6 md:left-24 z-20 pointer-events-none mix-blend-multiply">
           <SectionHeading title="Selected Works" subtitle="Our Ecosystem" light={false} />
        </div>

        {/* The Moving Horizontal Strip */}
        <div ref={stripRef} className="flex h-full items-center">
          
          {companies.map((co, idx) => (
            <div 
              key={idx} 
              className="company-item shrink-0 w-screen h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-24"
            >
              {/* Added pt-24 (padding top) to prevent overlap with header */}
              <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pt-24 md:pt-0">
                
                {/* 1. Left: Typography */}
                <div className="parallax-text flex flex-col items-start z-10 order-2 md:order-1">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-1.5 border border-teal-900/80 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest text-teal-900">
                      Strategy
                    </span>
                    <span className="px-4 py-1.5 border border-teal-900/80 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest text-teal-900">
                      Innovation
                    </span>
                  </div>

                  {/* Title - Optimized Font Size */}
                  <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-black tracking-tighter text-teal-950 mb-6 uppercase">
                    {co.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                    {co.desc}
                  </p>

                  {/* Big CTA Button */}
                  <button className="group flex items-center gap-4 md:gap-6 text-sm md:text-lg font-bold uppercase tracking-wide text-white bg-teal-900 px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-teal-800 transition-all duration-300">
                    Explore Case
                    <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>

                {/* 2. Right: Visual Block */}
                <div className="relative h-[35vh] md:h-[60vh] w-full flex items-center justify-center order-1 md:order-2 mb-4 md:mb-0">
                  
                  <div className="parallax-visual w-full h-full bg-teal-900 relative overflow-hidden rounded-4xl md:rounded-[4rem] flex items-center justify-center shadow-2xl shadow-teal-900/20">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-linear-to-br from-teal-800 to-black opacity-40"></div>
                    
                    {/* Giant Icon */}
                    <div className="relative z-10 text-[#e8e4dc] transform transition-transform duration-700 hover:scale-110">
                      {/* Responsive Icon Size */}
                      <co.icon strokeWidth={1} className="w-24 h-24 md:w-48 md:h-48" />
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-10 right-10 text-white/20 hidden md:block">
                      <Globe size={120} />
                    </div>
                      <div className="absolute bottom-10 left-10 text-white/20 hidden md:block">
                      <Layers size={120} />
                    </div>

                    {/* Number */}
                    <span className="absolute bottom-4 right-6 md:bottom-8 md:right-12 text-6xl md:text-9xl font-black text-white/10 select-none">
                      0{idx + 1}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;