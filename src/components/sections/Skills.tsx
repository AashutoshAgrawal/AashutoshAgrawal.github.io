import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>{skillsData.title}</span>
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{skillsData.subtitle}</p>
          </motion.div>

          {/* All Categories Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {skillsData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={cardVariants}
                className={`rounded-2xl p-6 md:p-8 ${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <span className="text-2xl">{category.skills[0]?.icon || '💼'}</span>
                  </div>
                  <h3 className={`text-2xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        theme === 'dark' 
                          ? 'bg-gray-800/50 hover:bg-gray-800' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className={`font-medium text-base ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
