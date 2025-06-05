import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 px-4 py-8 transition-colors duration-300 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ThemeToggle />
          <Header />
          
          <main>
            <SkillsSection />
            <ProjectsSection />
            <ServicesSection />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;