import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Array of all slides
  const slides = Array.from({ length: 19 }, (_, i) => `/projects/airbnb/Slide${i + 1}.jfif`);

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

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const openSlideModal = (index: number) => {
    setSelectedSlide(index);
    setCurrentSlideIndex(index);
  };

  const closeSlideModal = () => {
    setSelectedSlide(null);
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
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-500/30">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              📋 Executive Summary
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              {airbnbData.overview}
            </p>
          </motion.div>

          {/* Visual Deck - Slides Gallery */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📊</div>
                <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Visual Analysis & Data
                </h2>
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {slides.length} slides
              </div>
            </div>
            
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore detailed slides with comprehensive data, metrics, and visual insights from the Airbnb case study.
            </p>

            {/* Main Slide Carousel */}
            <div className="relative mb-6">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={slides[currentSlideIndex]} 
                  alt={`Airbnb Case Study Slide ${currentSlideIndex + 1}`}
                  className="w-full h-full object-contain bg-gray-900"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className={`absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-gray-900'
                } backdrop-blur-sm transition-all`}
              >
                <Icon icon={FaChevronLeft} size={20} />
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                  theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-gray-900'
                } backdrop-blur-sm transition-all`}
              >
                <Icon icon={FaChevronRight} size={20} />
              </button>

              {/* Slide Counter */}
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full ${
                theme === 'dark' ? 'bg-black/50' : 'bg-white/90'
              } backdrop-blur-sm text-sm font-medium`}>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {currentSlideIndex + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
              {slides.map((slide, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`relative aspect-video rounded overflow-hidden border-2 transition-all ${
                    currentSlideIndex === index 
                      ? 'border-primary-500 ring-2 ring-primary-500/50' 
                      : theme === 'dark' ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={slide} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${
                    theme === 'dark' ? 'bg-black/50 text-white' : 'bg-white/50 text-gray-900'
                  }`}>
                    {index + 1}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                💡 <strong>Tip:</strong> Click on any thumbnail to jump to that slide, or use the arrow buttons to navigate through the presentation.
              </p>
            </div>
          </motion.div>

          {/* Business Model Analysis */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">💰</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {airbnbData.businessModel.title}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {airbnbData.businessModel.revenueStreams.map((stream, index) => (
                <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{stream.type}</h4>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{stream.description}</p>
                  <p className={`text-xs italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{stream.impact}</p>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20' : 'bg-gradient-to-r from-pink-50 to-purple-50'}`}>
              <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>🔄 Network Effects</h4>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{airbnbData.businessModel.networkEffects}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/10' : 'bg-white'}`}>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Avg Booking</div>
                  <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{airbnbData.businessModel.unitEconomics.averageBooking}</div>
                </div>
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/10' : 'bg-white'}`}>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Commission</div>
                  <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{airbnbData.businessModel.unitEconomics.commission}</div>
                </div>
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/10' : 'bg-white'}`}>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>CAC</div>
                  <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{airbnbData.businessModel.unitEconomics.customerAcquisition}</div>
                </div>
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/10' : 'bg-white'}`}>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>LTV</div>
                  <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{airbnbData.businessModel.unitEconomics.ltv}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Growth Strategy */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📈</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Growth Strategy
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              {airbnbData.growthStrategy.phases.map((phase, index) => (
                <div key={index} className={`p-6 rounded-lg border-l-4 ${
                  index === 0 ? 'border-blue-500 bg-blue-500/10' :
                  index === 1 ? 'border-green-500 bg-green-500/10' :
                  index === 2 ? 'border-purple-500 bg-purple-500/10' :
                  'border-pink-500 bg-pink-500/10'
                }`}>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{phase.phase}</h4>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><strong>Strategy:</strong> {phase.strategy}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}><strong>Result:</strong> {phase.result}</p>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
              <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>🎯 Key Growth Tactics</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {airbnbData.growthStrategy.keyTactics.map((tactic, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Icon icon={FaCheckCircle} size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{tactic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Competitive Analysis */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">⚔️</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Competitive Landscape
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className={`font-semibold mb-3 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-green-500">✓</span> Competitive Advantages
                </h4>
                <ul className="space-y-2">
                  {airbnbData.competitiveAnalysis.advantages.map((advantage, index) => (
                    <li key={index} className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="text-green-400 mt-0.5">•</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`font-semibold mb-3 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-orange-500">⚠</span> Key Competitors
                </h4>
                <div className="space-y-2">
                  {airbnbData.competitiveAnalysis.competitors.map((competitor, index) => (
                    <div key={index} className={`p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{competitor.name}</div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{competitor.threat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${theme === 'dark' ? 'border-primary-500/30 bg-primary-500/10' : 'border-primary-200 bg-primary-50'}`}>
              <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>🎯 Differentiation Strategy</h4>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{airbnbData.competitiveAnalysis.differentiation}</p>
            </div>
          </motion.div>

          {/* Product Innovation */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🚀</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Product Innovation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {airbnbData.productInnovation.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}
                >
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.name}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{feature.impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Responses */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🛡️</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Challenges & Strategic Responses
              </h2>
            </div>

            <div className="space-y-4">
              {airbnbData.challenges.map((item, index) => (
                <div key={index} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'
                    }`}>
                      ⚠
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Challenge: {item.challenge}</h4>
                      <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><strong>Response:</strong> {item.response}</p>
                      <p className={`text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                        <Icon icon={FaCheckCircle} size={14} />
                        <strong>Outcome:</strong> {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Insights */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">💡</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Strategic Insights
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {airbnbData.strategicInsights.map((insight, index) => (
                <div key={index} className={`p-5 rounded-lg border-l-4 border-primary-500 ${theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{insight.title}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{insight.insight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future Opportunities */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🔮</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {airbnbData.futureOpportunities.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {airbnbData.futureOpportunities.opportunities.map((opp, index) => (
                <div key={index} className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{opp.area}</h4>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{opp.description}</p>
                  <p className={`text-xs italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>💰 {opp.potential}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Learnings */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🎓</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Key Learnings
              </h2>
            </div>

            <div className="space-y-4">
              {airbnbData.keyLearnings.map((learning, index) => (
                <div key={index} className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-white/10' : 'bg-white'}`}>
                  <h4 className={`font-semibold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <span className="text-2xl">{index + 1}.</span>
                    {learning.title}
                  </h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{learning.lesson}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default AirbnbPage;
