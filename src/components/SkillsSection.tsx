import React from 'react';
import { SKILLS } from '../utils/constants';
import { Code, Terminal, Cog, Wrench } from 'lucide-react';

const SkillsSection: React.FC = () => {
  // Map skill icon names to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="text-primary" size={24} />;
      case 'Terminal':
        return <Terminal className="text-primary" size={24} />;
      case 'Cog':
        return <Cog className="text-primary" size={24} />;
      case 'Wrench':
        return <Wrench className="text-primary" size={24} />;
      default:
        return <Code className="text-primary" size={24} />;
    }
  };

  return (
    <section className="mb-16">
      <div className="mb-10 flex items-center">
        <Wrench className="mr-3 text-primary" size={24} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 transition-all duration-500 group-hover:opacity-100 dark:bg-primary/10"></div>
            
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                {getIconComponent(skill.icon)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
            </div>
            
            <ul className="space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="mr-2 mt-1 text-primary">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;