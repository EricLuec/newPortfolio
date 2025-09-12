const StatsCircle = ({ yearsExperience = 5, projectsCompleted = 50 }) => (
  <div className="relative">
    <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-spin-slow">
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold text-white">{yearsExperience}+</div>
          <div className="text-blue-400">Years Experience</div>
          <div className="text-2xl font-bold text-white">{projectsCompleted}+</div>
          <div className="text-purple-400">Projects Completed</div>
        </div>
      </div>
    </div>
  </div>
);