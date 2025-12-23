import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

// --- 1. SPARKLE ANIMATION (Updated to Logo Cyan) ---
const Sparkle = ({ className, delay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ 
      scale: [0.5, 1, 0.5],
      opacity: [0.4, 1, 0.4],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    className={`absolute text-[#5ce1e6] ${className}`}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  </motion.div>
);

// --- 2. POP HEADING (Updated Glow & Text Colors) ---
const AnimatedPopHeading = ({ title, subtitle }) => {
  const blobPath = "M45.7,-51.3C59.9,-38.2,72.3,-20.8,75.6,-1.9C78.9,17,73.1,37.4,60.5,52.1C47.9,66.8,28.4,75.7,8,78.8C-12.4,81.9,-33.7,79.1,-50.4,67.7C-67.1,56.3,-79.2,36.3,-83.5,14.9C-87.9,-6.5,-84.5,-29.3,-71.9,-44.7C-59.4,-60.2,-37.7,-68.3,-18.9,-70.8C-0.2,-73.3,17.5,-70.3,33.5,-62.3Z";

  return (
    <div className="text-center mb-24 relative pt-10">
      <div className="relative flex justify-center items-center py-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.12 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute text-[#5ce1e6] w-72 h-72 md:w-600px md:h-600px z-0 blur-[100px]"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="currentColor" d={blobPath} transform="translate(100 100)" />
          </svg>
        </motion.div>

        <Sparkle className="-top-10 left-[15%] md:left-[25%] w-8 h-8" delay={0} />
        <Sparkle className="bottom-0 right-[15%] md:right-[25%] w-10 h-10" delay={0.5} />
        <Sparkle className="top-10 right-1/3 w-6 h-6" delay={1} />

        <motion.h2
          initial={{ scale: 0.5, y: 50 }}
          whileInView={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          viewport={{ once: true }}
          className="relative z-10 text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-tight"
        >
          {title} <br/> 
          <span className="text-[#5ce1e6] italic font-serif lowercase tracking-normal">precision</span>
        </motion.h2>
      </div>

      <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-2xl mx-auto text-lg md:text-2xl font-light relative z-10 px-6"
      >
          {subtitle}
      </motion.p>
    </div>
  );
};

// --- 3. MAIN CONTACT COMPONENT (Themed Blue/Cyan) ---
const Contact = () => {
  const COMPANY_DATA = {
    name: "Prashant Shirode",
    phone: "+91 8793566741",
    email: "info@apstechent.com",
    gst: "27CKZPM6987K1ZQ",
    address: "Shed No. 1, Behind Wadekar Industrial Estate, Near Abhinav College, Narhe, Pune-411041"
  };

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.81432422791!2d73.818318!3d18.4467551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2950555555555%3A0x0!2zMTjCsDI2JzQ4LjMiTiA3M8KwNDknMDUuOSJF!5e0!3m2!1sen!2sin!4v1713432000000!5m2!1sen!2sin`;

  return (
    <section id="contact" className="relative bg-[#0b120f] pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-32">
        
        <AnimatedPopHeading 
          title="Engineering"
          subtitle="Full-scale metal fabrication and assembly services with an emphasis on innovation."
        />

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 mb-32 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
              Let's discuss <br/> your next project.
            </h3>
            
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full mb-12">
              <ShieldCheck size={20} className="text-[#5ce1e6]" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">Verified Entity</span>
                <span className="text-sm font-mono font-bold text-white/80 uppercase">GST: {COMPANY_DATA.gst}</span>
              </div>
            </div>

            <div className="space-y-8">
               <ContactItem icon={<Phone size={20}/>} title="Direct Line" value={COMPANY_DATA.phone} link={`tel:${COMPANY_DATA.phone}`} sub={COMPANY_DATA.name} />
               <ContactItem icon={<Mail size={20}/>} title="Official Inquiry" value={COMPANY_DATA.email} link={`mailto:${COMPANY_DATA.email}`} sub="Support Team" />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/0.02 border border-white/5 p-12 rounded-[3.5rem] backdrop-blur-3xl shadow-3xl"
          >
            <form className="space-y-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/20 ml-1">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#5ce1e6] transition-all text-white text-lg" placeholder="Enter your name" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/20 ml-1">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#5ce1e6] transition-all text-white text-lg" placeholder="yourname@example.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/20 ml-1">Contact Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#5ce1e6] transition-all text-white text-lg" placeholder="+91" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/20 ml-1">Message</label>
                <textarea rows="2" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#5ce1e6] transition-all text-white text-lg resize-none" placeholder="Share your project details..." required></textarea>
              </div>

              {/* Button updated to Cyan with Black text for contrast */}
              <button className="group w-full bg-[#5ce1e6] text-black py-6 rounded-full font-black uppercase tracking-widest transition-all hover:bg-white hover:text-black flex items-center justify-center gap-4 text-sm shadow-xl shadow-[#5ce1e6]/20">
                Submit Request <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-600px md:h-750px rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group"
        >
          <iframe 
            src={mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy" 
          />

          <div className="absolute bottom-12 left-12 md:left-20 z-20 max-w-sm">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#0b120f]/90 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#5ce1e6] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5ce1e6]">Workshop Location</span>
              </div>
              <p className="text-white/80 leading-relaxed text-base font-light mb-6">
                {COMPANY_DATA.address}
              </p>
              <div className="flex items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest border-t border-white/5 pt-6">
                  <MapPin size={14} /> Pune, Maharashtra
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component (Updated Icon & Text Hover Colors)
const ContactItem = ({ icon, title, value, link, sub }) => (
  <a href={link} className="flex items-center gap-6 group">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#5ce1e6] group-hover:bg-[#5ce1e6] group-hover:text-black transition-all duration-500 shadow-lg">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-white/20 mb-1">{title}</p>
      <p className="text-xl font-bold group-hover:text-[#5ce1e6] transition-colors">{value}</p>
      {sub && <p className="text-xs text-white/30 font-medium">{sub}</p>}
    </div>
  </a>
);

export default Contact;