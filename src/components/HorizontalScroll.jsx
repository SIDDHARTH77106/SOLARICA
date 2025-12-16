import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// CSS for gradient animation (Aapko yeh CSS file mein ya style tag mein add karna hoga)
/* @keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-text {
  background-image: linear-gradient(90deg, #ff8c00, #ff4500, #10b981, #06b6d4, #ff8c00);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
*/

const HorizontalScroll = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  
  let xPercent = 0;
  let direction = -1; // -1 = Left (Auto scroll direction)
  
  // Speed of the automatic marquee
  const speed = 0.05;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    // Loop boundary checks
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    
    // GSAP sets text position
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    
    requestAnimationFrame(animate);
    
    // Constant speed update (for auto-movement)
    xPercent += speed * direction;
  };

  // --- SYNC WITH SCROLL (Velocity Effect) ---
  // Jab user scroll karega, to animation tez/dheemi hogi ya direction badlegi
  useEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25, 
        start: 0,
        end: window.innerHeight,
        onUpdate: e => {
          // Scroll direction ke hisaab se auto-move direction change karna
          // e.direction * -1 ka matlab: agar user neeche scroll kare (1), to text left (-1) move kare.
          direction = e.direction * -1;
        }
      },
      x: "-=300px", // Dummy movement
    });
  }, []);

  return (
    <section className="relative h-[40vh] bg-[#0f1c15] overflow-hidden flex items-center">
      
      {/* Container holding the text */}
      <div ref={slider} className="relative whitespace-nowrap">
        
        {/* FIRST COPY */}
        <p 
          ref={firstText} 
          // Text size reduced to 15vh/20vh
          // Gradient classes added
          className="relative m-0 text-[15vh] md:text-[20vh] font-sans font-black uppercase leading-none tracking-tighter pr-10 inline-block text-transparent bg-clip-text gradient-text"
        >
          Innovation • Strategy • Design • Future •
        </p>

        {/* SECOND COPY (For seamless Loop) */}
        <p 
          ref={secondText} 
          // Text size reduced to 15vh/20vh
          // Gradient classes added
          className="absolute left-full top-0 m-0 text-[15vh] md:text-[20vh] font-sans font-black uppercase leading-none tracking-tighter pr-10 inline-block text-transparent bg-clip-text gradient-text"
        >
          Innovation • Strategy • Design • Future •
        </p>

      </div>
    </section>
  );
};

export default HorizontalScroll;