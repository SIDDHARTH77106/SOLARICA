import React from 'react';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    // Contact page ko bhi Dark theme background aur padding dein
    // Note: Padding top 'pt-32' Navbar ke liye space banaegi
    <div className="pt-32 pb-16 bg-[#0b120f] min-h-screen"> 
      <Contact />
    </div>
  );
};

export default ContactPage;