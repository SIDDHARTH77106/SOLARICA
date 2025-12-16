import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

// Animation Variants (Same as before for cinematic feel)
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
}

const Contact = () => {
    
    const CONTACT_BG = "#f0f2f5";
    const TEXT_COLOR = "#1a1a1a";
    const ACCENT_COLOR = "text-orange-600";
    const SHADOW_COLOR = "rgba(0, 0, 0, 0.15)";
    
    // Dropdown options (Accenture Reference se liye gaye hain)
    const inquiryTypes = ["General Inquiry", "Project Proposal", "Partnership", "Career"];
    const countries = ["India", "United States", "Germany", "Japan", "Other"];

    return (
        <section id="contact" className={`py-16 bg-[${CONTACT_BG}] text-[${TEXT_COLOR}]`}>
            <div className="container mx-auto px-6">
                
                {/* --- HEADER: Trust & Professionalism --- */}
                <SectionHeading 
                    title="Get in Touch" 
                    subtitle="Thanks for your interest in Solarica. We'll connect you with the right person." 
                    align="center" 
                    light={false} 
                />

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    
                    {/* 2. Form Container (Detailed Professional Form) */}
                    <motion.div 
                        variants={itemVariants}
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{ 
                            y: -5, 
                            rotateX: 1, 
                            boxShadow: `0 18px 36px ${SHADOW_COLOR}` 
                        }}
                        className="p-10 bg-white rounded-[2rem] shadow-2xl border border-gray-100"
                    >
                        {/* Form Title & Subtitle */}
                        <h3 className="text-3xl font-bold mb-2 text-orange-600">Send a Message</h3>
                        <p className="text-sm text-gray-500 mb-8">Please provide the following information and we’ll put you in touch with the right person.</p>
                        
                        {/* --- ACTUAL DETAILED FORM --- */}
                        <form className="space-y-6">
                            
                            {/* Inquiry Type (REQUIRED) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type*</label>
                                <select required className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition appearance-none bg-white">
                                    <option value="">Select a value</option>
                                    {inquiryTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            
                            {/* ABOUT YOU (GRID FOR NAMES) */}
                            <h4 className="pt-4 text-xl font-semibold border-t border-gray-100">About You</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" required placeholder="First Name*" className="p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"/>
                                <input type="text" required placeholder="Last Name*" className="p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"/>
                            </div>
                            
                            {/* Email and Phone */}
                            <input type="email" required placeholder="Email Address*" className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"/>
                            <input type="tel" placeholder="Phone Number (Include country code)" className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"/>

                            {/* Company and Role */}
                            <input type="text" placeholder="Company/Organization*" className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"/>
                            <input type="text" placeholder="Your Role/Function" className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"/>
                            
                            {/* Country/Region (REQUIRED) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Country/Region*</label>
                                <select required className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition appearance-none bg-white">
                                    <option value="">Select a value</option>
                                    {countries.map(country => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>

                            {/* How can we help? (REQUIRED) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?*</label>
                                <textarea required placeholder="Briefly describe your requirements (Max 5000 characters)" rows="5" maxLength={5000} className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-500 transition"></textarea>
                            </div>

                            {/* Privacy Checkbox (ACCENTURE REFERENCE) */}
                            <div className="flex items-start pt-4">
                                <input id="privacy-check" type="checkbox" required className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
                                <label htmlFor="privacy-check" className="ml-3 text-sm text-gray-600">
                                    I agree to the use or processing of my personal information by Solarica for the purpose of fulfilling this request and in accordance with Solarica’s <a href="#" className="text-orange-600 hover:underline">Privacy Statement</a>.
                                </label>
                            </div>
                            
                            {/* Submit Button */}
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.02, rotateX: 1 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 transition mt-6"
                            >
                                Submit <ArrowRight size={18}/>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* 3. Floating Info/Map Container (Same as before) */}
                    <motion.div 
                        variants={itemVariants}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="p-10 bg-[#f9f9f9] rounded-[2rem] shadow-md border border-gray-100 flex flex-col justify-between"
                    >
                        <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                        
                        {/* ... (Contact Details code here) ... */}
                        <div className="space-y-6">
                            <ContactDetail icon={Mail} title="Email Address" value="info@solarica.com" accent={ACCENT_COLOR}/>
                            <ContactDetail icon={Phone} title="Phone Number" value="+91 98765 43210" accent={ACCENT_COLOR}/>
                            <ContactDetail icon={MapPin} title="Our Location" value="Solarica HQ, Pune, India" accent={ACCENT_COLOR}/>
                        </div>

                        {/* Floating Image/Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-10 h-64 w-full bg-gray-200 rounded-xl overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-orange-500/10 backdrop-blur-sm flex items-center justify-center text-gray-800 font-bold">
                                Map Placeholder
                            </div>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

// Simple reusable component for contact details (Same as before)
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