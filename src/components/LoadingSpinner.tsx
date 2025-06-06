
import { useEffect, useState } from 'react';

const LoadingSpinner = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-surface-variant animate-spin">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-material animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary-material font-bold text-lg">{progress}%</span>
          </div>
        </div>
        
        <div className="flex space-x-1 justify-center mb-4">
          <div className="w-2 h-2 bg-primary-material rounded-full animate-loading-dots"></div>
          <div className="w-2 h-2 bg-primary-material rounded-full animate-loading-dots" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary-material rounded-full animate-loading-dots" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        <h2 className="text-xl font-medium text-on-surface mb-2">Loading Portfolio</h2>
        <p className="text-on-surface-variant">Initializing amazing experience...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
