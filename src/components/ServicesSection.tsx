import React from 'react';
import { SERVICES } from '../utils/constants';
import { PlusCircle, Terminal, Database, Braces, LucideBrain as HeadSideBrain } from 'lucide-react';

const ServicesSection: React.FC = () => {
  // Map service icon names to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'PythonLogo':
        return <Braces className="text-primary" size={40} />;
      case 'Terminal':
        return <Terminal className="text-primary" size={40} />;
      case 'Database':
        return <Database className="text-primary" size={40} />;
      case 'HeadSideBrain':
        return <HeadSideBrain className="text-primary" size={40} />;
      default:
        return <PlusCircle className="text-primary" size={40} />;
    }
  };

  return (
    <section className="mb-16">
      <div className="mb-10 flex items-center">
        <PlusCircle className="mr-3 text-primary" size={24} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Services I Offer</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center rounded-xl border border-transparent bg-white p-6 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-xl dark:bg-gray-800"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 dark:bg-primary/20 dark:group-hover:bg-primary/30">
              {getIconComponent(service.icon)}
            </div>
            
            <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
              {service.title}
            </h3>
            
            <p className="mb-6 flex-grow text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
            
            <span className="rounded-full bg-secondary/10 px-6 py-2 font-medium text-secondary dark:bg-secondary/20">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;