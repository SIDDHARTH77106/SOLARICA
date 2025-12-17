import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/pm1.jpg', 
  '/pm2.jpg', 
  '/pm3.jpg'  
];

const PMModiSection = () => {
  const sectionRef = useRef(null);
  const orbitRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const radius = 160; 
      const angles = [0, 120, 240]; 

      imagesRef.current.forEach((img, i) => {
        const angleRad = (angles[i] * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;
        gsap.set(img, { x, y, xPercent: -50, yPercent: -50 });
      });

      const orbitAnim = gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });

      imagesRef.current.forEach((img) => {
        gsap.to(img, {
          rotation: -360, 
          duration: 30,
          repeat: -1,
          ease: "none"
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
        }
      });

      tl.fromTo(orbitRef.current, { y: 50 }, { y: -50, ease: "none" });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-[#0f1c15] relative overflow-hidden flex items-center"
    >
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 💥 MAIN CHANGE: 
         1. 'px-8 md:px-20' -> Side padding badha di hai.
         2. 'gap-16 lg:gap-24' -> Beech ka gap badha diya hai.
      */}
      <div className="container mx-auto px-8 md:px-20 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT: Text Content --- */}
        <div className="text-left relative z-20 order-2 lg:order-1 flex flex-col justify-center">
            
            <div className="inline-block mb-4">
                <span className="text-orange-500 font-bold tracking-[0.25em] text-xs md:text-sm uppercase border-b-2 border-orange-500/50 pb-1">
                   Driving the Solar Revolution
                </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#e6e2d6] mb-8 leading-[1.1]">
                Visionary <br />
                <span className="relative z-10 inline-block text-white">
                   Leadership
                   {/* Underline Effect */}
                   <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-600/80 -z-10 rounded-sm skew-x-12"></span>
                </span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10 opacity-90">
               Under the visionary leadership of <strong className="text-white">Hon'ble PM Shri Narendra Modi</strong>, India is witnessing a solar revolution. The <span className="text-orange-400 font-semibold">PM Surya Ghar Yojana</span> is a movement towards energy independence.
            </p>
            
            {/* Stats Badge */}
            <div className="inline-flex items-center gap-5 bg-[#1a3528]/60 border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-md mb-10 max-w-md hover:bg-[#1a3528]/80 transition-colors">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/40 shrink-0">
                    <Sparkles size={24} fill="white" />
                </div>
                <div>
                    <div className="text-3xl font-bold text-white leading-none mb-1">1 Crore+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Households Targeted</div>
                </div>
            </div>

            <div>
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] hover:scale-105 transition-all duration-300 group">
                  Live Mission 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
        </div>

        {/* --- RIGHT: 3D Orbit Scene --- */}
        <div className="relative h-112.5 md:h-150 w-full order-1 lg:order-2 flex items-center justify-center">
            {/* Orbit Container */}
            <div ref={orbitRef} className="relative w-[320px] h-80 flex items-center justify-center">
                {images.map((src, i) => (
                    <div
                        key={i}
                        ref={el => imagesRef.current[i] = el}
                        className="absolute w-44 h-60 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[3px] border-white/10 bg-[#0f1c15]"
                    >
                        <img
                            src={src}
                            alt={`PM Modi Vision ${i}`}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 filter brightness-110 contrast-110"
                        />
                        {/* Gloss Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-40 pointer-events-none"></div>
                    </div>
                ))}
            </div>
            
            {/* Center Glow behind images */}
            <div className="absolute w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default PMModiSection;