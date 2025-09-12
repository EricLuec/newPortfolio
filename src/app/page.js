'use client'
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

// Custom SVG Icons
const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Code2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L11 6l-2.943 3L5 6l3.057-3zm13.5 13l1.5-1.5L21.5 16l-1.5 1.5L18.5 16l1.5-1.5zm-9-9l1.5-1.5L12.5 7l-1.5 1.5L9.5 7l1.5-1.5z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration",
      tags: ["Next.js", "OpenAI", "WebSocket", "Prisma"],
      gradient: "from-blue-500 to-cyan-500",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool",
      tags: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      gradient: "from-green-500 to-teal-500",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution",
      tags: ["React Native", "Firebase", "Biometrics", "Redux"],
      gradient: "from-orange-500 to-red-500",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    'Hi, I am Alex',
                    2000,
                    'Hi, I am a Developer',
                    2000,
                    'Hi, I am Creative',
                    2000,
                    'Hi, I build the Future',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="text-xl md:text-2xl text-gray-300 font-light">
                Software Developer • Full Stack Engineer • Innovation Enthusiast
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-bounce">
                <Code2 className="w-8 h-8" />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-bounce" style={{animationDelay: '0.1s'}}>
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-bounce" style={{animationDelay: '0.2s'}}>
                <Zap className="w-8 h-8" />
              </div>
            </div>

            <div className="mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                Explore My Work
              </button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate software developer with 5+ years of experience crafting digital solutions. 
                    I specialize in full-stack development and love creating applications that make a real impact.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">What I Do</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From React frontends to Node.js backends, I build scalable, modern applications. 
                    Always exploring new technologies and pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-white">5+</div>
                      <div className="text-blue-400">Years Experience</div>
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-purple-400">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements/Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
              My Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Social Links Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              Ready to create something amazing together? Let's talk!
            </p>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <Linkedin className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25"
              >
                <Github className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Alex Developer. Crafted with 💙 using Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;