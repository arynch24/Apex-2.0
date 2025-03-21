import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StickyScrollCards = () => {
  const containerRef = useRef(null);
  const stickyCardRef = useRef(null);
  const scrollCardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const scrollCards = scrollCardsRef.current;
    
    if (!container || scrollCards.length === 0) return;
    
    // Setup the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: stickyCardRef.current,
      }
    });
    
    // Animate each scroll card
    scrollCards.forEach((card, index) => {
      const isEven = index % 2 === 0;
      const rotateDirection = isEven ? -5 : 5;
      
      tl.fromTo(card, 
        { 
          y: "100%", 
          opacity: 0, 
          rotate: rotateDirection * 2,
          scale: 0.9,
          zIndex: 10 + index,
        },
        { 
          y: 0, // Cards should stack properly
          opacity: 1, 
          rotate: rotateDirection, 
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, 
        index * 0.2
      );
    });
    
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);
  
  const addToScrollCardsRef = (el) => {
    if (el && !scrollCardsRef.current.includes(el)) {
      scrollCardsRef.current.push(el);
    }
  };
  
  return (
    <div className="w-full">
      <div ref={containerRef} className="flex flex-col md:flex-row w-full max-w-6xl mx-auto min-h-screen py-16 px-4">
        {/* Sticky Card (Left Side) */}
        <div className="w-full md:w-1/2 p-4 md:sticky md:top-24 h-fit">
          <div 
            ref={stickyCardRef} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all"
          >
            <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This card stays in place while you scroll through the content on the right.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The cards on the right will overlap each other as you scroll down, with alternating tilts.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scrolling Cards (Right Side) */}
        <div className="w-full md:w-1/2 p-4 relative h-[150vh]">
          {["Card One", "Card Two", "Card Three", "Card Four", "Card Five"].map((title, index) => (
            <div 
              key={index}
              ref={addToScrollCardsRef}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all border absolute w-full opacity-0"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                top: `${index * 50}px`, // Stacking properly
                zIndex: 10 + index // Ensures stacking order
              }}
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300">This card is part of a dynamic scrolling effect.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollCards;