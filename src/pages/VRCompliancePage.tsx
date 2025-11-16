import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { FaBookmark, FaVrCardboard, FaBullseye, FaChartLine, FaLightbulb, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeToggle from '../components/common/ThemeToggle';
import Icon from '../components/common/Icon';

const VRCompliancePage = () => {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <Navbar />
      <ThemeToggle />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-32">
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
      </div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`py-20 px-6 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 to-white'}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-100'}`}>
              <Icon icon={FaBookmark} className={`text-3xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 text-sm">
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>May, 2018</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Building Effective Compliance Training with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VR
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl mb-8 max-w-4xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            At SISU VR, I worked to make their compliance training product more effective. Through usability tests and competitive analysis, I identified, tested, and analyzed the highest impact feature changes for their product.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} flex items-center justify-center`}>
              <span className="text-2xl">💼</span>
            </div>
            <div>
              <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Aashutosh Agrawal
              </div>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Product Manager
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction */}
      <section className={`py-16 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            As a Software Engineering Intern at SISU VR, I helped the team reinvent the mundane process of compliance training with virtual reality. My main projects helped make the product more effective. I aim to increase the amount learned after using the product and to improve end-users compliance-based behaviours after using the product.
          </motion.p>
        </motion.div>
      </section>

      {/* What is SISU VR */}
      <section className={`py-16 px-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Icon icon={FaVrCardboard} className={`text-4xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  What is SISU VR?
                </h2>
              </div>
              <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                SISU VR provides an immersive VR experience for prevention training. While other companies use lengthy, monotonous compliance training, SISU VR's product uses virtual reality to make this a more immersive and educative experience.
              </p>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                They deliver compliance and prevention training with the competitive edge of Virtual Reality with immersive, realistic situations.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white'} shadow-xl flex items-center justify-center`}>
              <img
                src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e161df4c1d6acd2952207_SISU%20LOGO.jpeg"
                alt="SISU VR Logo"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`mt-12 p-8 rounded-2xl ${theme === 'dark' ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'}`}
          >
            <p className={`text-xl italic ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
              "My manager wanted me to help make the product more effective. But what did this mean?"
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Goal */}
      <section className={`py-16 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <Icon icon={FaBullseye} className={`text-4xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              What's the Product Goal?
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            My manager wanted my help to make the product more effective but what did this mean? Using my psychology background, I decided to frame effectiveness as "how much does a user learn from using the product?" and "how do they react in unfamiliar problem situations?"
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            I created and ran tests on users to see how much information they were retaining and how well they reacted in new situations. I used this data to establish a benchmark for future iterations of the product.
          </motion.p>

          <motion.div variants={itemVariants} className="w-full">
            <img
              src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e0f8873c7403ed09f5085_WLERfD8aOv4Dxcrep3RxX9V6flhQczP9YPzI1s6GVJ1NGILAjN3BvEQU-Ho6AagU9cpN4lDEx9zz1uIm6Q6dMb7ptAJzMfqOQuvml3deyFOaC1-NTEXIHnDlLupqsBZ1L23UvYaa.png"
              alt="User Journey Analysis"
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className={`text-center mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              User Journey Analysis
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Increasing Effectiveness */}
      <section className={`py-16 px-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <Icon icon={FaLightbulb} className={`text-4xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              So how do we increase product effectiveness?
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`mb-8 p-6 rounded-2xl ${theme === 'dark' ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'}`}
          >
            <p className={`text-lg italic ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
              I did this mainly with competitor analysis and researching market experts.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Now that we had a shared vision for product success, I identified, tested, and analyzed the{' '}
            <strong>highest impact feature changes</strong>. I did this mainly through competitive analysis and research of market leaders.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Competitive Analysis
              </h3>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I found competitors and researched their products, sales, and marketing strategies. Many competitors placed an emphasis on the content they were creating, so I suggested a focus on more learning content from SISU VR.
              </p>
            </div>

            <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Market Research
              </h3>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I researched what market experts wanted by going through research on prevention training and translating it to implications for SISU VR's product. This led to creating intro videos explaining Conflict Management and gender constructs.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <img
              src="https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e0fb16750820d9683a028_Lxnv4QDpqgIv6b0ArgItcrr1LsmD6GRHK_Whbvf2B8ceNZCSCI6Ykw4Qh0FzQo7oFheXVrIP7Vty5he_s_2BQPjWz1gj1t1IkpZnLWxH6Y_UJ-SkQgxl_iCS5PY3UTxNWg4ucroj.png"
              alt="Presentation on Modern Training Research"
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className={`text-center mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Presentation on Modern Training Research
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Results */}
      <section className={`py-16 px-6 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 to-white'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <Icon icon={FaChartLine} className={`text-4xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Did these product changes work?
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`mb-12 p-8 rounded-2xl ${theme === 'dark' ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'}`}
          >
            <p className={`text-2xl italic text-center ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
              The product's effectiveness went up from{' '}
              <span className="font-bold text-3xl">42%</span> to{' '}
              <span className="font-bold text-3xl">94%</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white'} shadow-xl`}>
              <div className={`text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent`}>
                42%
              </div>
              <div className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Before Improvements
              </div>
            </div>

            <div className={`p-8 rounded-2xl text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white'} shadow-xl`}>
              <div className={`text-6xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}>
                94%
              </div>
              <div className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                After Improvements
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed mt-12 text-center max-w-4xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            In the last week of my internship, we were able to integrate several suggestions I created to increase the effectiveness of the product. To test this, I ran a simple A/B test where half the participants received an old version of the product and half received the new version with the product changes I had made.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed mt-6 text-center max-w-4xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            My changes in the product lead to users learning more from the software as well as being able to better react to unfamiliar problems in the workplace.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VRCompliancePage;
