// components/ui/ShinyText.jsx
import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <>
      <style jsx global>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        
        .shiny-text {
          position: relative;
          color: #b5b5b5;
        }
        
        .shiny-text::before {
          content: "${text}";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: ${disabled ? 'none' : `shine 3s linear infinite`};
        }
      `}</style>
      
      <div className={`inline-block shiny-text ${className}`}>
        {text}
      </div>
    </>
  );
};

export default ShinyText;