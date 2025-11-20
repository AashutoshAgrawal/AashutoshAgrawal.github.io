import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaUsers, FaChartLine, FaLightbulb, FaCheckCircle, FaCog, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Icon from '../components/common/Icon';
import { gradPlannerData } from '../constants';

const GradPlannerPage: React.FC = () => {
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
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl">
                🎓
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{gradPlannerData.hero.date}</div>
                <h1 className="text-3xl md:text-5xl font-display font-bold">
                  <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                    {gradPlannerData.hero.title}
                  </span>
                </h1>
              </div>
            </div>
            
            <p className={`text-lg md:text-xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {gradPlannerData.hero.tagline}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {gradPlannerData.hero.author}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {gradPlannerData.hero.role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">⚡</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What's the Problem?
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {gradPlannerData.problem.description}
            </p>
            
            {/* Problem Image */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e1090bf3a395ce6e30acf_NuqD0mem8rQ9mQIYZdj_HQ3n6cKP9FFDZt02c69tDDRhLDLxHm1jxI9TXreY0AjupAAmIeM1NdNl9sjMZz74Yfk95oaD9gjs01ggs5D36XTUwbUh0T8AmbL4ts7mxL9kC21Os94f.png"
                alt="Class Planning Problem"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* MVP Section */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🚀</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What is our Minimum Viable Product (MVP)?
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {gradPlannerData.mvp.description}
            </p>
            
            {/* MVP Image */}
            <div className="rounded-xl overflow-hidden border-4 border-primary-500/20">
              <img
                src="https://aashutoshagrawal.github.io/project4-slide.jpg"
                alt="Initial Prototype"
                className="w-full"
              />
              <div className={`text-center py-3 ${theme === 'dark' ? 'bg-dark-200' : 'bg-gray-100'}`}>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Initial Prototype
                </p>
              </div>
            </div>
          </motion.div>

          {/* Business Model */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">💼</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What is our Business Model going to be?
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {gradPlannerData.businessModel.description}
            </p>
            
            {/* Business Model Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {gradPlannerData.businessModel.features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 border-green-500 ${
                    theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <Icon icon={FaCheckCircle} size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Model Image */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e10adaadcc52196bc1bee_tvkHH5qk_jM0VxuuMnK_Cr2Un0jYm2V8DbrEaadP4BaR9-3lAc0PBsgQSKSKS9VXgKNxMEHOAZdiV5TC0xbBB7PB1t73RfSMtqcTXEnxKLR1oxQW1Nb_YL__HvTCUf5_rZihAxK1.png"
                alt="Business Model"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* What We Built */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🔨</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What do we build?
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {gradPlannerData.build.description}
            </p>
            
            {/* Key Features */}
            <div className={`p-6 rounded-xl mb-6 ${theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-primary-400' : 'text-primary-700'}`}>
                Key Features
              </h3>
              <div className="space-y-3">
                {gradPlannerData.build.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Build Image */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e10d13ca3c5a77d234cde_bhfgSQTGP_1cQbKmaptO8dy4dmUjDBt7oTHGYNOgpVA1yM4fWcwNKMHFbwir5paLTbtV5QfCq6Xz0yNdpqIQOsj82dKOOiwqdrCLvpZIf_TuqSVkjq_3NXoTDTl5jNI1r9XkFz3n.png"
                alt="Product Features"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Product Roadmap */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🗺️</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What does the Product Roadmap look like?
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {gradPlannerData.roadmap.description}
            </p>
          </motion.div>

          {/* Final Product */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">✨</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                The Final Product
              </h2>
            </div>
            
            {/* Final Product Images */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border-4 border-purple-500/20">
                <img
                  src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e112f10beff40e4114ab5_I0r7heivZpxaARvp4p8ROZ8EMtiJntmpomUL62UyLAkvJomL40uU7uU8CUNH8pzGnvfOr_QyGELhngsM3V93pXOZiQeKcwqEnKFUacu6Ah0XU_6AWafc3ahyMdMQYrgZ6f4JPl7F.png"
                  alt="Final Landing Page"
                  className="w-full"
                />
                <div className={`text-center py-3 ${theme === 'dark' ? 'bg-dark-200' : 'bg-gray-100'}`}>
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Version 2 Final Landing Page
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e114c3882b8389f4924d9_8dMr_dHaWYrAHX1fUVro5nYFBrtLg4Cbtu3d__q1LkwCgWQZN1YqwnCtPct29TjeoeetKXmM-FIYTDXqwdVGbagQTxiAM5M_uInXdSwYcnTF7i0TOE7OBjlapi6bo6PSFvsaf0IR.png"
                  alt="Final Product Dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🎯</div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Outcomes
              </h2>
            </div>
            <p className="text-lg mb-8 opacity-90">
              After leading the team through various product cycles, we were able to create an amazing product.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {gradPlannerData.outcomes.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl border-l-4 border-white">
              <p className="text-xl italic mb-2">"{gradPlannerData.outcomes.testimonial}"</p>
            </div>
          </motion.div>

          {/* Key Learnings */}
          <motion.div variants={itemVariants} className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">💡</div>
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Key Learnings
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {gradPlannerData.learnings.map((learning, index) => {
                const iconMap: { [key: string]: any } = {
                  'FaUsers': FaUsers,
                  'FaCog': FaCog,
                  'FaChartLine': FaChartLine,
                  'FaLightbulb': FaLightbulb,
                };
                const IconComponent = iconMap[learning.iconName];
                
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-dark-200 to-dark-100 border-primary-500/30' 
                        : 'bg-gradient-to-br from-gray-50 to-white border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon icon={IconComponent} size={24} className="text-primary-500" />
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {learning.title}
                      </h3>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {learning.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default GradPlannerPage;
