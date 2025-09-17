import React from 'react';
import { useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { AnimatedBackground } from './ui/AnimatedBackground';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

const Portfolio = () => {
  const [is3DMode, setIs3DMode] = useState(false);
  const mousePosition = useMousePosition();

  return (
    <div className="relative min-h-screen overflow-hidden">      
    
      {is3DMode && <Portfolio3D />}
      {!is3DMode && (
        <div className="relative min-h-screen bg-black text-white">
          <AnimatedBackground mousePosition={mousePosition} />
          <div className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

/*
<button
        onClick={() => setIs3DMode(!is3DMode)}
        className={`
            fixed top-6 right-6 z-50 px-6 py-3 rounded-2xl font-semibold 
            bg-gradient-to-r ${is3DMode ? 'from-red-500 to-pink-500' : 'from-blue-500 to-cyan-500'}
            text-white shadow-lg hover:shadow-2xl
            transform hover:scale-105 transition-all duration-300
            backdrop-blur-md bg-opacity-80
            `}
        >
        {is3DMode ? 'Exit 3D Mode (still in development)' : 'Enter 3D Mode (still in development)'}
    </button>
*/