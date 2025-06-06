import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load the heavy 3D component
const Background3D = lazy(() => {
  console.log('Lazy loading Background3D...');
  return import('./components/Background3D');
});

function App() {
  console.log('App component rendering...');
  return (
    <>
      <Suspense fallback={console.log('Showing loading spinner...') || <div className="fixed inset-0 -z-10 h-screen w-screen bg-[#050816]" />}>
        <Background3D />
      </Suspense>
      <div className="relative min-h-screen bg-transparent px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
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
    </>
  );
}

export default App;