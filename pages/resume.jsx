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
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fireclint'
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
              Software Engineer <span className='px-1'>|</span> Full-Stack Web Development{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
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
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
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
          <p className='py-1 italic'>Web Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            I have successfully collaborated with cross-functional teams to develop and maintain responsive web applications using JavaScript, HTML, and CSS. 
            </li>
            <li>
            I take pride in my ability to implement new features and enhancements, ensuring high performance, scalability, and usability.
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
