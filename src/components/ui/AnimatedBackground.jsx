const AnimatedBackground = ({ mousePosition }) => (
  <>
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
  </>
);