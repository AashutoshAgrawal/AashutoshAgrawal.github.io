import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble, FaHeart } from 'react-icons/fa';
import { footerData, socialLinks, navLinks, personalInfo } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from './Icon';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const socialIcons = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
    { icon: FaDribbble, href: socialLinks.dribbble, label: 'Dribbble' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t ${theme === 'dark' ? 'bg-dark-200/50 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              {/* Terminal-style initials box */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-gray-900/80 border-2 border-green-500/40' 
                  : 'bg-gray-100 border-2 border-green-600/40'
              } rounded-lg px-3 py-1.5 backdrop-blur-sm`}>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-mono font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                    AA
                  </span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}
                  >
                    _
                  </motion.span>
                </div>
              </div>
              <span className={`font-mono text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {personalInfo.name.toLowerCase().split(' ')[0]}@portfolio:<span className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}>/contact</span>$
              </span>
            </div>
            <p className={`text-sm max-w-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Building AI-powered products that create measurable impact.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`transition-colors text-sm text-left ${theme === 'dark' ? 'text-gray-400 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Connect With Me</h3>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-effect rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center"
            >
              {footerData.copyright} • Made with{' '}
              <Icon icon={FaHeart} className="text-red-500 mx-1 animate-pulse inline-block" /> using React & Tailwind
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {footerData.quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
