import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoCarousel = ({ 
  logos = [], 
  speed = 25,
  height = 100,
  gap = 40,
  className = ""
}) => {
  // If no logos provided, use placeholder logos
  const defaultLogos = [
    { id: 1, src: "/com_logos/1.png", alt: "Company 1", width: 200 },
    { id: 2, src: "/com_logos/2.png", alt: "Company 2", width: 200 },
    { id: 3, src: "/com_logos/3.png", alt: "Company 3", width: 150 },
    { id: 4, src: "/com_logos/4.png", alt: "Company 4", width: 70 },
    { id: 5, src: "/com_logos/5.png", alt: "Company 5", width: 150 },
    { id: 6, src: "/com_logos/6.png", alt: "Company 6", width: 150 },
    { id: 7, src: "/com_logos/7.png", alt: "Company 7", width: 150 },
    { id: 8, src: "/com_logos/8.png", alt: "Company 8", width: 150 },
    { id: 9, src: "/com_logos/9.png", alt: "Company 9", width: 150 },
  ];

  const displayLogos = logos.length > 0 ? logos : defaultLogos;
  
  // Calculate duration based on speed - lower speed value means faster animation
  const duration = 100 / speed * 20;

  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
      {/* Container with the overflow hidden and relative positioning */}
      <div className={`w-full h-full ${className}`}>
        <motion.div
          className="flex items-center"
          style={{ gap: `${gap}px` }}
          animate={{
            x: [`0%`, `-50%`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          {displayLogos.map((logo) => (
            <div key={logo.id} className="flex-shrink-0 h-full">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width || 150}
                height={height}
                style={{ height: `${height}px`, width: "auto", objectFit: "contain" }}
                priority
              />
            </div>
          ))}
          
          {/* Duplicated set of logos to create the infinite effect */}
          {displayLogos.map((logo) => (
            <div key={`dup-${logo.id}`} className="flex-shrink-0 h-full">
              <Image 
                src={logo.src} 
                alt={logo.alt}
                width={logo.width || 150}
                height={height}
                style={{ height: `${height}px`, width: "auto", objectFit: "contain" }}
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Left shadow overlay */}
      <div className="absolute left-0 top-0 h-full w-24 pointer-events-none" 
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 10
        }}
      />
      
      {/* Right shadow overlay */}
      <div className="absolute right-0 top-0 h-full w-24 pointer-events-none" 
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default LogoCarousel;