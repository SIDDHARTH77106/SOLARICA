import React, { useState, useRef, useEffect } from 'react';
import { Globe, Shield, Zap, TrendingUp, Users, Smartphone, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const servicesData = [
  {
    id: "01",
    title: "Global Reach",
    description: "International logistics network.",
    icon: <Globe strokeWidth={1} className="w-full h-full text-white" />,
    color: "bg-teal-900", // Dark Teal
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" // Example abstract image
  },
  {
    id: "02",
    title: "Secure Core",
    description: "Bank-grade data encryption.",
    icon: <Shield strokeWidth={1} className="w-full h-full text-white" />,
    color: "bg-emerald-900", // Deep Emerald
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Lightning Fast",
    description: "Optimized performance engines.",
    icon: <Zap strokeWidth={1} className="w-full h-full text-white" />,
    color: "bg-cyan-900", // Deep Cyan
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Scalable Growth",
    description: "Infrastructure that grows with you.",
    icon: <TrendingUp strokeWidth={1} className="w-full h-full text-white" />,
    color: "bg-teal-800", // Teal
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "Expert Team",
    description: "24/7 dedicated support.",
    icon: <Users strokeWidth={1} className="w-full h-full text-white" />,
    color: "bg-green-900", // Green
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "06",
    title: "Mobile First",
    description: "Fully responsive designs.",
    icon: <Smartphone strokeWidth={1} className="w-full h-full text-white" />,
    color: "bg-slate-900", // Slate
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const previewRefs = useRef([]);

  useEffect(() => {
    // --- OPOS STYLE ANIMATION LOGIC ---
    
    // 1. Z-Index Management: Active card ko sabse upar lao
    previewRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, { zIndex: index === activeService ? 2 : 1 });
      }
    });

    const activeCard = previewRefs.current[activeService];
    
    // 2. The "Shutter" Reveal Animation
    if (activeCard) {
      gsap.fromTo(activeCard,
        { 
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // Hidden at bottom
          scale: 1.1 // Slight Zoom Effect
        }, 
        { 
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Reveal Upwards
          scale: 1,
          duration: 0.6, 
          ease: "power3.inOut",
          overwrite: true
        }
      );
      
      // 3. Inner Content Parallax (Text/Icon moves slightly)
      const content = activeCard.querySelector('.inner-content');
      gsap.fromTo(content,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease: "power2.out" }
      );
    }

  }, [activeService]);

  return (
    <section className="bg-[#e6e2d6] py-20 md:py-32 px-4 relative z-10 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 border-b border-gray-400/20 pb-8">
            <h2 className="text-4xl md:text-6xl font-black text-[#0b120f] uppercase tracking-tight">
               Our <span className="text-gray-400">Expertise</span>
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 h-150">
            
            {/* LEFT SIDE: Minimal List (OPOS Style) */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between py-4 pr-0 lg:pr-10">
                {servicesData.map((service, index) => (
                    <div 
                        key={index}
                        onMouseEnter={() => setActiveService(index)}
                        className="group flex items-center justify-between py-6 border-b border-gray-300 cursor-pointer transition-all duration-300"
                    >
                        <div className="flex items-center gap-6">
                            <span className={`text-xs font-mono font-bold tracking-widest transition-colors duration-300 ${activeService === index ? 'text-teal-800' : 'text-gray-400'}`}>
                                {service.id}
                            </span>
                            <h3 className={`text-3xl md:text-4xl font-bold uppercase transition-all duration-300 ${activeService === index ? 'text-[#0b120f] translate-x-2' : 'text-gray-400/60'}`}>
                                {service.title}
                            </h3>
                        </div>
                        <ArrowUpRight 
                            className={`w-6 h-6 transition-transform duration-300 ${activeService === index ? 'rotate-45 text-teal-800 opacity-100' : 'opacity-0 -translate-x-4'}`} 
                        />
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE: The "Cinematic" Preview Window */}
            <div className="w-full lg:w-7/12 relative hidden lg:block h-full">
                
                {/* Fixed Container */}
                <div className="absolute inset-0 rounded-4xl overflow-hidden">
                    
                    {/* Render ALL Cards stacked on top of each other */}
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            ref={el => previewRefs.current[index] = el}
                            className={`absolute inset-0 w-full h-full ${service.color}`}
                            style={{ 
                                zIndex: activeService === index ? 2 : 1, // Logic handled in GSAP
                                clipPath: index === 0 ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" // First one visible by default
                            }} 
                        >
                            {/* Background Image (Optional - Overlay mode) */}
                            {/* <img src={service.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" /> */}

                            {/* Noise Texture for Premium Feel */}
                            <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

                            {/* Inner Content (Icon & Details) */}
                            <div className="inner-content absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-[#e6e2d6]">
                                
                                {/* Large Iconic Graphic */}
                                <div className="w-48 h-48 mb-10 drop-shadow-2xl opacity-90 text-[#e6e2d6]">
                                    {service.icon}
                                </div>

                                <h2 className="text-5xl font-black uppercase tracking-tight mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-white/70 max-w-md font-light leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Decoration Line */}
                                <div className="w-1 h-16 bg-white/20 mt-10"></div>
                            </div>

                        </div>
                    ))}
                
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;