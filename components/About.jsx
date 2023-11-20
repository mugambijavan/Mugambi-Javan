import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4' style={{ fontSize: '17px' }}>My objective is to create products and services that consistently satisfy customers.</h2>
          <p className='py-2 text-gray-600'>
          Boasting years of professional experience in the dynamic software development industry, I have cultivated a versatile skill set. 
          Proficiency in front-end technologies like HTML, CSS, SCSS, JavaScript, React.js, TypeScript, Next.js, GraphCMS, and Sanity has 
          enabled me to craft visually stunning and responsive user interfaces. Additionally, my foundation in back-end development, 
          including Ruby, Ruby on Rails, and SQL, ensures the robust functionality of web applications.I have diversified into mobile 
          app development using Flutter and Dart, further enhancing my ability to provide versatile solutions to meet the ever-evolving demands of 
          the software industry.   
          </p>
          <p className='py-2 text-gray-600'>
            In the realm of version control and collaborative development, I am well-versed in Git and GitHub, maintaining organized and 
            impeccably documented work. I have a proven track record of project management and meeting milestones, all while prioritizing 
            client satisfaction.As a software developer, I am dedicated to delivering elegant and high-quality software solutions, consistently 
            enhancing user experiences. I am eager to contribute my skills and experiences to your team, furthering your organization's growth and 
            success. My commitment to continuous advancement in software engineering ensures that I remain at the forefront of industry developments, 
            ready to tackle the challenges of tomorrow.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
