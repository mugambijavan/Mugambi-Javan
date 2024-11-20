import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/IMG_1406.JPG';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
            <h2 className='py-4' style={{ fontSize: '17px' }}>My objective is to create products and services that consistently satisfy customers.</h2>
          <p className='py-2 text-gray-600'>
          I am a Software Engineer passionate about creating user-focused, efficient, and innovative solutions. My expertise spans front-end development (HTML, CSS, React, Next.js) and back-end systems (Ruby on Rails, SQL), coupled with strong project management skills for delivering successful software projects.  
          With certification in AI, I specialize in machine learning, natural language processing, and computer vision, leveraging these skills to build impactful, intelligent solutions. Proficient in Git and GitHub, I ensure streamlined, collaborative workflows. I value clear communication, continuous learning, and exceeding expectations, always striving to deliver high-quality results that drive growth and success.
          </p>
              <iframe
              src='https://mugambijavan.github.io/badge/'
              title='Embedded Website'
              width='100%'
              height='270px'  // You can adjust the height as needed
              frameBorder='0'
              allowFullScreen
            ></iframe>
            </div>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
    
  );
};

export default About;
