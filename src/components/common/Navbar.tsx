import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks, personalInfo } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from './Icon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isEditing, setIsEditing] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Map sections to terminal paths
  const getTerminalPath = (section: string) => {
    const pathMap: { [key: string]: string } = {
      home: 'home',
      about: 'about',
      projects: 'projects',
      skills: 'skills',
      experience: 'experience',
      gallery: 'gallery',
      contact: 'contact',
    };
    return pathMap[section] || 'home';
  };

  // Handle command input
  const handleCommandSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = commandInput.trim().toLowerCase();
      
      // Map input to section names
      const sectionMap: { [key: string]: string } = {
        home: 'home',
        about: 'about',
        projects: 'projects',
        work: 'projects',
        skills: 'skills',
        experience: 'experience',
        exp: 'experience',
        gallery: 'gallery',
        photos: 'gallery',
        contact: 'contact',
        '~': 'home',
        '': 'home',
      };
      
      const targetSection = sectionMap[input];
      if (targetSection) {
        handleNavClick(`#${targetSection}`);
      }
      
      setCommandInput('');
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setCommandInput('');
      setIsEditing(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' ? 'glass-effect py-4' : 'glass-effect-light py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Dynamic Terminal prompt with clickable breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            {/* Terminal-style initials box */}
            <div 
              className={`cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-gray-900/80 border-2 border-green-500/40' 
                  : 'bg-gray-100 border-2 border-green-600/40'
              } rounded-lg px-3 py-1.5 backdrop-blur-sm hover:border-green-500 transition-all duration-300`}
              onClick={() => handleNavClick('#home')}
            >
              <div className="flex items-center gap-2">
                <span className={`text-sm font-mono font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                  AA
                </span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}
                >
                  _
                </motion.span>
              </div>
            </div>
            
            {/* Dynamic terminal prompt - Editable path only */}
            <motion.div 
              key={activeSection}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`hidden sm:flex items-center font-mono text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {/* username@portfolio - clickable to go home */}
              <button
                onClick={() => {
                  if (!isEditing) handleNavClick('#home');
                }}
                className={`hover:underline ${
                  activeSection === 'home' 
                    ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    : theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}
              >
                {personalInfo.name.toLowerCase().split(' ')[0]}@portfolio
              </button>
              
              <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}>/</span>
              
              {/* Editable path field */}
              {!isEditing ? (
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setCommandInput(activeSection === 'home' ? '' : getTerminalPath(activeSection));
                  }}
                  className={`${theme === 'dark' ? 'text-cyan-400 hover:underline' : 'text-cyan-600 hover:underline'}`}
                  title="Click to edit path"
                >
                  {activeSection === 'home' ? '~' : getTerminalPath(activeSection)}
                </button>
              ) : (
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  onKeyDown={handleCommandSubmit}
                  onBlur={() => {
                    setCommandInput('');
                    setIsEditing(false);
                  }}
                  autoFocus
                  placeholder="projects | about | skills..."
                  className={`bg-transparent border-none outline-none w-32 font-mono text-sm ${
                    theme === 'dark' ? 'text-cyan-400 placeholder-gray-600' : 'text-cyan-600 placeholder-gray-400'
                  }`}
                />
              )}
              
              <span className={theme === 'dark' ? 'text-gray-600 ml-0.5' : 'text-gray-500 ml-0.5'}>$</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? theme === 'dark' ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-100 text-primary-700'
                    : theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}
          >
            {isOpen ? <Icon icon={FaTimes} size={24} /> : <Icon icon={FaBars} size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t mt-4 ${theme === 'dark' ? 'glass-effect border-white/10' : 'glass-effect-light border-gray-200'}`}
          >
            <div className="container-custom px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? theme === 'dark' ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-100 text-primary-700'
                      : theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
