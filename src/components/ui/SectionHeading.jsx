import React from 'react';
import { motion } from 'framer-motion';

// Parent container variants for Staggering children
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Har word 0.05 second ke gap par aayega
      delayChildren: 0.1 
    },
  },
};

// Child element variants (each word)
const item = {
  hidden: { y: 20, opacity: 0 }, // Text thoda neeche se aayega
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  },
};

const SectionHeading = ({ title, subtitle, align = "center", light = false }) => {
  const words = title.split(" "); 

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      
      {/* 1. Subtitle (Simple Fade In) */}
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-sm font-bold uppercase tracking-[0.2em] mb-3 block ${light ? "text-orange-400" : "text-orange-600"}`}
        >
          {subtitle}
        </motion.span>
      )}
      
      {/* 2. Cinematic Main Title (Word Stagger Effect) */}
      <motion.h2 
        variants={container}
        className={`text-4xl md:text-6xl font-extrabold ${light ? "text-white" : "text-gray-900"} leading-tight`}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-3"> {/* Har word ke baad space */}
            <motion.span variants={item} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      {/* 3. Luxury Underline Motion */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`h-1 bg-orange-500 mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`}
      ></motion.div>
      
    </motion.div>
  );
};

export default SectionHeading;