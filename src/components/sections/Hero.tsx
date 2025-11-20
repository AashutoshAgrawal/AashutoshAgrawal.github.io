import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaDownload } from 'react-icons/fa';
import { heroData, socialLinks, personalInfo } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../common/Icon';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  // Terminal scenarios that rotate
  const terminalScenarios = [
    {
      command: "cat about_me.txt",
      output: [
        `📍 ${personalInfo.location} | 🎓 IIT → Goldman → McKinsey → NEU`,
        "♟️ Chess enthusiast | 🤖 AI tinkerer | 📊 Data nerd"
      ],
      command2: "./current_status.sh",
      output2: [
        { icon: "⚡", label: "Status:", value: "actively_building" },
        { icon: "🎯", label: "Seeking:", value: "AI_PM_roles" },
        { icon: "✓", label: "Available for:", value: "your_company_here" }
      ]
    },
    {
      command: "cat skills.json",
      output: [
        '{ "product": ["strategy", "roadmaps", "user_research"],',
        '  "tech": ["python", "SQL", "ML/AI", "APIs"],',
        '  "impact": "14M+ users, $50M+ revenue" }'
      ],
      command2: "",
      output2: []
    },
    {
      command: "git log --oneline",
      output: [
        "🚀 Built AI models at Goldman (14M users)",
        "📈 Led analytics at McKinsey (30K users)",
        "🎓 Mastering Product @ Northeastern"
      ],
      command2: "",
      output2: []
    },
    {
      command: "npm run interests",
      output: [
        "♟️ Chess: Because strategy matters",
        "🤖 AI/ML: The future is here",
        "📊 Data: Stories in numbers",
        "🏗️ Building: Products people love"
      ],
      command2: "",
      output2: []
    },
    {
      command: "./get_random_fact.sh",
      output: [
        "💡 Did you know?",
        "I've analyzed data for 14M+ users",
        "Built ML models in production",
        "And still make time for chess puzzles ♟️"
      ],
      command2: "",
      output2: []
    }
  ];

  const [terminalIndex, setTerminalIndex] = useState(0);

  // Rotate terminal content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalIndex((prev) => (prev + 1) % terminalScenarios.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const socialIconsArray = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-20 px-4">
      <div className="container-custom w-full max-w-5xl mx-auto relative z-10">
        <div className="w-full text-center">
          {/* Namaste + I am - Combined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <h2 className={`text-lg sm:text-xl md:text-2xl font-light ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Namaste 🙏 <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>I am</span>
            </h2>
          </motion.div>

          {/* Name - BIGGER */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 leading-tight"
          >
            <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Static Tagline with Blinking Cursor - BIGGER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-mono ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Building AI products that matter
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Fun Terminal Window - Dynamic Content - BIGGER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`w-full max-w-2xl mx-auto mb-6 font-mono text-left ${
              theme === 'dark' 
                ? 'bg-gray-900/60 border border-green-500/30' 
                : 'bg-gray-100/90 border border-green-600/30'
            } rounded-lg p-4 backdrop-blur-sm shadow-xl`}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700/30">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className={`ml-2 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                {personalInfo.name.toLowerCase().split(' ')[0]}@portfolio:~$
              </span>
            </div>
            
            {/* Terminal Commands - Dynamic and Rotating - BIGGER TEXT */}
            <motion.div
              key={terminalIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`space-y-1 text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}
            >
              {/* First Command */}
              <div>
                <span className="text-purple-400">$</span> {terminalScenarios[terminalIndex].command}
              </div>
              
              {/* First Command Output */}
              {terminalScenarios[terminalIndex].output.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`pl-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} break-words leading-relaxed`}
                >
                  {line}
                </motion.div>
              ))}

              {/* Second Command (if exists) */}
              {terminalScenarios[terminalIndex].command2 && (
                <>
                  <div className="pt-0.5">
                    <span className="text-purple-400">$</span> {terminalScenarios[terminalIndex].command2}
                  </div>

                  {terminalScenarios[terminalIndex].output2.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                      className={`pl-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <span className="text-yellow-400">{item.icon}</span> {item.label} <span className="text-blue-400">{item.value}</span>
                      {item.value === "your_company_here" && (
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className={theme === 'dark' ? 'text-green-400' : 'text-green-700'}
                        >
                          _
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>

          {/* CTAs - BIGGER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-5"
          >
            <a
              href="#projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white rounded-full overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
            </a>
            
            <a
              href="#contact"
              className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full border-2 hover:scale-105 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600/10'
              }`}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Download Resume Button - BIGGER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-5"
          >
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border hover:scale-105 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-green-500/50 text-green-400 hover:bg-green-500/10'
                  : 'border-green-600/50 text-green-600 hover:bg-green-600/10'
              }`}
            >
              <Icon icon={FaDownload} size={16} className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links - BIGGER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            {socialIconsArray.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white'
                    : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-600 hover:text-gray-900'
                } backdrop-blur-sm`}
                aria-label={social.label}
              >
                <Icon icon={social.icon} size={20} className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator - Very Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`cursor-pointer ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon icon={FaArrowDown} size={20} className="sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
