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
          Highly dedicated and effective web developer with over 3 years of expertise. 
          Bilingual, detail-oriented, and deadline-driven. Seeking a developer position 
          that leverages a strong understanding of technology and a background in marketing. 
          Experienced in managing teams and skilled in data marketing analysis and website 
          optimization. Excels at leading development projects in fast-paced, 
          customer-focused environments. Creative and skilled in UI/UX design to 
          enhance web-based technology.
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React.JS
            <span className='px-2'>|</span>Next.JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Figma
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
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
            <span className='font-bold'>STEM For Life Foundation Kenya</span>            
          </p>
          <a
          href="https://stemforlifekenya.org"
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
            Among my accomplishments, I spearheaded the development of a website for a reputable NGO. Collaborating seamlessly with the organization's team, I utilized my proficiency in JavaScript, HTML, and CSS to create a responsive and impactful web presence.
            </li>
            <li>
            By incorporating interactive elements and highlighting the NGO's mission, I ensured that the website effectively communicated its initiatives. This project showcases my ability to leverage technology to further noble causes and connect communities through a user-friendly and informative online platform.
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
