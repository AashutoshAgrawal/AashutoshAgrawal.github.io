import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '../../constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';

const Experience: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Company logos and styles
  const companyStyles: { [key: string]: { gradient: string; logo: string; bg: string } } = {
    'McKinsey & Company': {
      gradient: 'from-blue-600 to-cyan-500',
      logo: '/workex/mckinsey-logo.png',
      bg: theme === 'dark' ? 'from-blue-900/40 to-cyan-900/40' : 'from-blue-50 to-cyan-50',
    },
    'Goldman Sachs': {
      gradient: 'from-blue-800 to-blue-600',
      logo: '/workex/gs-logo.png',
      bg: theme === 'dark' ? 'from-blue-900/40 to-indigo-900/40' : 'from-blue-50 to-indigo-50',
    },
    'Deutsche Bank': {
      gradient: 'from-blue-700 to-blue-500',
      logo: '/workex/deutsche-logo.png',
      bg: theme === 'dark' ? 'from-blue-900/40 to-blue-800/40' : 'from-blue-50 to-blue-100',
    },
  };

  const getCompanyStyle = (company: string) => {
    if (company.includes('McKinsey')) return companyStyles['McKinsey & Company'];
    if (company.includes('Goldman')) return companyStyles['Goldman Sachs'];
    if (company.includes('Deutsche')) return companyStyles['Deutsche Bank'];
    return { 
      gradient: 'from-gray-600 to-gray-400', 
      logo: '/logo512.png', 
      bg: theme === 'dark' ? 'from-gray-900/40 to-gray-800/40' : 'from-gray-50 to-gray-100' 
    };
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>Experience</span>
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Building products that drive real business impact
            </p>
          </motion.div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experienceData.experiences.map((experience, index) => {
              const style = getCompanyStyle(experience.company);
              const isExpanded = expandedId === experience.id;

              return (
                <motion.div
                  key={experience.id}
                  variants={cardVariants}
                  className="group"
                >
                  <motion.div
                    layout
                    onClick={() => setExpandedId(isExpanded ? null : experience.id)}
                    className={`relative rounded-2xl p-6 cursor-pointer overflow-hidden ${
                      theme === 'dark' 
                        ? 'bg-gray-900/60 border border-gray-800 hover:border-gray-700' 
                        : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.bg} opacity-50 -z-10`} />

                    {/* Company Logo Badge */}
                    <div className={`absolute top-6 right-6 w-20 h-20 rounded-xl shadow-lg overflow-hidden ${
                      theme === 'dark' ? 'bg-white ring-2 ring-gray-700' : 'bg-white ring-2 ring-gray-200'
                    }`}>
                      <img 
                        src={style.logo} 
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain p-3"
                      />
                    </div>

                    {/* Duration Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      theme === 'dark' 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-blue-100 text-blue-700 border border-blue-300'
                    }`}>
                      {experience.duration}
                    </div>

                    {/* Role */}
                    <h3 className={`text-2xl font-bold mb-2 pr-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {experience.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {experience.company}
                      </span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {experience.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {experience.description}
                    </p>

                    {/* Key Metrics Preview - Show top 2 */}
                    <div className="space-y-2 mb-4">
                      {experience.achievements.slice(0, 2).map((achievement, achIndex) => {
                        const match = achievement.match(/(\d+[%+MBKT]+)/);
                        const metric = match ? match[1] : null;
                        const text = achievement;

                        return (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + achIndex * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <span className={`text-lg font-bold ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'} min-w-[60px]`}>
                              {metric || '✓'}
                            </span>
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {text.replace(metric || '', '').trim()}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Expand/Collapse indicator */}
                    <AnimatePresence>
                      {!isExpanded && experience.achievements.length > 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-2`}
                        >
                          <span>+{experience.achievements.length - 2} more achievements</span>
                          <span className="text-xs">▼</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-700/30"
                        >
                          <h4 className={`text-sm font-bold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            All Achievements:
                          </h4>
                          <div className="space-y-2">
                            {experience.achievements.slice(2).map((achievement, achIndex) => {
                              const match = achievement.match(/(\d+[%+MBKT]+)/);
                              const metric = match ? match[1] : null;
                              const text = achievement;

                              return (
                                <motion.div
                                  key={achIndex + 2}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achIndex * 0.05 }}
                                  className="flex items-start gap-2"
                                >
                                  <span className={`text-lg font-bold ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'} min-w-[60px]`}>
                                    {metric || '✓'}
                                  </span>
                                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {text.replace(metric || '', '').trim()}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`mt-4 text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-2`}
                          >
                            <span>Show less</span>
                            <span className="text-xs">▲</span>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={cardVariants}
            className={`mt-12 rounded-2xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border border-blue-500/30' 
                : 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-blue-300'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Overall Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Years Experience', value: '5+', icon: '🎯' },
                { label: 'Users Impacted', value: '14M+', icon: '👥' },
                { label: 'Revenue Generated', value: '$200M+', icon: '💰' },
                { label: 'Products Shipped', value: '10+', icon: '🚀' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-1 ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
