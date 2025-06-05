import React, { useState } from 'react';
import { PROJECTS } from '../utils/constants';
import { Rocket as RocketLaunch, Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <div className="mb-10 flex items-center">
        <RocketLaunch className="mr-3 text-primary" size={24} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recent Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Overlay content that appears on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-full bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-primary hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-full bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;