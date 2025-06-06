import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [scanlineOffset, setScanlineOffset] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [stars, setStars] = useState([]);
  const currentPath = window.location.pathname;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      currentPath
    );
  }, [currentPath]);

  // Generate random stars
  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(newStars);
  }, []);

  // Animated scanlines
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlineOffset(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(glitchInterval);
  }, []);

  const pixelButtonStyle = {
    imageRendering: 'pixelated',
    imageRendering: '-moz-crisp-edges',
    imageRendering: 'crisp-edges',
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />

      {/* Animated stars */}
      <div className="absolute inset-0">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-green-400 animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.id * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.1) 2px,
            rgba(0, 255, 0, 0.1) 4px
          )`,
          transform: `translateY(${scanlineOffset}px)`,
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pixel art style border */}
          <div className="border-4 border-green-400 bg-black/80 p-8 relative" style={pixelButtonStyle}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-r-4 border-b-4 border-green-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-l-4 border-b-4 border-green-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-r-4 border-t-4 border-green-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-l-4 border-t-4 border-green-400" />

            {/* ASCII Art Header */}
            <div className="mb-8 text-xs md:text-sm leading-none">
              <pre className="text-green-300">
{`   ▄██████▄   ▄██████▄   █    █
  ████  ████ ████  ████ ██  ██ 
  ████  ████ ████  ████ ██████ 
  ████  ████ ████  ████     ██ 
   ▀██████▀   ▀██████▀      ██ `}
              </pre>
            </div>

            {/* Glitch 404 */}
            <div className="mb-8 relative">
              <h1 className={`text-6xl md:text-8xl font-black text-green-400 leading-none ${glitchActive ? 'animate-pulse' : ''}`} 
                  style={pixelButtonStyle}>
                {glitchActive ? (
                  <span className="text-red-400" style={{ textShadow: '2px 0 #00ff00, -2px 0 #ff0000' }}>
                    4Ø4
                  </span>
                ) : (
                  '404'
                )}
              </h1>
              
              {/* Pixel decorations */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-green-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Error Messages */}
            <div className="mb-8 space-y-4">
              <div className="border-2 border-green-400 bg-black p-4 text-left">
                <div className="text-green-300 text-sm mb-2">ERROR_LOG.TXT</div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">[!]</span>
                    <span>PAGE_NOT_FOUND</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">[?]</span>
                    <span>ROUTE: {currentPath}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">[i]</span>
                    <span>STATUS: LOST_IN_CYBERSPACE</span>
                  </div>
                </div>
              </div>

              <div className="text-green-300 text-lg">
                &gt; SYSTEM ERROR: PAGE NOT FOUND
              </div>
              <div className="text-green-400 text-sm">
                &gt; The requested file does not exist in the matrix...
              </div>
            </div>

            {/* Pixel Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => window.location.href = '/'}
                className="group px-6 py-3 border-4 border-green-400 bg-black text-green-400 font-bold uppercase tracking-wider transition-all duration-200 hover:bg-green-400 hover:text-black active:scale-95"
                style={pixelButtonStyle}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs">►</span>
                  RETURN HOME
                </span>
              </button>

              <button
                onClick={() => history.back()}
                className="group px-6 py-3 border-4 border-yellow-400 bg-black text-yellow-400 font-bold uppercase tracking-wider transition-all duration-200 hover:bg-yellow-400 hover:text-black active:scale-95"
                style={pixelButtonStyle}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs">◄</span>
                  GO BACK
                </span>
              </button>
            </div>

            {/* Pixel Art Character */}
            <div className="mb-6">
              <div className="text-green-400 text-2xl leading-none font-mono">
                <pre className="text-xs">
{`    ░░░░░░░░
    ░██████░
    ░██  ██░
    ░██████░
      ████  
    ░██████░
    ░██  ██░
    ░██  ██░`}
                </pre>
              </div>
              <p className="text-green-300 text-sm mt-2">
                404_BOT says: "Beep boop! Page not found!"
              </p>
            </div>

            {/* Command prompt */}
            <div className="text-left border-2 border-green-400 bg-black p-4">
              <div className="text-green-400 text-sm">
                <span className="text-green-300">user@portfolio:~$</span>
                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>

          {/* Floating reload button */}
          <div className="mt-8">
            <button
              onClick={() => window.location.reload()}
              className="w-16 h-16 border-4 border-green-400 bg-black text-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 active:scale-90"
              style={pixelButtonStyle}
            >
              <div className="text-lg">⟲</div>
            </button>
            <p className="text-green-400 text-xs mt-2 uppercase tracking-wider">RETRY</p>
          </div>
        </div>
      </div>

      {/* Bottom retro bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-400 text-black text-xs py-1 px-4 flex justify-between items-center">
        <span>SYSTEM_STATUS: ONLINE</span>
        <span>ERROR_404.EXE</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default NotFound;