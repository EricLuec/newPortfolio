'use client'
import { useState } from "react";
import { ProjectCard } from "../ui/ProjectCard";

export const ProjectsSection = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
          My Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeProject === project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
