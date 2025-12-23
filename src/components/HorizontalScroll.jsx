import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const requestRef = useRef(null); 

  let xPercent = 0;
  let direction = -1; 
  const speed = 0.08; 

  const animate = () => {
    if (!firstText.current || !secondText.current) return;

    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    
    xPercent += speed * direction;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    let ctx = gsap.context(() => {
      // 1. टेक्स्ट को दाएं-बाएं स्क्रोल करने वाला एनीमेशन
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25, 
          start: 0,
          end: window.innerHeight,
          onUpdate: e => {
            direction = e.direction * -1;
          }
        },
        x: "-=300px", 
      });

      // 2. --- MULTI-COLOR CHANGING EFFECT ---
      // यह एनीमेशन टेक्स्ट के अंदर रंगों को घुमाएगा
      gsap.to(".changing-gradient", {
        backgroundPosition: "200% center",
        duration: 8,
        ease: "none",
        repeat: -1,
      });

    }, slider);

    return () => {
      ctx.revert(); 
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const marqueeText = "Metal Fabrication • Special Purpose Machines • Robotics & Automation • Sheet Metal Products • LED X-Ray View Box • Aluminum Enclosures • Injection Molding • ";

  return (
    <section className="relative h-[25vh] md:h-[40vh] bg-[#0f1712] overflow-hidden flex items-center border-y border-white/5">
      
      <div ref={slider} className="relative whitespace-nowrap">
        
        {/* FIRST COPY */}
        <p 
          ref={firstText} 
          className="changing-gradient relative m-0 text-[12vh] md:text-[22vh] font-sans font-black uppercase leading-none tracking-tighter pr-12 inline-block italic text-transparent bg-clip-text bg-size-200"
          style={{
            backgroundImage: 'linear-gradient(to right, #f97316, #00f2ff, #f97316, #00f2ff)',
            backgroundSize: '200% auto'
          }}
        >
          {marqueeText}
        </p>

        {/* SECOND COPY */}
        <p 
          ref={secondText} 
          className="changing-gradient absolute left-full top-0 m-0 text-[12vh] md:text-[22vh] font-sans font-black uppercase leading-none tracking-tighter pr-12 inline-block italic text-transparent bg-clip-text bg-size-200"
          style={{
            backgroundImage: 'linear-gradient(to right, #f97316, #00f2ff, #f97316, #00f2ff)',
            backgroundSize: '200% auto'
          }}
        >
          {marqueeText}
        </p>

      </div>
    </section>
  );
};

export default HorizontalScroll;