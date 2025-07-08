import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import ReactnativeImg from '../public/assets/skills/react-native.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Aws from '../public/assets/skills/aws.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Node from '../public/assets/skills/node.png';
import Typescript from '../public/assets/skills/typescript.png';
import Angular from '../public/assets/skills/angular.png';
import Flutter from '../public/assets/skills/flutter.png';
import Dart from '../public/assets/skills/dart.png';
import Python from '../public/assets/skills/python.png';
import Jira from '../public/assets/skills/jira.png';
import Appwrite from '../public/assets/skills/appwrite.png';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'JavaScript', icon: Javascript },
    { name: 'TypeScript', icon: Typescript },
    { name: 'React', icon: ReactImg },
    { name: 'React Native', icon: ReactnativeImg },
    { name: 'Next.js', icon: NextJS },
    { name: 'Angular', icon: Angular },
    { name: 'Tailwind', icon: Tailwind },
    { name: 'Node.js', icon: Node },
    { name: 'Python', icon: Python },
    { name: 'Flutter', icon: Flutter },
    { name: 'Dart', icon: Dart },
    { name: 'AWS', icon: Aws },
    { name: 'GitHub', icon: Github },
    { name: 'Jira', icon: Jira },
    { name: 'Appwrite', icon: Appwrite },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id='skills' className='w-full py-20 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <p className='text-lg font-semibold text-[#5651e5] tracking-widest uppercase mb-3'>
            Tech Stack
          </p>
          <h2 className='text-4xl font-bold text-white mb-4'>
            My Technical Expertise
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className='overflow-hidden py-8 relative'>
          {/* Fade effect edges */}
          <div className='absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-20' />
          <div className='absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-20' />

          <motion.div
            className='flex'
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className='flex-shrink-0 px-4'
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 10 
                  } 
                }}
              >
                <div className='bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center w-[200px] border border-gray-800'>
                  <div className='relative w-16 h-16 mb-4'>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      layout='fill'
                      objectFit='contain'
                      className='filter grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                  <h3 className='text-lg font-medium text-white'>{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;