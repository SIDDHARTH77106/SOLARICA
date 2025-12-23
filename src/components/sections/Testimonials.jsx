import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kulkarni",
    role: "Senior Operations Manager",
    company: "Atlas Copco India Ltd.",
    text: "Their technical expertise in delivering turnkey industrial solutions is unmatched. The team's ability to bridge linguistic and commercial gaps made our project execution seamless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Sandeep Varma",
    role: "Lead Systems Engineer",
    company: "KPIT Engineering Ltd.",
    text: "A highly competent partner for embedded systems and engineering design. Their professionalism in handling complex requirements across Pune and Bangalore offices is commendable.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
  },
  {
    name: "Marcus Schneider",
    role: "Quality Assurance Head",
    company: "Volkswagen Pune",
    text: "Precision and reliability are core to Volkswagen, and this team delivered exactly that. Their understanding of global automotive standards is evident in their work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    name: "Anjali Mehta",
    role: "Supply Chain Director",
    company: "Ognibene India",
    text: "Exceptional support in commercial strategy and technical procurement. They helped us streamline our hydraulic component supply chain with great efficiency.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
  },
  {
    name: "Prateek Sharma",
    role: "Founder",
    company: "Aubotz Labs",
    text: "For a robotics startup, agility is key. Their team provided linguistic and technical support that helped us scale our Mumbai operations to a national level.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
  }
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      
      // Calculate total width
      const totalWidth = slider.scrollWidth / 3; 

      // Infinite Scroll Animation
      const anim = gsap.to(slider, {
        x: `-=${totalWidth}`, 
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

      // Pause on Hover
      slider.addEventListener("mouseenter", () => anim.pause());
      slider.addEventListener("mouseleave", () => anim.play());

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Responsive Padding: py-20 on mobile, py-32 on desktop
    <section id="testimonials" ref={containerRef} className="py-20 md:py-32 bg-[#0b120f] text-[#e6e2d6] overflow-hidden relative border-y border-white/5">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-16 md:mb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
                <span className="text-[#5ce1e6] font-mono tracking-[0.4em] text-xs uppercase mb-4 md:mb-6 block">
                    Client Success Stories
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                    Trusted by <br/> <span className="text-[#5ce1e6] italic font-serif">Industry Leaders.</span>
                </h2>
            </div>
            
            {/* Decoration Line (Hidden on Mobile) */}
            <div className="hidden md:block h-[1px] flex-grow bg-white/10 mx-12 relative top-[-20px]">
                <div className="absolute right-0 top-1/2 -translate-x-1/2 w-2 h-2 bg-[#5ce1e6] rounded-full"></div>
            </div>
        </div>
      </div>

      {/* --- SLIDER CONTAINER --- */}
      <div className="w-full overflow-hidden relative pl-0 md:pl-24">
        
        {/* FADE GRADIENTS (Fixed Tailwind Syntax) */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-[#0b120f] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-[#0b120f] to-transparent z-20 pointer-events-none"></div>

        {/* --- TRACK --- */}
        <div 
          ref={sliderRef} 
          className="flex gap-6 md:gap-8 w-max py-4 md:py-10"
        >
          {/* Render List 3 Times for Loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div 
              key={idx}
              // Responsive Width: w-[320px] on mobile, w-[500px] on desktop
              className="w-[320px] md:w-[500px] shrink-0 bg-[#14201a] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-[#5ce1e6]/30 transition-all duration-500 group relative flex flex-col justify-between"
            >
               {/* Quote Icon */}
               <div className="absolute top-8 right-8 text-[#5ce1e6]/10 group-hover:text-[#5ce1e6]/20 transition-colors">
                  <Quote size={60} className="md:w-20 md:h-20" />
               </div>

               <div>
                 <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#5ce1e6]"></span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ce1e6]">Verified Partner</span>
                 </div>
                 
                 <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-8 relative z-10">
                   "{item.text}"
                 </p>
               </div>

               <div className="flex items-center gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/5">
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-white/10 p-1 bg-white/5 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
                 <div>
                    <h4 className="text-base md:text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#5ce1e6] transition-colors">
                        {item.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-widest font-mono">
                        {item.company}
                    </p>
                 </div>
               </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- LOGO STRIP (Bottom) --- */}
      <div className="container mx-auto px-6 mt-16 md:mt-20 border-t border-white/5 pt-12">
         <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logos scaled down for mobile */}
            <span className="font-black text-lg md:text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6] cursor-default">VOLKSWAGEN</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6] cursor-default">ATLAS COPCO</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6] cursor-default">KPIT</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6] cursor-default">OGNIBENE</span>
         </div>
      </div>

    </section>
  );
};

export default Testimonials;