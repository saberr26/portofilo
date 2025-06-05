import React from 'react';
import { Mail } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  return (
    <section className="mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 text-white">
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white opacity-10"></div>
        
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Elevate Your Project?</h2>
          
          <p className="mb-8 text-lg opacity-90">
            Fast delivery • Fair pricing • Clear communication • Quality results
          </p>
          
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-medium text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
          >
            <Mail size={20} className="mr-2" />
            Let's Get In Touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;