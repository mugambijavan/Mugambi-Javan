import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ProjectItem from './ProjectItem';

// Import all your project images
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

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/javan-mugambi-2351a81b0/', color: 'hover:text-[#0077b5]' },
    { icon: <FaGithub />, href: 'https://github.com/mugambijavan', color: 'hover:text-[#333]' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/+254727761646', color: 'hover:text-[#25D366]' },
    { icon: <AiOutlineMail />, href: 'mailto:mugambijavan@gmail.com', color: 'hover:text-[#EA4335]' },
    { icon: <FaTwitter />, href: 'https://twitter.com/mugambi_javan', color: 'hover:text-[#1DA1F2]' },
    { icon: <FaTelegram />, href: 'https://t.me/KamiriJavan', color: 'hover:text-[#0088cc]' }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id='projects' className='w-full py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <p className='text-lg font-semibold text-[#5651e5] tracking-widest uppercase mb-3'>
            My Work
          </p>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Featured Projects
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Elevating user experiences through responsive web development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectItem
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-sm py-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Let's Connect</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`p-3 rounded-full bg-gray-100 ${link.color} transition-colors text-gray-700`}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              © {new Date().getFullYear()} Mugambi Javan. All rights reserved.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mb-6">I'm not just a Dev</h3>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Projects;