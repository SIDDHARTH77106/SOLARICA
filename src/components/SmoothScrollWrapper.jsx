import { ReactLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Connect Lenis to GSAP ScrollTrigger
// (Ye step zaroori hai taaki animations aur scroll perfect sync mein rahein)
function SmoothScrollWrapper({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1, // Smoothness (Lower = Smoother/Slower)
        duration: 1.5,
        smoothTouch: true, // Mobile pe bhi smooth karega
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollWrapper;