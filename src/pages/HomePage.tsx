import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import BackgroundShapes from '../components/common/BackgroundShapes';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/ProjectsBetter';
// import Skills from '../components/sections/Skills'; // Hidden - will weave into About section
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import { useTheme } from '../contexts/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen relative ${theme === 'dark' ? 'bg-dark-300' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}
    >
      {/* Background Patterns and Shapes */}
      <BackgroundShapes />
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-grid-pattern' : 'bg-grid-pattern-light'} opacity-30`} />
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-mesh' : 'bg-gradient-mesh-light'}`} />
      </div>

      {/* Navigation */}
      <Navbar />
      
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section - Hidden, will be woven into About section */}
        {/* <Skills /> */}

        {/* Experience Section */}
        <Experience />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 glass-effect rounded-full text-white hover:bg-white/10 transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
