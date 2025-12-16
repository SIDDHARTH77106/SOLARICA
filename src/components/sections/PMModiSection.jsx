import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/pm1.jpg', // Center/Main
  '/pm2.jpg', // Top Right
  '/pm3.jpg'  // Bottom
];

const PMModiSection = () => {
  const sectionRef = useRef(null);
  const orbitRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- 1. SETUP: Position images in a Circle (Orbit) ---
      // We place them at specific angles on a circle
      const radius = 180; // Distance from center
      const angles = [0, 120, 240]; // Triangle formation

      imagesRef.current.forEach((img, i) => {
        const angleRad = (angles[i] * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

        gsap.set(img, { x, y, xPercent: -50, yPercent: -50 });
      });

      // --- 2. ANIMATION: Continuous Circular Orbit ---
      // Rotate the entire container
      const orbitAnim = gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 25, // Speed of rotation (lower = faster)
        repeat: -1,
        ease: "none"
      });

      // Counter-rotate images so they stay upright (Ferris Wheel effect)
      imagesRef.current.forEach((img) => {
        gsap.to(img, {
          rotation: -360, // Counteracts the parent rotation
          duration: 25,
          repeat: -1,
          ease: "none"
        });
      });


      // --- 3. SCROLL INTERACTION: Speed up & Move ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, // Responsive feeling
        }
      });

      // Move the whole orbit group up/down faster with scroll
      tl.fromTo(orbitRef.current, 
        { y: 100 }, 
        { y: -100, ease: "none" }
      );

      // Optional: Accelerate rotation slightly on scroll
      // (We use timeScale to make it spin faster when scrolling)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        onUpdate: (self) => {
          // Speed up when scrolling fast
          const velocity = Math.abs(self.getVelocity());
          const newTimeScale = 1 + (velocity / 1000); 
          gsap.to(orbitAnim, { timeScale: newTimeScale < 1 ? 1 : newTimeScale, duration: 0.5 });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-[#0f1c15] relative overflow-hidden min-h-[90vh] flex items-center"
    >
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-teal-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: Text Content --- */}
        <div className="text-left relative z-20 order-2 lg:order-1">
            <span className="block text-orange-500 font-bold tracking-[0.2em] text-sm uppercase mb-4">
               Driving the Solar Revolution
            </span>
            <h2 className="text-5xl lg:text-7xl font-sans font-bold text-[#e6e2d6] mb-8 leading-tight">
                Visionary <br />
                <span className="relative z-10">
                   Leadership
                   <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-500/80 -z-10 rounded-sm"></span>
                </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10">
              Under the visionary leadership of <strong>Hon'ble PM Shri Narendra Modi</strong>, India is witnessing a solar revolution. The <span className="text-orange-400">PM Surya Ghar Yojana</span> is not just a scheme, it's a movement towards energy independence.
            </p>
            
            {/* Stats Badge */}
            <div className="inline-flex items-center gap-5 bg-[#1a3528]/80 border border-white/5 p-5 rounded-2xl shadow-xl backdrop-blur-md mb-10">
                <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                    <Sparkles size={24} fill="white" />
                </div>
                <div>
                    <div className="text-3xl font-bold text-white leading-none">1 Crore+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Households Targeted</div>
                </div>
            </div>

            <button className="bg-linear-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300">
                Live Mission <ArrowRight size={18} />
            </button>
        </div>

        {/* --- RIGHT: 3D Orbit Scene --- */}
        {/* Height increased to 700px to prevent cutoff */}
        <div className="relative h-150 lg:h-175 w-full order-1 lg:order-2 flex items-center justify-center">
            
            {/* The Rotating Container (Orbit) */}
            <div 
              ref={orbitRef}
              className="relative w-100 h-100 flex items-center justify-center"
            >
                {images.map((src, i) => (
                    <div
                        key={i}
                        ref={el => imagesRef.current[i] = el}
                        className="absolute w-60 h-80 rounded-4xl overflow-hidden shadow-2xl border-4 border-white/5 bg-[#0f1c15]"
                    >
                        <img
                            src={src}
                            alt={`PM Modi Vision ${i}`}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gloss Effect */}
                        <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-30 pointer-events-none"></div>
                    </div>
                ))}

                {/* Center Glow (Optional Sun Effect) */}
                <div className="absolute w-37.5 h-37.5 bg-orange-500/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default PMModiSection;