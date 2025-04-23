import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/assets/IMG_1406.JPG';

const About = () => {
  return (
    <section id='about' className='w-full py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='md:grid grid-cols-1 lg:grid-cols-3 gap-12 items-center'
        >
          {/* Image Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='w-full h-auto shadow-lg shadow-gray-300 rounded-xl overflow-hidden mb-8 lg:mb-0 order-2 lg:order-1'
          >
            <Image 
              src={AboutImg} 
              alt='Mugambi Javan' 
              className='w-full h-full object-cover'
              width={500}
              height={600}
              priority
            />
          </motion.div>

          {/* Content Section */}
          <div className='col-span-2 order-1 lg:order-2'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-white shadow-lg shadow-gray-300 rounded-xl p-8'
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                About <span className='text-[#5651e5]'>Me</span>
              </h2>
              
              <motion.p 
                className='text-xl text-gray-600 mb-6 leading-relaxed'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                My mission is to create products and services that consistently <span className='font-semibold text-[#5651e5]'>delight customers</span> and solve real-world problems.
              </motion.p>

              <motion.div
                className='prose prose-lg text-gray-600 mb-8'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className='mb-4'>
                  I'm a <span className='font-semibold'>Full-Stack Software Engineer</span> passionate about crafting user-focused, efficient, and innovative solutions. My expertise spans the entire development stack from front-end (HTML, CSS, React, Next.js) to back-end systems (Ruby on Rails, SQL).
                </p>
                <p className='mb-4'>
                  With certification in AI, I specialize in <span className='font-semibold'>machine learning, natural language processing, and computer vision</span>, leveraging these skills to build impactful, intelligent solutions.
                </p>
                <p>
                  Proficient in Git and GitHub, I ensure streamlined, collaborative workflows. I value <span className='font-semibold'>clear communication, continuous learning, and exceeding expectations</span>, always striving to deliver high-quality results that drive growth and success.
                </p>
              </motion.div>

              {/* Badges/Embed Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className='mt-8'
              >
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>My Certifications</h3>
                <div className='w-full h-64 rounded-lg overflow-hidden shadow-md'>
                  <iframe
                    src='https://mugambijavan.github.io/badge/'
                    title='Certifications'
                    width='100%'
                    height='270px'
                    className='border-none'
                    loading='lazy'
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;