import { ExternalLink } from "../icons/ExternalLink";

export const ProjectCard = ({ project, index, isActive, onMouseEnter, onMouseLeave }) => (
  <div
    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
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
          <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />

          </a>
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
);