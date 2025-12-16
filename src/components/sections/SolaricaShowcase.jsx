import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Solarica Energy India",
    desc: "Leading renewable energy revolution. Large-scale solar installations.",
    icon: "☀" 
  },
  {
    title: "Solarica Systems",
    desc: "Advanced solar systems integration and smart technology.",
    icon: "⚡"
  },
  {
    title: "Solarica Industries",
    desc: "Industrial-scale solar manufacturing. High-quality panels.",
    icon: "🏭"
  }
];

const SolaricaShowcase = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Each Service Row
      const rows = document.querySelectorAll('.service-row');
      
      rows.forEach((row) => {
        const line = row.querySelector('.divider-line');
        const text = row.querySelector('.text-reveal');
        const icon = row.querySelector('.icon-box');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%", // Jab element view mein aayega
            toggleActions: "play none none reverse"
          }
        });

        tl
        // 1. Line Draws First (Cinematic)
        .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "expo.out" })
        
        // 2. Text Slides Up (Masked Reveal)
        .fromTo(text, 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, 
          "-=0.8"
        )
        
        // 3. Icon Pop
        .fromTo(icon, 
          { scale: 0, rotation: -45 }, 
          { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }, 
          "-=1"
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#e8e4dc] text-[#0f1c15]">
      <div className="container mx-auto px-6">
        
        {/* Main Heading - Giant & Bold like Video */}
        <h1 className="text-[4rem] md:text-[7rem] leading-[0.9] font-black tracking-tighter text-teal-950 mb-24 uppercase overflow-hidden">
          <div className="service-row">
            <span className="text-reveal block">Our Expertise</span>
          </div>
        </h1>

        {/* Services Grid */}
        <div className="flex flex-col gap-16">
          {services.map((item, idx) => (
            <div key={idx} className="service-row group cursor-pointer">
              
              {/* Animated Line */}
              <div className="divider-line w-full h-0.5 bg-teal-900/20 origin-left mb-8 group-hover:bg-teal-900/60 transition-colors duration-500"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
                
                {/* Title & Icon */}
                <div className="flex items-center gap-6">
                  <span className="icon-box text-3xl">{item.icon}</span>
                  <h2 className="text-reveal text-3xl md:text-5xl font-bold text-teal-950 group-hover:translate-x-4 transition-transform duration-500">
                    {item.title}
                  </h2>
                </div>

                {/* Desc & Arrow */}
                <div className="text-reveal flex items-center gap-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="max-w-md text-lg font-medium">{item.desc}</p>
                  <div className="w-12 h-12 rounded-full border border-teal-900 flex items-center justify-center group-hover:bg-teal-900 group-hover:text-white transition-all">
                    <ArrowUpRight />
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

export default SolaricaShowcase;