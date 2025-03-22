import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollCards = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      // Scale animation
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center", // Changed to center of viewport
          end: "top center-=100", // End a bit above center
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: 1 - (cards.length - index) * 0.025,
      });

      // Pin animation
      ScrollTrigger.create({
        trigger: card,
        start: "top center", // Changed to center of viewport
        pin: true,
        pinSpacing: false,
        markers: false,
        id: `pin-${index}`,
        end: "+=300", // Increased pin duration
        invalidateOnRefresh: true,
      });
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-20"></h1>
      {/* Added a spacer div to push content down */}
      <div className="h-64"></div>
      <div className="flex flex-col items-center" ref={containerRef}>
        <div className="relative space-y-5">
          {[40, 45, 50, 55, 60].map((top, index) => (
            <div
              key={index}
              className="relative w-96 h-48 bg-zinc-800 shadow-lg rounded-lg p-6 flex flex-col justify-center items-center text-2xl font-semibold"
              style={{ top: `${top}px` }}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h2 className="text-xl font-bold">Card {index + 1}</h2>
              <p className="text-gray-200">This is the content of card {index + 1}.</p>
            </div>
          ))}
        </div>
      </div>
      {/* Added more spacing at the bottom for scrolling */}
      <div className="w-full h-96 mt-10"></div>
    </div>
  );
};

export default StickyScrollCards;