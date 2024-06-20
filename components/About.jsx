import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
            <h2 className='py-4' style={{ fontSize: '17px' }}>My objective is to create products and services that consistently satisfy customers.</h2>
          <p className='py-2 text-gray-600'>
            Software Engineer with a passion for building elegant and user-centric experiences. I bring a diverse skillset to the table, proficient in both front-end 
            (HTML, CSS, JavaScript frameworks like React & Next.js) and back-end development (Ruby on Rails, SQL). Additionally, I possess strong project management skills,
            adept at planning, organizing, and leading software development projects to successful completion. Version control with Git and a collaborative workflow using
            GitHub keep my projects organized and maintainable. Beyond technical expertise, I value clear communication and exceeding client expectations through a commitment 
            to high-quality software and continuous learning. I'm eager to contribute my skills and enthusiasm to your team, fostering growth and success.
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
