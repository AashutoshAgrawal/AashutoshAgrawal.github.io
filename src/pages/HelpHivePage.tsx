import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaUsers, FaLightbulb, FaRocket, FaChartLine, FaDollarSign, FaBookOpen, FaBolt, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Icon from '../components/common/Icon';
import { helpHiveData } from '../constants';

const HelpHivePage: React.FC = () => {
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon icon={FaHome} className="text-6xl text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                HelpHive
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Making household services fast, affordable, and trustworthy through community-driven connections
            </p>
            
            {/* Prototype Button */}
            <motion.a
              href={helpHiveData.technical.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon={FaExternalLinkAlt} size={18} />
              <span>View Interactive Prototype</span>
            </motion.a>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-6">
              <Icon icon={FaLightbulb} className={`text-4xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Our Vision
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              HelpHive exists to make household services <span className="font-bold text-blue-600">fast, affordable, and trustworthy</span>. We are building a community-driven marketplace where neighbors can help each other with everyday tasks — from furniture assembly to lawn mowing — at a fraction of the cost and wait time of traditional providers.
            </p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <Icon icon={FaBolt} className={`text-4xl ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  The Problem
                </h2>
              </div>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Today's handyman platforms are expensive, slow, and impersonal. Customers face high fees ($75–$150 for small jobs), wait several days for help, and worry about reliability. On the other side, gig workers and retirees face heavy platform commissions, low pay, and unstable demand.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <Icon icon={FaLightbulb} className={`text-4xl ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Our Solution
                </h2>
              </div>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                HelpHive connects homeowners, students, and retirees through a local marketplace that emphasizes <span className="font-bold text-blue-600">speed, affordability, and trust</span>. By focusing on same-day matching, transparent pricing, and community-driven trust features, we make small jobs accessible for customers and provide fair, flexible income opportunities for taskers.
              </p>
            </motion.div>
          </div>

          {/* Our Customers */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-8">
              <Icon icon={FaUsers} className={`text-4xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Our Customers
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl text-center ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'}`}>
                <h4 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Askers
                </h4>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Busy professionals, students, and retirees who need quick and affordable help with household tasks
                </p>
              </div>
              <div className={`p-6 rounded-xl text-center ${theme === 'dark' ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30' : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-200'}`}>
                <h4 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Taskers
                </h4>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Students, retirees, and gig workers looking for low-commission, flexible earning opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product Features */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-6">
              <Icon icon={FaRocket} className={`text-4xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Product Features
              </h2>
            </div>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              We launched a working prototype with core features:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Service posting and role selection',
                'Matching and booking flows',
                'In-app chat and secure payments',
                'Trust and safety features including ratings and verifications'
              ].map((feature, index) => (
                <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'}`}>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market & Traction */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <Icon icon={FaChartLine} className={`text-4xl ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Market Opportunity
                </h2>
              </div>
              <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Large and growing local services market, with U.S. household services projected to reach billions annually.
              </p>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                HelpHive differentiates from TaskRabbit, Handy, and others by offering <span className="font-bold text-blue-600">faster turnaround, lower fees, and a community-first approach</span>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <Icon icon={FaChartLine} className={`text-4xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Traction
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className={`text-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                  <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>25+</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>User Interviews</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' : 'bg-gradient-to-br from-green-100 to-blue-100'}`}>
                  <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>✓</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Prototype Tested</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                  <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>4</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Key Success Metrics</div>
                </div>
              </div>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Defined success metrics: task completion rate, time to match, retention, and satisfaction (NPS).
              </p>
            </motion.div>
          </div>

          {/* Business Model */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-6">
              <Icon icon={FaDollarSign} className={`text-4xl ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Business Model
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Revenue is generated through commissions on completed tasks. Lower commission rates compared to existing platforms attract more taskers, increasing liquidity and reliability for askers.
            </p>
          </motion.div>

          {/* Complete Documentation */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-3 mb-6">
              <Icon icon={FaBookOpen} className={`text-4xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Complete Project Documentation
              </h2>
            </div>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Access the full suite of product management deliverables for HelpHive, demonstrating end-to-end product development from research through execution:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Core Product Documents */}
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  📋 Core Product Documents
                </h4>
                <div className="space-y-3">
                  <a href="https://drive.google.com/file/d/1lrUfEWofLxCjt_90VwLg91Z54KeYyW_m/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600'}`}>
                    Market Requirements Document (MRD)
                  </a>
                  <a href="https://drive.google.com/file/d/1I-uzlQ01O-rnoQ4OY83cosXEf_Yr8kkd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600'}`}>
                    Product Requirements Document (PRD)
                  </a>
                  <a href="https://drive.google.com/file/d/1J0niO0SercF5ucCNYXLG5h80-1Qg6jlU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600'}`}>
                    User Stories & Requirements
                  </a>
                  <a href="https://drive.google.com/file/d/1EJ8o-mFn_O_mnZqGAnqexc9AU-_vIsUE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600'}`}>
                    Product Roadmap & Timeline
                  </a>
                </div>
              </div>

              {/* User Research & Analysis */}
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20' : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-200'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  🔍 User Research & Analysis
                </h4>
                <div className="space-y-3">
                  <a href="https://drive.google.com/file/d/1Nyh11sgf8xhgLroxPGsQBptgrlAE_K3B/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-green-50 text-gray-700 hover:text-green-600'}`}>
                    Market Research Analysis
                  </a>
                  <a href="https://drive.google.com/file/d/1Y-JqCsIH3k80NcCbRwlwRDaStVtbaO6L/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-green-50 text-gray-700 hover:text-green-600'}`}>
                    User Interview Documentation
                  </a>
                  <a href="https://drive.google.com/file/d/19pb9_QVqQNcG7qHcgu8OSaJfm5mYwEPy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-green-50 text-gray-700 hover:text-green-600'}`}>
                    User Personas & Insights
                  </a>
                  <a href="https://drive.google.com/file/d/1mbywwA0zKKUdn7U9sHZ5dexABzNbPBID/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-green-50 text-gray-700 hover:text-green-600'}`}>
                    User Journey Storyboards
                  </a>
                </div>
              </div>

              {/* Strategy & Metrics */}
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20' : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  📊 Strategy & Metrics
                </h4>
                <div className="space-y-3">
                  <a href="https://drive.google.com/file/d/1jRXWycuDKOaPahDCumBLLzFFTIStQ2JI/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-600'}`}>
                    Business Pitch Deck
                  </a>
                  <a href="https://drive.google.com/file/d/1xVEw97Aoxs6YyRGtSOJSmdljRp1GDDEu/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-600'}`}>
                    Customer Development Strategy
                  </a>
                  <a href="https://drive.google.com/file/d/18ZENh5-yml-OCJO0pT0aZYKNmpEUOLfU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={`block p-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white' : 'bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-600'}`}>
                    Metrics Framework & KPIs
                  </a>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className={`mt-8 p-6 rounded-xl text-center ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'}`}>
              <h4 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                Project Overview
              </h4>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>HelpHive</strong> represents a complete product management cycle from initial market research through user validation, requirements definition, design planning, and strategic business development. This documentation demonstrates systematic approach to product development, user-centered design thinking, and data-driven decision making.
              </p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30' : 'bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-300'} rounded-2xl p-8 md:p-12`}>
            <h3 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              🎯 Next Steps
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white/70 backdrop-blur-md border border-gray-200'}`}>
                <h4 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  📱 Expand Testing
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Scale prototype testing with larger user groups to validate product-market fit
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white/70 backdrop-blur-md border border-gray-200'}`}>
                <h4 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  🔧 Refine MVP
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Enhance pricing and trust features based on user feedback for official launch
                </p>
              </div>
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white/70 backdrop-blur-md border border-gray-200'}`}>
                <h4 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  💵 Secure Funding
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Prepare for pilot funding to scale in university and urban communities
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default HelpHivePage;
