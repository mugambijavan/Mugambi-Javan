import { motion } from 'framer-motion';
import React from 'react';
import { FaBrain, FaCode, FaRobot, FaServer, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const expertise = [
    { icon: <FaCode className="text-3xl text-cyan-400" />, title: 'Full-Stack Development', desc: 'End-to-end solutions with modern web technologies' },
    { icon: <FaBrain className="text-3xl text-violet-400" />, title: 'AI & Machine Learning', desc: 'NLP and computer vision for intelligent solutions' },
    { icon: <FaRobot className="text-3xl text-green-400" />, title: 'Intelligent Automation', desc: 'Adaptive systems that learn over time' },
    { icon: <FaServer className="text-3xl text-orange-400" />, title: 'Scalable Architecture', desc: 'Systems that grow with your business' },
  ];

  return (
    <section id='about' className='w-full py-28 bg-black text-white relative overflow-hidden'>
      {/* Animated background circles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full opacity-20 blur-3xl bg-gradient-to-r from-blue-500 to-purple-500'
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: 0.1 }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-5xl font-bold text-white mb-4'
          >
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Me</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8'
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className='text-xl text-gray-300 max-w-2xl mx-auto'
          >
            Crafting digital experiences that blend innovation, efficiency, and user delight
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700'
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className='text-3xl font-bold text-white mb-6'
              >
                My Mission
              </motion.h3>

              <motion.p 
                className='text-lg text-gray-300 mb-8 leading-relaxed'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                To create products and services that consistently <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>delight customers</span> and solve real-world problems through innovative technology.
              </motion.p>

              <motion.div
                className='mb-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className='text-xl font-semibold text-white mb-4'>My Expertise</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      className='bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition'
                    >
                      <div className='flex items-start space-x-4'>
                        <div className='p-3 bg-gray-700 rounded-lg'>
                          {item.icon}
                        </div>
                        <div>
                          <h5 className='font-bold text-white'>{item.title}</h5>
                          <p className='text-gray-400 text-sm mt-1'>{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                className='flex flex-wrap gap-4'
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='/resume'
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  View Resume <FaArrowRight />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='/#contact'
                  className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700'>
              <div className='absolute inset-0 bg-black/40 z-10' />
              <div className='absolute inset-0 flex items-center justify-center text-gray-500 z-20'>
                Profile Image
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg z-30'
              >
                <span className='font-bold'>Full-Stack Engineer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
