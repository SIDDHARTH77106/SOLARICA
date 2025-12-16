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

  // Outer Dot/Ring (Interactive Glow Layer)
  const outerVariants = {
    default: {
      x: mousePosition.x - 4, // 8px / 2 = 4 (center)
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "rgba(255, 100, 0, 0.8)", // Orange Dot
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 } 
    },
    interactive: {
      x: mousePosition.x - 24, // 48px / 2 = 24
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(31, 192, 180, 0.2)", // Teal Glow Fill
      scale: 1,
      opacity: 1,
      border: "2px solid #1f7d74", // Teal Ring
      transition: { type: "spring", stiffness: 50, damping: 8 } 
    }
  };
  
  // Inner Dot (Fast-moving white point)
  const innerVariants = {
      default: { 
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
          transition: { type: "spring", stiffness: 200, damping: 10 }
      }
  };

  return (
    <>
      {/* 1. Inner Dot (The actual cursor point) */}
      <motion.div
        variants={innerVariants}
        animate="default"
        className="fixed top-0 left-0 w-0.5 h-0.5 rounded-full pointer-events-none z-9999 bg-[#1a1a1a]" // Dark dot on light background
      />

      {/* 2. Outer Dot/Ring (Interactive Glow Layer) */}
      <motion.div
        variants={outerVariants}
        animate={isHovering ? "interactive" : "default"}
        style={{ filter: 'blur(1px)' }} 
        className="fixed top-0 left-0 rounded-full pointer-events-none z-9998" 
      />
    </>
  );
};

export default CustomCursor;