import { motion } from 'framer-motion';
import React from 'react';
import ProjectItem from './ProjectItem';

// import images...
import animatedwebsiteImg from '../public/assets/projects/animatedwebsite.png';
import exquisitetastesImg from '../public/assets/projects/exquisite.png';
import cardImg from '../public/assets/projects/card.png';
import driveImg from '../public/assets/projects/driveconnect.png';
import sirikwaImg from '../public/assets/projects/sirikwa.png';
import stemImg from '../public/assets/projects/stem.png';
import opensourceImg from '../public/assets/projects/opensource.jpg';
import doctorconnectImg from '../public/assets/projects/doctorconnect.png';
import cekolImg from '../public/assets/projects/cekol.png';
import ceedImg from '../public/assets/projects/ceed.png';
import kamiliImg from '../public/assets/projects/kamili.png';

const Projects = () => {
  const projects = [
    { title: 'Exquisite Tastes', backgroundImg: exquisitetastesImg, projectUrl: '/exquisitetastes' },
    { title: 'Open Source', backgroundImg: opensourceImg, projectUrl: '/opensourceastro' },
    { title: 'Card Website', backgroundImg: cardImg, projectUrl: '/card' },
    { title: 'DriveConnect Website', backgroundImg: driveImg, projectUrl: '/driveconnect' },
    { title: 'Sirikwa Website', backgroundImg: sirikwaImg, projectUrl: '/sirikwa' },
    { title: 'Doctor Connect Website', backgroundImg: doctorconnectImg, projectUrl: '/doctorconnect' },
    { title: 'Cekol Engineering', backgroundImg: cekolImg, projectUrl: '/cekol' },
    { title: 'STEM Website', backgroundImg: stemImg, projectUrl: '/stemforlife' },
    { title: 'Ceed Golden Farm', backgroundImg: ceedImg, projectUrl: '/ceed' },
    { title: 'kamili Mental Health Clinic', backgroundImg: kamiliImg, projectUrl: '/kamili' },
    { title: 'Animated Website', backgroundImg: animatedwebsiteImg, projectUrl: '/animatedwebsite' },
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <section id='projects' className='w-full py-24 bg-black'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <p className='text-lg font-bold text-[#5651e5] uppercase tracking-wider'>
            My Work
          </p>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Elevating user experiences through responsive web development.
          </p>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={container}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectItem {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;