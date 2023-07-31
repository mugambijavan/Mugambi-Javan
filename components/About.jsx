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
          <h2 className='py-4'>My goal is to build products and services that meet customer satisfaction</h2>
          <p className='py-2 text-gray-600'>
            I'm  a passionate and detail-oriented software
            engineer with over 3 years of experience. Proficient in JavaScript, TypeScript, HTML, 
            CSS, React.js, and Next.js, I'm driven by a relentless pursuit of excellence.
            From crafting clean code to collaborating with diverse teams, I'm committed to
            delivering innovative solutions that make a positive impact. I thrive on pushing boundaries and
            embracing new technologies, and I'm excited to share my journey of creating transformative applications.
            
          </p>
          <p className='py-2 text-gray-600'>
            Over the years, I've honed my skills in various programming languages, and I'm always excited to take on new 
            challenges in this dynamic field. Attention to detail is my superpower, and I thrive on writing clean and efficient
            code to deliver robust applications. Collaborating with diverse teams is where I shine, and I strongly believe in the power
            of teamwork to drive exceptional results. Embracing continuous learning, I stay at the forefront of emerging technologies, 
            ensuring that my work remains cutting-edge. I'm committed to making a positive impact through my software engineering journey, 
            and I can't wait to contribute my expertise to transformative projects that shape the future of technology. 
            Let's connect and explore the endless possibilities together!
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
