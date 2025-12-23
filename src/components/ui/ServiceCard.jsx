import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index, image }) => {
  return (
    <motion.div
      // 1. CINEMATIC 3D TILT ENTRANCE
      initial={{ 
        opacity: 0, 
        y: 50, 
        rotateX: -15, 
        scale: 0.95 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, 
        type: "spring", 
        bounce: 0.3 
      }}
      
      // 2. HOVER EFFECT
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0px 20px 40px -10px rgba(13, 148, 136, 0.3)" 
      }}
      
      className="bg-white rounded-3xl flex flex-col cursor-pointer relative overflow-hidden group h-[400px] border border-gray-100 shadow-sm"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* --- Background Image Section --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay: Niche se dark gradient taaki white text dikhe, ya light overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b120f]/90 via-[#0b120f]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>

      {/* --- Content Section --- */}
      <div className="relative z-10 p-8 mt-auto flex flex-col gap-3">
        {/* Icon Container */}
        <div className="p-3 bg-teal-500/20 backdrop-blur-md w-fit rounded-xl mb-2 text-teal-400 border border-teal-500/30">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed text-sm font-medium line-clamp-3">
          {description}
        </p>

        {/* Floating Decoration (On Hover) */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-teal-400 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;