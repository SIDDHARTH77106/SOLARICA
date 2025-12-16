import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const TopBar = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-blue-950 text-white text-xs md:text-sm py-2 px-4 hidden md:flex justify-between items-center border-b border-blue-900"
  >
    <div className="flex gap-6">
      <div className="flex items-center gap-2 text-gray-300 hover:text-white transition"><Mail size={14} /> Siddharthgautam@gmail.com</div>
      <div className="flex items-center gap-2 text-gray-300 hover:text-white transition"><Phone size={14} /> +91 9758122902</div>
    </div>
    <div className="flex gap-4">
      {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
        <Icon key={idx} size={16} className="cursor-pointer hover:text-green-400 transition transform hover:scale-110"/>
      ))}
    </div>
  </motion.div>
);

export default TopBar;