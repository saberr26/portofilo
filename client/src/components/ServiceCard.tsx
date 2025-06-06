
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, price, delay }: ServiceCardProps) => {
  return (
    <div 
      className="glass-morphism rounded-6xl p-8 text-center hover-glow group transition-all duration-500 animate-fade-in-scale"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-primary-material mb-6 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300 flex justify-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-primary-material mb-4">
        {title}
      </h3>
      
      <p className="text-on-surface-variant leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-material to-secondary-material rounded-5xl text-surface font-bold text-lg animate-pulse-glow">
        {price}
      </div>
    </div>
  );
};

export default ServiceCard;
