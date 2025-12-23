import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // 1. Mouse Move Handler
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Click Handlers
    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    // 3. Hover Handler (Intelligent Detection)
    const handlePointer = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    // Using global mouseover for better delegation
    window.addEventListener('mouseover', handlePointer);
    window.addEventListener('mouseout', handlePointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mouseover', handlePointer);
      window.removeEventListener('mouseout', handlePointer);
    };
  }, []);

  // --- ANIMATION VARIANTS ---

  // 1. Inner Dot (The Sharp Pointer)
  const innerVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "#5ce1e6", // Logo Cyan
      opacity: 1,
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "#5ce1e6",
      opacity: 0, // Hide inner dot when hovering for cleaner look
    }
  };

  // 2. Outer Ring (The Smooth Follower)
  const outerVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "1px solid rgba(92, 225, 230, 0.5)", // Cyan Border
      opacity: 1,
      scale: isClicking ? 0.8 : 1, // Click Squeeze
      transition: { type: "spring", stiffness: 200, damping: 20, mass: 0.5 }
    },
    hover: {
      x: mousePosition.x - 40, // Bigger circle
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(92, 225, 230, 0.1)", // Slight fill
      border: "1px solid rgba(92, 225, 230, 0.8)", // Solid Border
      opacity: 1,
      scale: isClicking ? 0.9 : 1,
      mixBlendMode: "difference", // COOL EFFECT: Inverts colors behind it
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.8 }
    }
  };

  return (
    <>
      {/* RESPONSIVE NOTE: 
         'hidden lg:block' ensures it ONLY shows on Laptop/Desktop. 
         Mobile touches won't trigger it.
      */}

      {/* Outer Ring */}
      <motion.div
        variants={outerVariants}
        animate={isHovering ? "hover" : "default"}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden lg:block"
        style={{ willChange: 'transform' }}
      />

      {/* Inner Dot */}
      <motion.div
        variants={innerVariants}
        animate={isHovering ? "hover" : "default"}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;