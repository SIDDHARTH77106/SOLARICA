import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
           // Animation khatam hone par App ko signal bhejo
           if(onComplete) onComplete(); 
        }
      });

      // 1. Counter Animation (0 to 100)
      let loadingProgress = { value: 0 };
      
      tl.to(loadingProgress, {
        value: 100,
        duration: 2.5, // Thoda slow kiya smooth feel ke liye
        ease: "power2.inOut",
        onUpdate: () => {
          if(numberRef.current) {
            numberRef.current.textContent = Math.round(loadingProgress.value) + "%";
          }
        }
      });

      // 2. Text Fade Out & Counter Fade Out
      tl.to([".char", numberRef.current], {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.in"
      });

      // 3. Slide Up Loader (Curtain Reveal)
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-9999 bg-[#0b120f] text-[#e6e2d6] flex flex-col justify-between p-10 font-sans">
      
      {/* Brand Text Container */}
      <div className="flex justify-center items-center h-full overflow-hidden absolute inset-0">
        <h1 className="text-[12vw] md:text-[15vw] font-black leading-none flex overflow-hidden mix-blend-overlay opacity-20 select-none">
          {"SOLARICA".split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Loading Number (Bottom Right) */}
      <div className="absolute bottom-10 right-10 z-20 overflow-hidden">
        <span ref={numberRef} className="block text-[15vh] md:text-[20vh] font-bold text-orange-500 leading-none tracking-tighter">
          0%
        </span>
      </div>
    </div>
  );
};

export default Preloader;