import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaSearch, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../../constants';
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

const Projects: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(projectsData.projects.map(p => p.category)))];
  
  // Filter projects by category
  const filteredProjects = selectedCategory === 'all' 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === selectedCategory);

  // If no projects in filtered category, show all
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projectsData.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Get project link
  const getProjectLink = (id: number) => {
    const links: { [key: number]: string } = {
      1: '/projects/diabeat',
      2: '/projects/helphive',
      3: '/projects/gradplanner',
      4: '/projects/vr-compliance',
      5: '/projects/blog-podcast',
      6: '/projects/airbnb',
    };
    return links[id] || '#';
  };

  // Extract key metrics from highlights
  const getKeyMetrics = (highlights: string[]) => {
    return highlights.map(h => {
      const match = h.match(/(\d+[%+]|\d+\.\d+[%+]|\d+[xX])/);
      const icon = h.includes('Impact') ? FaChartLine 
        : h.includes('Research') ? FaSearch 
        : h.includes('Strategy') ? FaLightbulb 
        : FaRocket;
      return { text: h, metric: match ? match[1] : null, icon };
    });
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom max-w-7xl">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-block mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark' 
                  ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' 
                  : 'bg-primary-100 text-primary-700 border border-primary-300'
              }`}>
                <Icon icon={FaRocket} size={14} />
                <span>Product Portfolio</span>
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold mb-6">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                Strategic PM Work
              </span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              End-to-end product ownership from <span className="font-semibold text-primary-500">discovery</span> to <span className="font-semibold text-primary-500">measurable impact</span>
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : theme === 'dark'
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Hero Featured Project - Full Width Split */}
          {displayProjects.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              onClick={() => navigate(getProjectLink(displayProjects[0].id))}
              className="block group cursor-pointer"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-2xl border border-gray-200'} rounded-3xl overflow-hidden`}>
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-72 md:h-auto overflow-hidden">
                    <img 
                      src={displayProjects[0].image}
                      alt={displayProjects[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold rounded-full shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}>
                        {displayProjects[0].category}
                      </span>
                    </div>
                    
                    <h3 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {displayProjects[0].title}
                    </h3>
                    
                    <p className={`text-base md:text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {displayProjects[0].description}
                    </p>

                    {/* PM Process Timeline */}
                    <div className="space-y-3 mb-8">
                      {displayProjects[0].highlights.map((highlight, idx) => {
                        // Remove emoji prefixes and category labels (matches emojis at start)
                        const cleanHighlight = highlight.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*(Strategy|PM Decision|Impact|Execution):\s*/gu, '');
                        // Extract metric if present
                        const metricMatch = cleanHighlight.match(/(\d+[%+]|\d+\.\d+[%+]|\d+[xX])/);
                        const metric = metricMatch ? metricMatch[1] : null;
                        const textWithoutMetric = metric ? cleanHighlight.replace(metric, '').trim() : cleanHighlight;
                        
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${theme === 'dark' ? 'bg-primary-400' : 'bg-primary-600'}`} />
                            <div className="flex-1">
                              {metric && (
                                <span className={`text-xl font-bold mr-2 ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}>
                                  {metric}
                                </span>
                              )}
                              <span className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {textWithoutMetric}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {displayProjects[0].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                            theme === 'dark' 
                              ? 'bg-white/5 text-gray-300 border border-white/10' 
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div>
                      <motion.div
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30'
                            : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        }`}
                        whileHover={{ scale: 1.05, boxShadow: theme === 'dark' ? '0 20px 40px rgba(99, 102, 241, 0.4)' : '0 20px 40px rgba(79, 70, 229, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Full Case Study</span>
                        <Icon icon={FaArrowRight} size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}

          {/* Other Projects Grid */}
          {displayProjects.length > 1 && (
          <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProjects.slice(1).map((project, idx) => {
              const metrics = getKeyMetrics(project.highlights);
              const primaryMetric = metrics.find(m => m.metric);
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={idx < 2 ? 'sm:col-span-1 lg:col-span-2' : 'sm:col-span-1'}
                >
                  <motion.div
                    onClick={() => navigate(getProjectLink(project.id))}
                    className="block h-full group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-lg border border-gray-200'} rounded-2xl overflow-hidden h-full`}>
                      {/* Image with Metric Overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-display font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs text-white/80 line-clamp-1">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {project.description.split('.')[0]}.
                        </p>

                        {/* Key Highlights */}
                        <div className="space-y-2 mb-4">
                          {project.highlights.slice(0, 2).map((highlight, hIdx) => {
                            // Remove emoji prefixes and category labels (matches emojis at start)
                            const cleanHighlight = highlight.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*(Strategy|PM Decision|Impact|Execution):\s*/gu, '');
                            return (
                              <div key={hIdx} className="flex items-start gap-2">
                                <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme === 'dark' ? 'bg-primary-400' : 'bg-primary-600'}`} />
                                <span className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {cleanHighlight.length > 60 ? cleanHighlight.substring(0, 60) + '...' : cleanHighlight}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className={`px-2 py-1 rounded-md text-xs ${
                                theme === 'dark' 
                                  ? 'bg-primary-500/10 text-primary-400' 
                                  : 'bg-primary-50 text-primary-700'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                          className={`inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all ${
                            theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                          }`}
                        >
                          <span>View Project</span>
                          <Icon icon={FaArrowRight} size={12} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          )}

          {/* Bottom CTA Section */}
          <motion.div 
            variants={itemVariants}
            className={`mt-16 p-8 md:p-12 rounded-3xl text-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/20' 
                : 'bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-display font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Want to see my full PM methodology?
            </h3>
            <p className={`text-base md:text-lg mb-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Each case study includes detailed research findings, strategic decisions, and measurable business impact.
            </p>
            <motion.a
              href="#contact"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Talk Product Strategy</span>
              <Icon icon={FaArrowRight} size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
