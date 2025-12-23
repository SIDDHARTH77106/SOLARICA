import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b120f] text-[#e6e2d6] pt-24 md:pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#5ce1e6]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-24 text-center md:text-left"
        >
          <span className="text-[#5ce1e6] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Let's Start <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-white/50 italic font-serif">
              A Project.
            </span>
          </h1>
        </motion.div>

        {/* --- MAIN GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT: Contact Info & Map (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
             
             {/* Info Cards */}
             <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[#14201a] border border-white/5 hover:border-[#5ce1e6]/30 transition-all group">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5ce1e6]/10 flex items-center justify-center text-[#5ce1e6] mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <Phone size={20} className="md:w-6 md:h-6" />
                   </div>
                   <h4 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Call Us</h4>
                   <p className="text-white/50 text-xs md:text-sm font-mono">+91 8793566741</p>
                </div>

                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[#14201a] border border-white/5 hover:border-[#5ce1e6]/30 transition-all group">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5ce1e6]/10 flex items-center justify-center text-[#5ce1e6] mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <Mail size={20} className="md:w-6 md:h-6" />
                   </div>
                   <h4 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Email Us</h4>
                   <p className="text-white/50 text-xs md:text-sm font-mono">info@apstechent.com</p>
                </div>
             </div>

             {/* Map Container */}
             <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 h-[250px] md:h-[300px] relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576082643867!2d73.8236123!3d18.4575514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956e30099453%3A0x6a19c4d909564610!2sWadekar%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1703234567890!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0, filter: 'grayscale(100%) invert(90%)'}} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-[#5ce1e6] text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-lg">
                   Locate Us
                </div>
             </div>
          </div>

          {/* RIGHT: Form (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="order-1 lg:order-2">
             <form className="bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] space-y-6 md:space-y-8 backdrop-blur-sm">
                
                <div>
                   <label className="block text-[#5ce1e6] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-4">Your Identity</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white placeholder:text-white/20 focus:border-[#5ce1e6] focus:outline-none transition-all text-base md:text-lg" />
                </div>

                <div>
                   <label className="block text-[#5ce1e6] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-4">Contact Info</label>
                   <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white placeholder:text-white/20 focus:border-[#5ce1e6] focus:outline-none transition-all text-base md:text-lg" />
                </div>

                <div>
                   <label className="block text-[#5ce1e6] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-4">Project Details</label>
                   <textarea rows="4" placeholder="Tell us about your requirements..." className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white placeholder:text-white/20 focus:border-[#5ce1e6] focus:outline-none transition-all text-base md:text-lg resize-none"></textarea>
                </div>

                <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-5 md:py-6 bg-[#5ce1e6] text-black rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-colors text-xs md:text-sm"
                >
                   Send Request <Send size={16} className="md:w-[18px] md:h-[18px]" />
                </motion.button>

             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;