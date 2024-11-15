import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import exquisitetastesImg from '../public/assets/projects/exquisite.png';
import insightImg from '../public/assets/projects/insight.png'
import blogImg from '../public/assets/projects/blog.png'
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
import ProjectItem from './ProjectItem';

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
            tech='React JS'
          />
          <ProjectItem
            title='Insight WebApp'
            backgroundImg={insightImg}
            projectUrl='/insight'

          />
          
          <ProjectItem
            title='Blog Website'
            backgroundImg={blogImg}
            projectUrl='/blog'
          />

          <ProjectItem
            title='BhakitahTech Website'
            backgroundImg={techImg}
            projectUrl='/bhakitahtech'
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
