import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaTimes, FaArrowRight } from 'react-icons/fa';
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

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  const { theme } = useTheme();
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`${theme === 'dark' ? 'bg-dark-100' : 'bg-white'} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-10 p-2 rounded-lg ${theme === 'dark' ? 'glass-effect text-white hover:bg-white/20' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <Icon icon={FaTimes} size={20} />
            </button>
            
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-t-2xl" />
            
            <div className="p-8">
              <h3 className={`text-3xl font-display font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{project.longDescription}</p>
              
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Key Features</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary-400 mt-1">▸</span>
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm border ${theme === 'dark' ? 'bg-primary-500/20 text-primary-400 border-primary-500/30' : 'bg-primary-100 text-primary-700 border-primary-300'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-shadow"
                >
                  View Live Demo
                </a>
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 rounded-lg font-semibold text-center transition-colors ${theme === 'dark' ? 'glass-effect text-white hover:bg-white/10' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <>
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
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{projectsData.subtitle}</p>
            </motion.div>

            {/* Projects Grid - Masonry Style */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projectsData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ y: -5 }}
                >
                  <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-lg border border-gray-200'} rounded-2xl overflow-hidden h-full`}>
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-200/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                          {/* Add special case for HelpHive, DiaBeat, Grad Planner, VR Compliance, and Airbnb projects */}
                          {project.id === 2 ? (
                            <motion.a
                              href="/projects/helphive"
                              className="px-4 py-2 glass-effect rounded-lg text-white hover:bg-white/20 flex items-center gap-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="text-sm font-medium">View Details</span>
                              <Icon icon={FaArrowRight} size={16} />
                            </motion.a>
                          ) : project.id === 1 ? (
                            <motion.a
                              href="/projects/diabeat"
                              className="px-4 py-2 glass-effect rounded-lg text-white hover:bg-white/20 flex items-center gap-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="text-sm font-medium">View Details</span>
                              <Icon icon={FaArrowRight} size={16} />
                            </motion.a>
                          ) : project.id === 3 ? (
                            <motion.a
                              href="/projects/gradplanner"
                              className="px-4 py-2 glass-effect rounded-lg text-white hover:bg-white/20 flex items-center gap-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="text-sm font-medium">View Details</span>
                              <Icon icon={FaArrowRight} size={16} />
                            </motion.a>
                          ) : project.id === 4 ? (
                            <motion.a
                              href="/projects/vr-compliance"
                              className="px-4 py-2 glass-effect rounded-lg text-white hover:bg-white/20 flex items-center gap-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="text-sm font-medium">View Details</span>
                              <Icon icon={FaArrowRight} size={16} />
                            </motion.a>
                          ) : project.id === 5 ? (
                            <motion.a
                              href="/projects/airbnb"
                              className="px-4 py-2 glass-effect rounded-lg text-white hover:bg-white/20 flex items-center gap-2"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="text-sm font-medium">View Details</span>
                              <Icon icon={FaArrowRight} size={16} />
                            </motion.a>
                          ) : (
                            <>
                              <motion.button
                                onClick={() => setSelectedProject(project)}
                                className="p-3 glass-effect rounded-lg text-white hover:bg-white/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Icon icon={FaEye} size={20} />
                              </motion.button>
                              <motion.a
                                href={project.liveDemoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-effect rounded-lg text-white hover:bg-white/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Icon icon={FaExternalLinkAlt} size={20} />
                              </motion.a>
                              <motion.a
                                href={project.sourceCodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-effect rounded-lg text-white hover:bg-white/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Icon icon={FaGithub} size={20} />
                              </motion.a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-xl font-display font-semibold transition-colors ${theme === 'dark' ? 'text-white group-hover:text-primary-400' : 'text-gray-900 group-hover:text-primary-600'}`}>
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 rounded-full text-xs border ${theme === 'dark' ? 'bg-primary-500/10 text-primary-400 border-primary-500/20' : 'bg-primary-50 text-primary-700 border-primary-200'}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Add View Details button for HelpHive, DiaBeat, Grad Planner, VR Compliance, and Airbnb */}
                      {project.id === 2 && (
                        <div className="flex flex-col sm:flex-row gap-2">
                          <motion.a
                            href="/projects/helphive"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 text-center ${
                              theme === 'dark' 
                                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30' 
                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Case Study</span>
                            <Icon icon={FaArrowRight} size={14} />
                          </motion.a>
                          <motion.a
                            href={helpHiveData.technical.prototypeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 text-center ${
                              theme === 'dark' 
                                ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30' 
                                : 'bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-200'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Prototype</span>
                            <Icon icon={FaArrowRight} size={14} />
                          </motion.a>
                        </div>
                      )}
                      {project.id === 1 && (
                        <div className="flex flex-col sm:flex-row gap-2">
                          <motion.a
                            href="/projects/diabeat"
                            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                              theme === 'dark' 
                                ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30' 
                                : 'bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 hover:from-purple-100 hover:to-blue-100 border border-purple-200'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>View Full Case Study</span>
                            <Icon icon={FaArrowRight} size={14} />
                          </motion.a>
                        </div>
                      )}
                      {project.id === 3 && (
                        <div className="flex flex-col sm:flex-row gap-2">
                          <motion.a
                            href="/projects/gradplanner"
                            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                              theme === 'dark' 
                                ? 'bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-400 hover:from-green-500/30 hover:to-teal-500/30 border border-green-500/30' 
                                : 'bg-gradient-to-r from-green-50 to-teal-50 text-green-600 hover:from-green-100 hover:to-teal-100 border border-green-200'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>View Full Case Study</span>
                            <Icon icon={FaArrowRight} size={14} />
                          </motion.a>
                        </div>
                      )}
                      {project.id === 4 && (
                        <div className="flex flex-col sm:flex-row gap-2">
                          <motion.a
                            href="/projects/vr-compliance"
                            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                              theme === 'dark' 
                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/30' 
                                : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 hover:from-purple-100 hover:to-pink-100 border border-purple-200'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>View Full Case Study</span>
                            <Icon icon={FaArrowRight} size={14} />
                          </motion.a>
                        </div>
                      )}
                      {project.id === 5 && (
                        <div className="flex flex-col sm:flex-row gap-2">
                          <motion.a
                            href="/projects/airbnb"
                            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                              theme === 'dark' 
                                ? 'bg-gradient-to-r from-pink-500/20 to-red-500/20 text-pink-400 hover:from-pink-500/30 hover:to-red-500/30 border border-pink-500/30' 
                                : 'bg-gradient-to-r from-pink-50 to-red-50 text-pink-600 hover:from-pink-100 hover:to-red-100 border border-pink-200'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>View Presentation</span>
                            <Icon icon={FaArrowRight} size={14} />
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default Projects;
