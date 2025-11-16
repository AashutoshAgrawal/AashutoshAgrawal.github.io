import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import { galleryData } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Icon from '../common/Icon';

interface Photo {
  id: number;
  url: string;
  thumbnail: string;
  caption: string;
  category: string;
}

const Gallery: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { theme } = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ['all', ...Array.from(new Set(galleryData.photos.map(p => p.category)))];
  
  const filteredPhotos = selectedCategory === 'all' 
    ? galleryData.photos 
    : galleryData.photos.filter(p => p.category === selectedCategory);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    const index = filteredPhotos.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    
    setCurrentIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

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
      <section id="gallery" className="section-padding relative overflow-hidden">
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
                <span className={theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}>
                  {galleryData.title}
                </span>
              </h2>
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                {galleryData.subtitle}
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                        : theme === 'dark' 
                          ? 'glass-effect text-gray-300 hover:text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Photo Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  variants={itemVariants}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => openLightbox(photo)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Placeholder for actual image */}
                  <div className={`aspect-square ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-primary-500/20 to-secondary-500/20' 
                      : 'bg-gradient-to-br from-primary-200 to-secondary-200'
                  }`}>
                    {/* This would be replaced with actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className={`text-6xl ${theme === 'dark' ? 'text-white/20' : 'text-gray-400'}`}>
                        📷
                      </span>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{photo.caption}</p>
                      <p className="text-white/70 text-xs mt-1">{photo.category}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Icon icon={FaExpand} className="text-white" size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Alternative Carousel View */}
            <motion.div 
              variants={itemVariants}
              className={`mt-16 ${
                theme === 'dark' ? 'glass-effect' : 'bg-white shadow-xl border border-gray-200'
              } rounded-2xl p-8`}
            >
              <h3 className={`text-xl font-display font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Featured Moments
              </h3>
              
              {/* Horizontal Scrolling Carousel */}
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                  {galleryData.photos.slice(0, 5).map((photo) => (
                    <motion.div
                      key={photo.id}
                      className="flex-shrink-0 w-64 cursor-pointer"
                      onClick={() => openLightbox(photo)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`aspect-video rounded-lg overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-primary-500/20 to-secondary-500/20' 
                          : 'bg-gradient-to-br from-primary-200 to-secondary-200'
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <span className={`text-4xl ${theme === 'dark' ? 'text-white/20' : 'text-gray-400'}`}>
                            📷
                          </span>
                        </div>
                      </div>
                      <p className={`mt-2 text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {photo.caption}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <Icon icon={FaTimes} size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Icon icon={FaChevronLeft} size={20} />
              </button>
              <button
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Icon icon={FaChevronRight} size={20} />
              </button>

              {/* Image Container */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl">
                  {/* This would be replaced with actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl text-white/20">📷</span>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                  <p className="text-white text-lg font-medium">{selectedPhoto.caption}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedPhoto.category} • {currentIndex + 1} / {filteredPhotos.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;

