import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/constants'; 
import SectionHeading from '../ui/SectionHeading';
import { Quote } from 'lucide-react';

// Variants for Text Reveal
const textItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

// Content Block Variants for 3D SHUTTER EFFECT & INITIAL GLOW
const contentBlockVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 0.9, 
    rotateX: 90, 
    transformPerspective: 1000, 
    transformOrigin: 'bottom center',
    // KEY: Initial Flash Color/Shadow
    backgroundColor: "rgba(255, 100, 0, 0.05)", // Initial very light flash
    boxShadow: "0 0 10px rgba(255, 100, 0, 0.3)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0, 
    // KEY: Final state (No background, minimal shadow)
    backgroundColor: "rgba(255, 255, 255, 0)", 
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      mass: 1,
      // Flash duration ko fast rakha hai
      duration: 0.4 
    } 
  }
};

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-[#f0f2f5] text-[#1a1a1a]"> 
    <div className="container mx-auto px-6">
      
      <SectionHeading title="Client Stories" subtitle="Trust & Performance" align="left" light={false} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-12">
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx}
            variants={contentBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.15 }}
            
            // 🖱️ 3D FLOATING FLASH ON HOVER
            whileHover={{ 
                y: -15, 
                scale: 1.05, 
                rotateX: -2, 
                rotateY: 2,
                // KEY: Hover Flash (Background aur Shadow ko Orange Glow mein badalna)
                backgroundColor: "rgba(255, 100, 0, 0.08)", // Light orange glow background
                boxShadow: "0 10px 40px rgba(255, 100, 0, 0.5)", // Strong orange glow shadow
            }}
            
            // ✅ FIX: No Box/Card: Transparent/minimal background
            className="group relative p-10 rounded-4xl transition-all duration-300 transform-style: preserve-3d cursor-pointer z-10 
                       border-2 border-transparent hover:border-orange-500/20" // Halki border glow
          >
            
            {/* Quote Icon (Animated Text) */}
            <motion.div variants={textItem} transition={{ delay: idx * 0.15 + 0.5 }}>
                <Quote 
                    size={36} 
                    className="text-orange-500/50 mb-6 transition-colors group-hover:text-orange-500" 
                />
            </motion.div>
            
            {/* Testimonial Text (Animated Text) */}
            <motion.p 
                variants={textItem} 
                transition={{ delay: idx * 0.15 + 0.6 }}
                className="text-lg italic text-gray-700 leading-relaxed mb-8"
            >
              "{testimonial.text}"
            </motion.p>

            {/* Author Details (Animated Text) */}
            <motion.div 
                variants={textItem} 
                transition={{ delay: idx * 0.15 + 0.7 }}
                className="flex items-center pt-4 border-t border-gray-100"
            >
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-xl font-bold text-orange-600 mr-4">
                {testimonial.name.charAt(0)}
              </div>
              
              <div>
                <h4 className="text-md font-bold text-[#1a1a1a]">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;