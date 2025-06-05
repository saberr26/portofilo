import React, { useEffect, useState } from 'react';
import { Github, Mail, Linkedin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Header: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const fullText = 'Python Developer & Linux Automation Specialist';
  
  useEffect(() => {
    let currentIndex = 0;
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <header className="relative mb-16 flex min-h-[50vh] flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/10 px-6 py-16 text-center shadow-lg transition-all duration-700 dark:from-primary/20 dark:via-primary/25 dark:to-secondary/20">
      <div 
        className={`absolute inset-0 z-0 animate-gradient opacity-10 dark:opacity-20 ${isLoaded ? 'opacity-10' : 'opacity-0'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236750A4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className={`relative z-10 flex w-full max-w-4xl flex-col items-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6 flex h-32 w-32 animate-float items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary text-6xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-110 dark:from-primary-400 dark:to-secondary-400">
          <span>H</span>
        </div>
        
        <h1 className="mb-3 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-5xl font-bold text-transparent transition-colors dark:from-primary-300 dark:via-secondary-300 dark:to-tertiary-300 md:text-6xl">
          Hocine
        </h1>
        
        <div className="relative mb-12 min-h-[30px] font-medium">
          <p className="text-xl text-gray-700 dark:text-gray-300 md:text-2xl">
            {typedText}
            <span className="ml-1 inline-block h-5 w-1 animate-blink bg-primary"></span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex transform items-center rounded-lg bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-md dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-primary dark:hover:text-white"
          >
            <Mail size={18} className="mr-2" />
            {CONTACT_INFO.email}
          </a>
          
          <a 
            href={`https://discord.com/users/${CONTACT_INFO.discord}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex transform items-center rounded-lg bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#5865F2] hover:text-white hover:shadow-md dark:bg-gray-800 dark:text-gray-200"
          >
            <MessageSquare size={18} className="mr-2" />
            {CONTACT_INFO.discord}
          </a>
          
          <a 
            href={`https://github.com/${CONTACT_INFO.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex transform items-center rounded-lg bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#24292e] hover:text-white hover:shadow-md dark:bg-gray-800 dark:text-gray-200"
          >
            <Github size={18} className="mr-2" />
            github.com/{CONTACT_INFO.github}
          </a>

          <a 
            href={`https://linkedin.com/in/${CONTACT_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex transform items-center rounded-lg bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:shadow-md dark:bg-gray-800 dark:text-gray-200"
          >
            <Linkedin size={18} className="mr-2" />
            linkedin.com/in/{CONTACT_INFO.linkedin}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
