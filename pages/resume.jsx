 import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Mugambi Javan</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Mugambi Javan Nyaga</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/javan-mugambi-2351a81b0/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/mugambijavan'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software Engineer{' '}
            </p>
          </div>
          
        </div>
          <p>
              I'm a full-stack software engineer with expertise across the entire development lifecycle,
           I excel in crafting high-quality applications from concept to completion.  My skillset spans front-end 
           development with JavaScript, React.js, TypeScript, and Next.js, while for mobile apps I leverage Flutter and 
           Dart. Back-end proficiency lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I'm comfortable 
           with Ruby and Ruby on Rails as well.  Beyond technical expertise, I'm a strong advocate for Agile methodologies, 
           ensuring efficient workflows and clear communication to deliver projects on time. I excel at prioritizing tasks, 
           creating realistic estimates, and managing project scope to meet client expectations.  Furthermore, I foster a collaborative
           environment, leveraging strong communication skills to keep teams aligned and facilitate productive discussions. With Git, 
           GitHub, Appwrite, and Sentry in my toolbox, I ensure seamless version control and optimize backend functionality for peak 
           application performance.  My focus lies on clean, modular code that prioritizes maintainability and scalability, ensuring long-term project success.
          </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Tech-Stack</h5>
          <p className='py-2'>
            <span className='px-2'></span> HTML
            <span className='px-2'>|</span>Dart
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React.JS
            <span className='px-2'>|</span>Next.JS 
            <span className='px-2'></span>SQL<br />
            <span className='px-2'>|</span>Figma 
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI 
            <span className='px-2'></span> Ethical Hacking <br />
            <span className='px-2'>|</span> Project Management
            <span className='px-2'>|</span> Node.JS
            <span className='px-2'>|</span> Vue.JS
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> Express
          </p>
          <p className='py-2'>
            <span className='font-bold'>Cloud Services</span> <br />
            <span className='px-2'></span>Amazon Web Services Cloud
            Practitioner <br /> Azure Cloud
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Certification
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Moringa School
            </span>
            <span className='px-2'>|</span>Nairobi, Kenya
          </p>
          <p className='py-1 italic'>Software Engineering </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            I embarked on a transformative journey in software engineering at Moringa School, 
            where I obtained a professional certificate. This immersive experience equipped me with 
            a comprehensive skill set, encompassing front-end and back-end development, database management, 
            and agile methodologies. Through hands-on projects and real-world challenges, I honed my abilities 
            in JavaScript, HTML, CSS, React.js, Node.js, Next.js and SQL.
            </li> 
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Cisco Networking Academy
            </span>
            
          </p>
          <p className='py-1 italic'>Ethical Hacking </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            At Networking CISCO Academy, I undertook and successfully completed the Ethical Hacker course. 
            This immersive experience equipped me with advanced skills in ethical hacking and penetration 
            testing. Proficiency in various aspects of ethical hacking, from methodological approaches to 
            exploiting wired and wireless network vulnerabilities, showcases my commitment to ensuring robust 
            cybersecurity practices. Achieving a student-level credential underlines my dedication to contributing 
            to a safer digital world through ethical hacking practices.
            </li> 
          </ul>
        </div>
       <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            LinkedIn learning
            </span>
            
          </p>
          <p className='py-1 italic'>Project Management </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Completed "Technical Product Management" and "Product Management First Steps" courses to strengthen my foundation in technical aspects, core principles, and product lifecycles. This equips me to contribute to innovative, user-centric product development.
            </li> 
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Andela Learning React Program
            </span>
            
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              I completed the Andela Learning React Program, achieving certification as a React Developer. This program 
              deepened my expertise in React.js, enhancing my ability to create dynamic and responsive user interfaces. 
              The certification reflects my commitment to staying current with emerging technologies and best practices in 
              front-end development.
            </li> 
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            University of Nairobi
            </span>
            
          </p>
          <p className='py-1 italic'>Bsc Maths</p>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>Sirikwa Dairies LTD, Kenya</span>
        </p>
        <a
          href="https://sirikwadairies.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Visit their website
        </a>

          <p className='py-1 italic'>Software Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Collaboratively designed and developed a feature-rich, responsive corporate website for a leading dairy services company. Leveraged expertise in JavaScript, HTML, and CSS to deliver a user-friendly platform that effectively communicates their values and services. Prioritized performance and scalability to ensure a seamless user experience across devices.
            </li>
            
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>M-FAMA Technologies Holding</span>
            
          </p>
          <a
          href="https://mfama.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Visit their website
        </a>
          <p className='py-1 italic'>Software Developer</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Demonstrated commitment to high-quality software by crafting a responsive web application for a cutting-edge technology solutions provider. Collaborated effectively with cross-functional teams to utilize JavaScript, HTML, and CSS. Implemented advanced functionalities to create a user-centric experience that showcases the company's technical prowess and service offerings
            </li>
            
          </ul>
        </div>

        <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>Lux-Lounge</span>
        </p>
        <a
          href="https://luxlounge.co.ke.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Visit their website
        </a>

          <p className='py-1 italic'>Software Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed a user-friendly and responsive hotel website for Lux-Lounge, leveraging JavaScript, HTML, and CSS. Focused on creating a seamless booking experience and showcasing the hotel's amenities and luxurious accommodations. Optimized the website for mobile devices to ensure accessibility for potential guests on the go.
            </li>
            
          </ul>
        </div>

        <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>Kimori Foundation, Kenya</span>
        </p>
        <a
          href="https://kimorifoundation.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Visit their website
        </a>

          <p className='py-1 italic'>Software Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Designed and developed a sophisticated website for the Kimori Foundation in Kenya. Employed expertise in front-end technologies (JavaScript, HTML, CSS) to create a visually appealing and responsive platform. Focused on user experience to foster engagement with the foundation's mission.
            </li>
            
          </ul>
        </div>

        <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>Kimmj Tours ANd Travel, Kenya</span>
        </p>
        <a
          href="https://kimmj.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Visit their website
        </a>

          <p className='py-1 italic'>Software Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Enhanced user experience and conversion rates for Kimmj Tours and Travel by developing a user-friendly and visually appealing website. Utilized JavaScript, HTML, and CSS to create a dynamic and interactive platform that streamlines the booking process and attracts potential customers.
            </li>
            
          </ul>
        </div>

       <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>STEM for Life Kenya, Kenya</span>
        </p>
        <a
          href="https://stem-flk.vercel.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Visit their website
        </a>

          <p className='py-1 italic'>Software Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Leveraged web development skills (JavaScript, HTML, CSS) to build a responsive and informative website for STEM for Life Kenya. Emphasized user experience and clarity to promote the organization's goals and initiatives.
            </li>
            
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Career Goals
        </h5>
        {/* Experience */}
        <div className='py-6'>
          
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            My ultimate goal is to create software applications that not only meet customer satisfaction but also make a meaningful difference in people's lives by addressing real-world problems and enhancing their experiences.
            </li>
            <li>
            I aspire to contribute to open-source projects and collaborate with like-minded professionals to give back to the software engineering community and make a positive impact on a global scale.
            </li>
            <li>
            I am committed to adopting best practices in software development, including agile methodologies, test-driven development, and code reviews, to ensure the delivery of high-quality and reliable software products.
            </li>
            <li>
            My career objective includes taking up leadership roles, where I can mentor and guide junior developers, contributing to the growth of the software engineering community.
            </li>
            <li>
            Building on my current skill set, I seek to become proficient in new programming languages and frameworks, broadening my ability to tackle a wide range of development challenges.
            </li>
            <li>
            I aspire to continuously expand my technical expertise and stay updated with emerging technologies, enabling me to create cutting-edge and scalable software solutions.
            </li>           
          </ul>
        </div>

      </div>
    </>
  );
};

export default resume;
