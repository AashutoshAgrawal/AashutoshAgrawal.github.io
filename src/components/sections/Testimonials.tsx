import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { testimonialsData } from '../../constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../common/Icon';

const Testimonials: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = testimonialsData.testimonials;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  // Auto-play: Move to next testimonial every 10 seconds
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      paginate(1);
    }, 10000); // 10 seconds

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex, testimonials.length]); // Re-run when currentIndex changes

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
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4">
              <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                {testimonialsData.title}
              </span>
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {testimonialsData.subtitle}
            </p>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants} className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className={`${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700'
                      : 'bg-white shadow-2xl border border-gray-200'
                  } rounded-3xl p-8 md:p-12 relative`}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-8 left-8 opacity-10">
                    <Icon icon={FaQuoteLeft} size={80} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote */}
                    <blockquote
                      className={`text-xl md:text-2xl leading-relaxed mb-8 text-center italic ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-500/30"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&size=128&background=random`;
                          }}
                        />
                        <div>
                          <h4
                            className={`font-bold text-lg ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {testimonials[currentIndex].name}
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-sm text-primary-500 font-semibold">
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Subtle Verification Link */}
                      <a
                        href={testimonials[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs opacity-60 hover:opacity-100 transition-opacity ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-gray-300'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Icon icon={FaExternalLinkAlt} size={10} />
                        <span>{testimonials[currentIndex].linkText}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(-1)}
                  className={`p-3 rounded-full ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } transition-colors`}
                  aria-label="Previous testimonial"
                >
                  <Icon icon={FaChevronLeft} size={20} />
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-primary-500 w-8'
                          : theme === 'dark'
                          ? 'bg-gray-600 hover:bg-gray-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(1)}
                  className={`p-3 rounded-full ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } transition-colors`}
                  aria-label="Next testimonial"
                >
                  <Icon icon={FaChevronRight} size={20} />
                </motion.button>
              </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
