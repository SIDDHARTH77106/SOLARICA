import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const textContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
           if(onComplete) onComplete(); 
        }
      });

      // Initial Set
      gsap.set(".char", { y: 100, opacity: 0 });

      // 1. Text Entry (Staggered & Fast)
      tl.to(".char", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out"
      });

      // 2. Counter Animation (0 to 100) - Fast & Linear
      let loadingProgress = { value: 0 };
      
      tl.to(loadingProgress, {
        value: 100,
        duration: 1.5, // Faster duration (User requested fast)
        ease: "power2.inOut",
        onUpdate: () => {
          if(numberRef.current) {
            numberRef.current.textContent = Math.round(loadingProgress.value) + "%";
          }
        }
      }, "<"); // Starts roughly when text appears

      // 3. Exit Animation (Everything moves up smoothly)
      tl.to([textContainerRef.current, numberRef.current], {
        y: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      });

      // 4. Curtain Reveal (The smoothest part)
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.0, 
        ease: "expo.inOut", // This gives that premium "slide" feel
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#0b120f] text-[#e6e2d6] flex flex-col justify-between font-sans cursor-wait">
      
      {/* Brand Text Container (Centered) */}
      <div ref={textContainerRef} className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
        <h1 className="text-[12vw] md:text-[15vw] font-black leading-none flex overflow-hidden text-[#5ce1e6]/10 select-none">
          {"APSTECH".split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Loading Number (Bottom Right) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 overflow-hidden">
        <span ref={numberRef} className="block text-[12vh] md:text-[20vh] font-bold text-[#5ce1e6] leading-none tracking-tighter">
          0%
        </span>
      </div>
    </div>
  );
};

export default Preloader;