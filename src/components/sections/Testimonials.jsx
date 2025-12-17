import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/constants'; 
import { Quote } from 'lucide-react';

// --- ANIMATION VARIANTS (Aapke wale same rakhe hain) ---

// Text Reveal
const textItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

// 3D Shutter & Flash Effect
const contentBlockVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 0.9, 
    rotateX: 90, 
    transformPerspective: 1000, 
    transformOrigin: 'bottom center',
    backgroundColor: "rgba(255, 100, 0, 0.05)", 
    boxShadow: "0 0 10px rgba(255, 100, 0, 0.3)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0, 
    backgroundColor: "rgba(255, 255, 255, 1)", // Default White Background
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    transition: { 
      type: "spring", stiffness: 70, damping: 15, mass: 1, duration: 0.4 
    } 
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f4f1ea] text-[#0b120f] relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- 1. CENTERED HEADER (Fixed Alignment) --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-600 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
                Trust & Performance
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#0b120f]">
                Client Stories
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* --- 2. GRID LAYOUT --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              variants={contentBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15 }}
              
              // 3D Hover Effect
              whileHover={{ 
                  y: -15, 
                  scale: 1.05, 
                  rotateX: -2, 
                  rotateY: 2,
                  backgroundColor: "rgba(255, 247, 237, 1)", // Very light orange tint on hover
                  boxShadow: "0 20px 40px rgba(234, 88, 12, 0.15)", // Soft Orange Shadow
                  borderColor: "rgba(234, 88, 12, 0.3)"
              }}
              
              className="group relative p-10 rounded-4xl border border-transparent bg-white cursor-pointer z-10 transform-style-3d"
            >
              
              {/* Quote Icon */}
              <motion.div variants={textItem} transition={{ delay: idx * 0.15 + 0.3 }}>
                  <Quote 
                      size={40} 
                      className="text-orange-200 mb-8 transition-colors group-hover:text-orange-500 duration-300" 
                  />
              </motion.div>
              
              {/* Testimonial Text */}
              <motion.p 
                  variants={textItem} 
                  transition={{ delay: idx * 0.15 + 0.4 }}
                  className="text-lg italic text-gray-600 leading-relaxed mb-8"
              >
                "{testimonial.text}"
              </motion.p>

              {/* Author Details */}
              <motion.div 
                  variants={textItem} 
                  transition={{ delay: idx * 0.15 + 0.5 }}
                  className="flex items-center pt-6 border-t border-gray-100 group-hover:border-orange-100 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl font-bold text-orange-600 mr-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="text-md font-bold text-[#0b120f] group-hover:text-orange-600 transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400 font-medium tracking-wide">{testimonial.role}</p>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;