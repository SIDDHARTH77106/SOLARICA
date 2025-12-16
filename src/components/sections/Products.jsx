import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Zap } from 'lucide-react';

// ✅ PRODUCT DATA
const productDetails = [
  { name: "Solar Street Lights", path: "/solor street (1).avif", desc: "High-efficiency street lighting." },
  { name: "Solar Water Pumps", path: "/solor water 1.png", desc: "Reliable irrigation solutions." },
  { name: "Solar Panels", path: "/solor panel (1).jpg", desc: "Monocrystalline PV modules." },
  { name: "Solar Inverter", path: "/solor Inverter.webp", desc: "Smart grid tie and off-grid inverters." },
  { name: "Solar Garden Lights", path: "/Solar Garden Lights.jpg", desc: "Aesthetic and durable garden lighting." },
  { name: "Solar Flood Lights", path: "/Solar Flood Lights.jpg", desc: "Powerful outdoor flood lighting." },
];

const Products = () => {
  const trackRef = useRef(null);
  
  // Infinite Loop ke liye Data ko Double kiya
  const endlessProducts = [...productDetails, ...productDetails];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const track = trackRef.current;
      
      // --- AUTO SCROLL ANIMATION (Infinite Marquee) ---
      // Ye apne aap chalta rahega
      const animation = gsap.to(track, {
        xPercent: -50, // List double hai, isliye -50% tak chalega fir reset hoga
        ease: "none",
        duration: 40, // Speed control (jitna bada number, utna slow)
        repeat: -1
      });

      // --- PAUSE ON HOVER ---
      // Jab user mouse laye to ruk jaye
      track.addEventListener("mouseenter", () => animation.pause());
      track.addEventListener("mouseleave", () => animation.play());

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0f1c15] relative overflow-hidden h-screen flex flex-col justify-center">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-teal-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-orange-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-12 relative z-30">
        <div className="flex items-center gap-2 mb-2">
            <Zap size={20} className="text-orange-500 fill-orange-500 animate-pulse" />
            <span className="text-orange-500 font-bold tracking-[0.3em] text-sm uppercase">
                Premium Collection
            </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-sans font-bold text-[#e6e2d6]">
          Innovation <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-500">Unleashed.</span>
        </h2>
      </div>

      {/* --- INFINITE TRACK --- */}
      <div className="w-full overflow-hidden">
        <div 
          ref={trackRef}
          className="flex gap-10 w-max px-6" // Gap fix kiya
        >
          {endlessProducts.map((product, i) => (
            <div
              key={i}
              className="group relative w-87.5 md:w-112.5 h-125 md:h-150 shrink-0 rounded-4xl overflow-hidden bg-[#0a120e] border border-white/5 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
            >
              
              {/* --- IMAGE --- */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={product.path} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-20 group-hover:grayscale-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* --- NUMBER (Fixed Placement) --- */}
              {/* Ab ye image ke andar Top-Right mein fixed hai, cut nahi hoga */}
              <div className="absolute top-6 right-8 z-10">
                <span className="text-8xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500 font-sans">
                  {String((i % productDetails.length) + 1).padStart(2, '0')}
                </span>
              </div>

              {/* --- CONTENT --- */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                  {product.name}
                </h3>
                
                {/* Orange Line */}
                <div className="h-1 w-12 bg-orange-500 mb-4 group-hover:w-full transition-all duration-700 rounded-full"></div>
                
                <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  <p className="text-gray-300 text-sm max-w-[75%]">
                    {product.desc}
                  </p>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={24} />
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

export default Products;