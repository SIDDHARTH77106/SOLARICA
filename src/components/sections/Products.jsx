import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Zap } from 'lucide-react';

// ✅ DATA WITH WORKING IMAGES
// (Maine yahan Unsplash ki images lagayi hain taaki abhi dikhne lagein. 
// Aap baad mein inhe apni local images se replace kar sakte hain)
const productDetails = [
  { 
    name: "Solar Street Lights", 
    path: "solor street (1).avif", 
    desc: "High-efficiency street lighting for smart cities." 
  },
  { 
    name: "Solar Water Pumps", 
    path: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=800&auto=format&fit=crop", 
    desc: "Reliable irrigation solutions for agriculture." 
  },
  { 
    name: "Solar Panels", 
    path: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop", 
    desc: "Premium Monocrystalline PV modules." 
  },
  { 
    name: "Solar Inverter", 
    path: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", 
    desc: "Smart grid-tie and off-grid hybrid inverters." 
  },
  { 
    name: "Solar Garden Lights", 
    path: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop", 
    desc: "Aesthetic and durable garden lighting solutions." 
  },
  { 
    name: "Solar Flood Lights", 
    path: "\Solar Flood Lights.jpg", 
    desc: "Powerful outdoor flood lighting for security." 
  },
];

const Products = () => {
  const trackRef = useRef(null);
  
  // Infinite Loop ke liye Data Double kiya
  const endlessProducts = [...productDetails, ...productDetails];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const track = trackRef.current;
      
      // --- AUTO SCROLL ANIMATION ---
      const animation = gsap.to(track, {
        xPercent: -50, // Perfect half move karega
        ease: "none",
        duration: 40, 
        repeat: -1
      });

      // Pause on Hover
      track.addEventListener("mouseenter", () => animation.pause());
      track.addEventListener("mouseleave", () => animation.play());

    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="bg-[#0f1c15] relative overflow-hidden py-24 md:py-32 flex flex-col justify-center">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-teal-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 mb-16 relative z-30 text-center">
        <div className="inline-flex items-center gap-2 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <Zap size={16} className="text-orange-500 fill-orange-500 animate-pulse" />
            <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">
                Premium Collection
            </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-sans font-bold text-[#e6e2d6] leading-tight">
          Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Unleashed.</span>
        </h2>
        
        <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto font-light">
            Discover our range of high-performance solar solutions designed to power a sustainable future.
        </p>
      </div>

      {/* --- INFINITE TRACK --- */}
      <div className="w-full overflow-hidden">
        <div 
          ref={trackRef}
          className="flex w-max"
        >
          {endlessProducts.map((product, i) => (
            <div
              key={i}
              className="group relative w-[300px] md:w-[400px] h-[450px] md:h-[550px] shrink-0 rounded-[2rem] overflow-hidden bg-[#0a120e] border border-white/5 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer mr-8"
            >
              
              {/* ✅ IMAGE FIX: Ab yahan 'src' sahi chalega */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={product.path} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* Number Tag */}
              <div className="absolute top-6 right-6 z-10">
                <span className="text-6xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500 font-serif">
                  {String((i % productDetails.length) + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {product.name}
                </h3>
                
                <div className="h-1 w-12 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-500 rounded-full"></div>
                
                <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-gray-300 text-sm max-w-[75%] line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
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