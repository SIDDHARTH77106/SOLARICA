import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

// --- 1. SPARKLE/STAR COMPONENT ---
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
    className={`absolute text-orange-500 ${className}`}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  </motion.div>
);

// --- 2. ANIMATED POP HEADING ---
const AnimatedPopHeading = ({ title, subtitle }) => {
  const blobPath = "M45.7,-51.3C59.9,-38.2,72.3,-20.8,75.6,-1.9C78.9,17,73.1,37.4,60.5,52.1C47.9,66.8,28.4,75.7,8,78.8C-12.4,81.9,-33.7,79.1,-50.4,67.7C-67.1,56.3,-79.2,36.3,-83.5,14.9C-87.9,-6.5,-84.5,-29.3,-71.9,-44.7C-59.4,-60.2,-37.7,-68.3,-18.9,-70.8C-0.2,-73.3,17.5,-70.3,33.5,-62.3Z";

  return (
    <div className="text-center mb-12 relative">
      <div className="relative flex justify-center items-center py-10">
        {/* Background Blob */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute text-white w-72 h-72 md:w-96 md:h-96 z-0"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
            <path fill="currentColor" d={blobPath} transform="translate(100 100)" />
          </svg>
        </motion.div>

        {/* Stars */}
        <Sparkle className="-top-2 left-10 md:left-1/4 w-8 h-8" delay={0} />
        <Sparkle className="bottom-4 right-10 md:right-1/4 w-10 h-10" delay={0.5} />
        <Sparkle className="top-0 right-1/3 w-6 h-6" delay={1} />

        {/* Text */}
        <motion.h2
          initial={{ scale: 0.5, y: 50, rotate: -5 }}
          whileInView={{ scale: 1, y: 0, rotate: 0 }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 2,
            color: "#ea580c"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          viewport={{ once: true }}
          className="relative z-10 text-5xl md:text-7xl font-extrabold uppercase tracking-tighter cursor-pointer select-none text-[#1a1a1a]"
          style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.05)' }}
        >
          {title}
        </motion.h2>
      </div>

      <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-lg mt-0 relative z-10"
      >
          {subtitle}
      </motion.p>
    </div>
  );
};

// --- 3. MAIN CONTACT COMPONENT ---
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, delayChildren: 0.3, staggerChildren: 0.2 }
  }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
}

const Contact = () => {
    
    // Website Theme Colors
    const CONTACT_BG = "#EAE8E1"; 
    const ACCENT_COLOR = "text-orange-600";
    const SHADOW_COLOR = "rgba(0, 0, 0, 0.1)";
    
    const countries = ["India", "United States", "Germany", "Japan", "Other"];

    return (
        <section id="contact" className={`py-16 text-[#1a1a1a] overflow-hidden`} style={{ backgroundColor: CONTACT_BG }}>
            <div className="container mx-auto px-6">
                
                <AnimatedPopHeading 
                    title="Get in Touch" 
                    subtitle="Thanks for your interest in Solarica. We'll connect you with the right person." 
                />

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    // Gap reduced to gap-8 to fix spacing issues
                    className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                >
                    
                    {/* LEFT: Form Container */}
                    <motion.div 
                        variants={itemVariants}
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{ y: -5, rotateX: 1, boxShadow: `0 18px 36px ${SHADOW_COLOR}` }}
                        className="p-8 md:p-10 bg-white rounded-4xl shadow-xl border border-white/50 relative z-10 h-full"
                    >
                        <h3 className="text-3xl font-bold mb-2 text-orange-600">Send a Message</h3>
                        <p className="text-sm text-gray-500 mb-8">Please provide the following information...</p>
                        
                        <form className="space-y-6">
                            
                            {/* "About You" heading REMOVED */}
                            {/* Inquiry Type section REMOVED */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" required placeholder="First Name*" className="p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition"/>
                                <input type="text" required placeholder="Last Name*" className="p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition"/>
                            </div>
                            
                            <input type="email" required placeholder="Email Address*" className="w-full p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition"/>
                            <input type="tel" placeholder="Phone Number" className="w-full p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition"/>
                            <input type="text" placeholder="Company/Organization*" className="w-full p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition"/>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Country/Region*</label>
                                <select required className="w-full p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition appearance-none">
                                    <option value="">Select a value</option>
                                    {countries.map(country => <option key={country} value={country}>{country}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?*</label>
                                <textarea required placeholder="Briefly describe your requirements..." rows="4" className="w-full p-4 border border-gray-200 bg-[#f9f9f9] rounded-xl focus:border-orange-500 transition"></textarea>
                            </div>

                            <div className="flex items-start pt-2">
                                <input id="privacy-check" type="checkbox" required className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
                                <label htmlFor="privacy-check" className="ml-3 text-sm text-gray-600">I agree to the privacy policy.</label>
                            </div>
                            
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 transition mt-2"
                            >
                                Submit <ArrowRight size={18}/>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* RIGHT: Floating Info/Map Container */}
                    <motion.div 
                        variants={itemVariants}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="p-8 md:p-10 bg-white rounded-4xl shadow-xl border border-white/50 flex flex-col justify-between relative z-10 h-full"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <ContactDetail icon={Mail} title="Email Address" value="info@solarica.com" accent={ACCENT_COLOR}/>
                                <ContactDetail icon={Phone} title="Phone Number" value="+91 98765 43210" accent={ACCENT_COLOR}/>
                                <ContactDetail icon={MapPin} title="Our Location" value="Solarica HQ, Pune, India" accent={ACCENT_COLOR}/>
                            </div>
                        </div>

                        {/* MAP SECTION - Height increased to fill vertical gap */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-10 h-80 w-full bg-gray-100 rounded-xl overflow-hidden relative shadow-inner border border-gray-200"
                        >
                            <iframe 
                                width="100%" 
                                height="100%" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0" 
                                title="Solarica Location"
                                src="https://maps.google.com/maps?q=Pune,Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </motion.div>

                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

// Reusable Detail Component
const ContactDetail = ({ icon: Icon, title, value, accent }) => (
    <div className="flex items-start space-x-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/10 ${accent}`}>
            <Icon size={18} />
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-lg font-bold text-[#1a1a1a]">{value}</p>
        </div>
    </div>
);

export default Contact;