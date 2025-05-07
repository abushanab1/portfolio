const Stars = () => {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-black animate-fadeTwinkle" />
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random().toFixed(2),
              animation: `flicker ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>
    );
  };
  
  export default Stars;
  