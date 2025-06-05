import React, { Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="h-screen w-screen bg-gray-900" />}>
        <Background3D />
      </Suspense>
      <div className="relative min-h-screen bg-transparent px-4 py-8 transition-colors duration-300 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ThemeToggle />
          <Header />
          
          <main className="relative z-10">
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