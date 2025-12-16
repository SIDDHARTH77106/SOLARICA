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
           // Optional: Unmount or hide completely after animation
           if(onComplete) onComplete(); 
        }
      });

      // 1. Counter Animation (0 to 100)
      let loadingProgress = { value: 0 };
      tl.to(loadingProgress, {
        value: 100,
        duration: 2,
        ease: "linear",
        onUpdate: () => {
          if(numberRef.current) {
            numberRef.current.textContent = Math.round(loadingProgress.value);
          }
        },
        onComplete: () => {
           if(numberRef.current) numberRef.current.textContent = "100";
        }
      });

      // 2. Slide Up Loader
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // 3. Staggered Text Reveal ("HELLO")
      // We select the spans inside the textContainer
      tl.from(".char", {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2 // Small overlap
      }, "-=0.5"); // Start slightly before loader finishes moving

    }, containerRef); // Scope selector to this component

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-secondary flex flex-col justify-between p-10">
      
      {/* Hello Text Container */}
      <div ref={textContainerRef} className="flex justify-center items-center h-full overflow-hidden">
        {/* We split the text manually for GSAP to grab */}
        <h1 className="text-[15vw] font-black text-main leading-none flex overflow-hidden">
          {"HELLO".split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Loading Number */}
      <div className="absolute bottom-10 right-10">
        <span ref={numberRef} className="text-[20vh] font-helvetica font-bold text-main leading-none">
          0
        </span>
      </div>
    </div>
  );
};

export default Preloader;