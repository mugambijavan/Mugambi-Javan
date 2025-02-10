import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import animatedwebsiteImg from '../public/assets/projects/animatedwebsite.png';
import exquisitetastesImg from '../public/assets/projects/exquisite.png';
import insightImg from '../public/assets/projects/insight.png'
import siteImg from '../public/assets/projects/bhakitahmultisite.png'
import techImg from '../public/assets/projects/bhakitahtech.png'
import cardImg from '../public/assets/projects/card.png'
import driveImg from '../public/assets/projects/driveconnect.png'
import notesImg from '../public/assets/projects/notes.png'
import ovalImg from '../public/assets/projects/oval.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
import quantumImg from '../public/assets/projects/quantum.png'
import sirikwaImg from '../public/assets/projects/sirikwa.png'
import stemImg from '../public/assets/projects/stem.png'
import airtimeImg from '../public/assets/projects/airtimesolutions.png'
import opensourceImg from '../public/assets/projects/opensource.jpg'
import realImg from '../public/assets/projects/realestate.png'
import simplewebImg from '../public/assets/projects/simpleweb.png'
import ProjectItem from './ProjectItem';
import { FaGithub,  FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp  } from 'react-icons/fa';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        
          <h2 className='py-4' >
            Projects
          </h2>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          "Elevating User Experiences through Responsive Web Development."
          </p>


        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Exquisite Tastes'
            backgroundImg={exquisitetastesImg}
            projectUrl='/exquisitetastes'
          />
          <ProjectItem
            title='Insight WebApp'
            backgroundImg={insightImg}
            projectUrl='/insight'
          />         
          <ProjectItem
            title='BhakitahTech Website'
            backgroundImg={techImg}
            projectUrl='/bhakitahtech'
          />
          <ProjectItem
            title='Airtime Solutions'
            backgroundImg={airtimeImg}
            projectUrl='/airtimesolutions'
          />
          <ProjectItem
            title='Open Source'
            backgroundImg={opensourceImg}
            projectUrl='/opensourceastro'
          />
          <ProjectItem
            title='BhakitahTech-Milti Website'
            backgroundImg={siteImg}
            projectUrl='/multisite'
          />
          <ProjectItem
            title='Card Website'
            backgroundImg={cardImg}
            projectUrl='/card'
          />
          <ProjectItem
            title='Sticker Notes Website'
            backgroundImg={notesImg}
            projectUrl='/notes'
          />
          <ProjectItem
            title='DriveConnect Website'
            backgroundImg={driveImg}
            projectUrl='/driveconnect'
          />
          <ProjectItem
            title='Sirikwa Website'
            backgroundImg={sirikwaImg}
            projectUrl='/sirikwa'
          />
          <ProjectItem
            title='STEM Website'
            backgroundImg={stemImg}
            projectUrl='/stemforlife'
          />
          <ProjectItem
            title='My Portfolio Website'
            backgroundImg={portfolioImg}
            projectUrl='/portfolio'
          />
          <ProjectItem
            title='Quantum Ventures Website'
            backgroundImg={quantumImg}
            projectUrl='/quantum'
          />
          <ProjectItem
            title='RealEstate Website'
            backgroundImg={realImg}
            projectUrl='/realestate'
          />
          <ProjectItem
            title='Animated Website'
            backgroundImg={animatedwebsiteImg}
            projectUrl='/animatedwebsite'
          />
          <ProjectItem
            title='Simple company Website'
            backgroundImg={simplewebImg}
            projectUrl='/simpleweb'
          />
        </div>
      </div>
      <footer className="mt-16 bg-white text-black py-8">
        <div className="max-w-[940px] mx-auto text-center">
          <div className="flex justify-center space-x-4 mt-4">
          <a
                href='https://www.linkedin.com/in/javan-mugambi-2351a81b0/'
                target='_blank'
                rel='noreferrer'
                className='text-black'
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href='https://github.com/mugambijavan'
                target='_blank'
                rel='noreferrer'
                className='text-black'
              >
                <FaGithub size={30} />
              </a>
              <a
                href='https://wa.me/+254727761646'
                target='_blank'
                rel='noreferrer'
                className='text-black'
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href='mailto:mugambijavan@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='text-black'
              >
                <AiOutlineMail size={30} />
              </a>
              <a
                href='https://twitter.com/mugambi_javan'
                target='_blank'
                rel='noreferrer'
                className='text-black'
              >
                <FaTwitter size={30} />
              </a>
              <a
                href='https://t.me/KamiriJavan'
                target='_blank'
                rel='noreferrer'
                className='text-black'
              >
                <FaTelegram size={30} />
              </a>

          </div>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Mugambi Javan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
