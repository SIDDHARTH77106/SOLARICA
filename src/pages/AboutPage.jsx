import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ShieldCheck, Zap, Users, Leaf, ArrowRight } from 'lucide-react';
import { stats } from '../data/constants';

// --- 1. 3D TILT CARD COMPONENT ---
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-square max-w-md cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

// --- 2. COUNT UP STAT COMPONENT ---
const CountUp = ({ to, label }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef);
    
    useEffect(() => {
        if (isInView) {
            let start = 0;
            // Extract number from string (e.g., "500+" -> 500)
            const end = parseInt(to.replace(/\D/g, '')); 
            const duration = 2000;
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, to]);

    return (
        <div ref={nodeRef}>
             <h3 className="text-6xl md:text-8xl font-bold text-orange-600 font-serif mb-2 tabular-nums">
                {count}{to.includes('+') ? '+' : ''}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">{label}</p>
        </div>
    );
};

// Helper hook for simple viewport detection
function useInView(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return isIntersecting;
}


const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for Hero Text
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] font-sans selection:bg-orange-500/30 overflow-x-hidden" ref={containerRef}>
      
      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
         
         {/* Moving Gradient Background */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,50,40,0.4),rgba(11,18,15,1))]" />
         <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" 
         />

         <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto text-center z-10">
            <h1 className="text-[15vw] md:text-[12rem] font-bold tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-linear-to-b from-[#e6e2d6] to-[#e6e2d6]/10 mix-blend-overlay">
              SOLARICA
            </h1>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-10 flex flex-col items-center"
            >
                <div className="h-px w-24 bg-orange-500 mb-6"></div>
                <p className="text-xl md:text-3xl text-white/80 max-w-2xl font-light">
                  Engineered for <span className="italic font-serif text-orange-500">Resilience.</span> <br/> Designed for the Future.
                </p>
            </motion.div>
         </motion.div>
      </section>

      {/* --- STATS SECTION (Animated Counter) --- */}
      <section className="py-24 border-y border-white/5 bg-[#0b120f] relative z-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                {stats.map((stat, idx) => (
                    <CountUp key={idx} to={stat.num} label={stat.label} />
                ))}
            </div>
        </div>
      </section>

      {/* --- STICKY 3D SCROLL SECTION --- */}
      <section className="relative bg-[#0b120f]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-start">
                
                {/* LEFT: 3D Sticky Visual */}
                <div className="lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 flex items-center justify-center p-4 md:p-10 z-10 perspective-1000">
                    <TiltCard>
                        {/* Decorative Rings */}
                        <div className="absolute -inset-5 border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ transform: "translateZ(-50px)" }} />
                        <div className="absolute -inset-15 border border-teal-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ transform: "translateZ(-100px)" }} />
                        
                        {/* 3D Floating Image */}
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-orange-900/30 border border-white/10 bg-[#0f1c15]" style={{ transform: "translateZ(50px)" }}>
                             <img 
                                src="/solor panel (1).jpg" 
                                alt="Solar Vision" 
                                className="w-full h-full object-cover scale-110"
                             />
                             {/* Gloss Effect */}
                             <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
                        </div>
                    </TiltCard>
                </div>

                {/* RIGHT: Scrolling Content (Blur Reveal) */}
                <div className="lg:w-1/2 py-20 lg:py-32 flex flex-col gap-[30vh] z-20">
                    <InfoBlock 
                        idx="01"
                        title="Our Origin"
                        text="Solarica wasn't born in a boardroom. It started in a garage with three engineers and one goal: to break the dependency on fossil fuels. Today, that spark powers millions."
                    />
                    <InfoBlock 
                        idx="02"
                        title="The Mission"
                        text="We don't just sell panels; we sell independence. Our mission is to decentralize power, giving every home and business the ability to generate their own clean energy."
                    />
                    <InfoBlock 
                        idx="03"
                        title="2030 Vision"
                        text="A carbon-neutral India. We are building the infrastructure today for a world where energy is free, abundant, and harmless to our planet."
                    />
                </div>
            </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US (Glowing Bento Cards) --- */}
      <section className="py-32 bg-[#0b120f] relative">
         <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
         <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Why Solarica?</h2>
                <p className="text-white/40">The difference is in the details.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlowCard icon={ShieldCheck} title="Resilient Engineering" desc="Tested against cyclones and extreme heat." />
                <GlowCard icon={Zap} title="99% Efficiency" desc="PERC technology for maximum absorption." />
                <GlowCard icon={Users} title="Lifetime Support" desc="We don't just install; we maintain forever." />
                <GlowCard icon={Leaf} title="Eco-First" desc="Recyclable materials and zero-waste production." />
            </div>
         </div>
      </section>

      <div className="h-20 bg-[#0b120f]"></div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

// Text Block with Blur Reveal Animation
const InfoBlock = ({ idx, title, text }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pl-0 lg:pl-10"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-orange-500/50 text-orange-500 font-mono text-sm">
                    {idx}
                </span>
                <div className="h-px w-20 bg-white/10"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8 text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">
                {title}
            </h2>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                {text}
            </p>
        </motion.div>
    );
};

// Glowing Hover Card
const GlowCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="group relative rounded-3xl bg-white/5 border border-white/5 p-8 hover:border-white/20 transition-colors overflow-hidden">
            <div className="absolute -inset-px bg-linear-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
            <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-white/50">{desc}</p>
            </div>
        </div>
    );
};

export default AboutPage;