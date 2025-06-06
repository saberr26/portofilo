
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

const ProjectCard = ({ title, description, technologies, delay }: ProjectCardProps) => {
  return (
    <div 
      className="glass-morphism rounded-6xl p-8 hover-glow group transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-bold text-tertiary-material mb-4 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-on-surface-variant leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-surface-container-high rounded-5xl text-sm text-primary-material border border-primary-material/20 hover:border-primary-material/50 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
