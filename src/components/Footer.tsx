import React from 'react';
import { Github, Mail, Linkedin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
      <div className="mb-6 flex justify-center space-x-6">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className={`transition-colors ${CONTACT_INFO.email ? 'hover:text-primary' : 'cursor-not-allowed opacity-50'}`}
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a 
          href={`https://github.com/${CONTACT_INFO.github}`}
          className={`transition-colors ${CONTACT_INFO.github ? 'hover:text-primary' : 'cursor-not-allowed opacity-50'}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href={`https://linkedin.com/in/${CONTACT_INFO.linkedin}`}
          className={`transition-colors ${CONTACT_INFO.linkedin ? 'hover:text-primary' : 'cursor-not-allowed opacity-50'}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href={`https://discord.com/users/${CONTACT_INFO.discord}`}
          className={`transition-colors ${CONTACT_INFO.discord ? 'hover:text-primary' : 'cursor-not-allowed opacity-50'}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <MessageSquare size={20} />
        </a>
      </div>
      <p>© {currentYear} Hocine. All rights reserved.</p>
      <p className="mt-2 text-sm">
        Python Developer & Linux Automation Specialist
      </p>
    </footer>
  );
};

export default Footer;