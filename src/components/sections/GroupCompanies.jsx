import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companies } from '../../data/constants'; 
import { ArrowUpRight, Globe, Layers, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GroupCompanies = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".company-item");
      
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1, 
          end: () => "+=" + triggerRef.current.offsetWidth * 3, 
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut"
          }, 
        }
      });

      sections.forEach((section) => {
        const titleWords = section.querySelectorAll(".title-word");
        const imageFrame = section.querySelector(".image-frame");
        const desc = section.querySelector(".desc-text");
        const tags = section.querySelector(".tags-container");

        gsap.from(titleWords, {
          y: 60,
          opacity: 0,
          rotation: 2,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
          }
        });

        gsap.fromTo(imageFrame, 
          { clipPath: "inset(10% 10% 10% 10% round 3rem)", scale: 0.95, opacity: 0 },
          { 
            clipPath: "inset(0% 0% 0% 0% round 3rem)", 
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: "left center+=100",
            }
          }
        );

        gsap.from([tags, desc], {
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: "left center",
            }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0b120f] text-[#e6e2d6] overflow-hidden relative">
      
      <div ref={triggerRef} className="h-screen flex flex-col relative">
        
        {/* --- CUSTOM HEADER (Fixed at Top) --- */}
        <div className="absolute top-8 left-8 md:left-24 z-40 bg-[#0b120f]/80 backdrop-blur-sm pr-10 pb-4 rounded-br-2xl">
            <div className="flex flex-col items-start">
               <span className="text-[#5ce1e6] font-mono tracking-[0.4em] uppercase text-xs mb-2 block">
                  Our Ecosystem
               </span>
               <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                  Selected Works
               </h2>
               {/* Cyan Line */}
               <div className="h-1 w-24 bg-[#5ce1e6] mt-4 rounded-full"></div>
            </div>
        </div>

        {/* Horizontal Strip */}
        <div className="flex h-full items-center">
          {companies.map((co, idx) => (
            <div 
              key={idx} 
              className="company-item shrink-0 w-screen h-screen flex items-end md:items-center justify-center relative px-6 md:px-24 pb-10 md:pb-0"
            >
              {/* Added 'mt-32' to push the entire grid down away from header */}
              <div className="w-full max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center mt-32 md:mt-20">
                
                {/* --- Content Side --- */}
                <div className="flex flex-col items-start z-20 order-2 md:order-1 relative">
                  
                  {/* Tags: Gap increased */}
                  <div className="tags-container flex flex-wrap gap-3 mb-8">
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#5ce1e6]/5 border border-[#5ce1e6]/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#5ce1e6]">
                      <Zap size={12} /> Technology
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#5ce1e6]/5 border border-[#5ce1e6]/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#5ce1e6]">
                      <Shield size={12} /> Precision
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9] overflow-hidden">
                    {co.title.split(' ').map((word, i) => (
                      <span key={i} className="title-word inline-block mr-3 md:mr-5">{word}</span>
                    ))}
                  </h2>

                  {/* Description */}
                  <p className="desc-text text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg mb-10 border-l-2 border-[#5ce1e6] pl-6">
                    {co.desc}
                  </p>

                  {/* Button */}
                  <button className="group relative flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-black bg-[#5ce1e6] px-8 py-4 md:px-10 md:py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(92,225,230,0.3)]">
                    <span className="relative z-10">View Case Study</span>
                    <ArrowUpRight className="relative z-10 group-hover:rotate-45 transition-transform duration-500" size={16} />
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </div>

                {/* --- Image Side --- */}
                <div className="relative group w-full h-[35vh] md:h-[65vh] order-1 md:order-2 flex items-center justify-center">
                  
                  <div className="image-frame relative w-full h-full bg-[#14201a] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-[0.05]" 
                         style={{ backgroundImage: 'linear-gradient(#5ce1e6 1px, transparent 1px), linear-gradient(90deg, #5ce1e6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>

                    {/* Main Image */}
                    <img 
                      src={`/${co.image}`} 
                      alt={co.title} 
                      className="main-image w-[85%] h-[85%] object-contain z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Ghost Number - Fixed: Moved slightly inwards and made text smaller so it doesn't cut
                    <span className="absolute bottom-2 right-6 text-[8rem] md:text-[14rem] font-black text-[#5ce1e6]/20 leading-none select-none z-0 pointer-events-none">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span> */}

                    <div className="absolute top-6 right-6 flex flex-col gap-4 text-[#5ce1e6]/30">
                        <Globe size={24} className="md:w-8 md:h-8" />
                        <Layers size={24} className="md:w-8 md:h-8" />
                    </div>
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