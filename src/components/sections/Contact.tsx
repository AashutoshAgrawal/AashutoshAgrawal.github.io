import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { contactData, personalInfo, socialLinks } from '../../constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';
import { emailConfig } from '../../config/emailjs';
import Icon from '../common/Icon';

const Contact: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init(emailConfig.publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: personalInfo.name, // Your name as the recipient
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
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
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>{contactData.title}</span>
            </h2>
            <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{contactData.subtitle}</p>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
              {contactData.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className={`${theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'} rounded-2xl p-8`}>
                <h3 className={`text-2xl font-display font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-colors group ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                      <Icon icon={FaEnvelope} size={20} />
                    </div>
                    <div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                      <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{personalInfo.email}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${personalInfo.phone}`}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-colors group ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                      <Icon icon={FaPhone} size={20} />
                    </div>
                    <div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                      <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{personalInfo.phone}</p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-lg group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400">
                      <Icon icon={FaMapMarkerAlt} size={20} />
                    </div>
                    <div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                      <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(socialLinks).map(([platform, link]) => (
                    <motion.a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glass-effect rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all capitalize"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-display font-semibold text-white mb-6">
                  Send Me a Message
                </h3>

                <div className="space-y-6">
                  {contactData.formFields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-gray-400 text-sm mb-2">
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={field.rows}
                          className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        />
                      )}
                    </div>
                  ))}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Icon icon={FaPaperPlane} />
                        <span>{contactData.ctaText}</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
