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
              Software Engineer <span className='px-1'>|</span> Full-Stack Web Developer{' '}
            </p>
          </div>
          
        </div>
        <p>
        I’m an intermediate professional in the dynamic software development industry, having diligently honed my skills and expertise to become a versatile and forward-thinking software developer. My journey in this field has led me to master a diverse array of technologies and tools, enabling me to make significant contributions to a wide range of successful software projects.
        My foundation in front-end development is robust. Proficient in HTML, CSS, and SCSS, I have meticulously crafted visually stunning and responsive user interfaces, consistently enhancing the overall user experience. My mastery of JavaScript, React.js, TypeScript, Next.js, GraphCMS, and Sanity has empowered me to build highly interactive and dynamic web applications, captivating and engaging users.
        Additionally, I've developed a strong foundation in back-end development, utilizing technologies such as Node.js, MongoDB, Ruby and Ruby on Rails, along with SQL for managing and querying relational databases. These skills complement my ability to build robust web applications, ensuring the seamless functionality of the software I create.
        My skill set has been expanded to include mobile app development, where I've embraced Flutter and Dart to create cross-platform applications. This diversification underscores my ability to provide versatile solutions that aptly meet the ever-evolving demands of the software industry. <br />
        In the domain of version control and collaborative development, I am well-versed in using Git and GitHub, ensuring that my work is not only well-organized but also impeccably documented. This seamless integration with cross-functional teams has become a cornerstone of my work. My experience extends to deploying projects effortlessly on platforms such as Netlify and Vercel, consistently yielding highly scalable and high-performance web applications.
        Moreover, I possess ethical hacking skills, serving as a white hat in the cybersecurity domain. This expertise allows me to proactively identify and address security vulnerabilities in software systems, ensuring the robustness of applications and safeguarding sensitive information.
        Throughout my career, I have remained unwavering in my commitment to best practices and agile methodologies. This steadfast dedication facilitates efficient communication, precise project management, and a demonstrated track record of consistently meeting project milestones. Client satisfaction remains a top priority, and I take immense pride in consistently exceeding their expectations. <br />
        As a software developer, my true passion lies in delivering elegant and high-quality software solutions that effectively address complex challenges and consistently elevate user experiences. I am eager to leverage my skills and experiences, including ethical hacking, to contribute effectively to your team, further propelling your organization's growth and success to new heights. My commitment to continuous advancement in the field of software engineering ensures that I remain at the forefront of industry developments, ready to tackle the challenges of tomorrow.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='px-2'></span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React.JS
            <span className='px-2'>|</span>Next.JS  <br />
            <span className='px-2'></span>SQL
            <span className='px-2'>|</span>Figma
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI <br />
            <span className='px-2'></span> Ethical Hacking 
            <span className='px-2'>|</span> Node.JS
            <span className='px-2'>|</span> Vue.JS
            <span className='px-2'>|</span> Express
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span> <br />
            <span className='px-2'></span>Amazon Web Services Cloud
            Practitioner
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
            In my capacity as a collaborative developer, I've contributed significantly to the realization of a sophisticated corporate website for a leading dairy services company. Through seamless teamwork, I harnessed my expertise in JavaScript, HTML, and CSS to craft a responsive website that embodies the company's values and services. 
            </li>
            <li>
            My role extended to the integration of innovative features, resulting in a high-performance platform that communicates professionalism, scalability, and an exceptional user experience.
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
            My involvement in the creation of a corporate website for a cutting-edge technology solutions provider reflects my commitment to excellence. By synergizing with cross-functional teams, I skillfully utilized JavaScript, HTML, and CSS to develop a responsive web application that showcases the company's prowess and offerings. 
            </li>
            <li>
            My contributions encompassed the implementation of advanced functionalities, culminating in a website that encapsulates optimal performance, adaptability, and user-centric design.
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
