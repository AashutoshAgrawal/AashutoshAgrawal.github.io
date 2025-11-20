import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Icon from '../components/common/Icon';
import { airbnbData } from '../constants';

const AirbnbPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen relative ${theme === 'dark' ? 'bg-dark-300' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}
    >
      <Navbar />
      <ThemeToggle />

      <div className="container-custom px-4 sm:px-6 lg:px-8 pt-32">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-colors ${
            theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          whileHover={{ x: -5 }}
        >
          <Icon icon={FaArrowLeft} size={20} />
          <span>Back to Portfolio</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 pb-20"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12 text-center`}>
            <div className="text-6xl md:text-7xl mb-6">🏠</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                {airbnbData.hero.title}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {airbnbData.hero.tagline}
            </p>
            <div className={`max-w-4xl mx-auto p-6 rounded-xl border-l-4 ${
              theme === 'dark' ? 'bg-primary-500/10 border-primary-500' : 'bg-primary-50 border-primary-600'
            }`}>
              <p className={`text-lg italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {airbnbData.hero.vision}
              </p>
            </div>
            <div className={`flex flex-wrap gap-4 justify-center mt-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="font-semibold">Role: {airbnbData.hero.role}</span>
              <span>•</span>
              <span>{airbnbData.hero.timeline}</span>
              <span>•</span>
              <span>{airbnbData.hero.team}</span>
            </div>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 border-l-4 border-red-500`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">⚡</div>
                <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Industry Problem
                </h2>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {airbnbData.problem.description}
              </p>
              <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50'}`}>
                <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key Pain Points:</p>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {airbnbData.problem.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 border-l-4 border-green-500`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💡</div>
                <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Airbnb's Solution
                </h2>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {airbnbData.solution.description}
              </p>
              <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'}`}>
                <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Core Platform Features:</p>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {airbnbData.solution.coreFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon icon={FaCheckCircle} size={16} className="text-green-400 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📊</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Platform Impact & Scale
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {airbnbData.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-500 to-red-500 rounded-xl p-6 text-center text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Study Overview */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-500/30 text-center">
            <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Case Study Summary
            </h4>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              {airbnbData.overview}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default AirbnbPage;
