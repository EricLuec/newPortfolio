const AboutSection = ({ 
  journeyText = "Passionate software developer with 5+ years of experience crafting digital solutions. I specialize in full-stack development and love creating applications that make a real impact.",
  skillsText = "From React frontends to Node.js backends, I build scalable, modern applications. Always exploring new technologies and pushing the boundaries of what's possible.",
  yearsExperience = 5,
  projectsCompleted = 50
}) => (
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
