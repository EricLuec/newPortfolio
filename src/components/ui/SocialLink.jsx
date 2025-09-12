export const SocialLink = ({ href, icon: Icon, bgGradient, hoverGradient, shadowColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group p-6 rounded-2xl bg-gradient-to-br ${bgGradient} hover:${hoverGradient} transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-${shadowColor}-500/25`}
  >
    <Icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
  </a>
);