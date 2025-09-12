'use client'
import {HeroSection} from '../components/sections/HeroSection';
import {AboutSection} from '../components/sections/AboutSection';
import {ProjectsSection} from '../components/sections/ProjectsSection';
import {ContactSection} from '../components/sections/ContactSection';
import {Footer} from '../components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}