import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Zap, Settings, Cpu, Box, Factory } from 'lucide-react';

// --- REAL APSTECH PRODUCT DATA WITH HIGH-QUALITY IMAGES ---
const productDetails = [
  {
    id: "01",
    name: "Fabricated Sheet Metal Products",
    desc: "Complete project management from CAD Design to Laser cutting, Fabrication, and Final Assembly. Trusted by clients like Atlas Copco, KPIT, and Volkswagen for controller stands, fencings, and machined parts.",
    icon: <Factory size={32} className="text-[#5ce1e6]" />,
    // Image: CNC Laser Cutting Machine in action
    path: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop" 
  },
  {
    id: "02",
    name: "LED X-Ray View Box",
    desc: "Sleek, energy-efficient LED Viewing Systems for MRI, CT Scan, and X-Ray images. Features dimmer technology, uniform lighting, and durable screens. Available in Single to Four screen sizes.",
    icon: <Zap size={32} className="text-[#5ce1e6]" />,
    // Image: Modern medical imaging/radiology room
    path: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Aluminium Extrusion Products",
    desc: "Aesthetic structural systems with high strength and fine finish. Used for Assembly Work Tables, Inspection Tables, FIFO Racks, Material Handling Trolleys, and Mounting Structures.",
    icon: <Box size={32} className="text-[#5ce1e6]" />,
    // Image: Stack of aluminium profiles/extrusions
    path: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Industrial Automation & Robotics",
    desc: "Cutting-edge services in Industrial Automation, Manufacturing Integration, and Robot services to enhance operational efficiency and precision.",
    icon: <Cpu size={32} className="text-[#5ce1e6]" />,
    // Image: Industrial robotic arm in a factory setting
    path: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "Plastic Injection Molding",
    desc: "In-house mold making with machines up to 250Ton capacity. Equipped with VMC, EDM, Wire-cut, Milling, and M1TR for high-precision molded products.",
    icon: <Settings size={32} className="text-[#5ce1e6]" />,
    // Image: Close-up of plastic injection molded parts
    path: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Electrical & Electronics Enclosures",
    desc: "Specialized manufacturing of robust Electrical Control Panel Enclosures and high-quality Enclosures for electronic circuits.",
    icon: <Box size={32} className="text-[#5ce1e6]" />,
    // Image: Industrial server rack or control panel cabinet
    path: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop"
  },
];

const Products = () => {
  const trackRef = useRef(null);
  const endlessProducts = [...productDetails, ...productDetails];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const animation = gsap.to(track, {
        xPercent: -50, 
        ease: "none",
        duration: 50, 
        repeat: -1
      });
      track.addEventListener("mouseenter", () => animation.pause());
      track.addEventListener("mouseleave", () => animation.play());
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="bg-[#0b120f] relative overflow-hidden py-24 md:py-32 flex flex-col justify-center">
      
      {/* --- INDUSTRIAL BACKGROUND (Blue/Cyan Glow) --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#2e3192]/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-[#5ce1e6]/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* --- SECTION HEADER (Updated to Cyan) --- */}
      <div className="container mx-auto px-6 mb-20 relative z-30 text-center">
        <div className="inline-flex items-center gap-2 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Settings size={16} className="text-[#5ce1e6] animate-spin-slow" />
            <span className="text-[#5ce1e6] font-bold tracking-[0.2em] text-xs uppercase">
                Industrial Solutions
            </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-[#e6e2d6] leading-tight tracking-tighter">
          ENGINEERING <span className="text-[#5ce1e6] italic font-serif font-light">EXCELLENCE.</span>
        </h2>
        
        <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our diverse range of precision-engineered products, from heavy fabrication to advanced automation solutions.
        </p>
      </div>

      {/* --- INFINITE SCROLL TRACK --- */}
      <div className="w-full overflow-hidden relative z-20 py-10">
        <div 
          ref={trackRef}
          className="flex w-max px-4"
        >
          {endlessProducts.map((product, i) => (
            <div
              key={i}
              className="group relative w-87.5 md:w-112.5 h-125 md:h-137.5 shrink-0 rounded-[2.5rem] overflow-hidden bg-[#0f1c15] border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#5ce1e6]/20 cursor-pointer mr-8"
            >
              
              {/* Product Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={product.path} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b120f] via-[#0b120f]/60 to-transparent opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Big Number Watermark */}
              <div className="absolute top-4 right-6 z-10">
                <span className="text-8xl font-black text-white/3 group-hover:text-white/[0.07] transition-colors duration-500 leading-none">
                  {product.id}
                </span>
              </div>
              
              {/* Icon Badge (Cyan Theme) */}
              <div className="absolute top-8 left-8 z-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#5ce1e6] group-hover:border-[#5ce1e6] transition-all duration-500">
                  <div className="text-white/80 group-hover:text-black transition-colors">
                    {/* Cloned icon to change color on hover */}
                    {React.cloneElement(product.icon, { className: "group-hover:text-black transition-colors" })}
                  </div>
              </div>

              {/* Content Block */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#5ce1e6]/10 text-[#5ce1e6] text-[10px] font-bold tracking-widest uppercase border border-[#5ce1e6]/30">
                  Industrial Grade
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {product.name}
                </h3>
                
                {/* Cyan Line */}
                <div className="h-1 w-16 bg-[#5ce1e6] mb-6 group-hover:w-full transition-all duration-700 rounded-full opacity-50 group-hover:opacity-100"></div>
                
                <div className="flex flex-col gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#5ce1e6] group/btn w-fit">
                    View Details
                    <div className="w-8 h-8 rounded-full bg-[#5ce1e6]/20 flex items-center justify-center group-hover/btn:bg-[#5ce1e6] transition-colors duration-300">
                        <ArrowUpRight size={16} className="text-[#5ce1e6] group-hover/btn:text-black transition-colors" />
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

export default Products;