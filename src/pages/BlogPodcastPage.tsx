import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaRocket, FaBolt, FaUsers, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Icon from '../components/common/Icon';

const BlogPodcastPage: React.FC = () => {
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
            <div className="text-6xl md:text-7xl mb-6">🎙️</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                Blog to Podcast Agent
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              AI-powered content transformation from text to audio in seconds
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="https://blog-podcast-llm.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon={FaExternalLinkAlt} size={18} />
                <span>Try Live Demo</span>
              </motion.a>
              <motion.a
                href="https://github.com/AashutoshAgrawal/blog-podcast-llm"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon={FaGithub} size={18} />
                <span>View Code</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 border-l-4 border-red-500`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">⚡</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                The Problem
              </h2>
            </div>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Busy professionals and commuters want to consume quality written content but lack the time to read lengthy blog posts. Meanwhile, content creators want to reach audio-first audiences but lack the resources for professional podcast production.
            </p>
            <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50'}`}>
              <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key User Pain Points:</p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Time-consuming manual blog-to-audio conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>High costs for professional voice-over services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Content creators missing out on audio-first audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Existing solutions require multiple tools and technical setup</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 border-l-4 border-green-500`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">💡</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                The Solution
              </h2>
            </div>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Built an end-to-end AI agent that transforms any blog URL into a podcast in under 30 seconds. The solution uses intelligent web scraping, AI-powered summarization, and natural text-to-speech to create consumable audio content.
            </p>
            <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'}`}>
              <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Pipeline Architecture:</p>
              <div className="space-y-3">
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-500 font-bold">1.</span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Web Scraping (Firecrawl)</span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Extracts clean blog content from any URL, handling different website structures automatically
                  </p>
                </div>
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-500 font-bold">2.</span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Summarization (Google Gemini)</span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Generates engaging, podcast-style summary optimized for audio consumption
                  </p>
                </div>
                <div className={`p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-500 font-bold">3.</span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Text-to-Speech (Google Gemini)</span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Converts text to natural-sounding audio with proper intonation and pacing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Product Decisions */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🎯</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Key PM Decisions
              </h2>
            </div>

            <div className="space-y-4">
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
                <h3 className={`font-bold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-2xl">1️⃣</span>
                  Zero-Friction Deployment
                </h3>
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Decision:</strong> Deployed on Streamlit Cloud instead of requiring users to run locally
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <strong>Impact:</strong> Eliminated setup friction, users can access instantly via URL
                </p>
              </div>

              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
                <h3 className={`font-bold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-2xl">2️⃣</span>
                  Single-Provider Architecture
                </h3>
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Decision:</strong> Used Google Gemini for both summarization and TTS (vs. OpenAI + ElevenLabs)
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <strong>Impact:</strong> Simplified architecture, reduced API dependencies, lower complexity
                </p>
              </div>

              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'}`}>
                <h3 className={`font-bold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-2xl">3️⃣</span>
                  Speed as Core Feature
                </h3>
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Decision:</strong> Optimized for &lt;30 second generation time
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <strong>Impact:</strong> Near-instant gratification, users can convert multiple blogs quickly
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🛠️</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Technology Stack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Frontend & Deployment</h4>
                <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Streamlit (UI Framework)</li>
                  <li>• Streamlit Cloud (Hosting)</li>
                  <li>• Python 3.8+</li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI & APIs</h4>
                <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Google Gemini API (LLM + TTS)</li>
                  <li>• Firecrawl API (Web Scraping)</li>
                  <li>• API Key Management</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* User Impact */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-primary-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">📊</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Product Value
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}`}>
                  &lt;30s
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Blog → Podcast Time
                </div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}`}>
                  100%
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Automated Process
                </div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}`}>
                  Zero
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Setup Required
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🎯</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Target Use Cases
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>🚗 Busy Professionals</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Convert industry blogs and articles to listen during commute
                </p>
              </div>

              <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' : 'bg-gradient-to-br from-green-50 to-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>📝 Content Creators</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Repurpose written content for audio-first platforms (Spotify, Apple Podcasts)
                </p>
              </div>

              <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>♿ Accessibility</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Make written content accessible to visually impaired users
                </p>
              </div>

              <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20' : 'bg-gradient-to-br from-yellow-50 to-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>🎓 Students & Researchers</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Convert research papers and articles for multi-tasking study sessions
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-primary-500/30 text-center">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Try It Yourself!
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Experience the power of AI-driven content transformation. Just paste any blog URL and get your podcast in seconds.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="https://blog-podcast-llm.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon={FaRocket} size={18} />
                <span>Launch App</span>
              </motion.a>
              <motion.a
                href="https://github.com/AashutoshAgrawal/blog-podcast-llm"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                  theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon={FaGithub} size={18} />
                <span>View Source Code</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default BlogPodcastPage;
