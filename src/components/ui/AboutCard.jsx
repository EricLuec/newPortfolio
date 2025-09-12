const AboutCard = ({ title, description, color, hoverColor }) => (
  <div className={`p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-${hoverColor}-500/50 transition-colors duration-300`}>
    <h3 className={`text-2xl font-semibold mb-4 text-${color}-400`}>{title}</h3>
    <p className="text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);