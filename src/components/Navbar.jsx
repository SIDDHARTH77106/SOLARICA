import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false); // Dropdown state
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/products' },
        { 
            name: 'Service', 
            path: '/services',
            subServices: [
                { name: 'CAD Services', path: '/services/cad' },
                { name: 'Sheet Metal', path: '/services/sheet-metal' },
                { name: 'Fabrication', path: '/services/fabrication' },
                { name: 'Machining Unit', path: '/services/machining-unit' },
                { name: 'SS Specialization', path: '/services/ss-specialization' },
                { name: 'Assembly & Finish', path: '/services/assembly-finish' },
            ]
        },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) setHidden(true);
        else setHidden(false);
    });

    return (
        <motion.nav 
            variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-0 w-full z-50 px-6 md:px-12 flex items-center justify-between"
        >
            {/* --- LOGO --- */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="z-50">
                <Link to="/" className="flex flex-col items-center group">
                    <img src="/logoo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                    <span className="text-[8px] font-black tracking-[0.3em] text-white/40 uppercase mt-1 group-hover:text-[#5ce1e6] transition-colors">Enterprises</span>
                </Link>
            </motion.div>

            {/* --- MAIN NAVBAR CAPSULE --- */}
            <div className="flex-1 flex justify-center">
                <div className="bg-[#0f1c15]/70 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-3 flex justify-between items-center text-[#e8e4dc] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-fit min-w-137.5 lg:flex">
                    <ul className="flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase items-center">
                        {navLinks.map((link, i) => (
                            <motion.li 
                                key={link.name}
                                onMouseEnter={() => link.subServices && setIsServiceOpen(true)}
                                onMouseLeave={() => link.subServices && setIsServiceOpen(false)}
                                className="relative group py-2"
                            >
                                <Link 
                                    to={link.path} 
                                    className={`flex items-center gap-1 transition-all duration-300 ${location.pathname.includes(link.path) && link.path !== '/' ? 'text-[#5ce1e6]' : 'text-white/50 hover:text-white'}`}
                                >
                                    {link.name}
                                    {link.subServices && <ChevronDown size={12} className={`transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`} />}
                                </Link>

                                {/* --- DROPDOWN MENU --- */}
                                {link.subServices && (
                                    <AnimatePresence>
                                        {isServiceOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 15 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                                            >
                                                <div className="bg-[#0f1c15]/95 backdrop-blur-3xl border border-white/10 rounded-4xl p-6 shadow-2xl">
                                                    <div className="flex flex-col gap-4">
                                                        {link.subServices.map((sub) => (
                                                            <Link 
                                                                key={sub.name} 
                                                                to={sub.path}
                                                                className="text-[9px] text-white/50 hover:text-[#5ce1e6] transition-colors tracking-widest"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}

                                {location.pathname === link.path && (
                                    <motion.span layoutId="activeNav" className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5ce1e6]" />
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Phone Icon (Updated Color) */}
                    <div className="flex items-center gap-4 ml-10 border-l border-white/10 pl-6">
                        <motion.a whileHover={{ scale: 1.1, backgroundColor: '#5ce1e6' }} href="tel:+918793566741" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 border border-white/5 transition-all group">
                            <Phone size={14} className="group-hover:text-black transition-colors"/>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* --- GET QUOTE BUTTON (Updated to Cyan) --- */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="hidden md:block">
                <Link to="/contact" className="px-8 py-3.5 rounded-full bg-[#5ce1e6] hover:bg-white text-black text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-[#5ce1e6]/20 active:scale-95 border-none">
                    Get Quote
                </Link>
            </motion.div>

            {/* Mobile Menu Icon */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white bg-white/5 p-3 rounded-full border border-white/10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* --- MOBILE DRAWER (Updated Colors) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className="fixed inset-0 bg-[#0b120f] z-60 flex flex-col p-10 overflow-y-auto">
                        <button onClick={() => setIsOpen(false)} className="self-end p-4 text-white"><X size={32}/></button>
                        <div className="flex flex-col gap-10 mt-10">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link to={link.path} onClick={() => !link.subServices && setIsOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-white/40 hover:text-[#5ce1e6] flex items-center justify-between transition-colors">
                                        {link.name}
                                    </Link>
                                    {link.subServices && (
                                        <div className="flex flex-col gap-4 mt-6 ml-4 border-l border-white/10 pl-6">
                                            {link.subServices.map((sub) => (
                                                <Link key={sub.name} to={sub.path} onClick={() => setIsOpen(false)} className="text-sm text-white/20 uppercase tracking-widest hover:text-[#5ce1e6] transition-colors">
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;