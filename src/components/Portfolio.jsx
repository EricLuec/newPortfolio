'use client'
import {HeroSection} from './sections/HeroSection';
import {AboutSection} from './sections/AboutSection';
import {ProjectsSection} from './sections/ProjectsSection';
import {ContactSection} from './sections/ContactSection';
import {Footer} from './sections/Footer';
import {projects} from '../data/projects';

export default function Portfolio() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </>
  );
}
