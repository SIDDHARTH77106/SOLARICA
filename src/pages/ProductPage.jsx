import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Cpu, Factory, ShieldCheck, Box } from 'lucide-react';
import Products from '../components/sections/Products'; 

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#0b120f] min-h-screen text-[#e6e2d6] pt-24 md:pt-32 pb-20 overflow-x-hidden">
      
      {/* Ghost Background Text */}
      <div className="absolute top-20 right-0 opacity-[0.02] pointer-events-none select-none z-0 hidden md:block">
        <h2 className="text-[25vw] font-black uppercase text-white">APSTECH</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Cyan Badge */}
          <span className="text-[#5ce1e6] font-mono tracking-widest uppercase text-xs mb-4 md:mb-6 block">Industrial Portfolio</span>
          
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
            PRECISION <br/> <span className="text-[#5ce1e6] italic font-serif">DELIVERED.</span>
          </h1>
          
          {/* Cyan Border Line */}
          <p className="text-white/40 text-base md:text-xl max-w-2xl font-light leading-relaxed border-l-2 border-[#5ce1e6]/50 pl-6 md:pl-10 mb-12 md:mb-20">
            Manufacturing high-grade sheet metal products, LED medical equipment, and automation systems for industrial giants like Atlas Copco and Volkswagen.
          </p>
        </motion.div>

        {/* SECTION 1: CORE PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
          <DetailCard 
            image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200"
            icon={<Factory />} 
            title="Fabricated Metal" 
            desc="Complete project management from CAD to final assembly. Trusted by Atlas Copco India, KPIT, and Volkswagen." 
          />
          <DetailCard 
            image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200"
            icon={<Zap />} 
            title="LED X-Ray Box" 
            desc="Energy efficient 12V systems with dimmer technology for MRI and CT Scan viewing." 
          />
        </div>

        {/* INFINITE SCROLL COMPONENT */}
        <div className="py-12 md:py-20 border-y border-white/5 mb-20 md:mb-32">
          <Products />
        </div>

        {/* SECTION 2: SPECIALIZED MACHINERY */}
        <div className="mb-20 md:mb-32">
           <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
             Specialized <span className="text-[#5ce1e6] italic font-serif">Manufacturing.</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <SpecCard 
                image="https://images.unsplash.com/photo-1622467827417-bbe2237067a9?q=80&w=800"
                icon={<Settings />} 
                title="Injection Molding" 
                detail="Machines up to 250Ton capacity for high precision plastic products." 
                list={["VMC Machinery", "EDM & Wire-cut", "Milling & M1TR"]}
              />
              <SpecCard 
                image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800"
                icon={<Cpu />} 
                title="Automation" 
                detail="Industrial robotics, PLC, SCADA, and manufacturing integration services." 
                list={["PLC Services", "Robot Services", "HMI Services"]}
              />
              <SpecCard 
                image="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800"
                icon={<Box />} 
                title="Extrusion" 
                detail="Aesthetic structural systems for clean and efficient shop floor layouts." 
                list={["FIFO Racks", "Assembly Tables", "Material Trolleys"]}
              />
           </div>
        </div>
      </div>
    </div>
  );
};

// --- CORE PRODUCT CARD ---
const DetailCard = ({ image, icon, title, desc }) => (
  <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] min-h-[350px] md:min-h-[450px] flex items-end border border-white/5 transition-all duration-500 hover:border-[#5ce1e6]/30 hover:shadow-[0_0_30px_rgba(92,225,230,0.1)]">
    {/* Background Image */}
    <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f] via-[#0b120f]/80 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 p-8 md:p-12 w-full">
        <div className="text-[#5ce1e6] mb-6 md:mb-8 scale-125 md:scale-150 transform transition-transform group-hover:rotate-12 group-hover:scale-[1.7] origin-bottom-left">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2 md:mb-4 tracking-tighter text-white">{title}</h3>
        <p className="text-white/50 leading-relaxed font-light max-w-sm text-sm md:text-base">{desc}</p>
    </div>
  </div>
);

// --- SPECIALIZED CARD ---
const SpecCard = ({ image, icon, title, detail, list }) => (
  <div className="group rounded-[2.5rem] md:rounded-[3rem] bg-[#0f1c15] border border-white/5 overflow-hidden transition-all hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(92,225,230,0.15)] hover:border-[#5ce1e6]/20">
    {/* Top Image Frame */}
    <div className="h-40 md:h-48 w-full overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c15] to-transparent" />
        <div className="absolute top-4 left-4 md:top-6 md:left-6 p-2 bg-[#0f1c15]/80 backdrop-blur-md rounded-xl text-[#5ce1e6] border border-white/10 group-hover:border-[#5ce1e6]/50 transition-colors">{icon}</div>
    </div>

    {/* Bottom Content */}
    <div className="p-8 md:p-10 pt-4">
        <h4 className="text-lg md:text-xl font-bold uppercase mb-2 md:mb-4 text-white group-hover:text-[#5ce1e6] transition-colors">{title}</h4>
        <p className="text-xs md:text-sm text-white/30 mb-4 md:mb-6 leading-relaxed font-medium">{detail}</p>
        <ul className="space-y-2 md:space-y-3">
          {list.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-white/60">
              <ShieldCheck size={14} className="text-[#5ce1e6]" /> {item}
            </li>
          ))}
        </ul>
    </div>
  </div>
);

export default ProductPage;