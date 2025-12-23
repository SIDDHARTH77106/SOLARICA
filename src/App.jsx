import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';

// UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader'; 

// Page Components
import HomePage from './pages/HomePage'; 
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage'; 
import ServicePage from './pages/ServicePage'; 

// Sub-Service Pages
import CADServices from './pages/services/CADServices';
import SheetMetal from './pages/services/SheetMetal';
import Fabrication from './pages/services/Fabrication';
import MachiningUnit from './pages/services/MachiningUnit';
import SSSpecialization from './pages/services/SSSpecialization';
import AssemblyFinish from './pages/services/AssemblyFinish';

gsap.registerPlugin(ScrollTrigger);

// --- HELPER: SCROLL TO TOP ON ROUTE CHANGE ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const lenisRef = useRef();
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  // --- SYNC LENIS SCROLL WITH GSAP ---
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    
    // Crucial for heavy 3D/Scroll animations to prevent jitter
    gsap.ticker.lagSmoothing(0);
    
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <Router>
        <ScrollToTop /> {/* Ensures every page starts from top */}
        
        <ReactLenis
            ref={lenisRef}
            root
            autoRaf={false}
            options={{
                lerp: 0.07,         // Lower = Smoother/Heavier feel (Luxurious)
                duration: 1.2,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: true,  // Enabled for mobile smoothness
                touchMultiplier: 1.5,
            }}
        >
            <div 
                className="font-sans antialiased text-[#e6e2d6] bg-[#0b120f] overflow-x-hidden min-h-screen selection:bg-[#5ce1e6] selection:text-black"
                style={{ cursor: 'none' }} // Hides default cursor for CustomCursor
            >
                <CustomCursor />
                
                {/* Show Preloader only once */}
                {!preloaderFinished && (
                    <Preloader onComplete={() => setPreloaderFinished(true)} />
                )}

                <Navbar />

                <main className="relative z-10 min-h-screen">
                    {/* AnimatePresence allows for smooth page transitions if needed later */}
                    <AnimatePresence mode='wait'>
                        <Routes>
                            {/* Main Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<ProductPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicePage />} />

                            {/* Service Sub-Pages */}
                            <Route path="/services/cad" element={<CADServices />} />
                            <Route path="/services/sheet-metal" element={<SheetMetal />} />
                            <Route path="/services/fabrication" element={<Fabrication />} />
                            <Route path="/services/machining-unit" element={<MachiningUnit />} />
                            <Route path="/services/ss-specialization" element={<SSSpecialization />} />
                            <Route path="/services/assembly-finish" element={<AssemblyFinish />} />
                        </Routes>
                    </AnimatePresence>
                </main>

                <Footer />
            </div>
        </ReactLenis>
    </Router>
  );
}

export default App;