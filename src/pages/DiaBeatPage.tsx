import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaUsers, FaRocket, FaChartLine, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Icon from '../components/common/Icon';
import { diaBeatData } from '../constants';

const DiaBeatPage: React.FC = () => {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen relative ${theme === 'dark' ? 'bg-dark-300' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}
    >
      {/* Navigation */}
      <Navbar />
      <ThemeToggle />

      {/* Back Button */}
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
            <div className="text-5xl md:text-6xl mb-4">🩺</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                {diaBeatData.hero.title}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {diaBeatData.hero.tagline}
            </p>
            <div className={`max-w-4xl mx-auto p-6 rounded-xl border-l-4 ${
              theme === 'dark' ? 'bg-primary-500/10 border-primary-500' : 'bg-primary-50 border-primary-600'
            }`}>
              <p className={`text-lg italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {diaBeatData.hero.vision}
              </p>
            </div>
            <div className={`flex flex-wrap gap-4 justify-center mt-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="font-semibold">Role: {diaBeatData.hero.role}</span>
              <span>•</span>
              <span>{diaBeatData.hero.timeline}</span>
              <span>•</span>
              <span>{diaBeatData.hero.team}</span>
            </div>
            
            {/* Prototype Link Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <motion.a
                href={diaBeatData.technical.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all"
              >
                <Icon icon={FaRocket} size={20} />
                <span>Try Live Prototype</span>
                <Icon icon={FaExternalLinkAlt} size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 border-l-4 border-red-500`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">⚡</div>
                <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  The Problem
                </h2>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {diaBeatData.problem.description}
              </p>
              <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50'}`}>
                <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key Pain Points:</p>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {diaBeatData.problem.painPoints.map((point, index) => (
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
                  Our Solution
                </h2>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {diaBeatData.solution.description}
              </p>
              <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'}`}>
                <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Core Features:</p>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {diaBeatData.solution.coreFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon icon={FaCheckCircle} size={16} className="text-green-400 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Key Results */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📊</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Key Results
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {diaBeatData.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-center text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Research Insights */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🔍</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                User Research Insights
              </h2>
            </div>
            
            {/* Research Statistics */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {diaBeatData.researchInsights.statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl text-center text-white ${stat.color}`}
                >
                  <div className="text-4xl font-bold mb-2">{stat.percentage}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Findings */}
            <div className="space-y-4">
              {diaBeatData.researchInsights.findings.map((finding, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${finding.color} ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                  }`}
                >
                  <p className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {finding.title}:
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {finding.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market Opportunity */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📈</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Market Opportunity
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {diaBeatData.marketOpportunity.segments.map((segment, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-center text-white"
                >
                  <div className="text-3xl font-bold mb-2">{segment.users}</div>
                  <div className="text-sm opacity-90 mb-2">{segment.market}</div>
                  <div className="text-2xl font-bold">{segment.value}</div>
                </motion.div>
              ))}
            </div>
            <p className={`text-center italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong>Strategy:</strong> {diaBeatData.marketOpportunity.strategy}
            </p>
          </motion.div>

          {/* Business Model */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">💼</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Business Model & Financial Projections
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Revenue Streams */}
              <div className={`p-6 rounded-xl border-l-4 border-primary-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}>
                  Revenue Streams
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      B2C Individual Patients:
                    </p>
                    <ul className={`space-y-1 ml-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>• Free tier: 5 calculations/month</li>
                      <li>• Premium: $20/month or $200/year</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      B2B Healthcare Partners:
                    </p>
                    <ul className={`space-y-1 ml-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>• Bundle plans for 50+ patients</li>
                      <li>• $150/year per patient</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Growth Projections */}
              <div className={`p-6 rounded-xl border-l-4 border-green-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  5-Year Growth Projections
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {diaBeatData.businessModel.projections.map((proj, index) => (
                    <div key={index} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      <strong>{proj.year}:</strong> {proj.arr}
                    </div>
                  ))}
                  <div className={`col-span-2 pt-3 border-t ${theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-900'}`}>
                    <strong>Target:</strong> {diaBeatData.businessModel.target}
                  </div>
                </div>
              </div>
            </div>

            {/* GTM Strategy */}
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Go-to-Market Strategy
              </h3>
              <div className="space-y-2">
                {diaBeatData.businessModel.gtmStrategy.map((strategy, index) => (
                  <p key={index} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>{strategy.channel}:</strong> {strategy.description}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Documentation Resources */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📚</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Project Documentation
              </h2>
            </div>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive product management deliverables demonstrating end-to-end development from user research through business strategy and MVP validation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {diaBeatData.documentation.categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl border-2 text-center ${
                    theme === 'dark' ? 'bg-gradient-to-br from-dark-200 to-dark-100 border-primary-500/30' : 'bg-gradient-to-br from-gray-50 to-white border-gray-300'
                  }`}
                >
                  <h4 className={`text-xl font-semibold mb-4 flex items-center justify-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <span>{category.icon}</span>
                    <span>{category.title}</span>
                  </h4>
                  <div className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          theme === 'dark' 
                            ? 'bg-white/5 text-gray-300 hover:bg-primary-500/20 hover:text-primary-400' 
                            : 'bg-white text-gray-700 hover:bg-primary-100 hover:text-primary-700 border border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          <Icon icon={FaExternalLinkAlt} size={14} />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Live Prototype CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 text-center"
            >
              <motion.a
                href={diaBeatData.technical.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 hover:from-purple-500/30 hover:to-blue-500/30 border-2 border-purple-500/40 hover:border-purple-400/60'
                    : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 border-2 border-purple-300 hover:border-purple-400'
                }`}
              >
                <Icon icon={FaRocket} size={20} />
                <span>Experience the Live Prototype</span>
                <Icon icon={FaExternalLinkAlt} size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Development Achievements */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Development Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diaBeatData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h4 className="text-xl font-semibold mb-3">{achievement.title}</h4>
                  <p className="text-sm opacity-90">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Overview */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/30 text-center">
            <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Product Development Overview
            </h4>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              {diaBeatData.overview}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default DiaBeatPage;
