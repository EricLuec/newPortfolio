import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {AnimatedBackground} from './ui/AnimatedBackground';
import {useMousePosition} from '../hooks/useMousePosition';
import {ProjectsSection} from './sections/ProjectsSection';
import {AboutSection} from './sections/AboutSection';
import {ContactSection} from './sections/ContactSection';
import {Footer} from './sections/Footer';

const Portfolio = () => {
  const mousePosition = useMousePosition();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground mousePosition={mousePosition} />

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center space-y-8">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={['Hi, I am Eric', 2000, 'I am a Fullstack-Dev', 2000, 'Currently learning about cybersecurity', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </section>

        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
