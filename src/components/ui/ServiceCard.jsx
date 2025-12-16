import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      // 1. CINEMATIC 3D TILT ENTRANCE
      // Starts pushed down (y: 50) and tilted back (rotateX: -15deg)
      initial={{ 
        opacity: 0, 
        y: 50, 
        rotateX: -15, 
        scale: 0.95 
      }}
      // Animates to flat (rotateX: 0) and original position
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        scale: 1 
      }}
      // Viewport settings: Triggers when card is slightly visible
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, // Staggered delay for cinematic flow
        type: "spring", 
        bounce: 0.3 // Slight bounce for realism
      }}
      
      // 2. SOFTER HOVER (Light Theme Style)
      // Instead of moving up, it breathes (scales) and casts a soft teal glow
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0px 20px 40px -10px rgba(13, 148, 136, 0.2)" // Teal shadow
      }}
      
      // Styling: White card to pop against the #e6e2d6 background
      className="bg-white rounded-2xl p-8 flex flex-col gap-4 cursor-pointer relative overflow-hidden group h-full border border-gray-100"
      style={{ transformStyle: "preserve-3d" }} // Essential for 3D effect
    >
      {/* Abstract Background Decoration (Appears on Hover) */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-teal-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Container */}
      <div className="p-3 bg-teal-50 w-fit rounded-xl group-hover:bg-teal-100 transition-colors duration-300 z-10 text-teal-700">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#0b120f] z-10">
        {title}
      </h3>
      
      <p className="text-gray-500 leading-relaxed z-10 text-sm font-medium">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;