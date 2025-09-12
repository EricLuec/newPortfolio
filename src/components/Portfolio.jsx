const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Konfiguration - Hier kannst du alles anpassen
  const portfolioConfig = {
    name: "Alex",
    year: 2024,
    yearsExperience: 5,
    projectsCompleted: 50,
    linkedinUrl: "https://linkedin.com/in/yourprofile",
    githubUrl: "https://github.com/yourusername",
    journeyText: "Passionate software developer with 5+ years of experience crafting digital solutions. I specialize in full-stack development and love creating applications that make a real impact.",
    skillsText: "From React frontends to Node.js backends, I build scalable, modern applications. Always exploring new technologies and pushing the boundaries of what's possible.",
    projects: [
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
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground mousePosition={mousePosition} />
      
      <div className="relative z-10">
        <HeroSection name={portfolioConfig.name} />
        
        <AboutSection
          journeyText={portfolioConfig.journeyText}
          skillsText={portfolioConfig.skillsText}
          yearsExperience={portfolioConfig.yearsExperience}
          projectsCompleted={portfolioConfig.projectsCompleted}
        />
        
        <ProjectsSection projects={portfolioConfig.projects} />
        
        <ContactSection
          linkedinUrl={portfolioConfig.linkedinUrl}
          githubUrl={portfolioConfig.githubUrl}
        />
        
        <Footer 
          name={portfolioConfig.name}
          year={portfolioConfig.year}
        />
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