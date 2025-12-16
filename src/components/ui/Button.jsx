import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  // Base style is updated for a slightly more modern, wider button
  const baseStyle = "px-8 py-3 rounded-full font-bold transition flex items-center justify-center gap-2 shadow-xl cursor-pointer";
  
  // --- SOLARICA THEME VARIANTS ---
  const variants = {
    // Primary: Orange Gradient (High contrast, attention-grabbing)
    primary: "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-orange-500/50 hover:shadow-orange-400/70",
    
    // Secondary: Dark Outline/Filled (Used for secondary actions)
    secondary: "bg-[#0f1c15] text-[#e8e4dc] border border-white/20 hover:bg-[#1a2e1a] shadow-none",
    
    // Outline: White/Teal Accent (Subtle, professional)
    outline: "border-2 border-teal-400 text-teal-400 hover:bg-teal-900/20 hover:text-white shadow-none",
    
    // Tertiary (New Dark Contrast)
    tertiary: "bg-[#e8e4dc] text-[#0f1c15] hover:bg-white shadow-gray-400/40"
  };

  // Add a dedicated animation for the primary gradient button
  const isPrimary = variant === "primary";

  return (
    <motion.button 
      whileHover={{ 
        scale: 1.05, 
        // Gradient buttons par halka sa box-shadow badhana
        ...(isPrimary && { 
            boxShadow: "0 10px 30px rgba(249, 115, 22, 0.7)" 
        })
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;