import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaUsers, FaBrain, FaRocket, FaSearch, FaLightbulb, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData, helpHiveData } from '../../constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../common/Icon';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
  liveDemoLink: string;
  sourceCodeLink: string;
  highlights: string[];
}

// Extract key metric from highlight
const extractMetric = (highlight: string) => {
  const match = highlight.match(/(\d+[%\+\w]*)/);
  return match ? match[1] : null;
};

const Projects: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'research' | 'strategy' | 'execution' | 'impact'>('research');

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

  const getTabContent = (project: Project) => {
    const tabs = {
      research: {
        icon: FaSearch,
        title: "Research & Discovery",
        content: project.highlights.filter(h => h.includes('Research') || h.includes('interviews')),
        color: "from-blue-500 to-cyan-500"
      },
      strategy: {
        icon: FaLightbulb,
        title: "Strategic Decisions",
        content: project.highlights.filter(h => h.includes('Strategy') || h.includes('Decision')),
        color: "from-purple-500 to-pink-500"
      },
      execution: {
        icon: FaRocket,
        title: "Execution & Build",
        content: project.highlights.filter(h => h.includes('Execution') || h.includes('Product')),
        color: "from-green-500 to-teal-500"
      },
      impact: {
        icon: FaChartLine,
        title: "Impact & Results",
        content: project.highlights.filter(h => h.includes('Impact') || h.includes('Outcome') || h.includes('Validation')),
        color: "from-orange-500 to-red-500"
      }
    };

    return tabs[activeTab];
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>{projectsData.title}</span>
            </h2>
            <p className={`text-lg mb-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              {projectsData.subtitle}
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div variants={containerVariants} className="grid grid-cols-12 gap-4 md:gap-6 mb-8">
            
            {/* Featured Project - Large Card (Spans 2 rows, 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-8 md:row-span-2 group cursor-pointer"
              onClick={() => {
                setActiveProject(0);
                setActiveTab('research');
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-3xl overflow-hidden h-full`}>
                {/* Image Section */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={projectsData.projects[0].image}
                    alt={projectsData.projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${theme === 'dark' ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' : 'bg-primary-100 text-primary-700 border border-primary-300'}`}>
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                      {projectsData.projects[0].title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className={`text-sm md:text-base mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {projectsData.projects[0].description}
                  </p>

                  {/* Quick Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {projectsData.projects[0].highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                        <p className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectsData.projects[0].tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-primary-500/10 text-primary-400' : 'bg-primary-50 text-primary-700'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {projectsData.projects[0].id === 1 && (
                    <motion.a
                      href="/projects/diabeat"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/50' 
                          : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Full Case Study</span>
                      <Icon icon={FaArrowRight} size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Medium Card */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-4 group cursor-pointer"
              onClick={() => setActiveProject(1)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-lg border border-gray-200'} rounded-2xl overflow-hidden h-full`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={projectsData.projects[1].image}
                    alt={projectsData.projects[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-display font-bold text-white">
                      {projectsData.projects[1].title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {projectsData.projects[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData.projects[1].tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className={`px-2 py-1 rounded-lg text-xs ${theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {projectsData.projects[1].id === 2 && (
                    <motion.a
                      href="/projects/helphive"
                      className={`inline-flex items-center gap-2 mt-4 text-sm font-medium ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}
                      whileHover={{ gap: 12 }}
                    >
                      <span>View Case Study</span>
                      <Icon icon={FaArrowRight} size={12} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Project 3 - Medium Card */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-4 group cursor-pointer"
              onClick={() => setActiveProject(2)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-lg border border-gray-200'} rounded-2xl overflow-hidden h-full`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={projectsData.projects[2].image}
                    alt={projectsData.projects[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-display font-bold text-white">
                      {projectsData.projects[2].title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {projectsData.projects[2].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData.projects[2].tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className={`px-2 py-1 rounded-lg text-xs ${theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {projectsData.projects[2].id === 3 && (
                    <motion.a
                      href="/projects/gradplanner"
                      className={`inline-flex items-center gap-2 mt-4 text-sm font-medium ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}
                      whileHover={{ gap: 12 }}
                    >
                      <span>View Case Study</span>
                      <Icon icon={FaArrowRight} size={12} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Project 4 & 5 - Smaller Cards */}
            {projectsData.projects.slice(3, 5).map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="col-span-12 sm:col-span-6 md:col-span-4 group cursor-pointer"
                onClick={() => setActiveProject(idx + 3)}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-lg border border-gray-200'} rounded-2xl overflow-hidden h-full`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base font-display font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`text-xs mb-3 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description.split('.')[0]}.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, tagIdx) => (
                        <span key={tagIdx} className={`px-2 py-1 rounded-lg text-xs ${theme === 'dark' ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-700'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.id === 4 && (
                      <motion.a
                        href="/projects/vr-compliance"
                        className={`inline-flex items-center gap-1 mt-3 text-xs font-medium ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}
                        whileHover={{ gap: 8 }}
                      >
                        <span>View Details</span>
                        <Icon icon={FaArrowRight} size={10} />
                      </motion.a>
                    )}
                    {project.id === 5 && (
                      <motion.a
                        href="/projects/airbnb"
                        className={`inline-flex items-center gap-1 mt-3 text-xs font-medium ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}
                        whileHover={{ gap: 8 }}
                      >
                        <span>View Analysis</span>
                        <Icon icon={FaArrowRight} size={10} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Tab Section - PM Process Deep Dive */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-3xl p-6 md:p-8`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className={`text-2xl font-display font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  My PM Process
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {projectsData.projects[activeProject].title}
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {(['research', 'strategy', 'execution', 'impact'] as const).map((tab) => {
                const tabInfo = getTabContent(projectsData.projects[activeProject]);
                const isActive = activeTab === tab;
                const TabIcon = tabInfo.icon;
                
                return (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                          : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : theme === 'dark'
                          ? 'bg-white/5 text-gray-400 hover:bg-white/10'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab === 'research' && <Icon icon={FaSearch} size={16} />}
                    {tab === 'strategy' && <Icon icon={FaLightbulb} size={16} />}
                    {tab === 'execution' && <Icon icon={FaRocket} size={16} />}
                    {tab === 'impact' && <Icon icon={FaChartLine} size={16} />}
                    <span className="capitalize">{tab}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {getTabContent(projectsData.projects[activeProject]).content.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-start gap-3 p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}
                >
                  <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${getTabContent(projectsData.projects[activeProject]).color}`} />
                  <p className={`flex-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
