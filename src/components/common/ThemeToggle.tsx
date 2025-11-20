import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from './Icon';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        fixed top-24 right-8 z-50 p-3 rounded-full
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20 text-yellow-400' 
          : 'bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 text-orange-500'
        }
        backdrop-blur-lg transition-all duration-300 hover:scale-110
      `}
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Icon icon={FaSun} size={24} />
        ) : (
          <Icon icon={FaMoon} size={24} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

