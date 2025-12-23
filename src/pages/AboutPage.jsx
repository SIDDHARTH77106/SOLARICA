import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Cpu, Layers, Maximize, ShieldCheck, Zap, Target, Eye, MousePointer2, Users, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const ghostTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 0.05, 0.01]);

  const coreCapabilities = [
    {
      title: "SPM Division",
      desc: "Custom Special Purpose Machines tailored to your unique engineering designs.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sheet Metal",
      desc: "Advanced fabricated products utilizing high-precision laser cutting technology.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Robotics & Automation",
      desc: "Integrating smart industrial robotics to streamline your assembly lines.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Aluminum Enclosures",
      desc: "High-quality extrusion enclosures for specialized industrial housing.",
      icon: Maximize,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "LED X-RAY Units",
      desc: "Medical-grade X-RAY view boxes engineered for clarity and longevity.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Injection Molding",
      desc: "Scalable plastic injection molding for custom components and parts.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative bg-[#0b120f] min-h-screen text-[#e6e2d6] font-sans overflow-x-hidden" ref={containerRef}>
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[80vh] md:min-h-[95vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 relative border-b border-white/5 pt-24 md:pt-32">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(92,225,230,0.05),transparent)] pointer-events-none" />
         
         <div className="max-w-[1400px] mx-auto w-full relative z-10">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#5ce1e6] font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block"
            >
              Since 2025 • Welcome to APS-TECH
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-8 md:mb-10"
            >
              PRECISION <br/> 
              <span className="text-white/20 italic font-serif">REDEFINED.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-2xl text-white/60 max-w-3xl font-light leading-relaxed"
            >
              APS-TECH Enterprises has developed into one of India’s leading full-scale 
              metal fabrication facilities, specializing in 
              <span className="text-[#5ce1e6] font-medium"> Special Purpose Machines (SPM), Robotics, </span> 
              and high-accuracy assembly services.
            </motion.p>
         </div>

         {/* Ghost Text (Hidden on Mobile) */}
         <motion.div 
           style={{ y: bgTextY, opacity: ghostTextOpacity }}
           className="absolute right-[-10%] top-1/4 pointer-events-none select-none z-0 hidden md:block"
         >
           <h2 className="text-[30vw] font-bold text-white leading-none">APS</h2>
         </motion.div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 relative bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#5ce1e6]/30 transition-all duration-500"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5ce1e6]/10 rounded-2xl flex items-center justify-center text-[#5ce1e6] mb-6 md:mb-8">
              <Target size={24} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-tight text-white">Our Mission</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">
              To deliver world-class metal fabrication and machine building solutions with an emphasis on 
              <span className="text-[#5ce1e6] font-medium"> innovation and extreme accuracy</span>, 
              turning complex engineering designs into reality for our PAN India clients.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#5ce1e6]/30 transition-all duration-500"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5ce1e6]/10 rounded-2xl flex items-center justify-center text-[#5ce1e6] mb-6 md:mb-8">
              <Eye size={24} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-tight text-white">Our Vision</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">
              To become the global benchmark in 
              <span className="text-[#5ce1e6] font-medium"> Precision Engineering</span>, 
              recognized for our ability to build everything from singular laser-cut parts to 
              large-scale, complex industrial assemblies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CORE EXPERIENCE & CAD SERVICES --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight text-white">
                Turning Ideas into <br/> <span className="text-[#5ce1e6] font-serif italic">Reality.</span>
              </h2>
              
              <div className="space-y-8 md:space-y-12">
                <FeatureItem icon={<MousePointer2 size={24}/>} title="Innovative CAD Services" text="Our experienced CAD team utilizes high-end 2D and 3D software to integrate your designs into our projects." />
                <FeatureItem icon={<Users size={24}/>} title="Customer Focus" text="Communication starts before the machine touches metal. Our project managers ensure minimum lead time." />
                <FeatureItem icon={<CheckCircle2 size={24}/>} title="Accuracy at Scale" text="From sub-assemblies to complete tested machines, we strive for perfection in every part." />
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="Engineering" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge (Hidden on Mobile) */}
              <div className="absolute -bottom-10 -left-10 bg-[#5ce1e6] p-10 rounded-[2.5rem] hidden md:block shadow-[0_20px_40px_rgba(92,225,230,0.3)]">
                <p className="text-black font-bold text-4xl leading-none">PAN <br/> INDIA</p>
                <p className="text-black/60 text-xs uppercase tracking-widest mt-2 font-bold">Delivery Reach</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE (Core Manufacturing) --- */}
      <section className="py-20 md:py-32 bg-white/[0.01] border-y border-white/5 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
              <div>
                <motion.span className="text-[#5ce1e6] font-mono text-xs uppercase tracking-[0.4em]">Capabilities</motion.span>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight uppercase mt-4 text-white">Core Manufacturing</h2>
              </div>
              <p className="text-white/30 max-w-sm text-left md:text-right font-light">
                Highest possible quality machines for clients across India.
              </p>
            </div>
            
            {/* GRID OF 6 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {coreCapabilities.map((item, i) => (
                    <ProductCard 
                        key={i} 
                        icon={item.icon} 
                        title={item.title} 
                        desc={item.desc} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
};

// --- HELPER COMPONENTS ---

const FeatureItem = ({ icon, title, text }) => (
  <div className="flex gap-6 group">
    <div className="mt-1 text-[#5ce1e6] group-hover:scale-110 transition-transform duration-300 shrink-0">{icon}</div>
    <div>
      <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#5ce1e6] transition-colors">{title}</h4>
      <p className="text-white/40 leading-relaxed font-light text-sm md:text-base">{text}</p>
    </div>
  </div>
);

const ProductCard = ({ icon: Icon, title, desc, image }) => (
    <motion.div 
      whileHover={{ y: -10 }} 
      className="group relative h-[400px] md:h-[450px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#5ce1e6]/30 transition-all duration-500 shadow-2xl"
    >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 grayscale group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#0b120f]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5ce1e6]/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#5ce1e6] mb-4 md:mb-6 group-hover:bg-[#5ce1e6] group-hover:text-black transition-all duration-500 border border-[#5ce1e6]/20">
                <Icon size={24} className="md:w-7 md:h-7" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-[#5ce1e6] transition-colors">{title}</h3>
            <p className="text-white/60 leading-relaxed group-hover:text-white transition-colors font-light text-sm">
                {desc}
            </p>
        </div>
    </motion.div>
);

export default AboutPage;