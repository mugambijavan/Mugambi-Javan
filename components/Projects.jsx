import { motion } from 'framer-motion';
import React from 'react';
import ProjectItem from './ProjectItem';

// import images...
import animatedwebsiteImg from '../public/assets/projects/animatedwebsite.png';
import exquisitetastesImg from '../public/assets/projects/exquisite.png';
import insightImg from '../public/assets/projects/insight.png';
import siteImg from '../public/assets/projects/bhakitahmultisite.png';
import techImg from '../public/assets/projects/bhakitahtech.png';
import cardImg from '../public/assets/projects/card.png';
import driveImg from '../public/assets/projects/driveconnect.png';
import notesImg from '../public/assets/projects/notes.png';
import ovalImg from '../public/assets/projects/oval.png';
import portfolioImg from '../public/assets/projects/portfolio.png';
import quantumImg from '../public/assets/projects/quantum.png';
import sirikwaImg from '../public/assets/projects/sirikwa.png';
import stemImg from '../public/assets/projects/stem.png';
import airtimeImg from '../public/assets/projects/airtimesolutions.png';
import opensourceImg from '../public/assets/projects/opensource.jpg';
import realImg from '../public/assets/projects/realestate.png';
import simplewebImg from '../public/assets/projects/simpleweb.png';
import doctorconnectImg from '../public/assets/projects/doctorconnect.png';

const Projects = () => {
  const projects = [
    { title: 'Exquisite Tastes', backgroundImg: exquisitetastesImg, projectUrl: '/exquisitetastes' },
    { title: 'Insight WebApp', backgroundImg: insightImg, projectUrl: '/insight' },
    { title: 'BhakitahTech Website', backgroundImg: techImg, projectUrl: '/bhakitahtech' },
    { title: 'Airtime Solutions', backgroundImg: airtimeImg, projectUrl: '/airtimesolutions' },
    { title: 'Open Source', backgroundImg: opensourceImg, projectUrl: '/opensourceastro' },
    { title: 'BhakitahTech-Multi Website', backgroundImg: siteImg, projectUrl: '/multisite' },
    { title: 'Card Website', backgroundImg: cardImg, projectUrl: '/card' },
    { title: 'Sticker Notes Website', backgroundImg: notesImg, projectUrl: '/notes' },
    { title: 'DriveConnect Website', backgroundImg: driveImg, projectUrl: '/driveconnect' },
    { title: 'Sirikwa Website', backgroundImg: sirikwaImg, projectUrl: '/sirikwa' },
    { title: 'Doctor Connect Website', backgroundImg: doctorconnectImg, projectUrl: '/doctorconnect' },
    { title: 'STEM Website', backgroundImg: stemImg, projectUrl: '/stemforlife' },
    { title: 'My Portfolio Website', backgroundImg: portfolioImg, projectUrl: '/portfolio' },
    { title: 'Quantum Ventures Website', backgroundImg: quantumImg, projectUrl: '/quantum' },
    { title: 'RealEstate Website', backgroundImg: realImg, projectUrl: '/realestate' },
    { title: 'Animated Website', backgroundImg: animatedwebsiteImg, projectUrl: '/animatedwebsite' },
    { title: 'Simple company Website', backgroundImg: simplewebImg, projectUrl: '/simpleweb' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <section id='projects' className='w-full py-24 bg-gray-100'>
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
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Elevating user experiences through responsive web development.
          </p>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={container}>
              <ProjectItem {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
