
import { useState, useEffect } from 'react';
import { Mail, MessageCircle, Github, Code, Terminal, Cog, Globe, Database, Server } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import LoadingSpinner from '../components/LoadingSpinner';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { getRandomPalette, applyPalette } from '../utils/colorPalettes';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Apply random color palette on load
    const randomPalette = getRandomPalette();
    applyPalette(randomPalette);
    console.log(`Applied palette: ${randomPalette.name}`);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-20 animate-fade-in-up">
          <div className="glass-morphism-strong rounded-6xl p-12 mb-8">
            <h1 className="text-6xl font-bold text-gradient mb-6 animate-float">
              Alex Developer
            </h1>
            <p className="text-2xl text-on-surface-variant mb-8 font-medium">
              Python Developer & Linux Automation Specialist
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:alex.dev@gmail.com"
                className="flex items-center space-x-3 glass-morphism rounded-5xl px-6 py-4 hover-glow transition-all duration-300 group hover:bg-red-600/20 hover:border-red-500/50"
              >
                <Mail className="w-6 h-6" />
                <span className="text-on-surface group-hover:text-red-400">alex.dev@gmail.com</span>
              </a>
              
              <a 
                href="#"
                className="flex items-center space-x-3 glass-morphism rounded-5xl px-6 py-4 hover-glow transition-all duration-300 group hover:bg-indigo-600/20 hover:border-indigo-500/50"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-on-surface group-hover:text-indigo-400">AlexDev#1234</span>
              </a>
              
              <a 
                href="#"
                className="flex items-center space-x-3 glass-morphism rounded-5xl px-6 py-4 hover-glow transition-all duration-300 group hover:bg-gray-800/20 hover:border-gray-600/50"
              >
                <Github className="w-6 h-6" />
                <span className="text-on-surface group-hover:text-gray-300">github.com/alexdev</span>
              </a>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            🛠️ Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Programming"
              icon={<Code className="w-12 h-12" />}
              skills={[
                "Python (Automation, Scripts)",
                "Bash Scripting",
                "Basic Web Development",
                "AI-Assisted Coding"
              ]}
              delay={0}
            />
            
            <SkillCard
              title="Linux & Systems"
              icon={<Terminal className="w-12 h-12" />}
              skills={[
                "Arch Linux Daily User",
                "Command Line Expert",
                "System Administration",
                "File Management & Processing"
              ]}
              delay={200}
            />
            
            <SkillCard
              title="Automation & Tools"
              icon={<Cog className="w-12 h-12" />}
              skills={[
                "Web Scraping",
                "Data Processing",
                "Task Automation",
                "Report Generation"
              ]}
              delay={400}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            🚀 Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Reddit Data Scraper"
              description="Automated web scraping tool that collects post data from multiple subreddits, processes the information, and exports to CSV/JSON formats. Includes data analysis and top post identification."
              technologies={["Python", "BeautifulSoup", "Data Processing", "Web Scraping"]}
              delay={0}
            />
            
            <ProjectCard
              title="File Organization System"
              description="Bulk file processing script that automatically organizes thousands of files by type, date, and custom criteria. Includes duplicate detection and batch renaming capabilities."
              technologies={["Python", "File Processing", "Automation"]}
              delay={200}
            />
            
            <ProjectCard
              title="System Monitoring Tool"
              description="Linux system monitoring script that tracks resource usage, generates alerts, and creates detailed reports. Perfect for server maintenance and performance optimization."
              technologies={["Python", "Linux", "System Administration"]}
              delay={400}
            />
            
            <ProjectCard
              title="AI Data Pipeline"
              description="Intelligent data processing pipeline with machine learning integration for automated decision making and pattern recognition in large datasets."
              technologies={["Python", "Machine Learning", "Data Science", "Automation"]}
              delay={600}
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            💼 Services I Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code className="w-16 h-16" />}
              title="Python Automation"
              description="Custom scripts for data processing, file management, and task automation. Quick turnaround, clean code."
              price="$30-150 per script"
              delay={0}
            />
            
            <ServiceCard
              icon={<Globe className="w-16 h-16" />}
              title="Web Scraping"
              description="Extract data from websites automatically. Price monitoring, data collection, market research."
              price="$50-300 per project"
              delay={200}
            />
            
            <ServiceCard
              icon={<Server className="w-16 h-16" />}
              title="Linux Support"
              description="Server setup, maintenance, troubleshooting. Arch Linux specialist with years of experience."
              price="$40-100 per hour"
              delay={400}
            />
            
            <ServiceCard
              icon={<Database className="w-16 h-16" />}
              title="Data Processing"
              description="Clean, organize, and analyze your data. CSV processing, report generation, data conversion."
              price="$25-200 per project"
              delay={600}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="glass-morphism-strong rounded-6xl p-12 glow-border">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-on-surface-variant mb-8">
              Fast delivery • Fair pricing • Clear communication
            </p>
            
            <a 
              href="mailto:alex.dev@gmail.com"
              className="inline-block px-12 py-4 bg-gradient-to-r from-primary-material to-secondary-material rounded-5xl text-surface font-bold text-lg hover:scale-105 hover-glow transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
