
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  delay: number;
}

const SkillCard = ({ title, skills, icon, delay }: SkillCardProps) => {
  return (
    <div 
      className="glass-morphism rounded-6xl p-8 hover-glow group transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="text-primary-material mr-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-material">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li 
            key={index}
            className="flex items-center text-on-surface-variant hover:text-on-surface transition-colors duration-200"
          >
            <div className="w-2 h-2 bg-secondary-material rounded-full mr-3 group-hover:animate-pulse"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
