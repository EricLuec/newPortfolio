'use client'
import { AboutCard } from "../ui/AboutCard";
import { StatsCircle } from "../ui/StatsCircle";
import { portfolioConfig } from "@/config/portfolio";

export const AboutSection = () => {
  const { journeyText, skillsText, yearsExperience, projectsCompleted } = portfolioConfig;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AboutCard 
              title="My Journey"
              description={journeyText}
              color="blue"
              hoverColor="blue"
            />
            
            <AboutCard 
              title="What I Do"
              description={skillsText}
              color="purple"
              hoverColor="purple"
            />
          </div>
          
          <StatsCircle 
            yearsExperience={yearsExperience}
            projectsCompleted={projectsCompleted}
          />
        </div>
      </div>
    </section>
  );
};
