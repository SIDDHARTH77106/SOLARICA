import React, { useEffect, useRef, useState } from 'react';
// 💥 ROUTER IMPORTS ADDED 💥
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// UI Components (Same)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader'; 
// import ArrowRight ko hata diya kyunki ab woh HomePage mein hai

// 💥 PAGE COMPONENTS IMPORT KIYE 💥
import HomePage from './pages/HomePage'; 
import ContactPage from './pages/ContactPage';
// Section components ke imports hata diye kyunki ab woh HomePage mein hain.
// Contact ka import bhi hata diya kyunki ab woh ContactPage mein hai.

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

// Custom component to handle Lenis scroll start/stop on route change (Required for React Router)
const LenisScrollHandler = ({ lenisRef, preloaderFinished }) => {
    // Note: As per request, we'll keep the logic simple for now, relying on Lenis root settings.
    return null;
};


function App() {
  
  const lenisRef = useRef();
  const [preloaderFinished, setPreloaderFinished] = useState(false);

    // GSAP and Lenis setup for smooth scroll (Same)
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      if (!preloaderFinished) {
        lenisRef.current.lenis.stop(); 
      } else {
        lenisRef.current.lenis.start(); 
      }
    }
  }, [preloaderFinished]);

  return (
    <Router> {/* 💥 Main Router Container Added 💥 */}
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
                
                <Preloader onComplete={() => setPreloaderFinished(true)} />
                <CustomCursor />
                <Navbar lightTheme={false} />

                {/* LenisScrollHandler component agar chahiye toh yahan add karein */}
                {/* <LenisScrollHandler lenisRef={lenisRef} preloaderFinished={preloaderFinished} /> */}

                <main className="relative z-10">
                    <Routes> {/* 💥 Routes Defining Pages 💥 */}
                        {/* 1. Home Page */}
                        <Route path="/" element={<HomePage />} />
                        
                        {/* 2. Contact Page */}
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>

                <Footer lightTheme={false} />
                
            </div>
        </ReactLenis>
    </Router>
  );
}

export default App;