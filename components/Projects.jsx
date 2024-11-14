import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import exquisitetastesImg from '../public/assets/projects/exquisite.png';
import insightImg from '../public/assets/projects/insight.png'
import myverseImg from '../public/assets/projects/blog.png'
import blogImg from '../public/assets/projects/blog.png'
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
            tech='React JS'

          />
          <ProjectItem
            title='MyVerse WebApp'
            backgroundImg={myverseImg}
            projectUrl='/myverse'
            tech='React JS'

          />
          <ProjectItem
            title='Blog Website'
            backgroundImg={blogImg}
            projectUrl='/blog'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
