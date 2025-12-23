import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  // Base style
  const baseStyle = "px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer relative overflow-hidden tracking-wider text-xs uppercase";
  
  // --- APSTECH CYAN THEME VARIANTS ---
  const variants = {
    // Primary: Solid Cyan (High Contrast - Action Button)
    primary: "bg-[#5ce1e6] text-black border border-[#5ce1e6] shadow-[0_0_20px_rgba(92,225,230,0.3)] hover:shadow-[0_0_40px_rgba(92,225,230,0.6)]",
    
    // Secondary: Dark Glass with Cyan Border
    secondary: "bg-[#14201a] text-[#5ce1e6] border border-[#5ce1e6]/30 hover:border-[#5ce1e6] hover:bg-[#5ce1e6]/10 hover:text-white",
    
    // Outline: Transparent with Cyan Border
    outline: "bg-transparent border border-[#5ce1e6] text-[#5ce1e6] hover:bg-[#5ce1e6] hover:text-black hover:shadow-[0_0_20px_rgba(92,225,230,0.4)]",
    
    // Ghost: Text Only (Minimal)
    ghost: "bg-transparent text-[#5ce1e6] hover:text-white hover:bg-white/5 border border-transparent"
  };

  return (
    <motion.button 
      whileHover={{ 
        scale: 1.05, 
        y: -2 // Thoda upar uthega hover par
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {/* Z-index to ensure text is above any potential background effects */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;