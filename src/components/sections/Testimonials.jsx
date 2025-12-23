import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Draggable } from 'gsap/draggable';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(Draggable);

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
    // 1. Calculate Width for Loop
    const slider = sliderRef.current;
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 32; // card width + gap (32px)
    const totalWidth = cardWidth * testimonials.length;

    // 2. Clone cards for seamless loop
    // GSAP Setup
    gsap.set(slider, { x: 0 });

    const anim = gsap.to(slider, {
      x: `-${totalWidth}px`,
      duration: 30, // Adjust speed (higher = slower)
      ease: "none",
      repeat: -1,
      paused: false,
    });

    // Pause on Hover
    slider.addEventListener("mouseenter", () => anim.pause());
    slider.addEventListener("mouseleave", () => anim.play());

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-[#0b120f] text-[#e6e2d6] overflow-hidden relative border-y border-white/5">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
                <span className="text-[#5ce1e6] font-mono tracking-[0.4em] text-xs uppercase mb-6 block">
                    Client Success Stories
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                    Trusted by <br/> <span className="text-[#5ce1e6] italic font-serif">Industry Leaders.</span>
                </h2>
            </div>
            
            {/* Decoration Line */}
            <div className="hidden md:block h-[1px] flex-grow bg-white/10 mx-12 relative top-[-20px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#5ce1e6] rounded-full"></div>
            </div>
        </div>
      </div>

      {/* --- SLIDER CONTAINER --- */}
      <div ref={containerRef} className="w-full overflow-hidden relative pl-6 md:pl-24">
        
        {/* FADE GRADIENTS FOR SMOOTH LOOK */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0b120f] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0b120f] to-transparent z-20 pointer-events-none"></div>

        {/* --- TRACK --- */}
        <div 
          ref={sliderRef} 
          className="flex gap-8 w-max cursor-grab active:cursor-grabbing py-10"
        >
          {/* We render list TWICE for infinite loop illusion */}
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div 
              key={idx}
              className="w-[400px] md:w-[500px] shrink-0 bg-[#14201a] p-10 rounded-[3rem] border border-white/5 hover:border-[#5ce1e6]/30 transition-all duration-500 group relative flex flex-col justify-between"
            >
               {/* Quote Icon */}
               <div className="absolute top-10 right-10 text-[#5ce1e6]/10 group-hover:text-[#5ce1e6]/20 transition-colors">
                  <Quote size={80} />
               </div>

               <div>
                 <div className="flex items-center gap-3 mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#5ce1e6]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ce1e6]">Verified Partner</span>
                 </div>
                 
                 <p className="text-xl font-light text-white/70 leading-relaxed mb-8 relative z-10">
                   "{item.text}"
                 </p>
               </div>

               <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                 <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 p-1 bg-white/5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#5ce1e6] transition-colors">
                        {item.name}
                    </h4>
                    <p className="text-xs text-white/30 uppercase tracking-widest font-mono">
                        {item.company}
                    </p>
                 </div>
               </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- LOGO STRIP (Bottom) --- */}
      <div className="container mx-auto px-6 mt-20 border-t border-white/5 pt-12">
         <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="font-black text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6]">VOLKSWAGEN</span>
            <span className="font-black text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6]">ATLAS COPCO</span>
            <span className="font-black text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6]">KPIT</span>
            <span className="font-black text-2xl tracking-tighter italic text-white hover:text-[#5ce1e6]">OGNIBENE</span>
         </div>
      </div>

    </section>
  );
};

export default Testimonials;