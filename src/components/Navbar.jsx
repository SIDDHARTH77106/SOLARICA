import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks } from '../data/constants'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        setHidden(latest > previous && latest > 150);
    });

    const handleAnchorClick = (e, path) => {
        if (path.startsWith('/#')) {
            e.preventDefault();
            if (window.location.pathname !== '/') {
                window.location.href = path;
            } else {
                const hash = path.substring(2);
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <motion.nav 
            variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 flex justify-center items-center" // added items-center here just in case
        >
            <div className="w-full max-w-[1400px] bg-[#0f1c15]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 md:px-8 md:py-3 flex justify-between items-center text-[#e8e4dc] shadow-2xl transition-all duration-300 hover:border-white/20">
                
                {/* --- LOGO --- */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <img 
                            src="/logoo.png" 
                            alt="Solarica Logo" 
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                         {/* Subtle glow behind logo */}
                        <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <span className="text-lg md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all duration-300">
                        SOLARICA
                    </span>
                </Link>
                
                {/* --- DESKTOP LINKS --- */}
                <ul className="hidden lg:flex gap-8 text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase items-center">
                    {navLinks.map(link => (
                        <li key={link.name} className="relative group">
                            <Link 
                                to={link.path} 
                                onClick={(e) => handleAnchorClick(e, link.path)}
                                className="relative z-10 py-2 block hover:text-orange-400 transition-colors opacity-80 hover:opacity-100"
                            >
                                {link.name}
                            </Link>
                            {/* Animated Underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* --- RIGHT SIDE ACTIONS (Phone + Quote) --- */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Phone Number */}
                    <a href="tel:+919758122902" className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 hover:text-orange-400 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                            <Phone size={14} className="group-hover:text-orange-500 transition-colors"/>
                        </div>
                        <span className="hidden xl:inline">+91 9758122902</span>
                    </a>
                    
                    {/* --- GET QUOTE BUTTON (Redesigned) --- */}
                    <Link 
                        to="/contact" 
                        className="relative overflow-hidden px-6 py-2.5 rounded-full group bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-900/20 hover:shadow-orange-600/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Get Quote 
                            {/* Small arrow icon */}
                            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        {/* Shimmer Effect Overlay */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-24 left-4 right-4 bg-[#1a2e1a] rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl z-40"
                    >
                        <div className="flex flex-col gap-1 text-center">
                            {navLinks.map(link => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    onClick={(e) => {
                                        handleAnchorClick(e, link.path);
                                        setIsOpen(false);
                                    }} 
                                    className="py-4 text-lg font-medium text-[#e8e4dc] hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            <div className="h-px bg-white/10 my-4"></div>

                            {/* Mobile Quote Button */}
                            <Link 
                                to="/contact" 
                                onClick={() => setIsOpen(false)} 
                                className="py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform"
                            >
                                Get Quote Now
                            </Link>
                            
                            <a href="tel:+919758122902" className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400 py-2">
                                <Phone size={16}/> +91 9758122902
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;