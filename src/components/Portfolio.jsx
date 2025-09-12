import React from 'react';
import { AnimatedBackground } from './ui/AnimatedBackground';
import { useMousePosition } from '../hooks/useMousePosition';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

const Portfolio = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground mousePosition={mousePosition} />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;