import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../../constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';

const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
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
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>About</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h3 className={`text-3xl sm:text-4xl font-bold mb-6 leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  I build AI-powered products that create real impact.
                </h3>
                
                <div className={`space-y-4 text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <p>
                    With 5+ years across <span className="font-semibold text-blue-400">Goldman Sachs</span> and <span className="font-semibold text-purple-400">McKinsey</span>, I've shipped products that reached <span className="font-semibold">14 million users</span> and drove <span className="font-semibold">$50M+ in revenue</span>.
                  </p>
                  
                  <p>
                    From personalizing financial insights to streamlining knowledge discovery for 30,000+ consultants, I bridge the gap between technical complexity and business value.
                  </p>
                  
                  <p>
                    Currently pursuing my Master's at <span className="font-semibold">Northeastern University</span> (4.0 GPA), building on my Computer Science foundation from <span className="font-semibold">IIT Guwahati</span>.
                  </p>
                </div>
              </div>

              <div className={`${
                theme === 'dark' ? 'bg-gray-900/40' : 'bg-gray-50'
              } rounded-2xl p-8`}>
                <h4 className={`text-xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Journey</h4>
                
                <div className="space-y-6">
                  {[
                    { 
                      place: 'IIT Guwahati', 
                      role: 'Computer Science', 
                      icon: '🎓',
                      color: 'from-blue-500 to-cyan-500'
                    },
                    { 
                      place: 'Goldman Sachs', 
                      role: 'Product + ML Models (14M users)', 
                      icon: '💼',
                      color: 'from-purple-500 to-pink-500'
                    },
                    { 
                      place: 'McKinsey & Company', 
                      role: 'Analytics Lead (30K users)', 
                      icon: '📊',
                      color: 'from-green-500 to-emerald-500'
                    },
                    { 
                      place: 'Northeastern University', 
                      role: "Master's in Engineering Mgmt", 
                      icon: '🚀',
                      color: 'from-orange-500 to-red-500'
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {item.place}
                        </h5>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              <div className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-300'
              } rounded-2xl p-6`}>
                <h4 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Impact
                </h4>
                <div className="space-y-4">
                  {aboutData.highlights.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </span>
                      <span className={`text-3xl font-bold ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}`}>
                        {stat.number}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${
                theme === 'dark' ? 'bg-gray-900/40' : 'bg-gray-50'
              } rounded-2xl p-6`}>
                <h4 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 text-sm rounded-full ${
                        theme === 'dark'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-blue-100 text-blue-700 border border-blue-300'
                      }`}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30' 
                  : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-300'
              } rounded-2xl p-6`}>
                <h4 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Beyond Work
                </h4>
                <div className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>♟️ Chess player (1400+ rating)</p>
                  <p>🤖 AI/ML tinkerer</p>
                  <p>📊 Data enthusiast</p>
                  <p>📍 Based in {personalInfo.location}</p>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block text-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-xl transition-all"
              >
                Let's Build Something Together →
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
