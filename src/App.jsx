import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader'; 

// Page Components
import HomePage from './pages/HomePage'; 
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef();
  
  // State to track if loading is finished
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  // 1. GSAP Ticker for Lenis
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  // 2. Scroll Restoration Fix
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 3. Scroll Locking & Lenis Control
  useEffect(() => {
    if (!preloaderFinished) {
      // Jab tak Preloader chal raha hai: Scroll LOCK
      if (lenisRef.current?.lenis) lenisRef.current.lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      // Preloader khatam hone par: Scroll UNLOCK
      if (lenisRef.current?.lenis) lenisRef.current.lenis.start();
      document.body.style.overflow = 'auto';
    }
  }, [preloaderFinished]);

  return (
    <Router>
        <ReactLenis
            ref={lenisRef}
            root
            autoRaf={false}
            options={{
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                smoothWheel: true,
                smoothTouch: false,
            }}
        >
            <div 
                className="font-sans antialiased text-[#e6e2d6] bg-[#0b120f] overflow-x-hidden min-h-screen selection:bg-teal-500/30 selection:text-teal-200"
                style={{ fontFamily: 'Manrope, sans-serif', cursor: 'none' }}
            >
                <CustomCursor />
                
                {/* Preloader Component */}
                {/* Hum Preloader ko tab tak render karenge jab tak animation complete na ho jaye */}
                {!preloaderFinished && (
                    <Preloader onComplete={() => setPreloaderFinished(true)} />
                )}

                <Navbar lightTheme={false} />

                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>

                <Footer lightTheme={false} />
            </div>
        </ReactLenis>
    </Router>
  );
}

export default App;