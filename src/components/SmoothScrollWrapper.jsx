import { ReactLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);

function SmoothScrollWrapper({ children }) {
  const lenisRef = useRef();

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

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
 
        lerp: 0.07,         
        duration: 1.2,     
        smoothTouch: true,  
        touchMultiplier: 1.5, 
        wheelMultiplier: 1, 
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollWrapper;