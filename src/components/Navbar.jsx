import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks } from '../data/constants'; 
import { Link } from 'react-router-dom'; // 💥 REACT ROUTER LINK 💥

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        setHidden(latest > previous && latest > 150);
    });

    // Function to handle anchor links correctly with Lenis/Router
    const handleAnchorClick = (e, path) => {
        if (path.startsWith('/#')) {
            // Agar path Home page anchor link hai (e.g., '/#products')
            e.preventDefault();
            
            // Router se Home Page par navigate karein, aur phir hash jump karein
            if (window.location.pathname !== '/') {
                window.location.href = path; // Navigate to home and then jump
            } else {
                // Agar already Home par hain, toh seedha Lenis scroll ya hash jump karein
                const hash = path.substring(2); // Get "products"
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // Simple route navigation (e.g., /contact)
            setIsOpen(false);
        }
    };


    return (
        <motion.nav 
            variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 flex justify-center"
        >
            <div className="w-full max-w-[1400px] bg-[#0f1c15]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 md:px-8 md:py-4 flex justify-between items-center text-[#e8e4dc] shadow-2xl">
                
                {/* --- LOGO: Home Page Link --- */}
                <Link to="/" className="flex items-center gap-2">
                    <img 
                        src="/logoo.png" 
                        alt="Solarica Logo" 
                        className="w-8 h-8 object-contain"
                    />
                    <span className="text-xl md:text-2xl font-bold tracking-tight">
                        SOLARICA
                    </span>
                </Link>
                
                {/* Desktop Links (Home Page Anchors + /Contact) */}
                <ul className="hidden lg:flex gap-8 text-xs font-bold tracking-[0.15em] uppercase">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link 
                                to={link.path} 
                                // ✅ FIX: Anchor handling (Hash links ke liye function use kiya)
                                onClick={(e) => handleAnchorClick(e, link.path)}
                                className="hover:text-orange-400 transition-colors opacity-80 hover:opacity-100"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex gap-4 items-center">
                    {/* Phone Number (Same) */}
                    <a href="tel:+919758122902" className="flex items-center gap-2 text-xs font-bold uppercase text-orange-400 hover:text-white transition">
                        <Phone size={14}/> +91 9758122902
                    </a>
                    
                    {/* ✅ FIX: Get Quote Button (Ab /contact route par jayega) */}
                    <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 shadow-lg shadow-orange-500/30 transition">
                        Get Quote
                    </Link>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu (Links ab Router use karenge) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-[#1a2e1a] rounded-[2rem] p-8 border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map(link => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    // ✅ FIX: Anchor handling (Mobile menu mein bhi)
                                    onClick={(e) => {
                                        handleAnchorClick(e, link.path);
                                        setIsOpen(false);
                                    }} 
                                    className="text-xl font-light text-[#e8e4dc] hover:text-orange-400 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            {/* Mobile CTA (Link Component) */}
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition">
                                Get Quote Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;