import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointer = (e) => {
      const target = e.target;
      // Check if hovering over clickable elements
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handlePointer);
    window.addEventListener('mouseout', handlePointer);
    window.addEventListener('click', handlePointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handlePointer);
      window.removeEventListener('mouseout', handlePointer);
      window.removeEventListener('click', handlePointer);
    };
  }, []);

  // Outer Dot/Ring (Cyan Theme)
  const outerVariants = {
    default: {
      x: mousePosition.x - 6, // Centering adjustments
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "rgba(92, 225, 230, 0.5)", // Cyan Transparent (#5ce1e6)
      border: "1px solid rgba(92, 225, 230, 0)", 
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } 
    },
    interactive: {
      x: mousePosition.x - 32, // Larger ring on hover
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(92, 225, 230, 0.1)", // Very faint Cyan fill
      border: "1px solid #5ce1e6", // Solid Cyan Border
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, mass: 0.1 } 
    }
  };
  
  // Inner Dot (Sharp White Point for Precision)
  const innerVariants = {
      default: { 
        x: mousePosition.x,
        y: mousePosition.y,
        transition: { type: "spring", stiffness: 1000, damping: 50 } // Super fast follow
      }
  };

  return (
    <>
      {/* 1. Inner Dot (Precision Pointer - White) */}
      <motion.div
        variants={innerVariants}
        animate="default"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference" 
        // mix-blend-difference helps it visible on white text too
      />

      {/* 2. Outer Ring (Glow Layer - Cyan) */}
      <motion.div
        variants={outerVariants}
        animate={isHovering ? "interactive" : "default"}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]" 
      />
    </>
  );
};

export default CustomCursor;