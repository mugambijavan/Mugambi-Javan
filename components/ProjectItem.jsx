// Add to your ProjectItem.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt={title}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>View Project</p>
        <Link href={projectUrl}>
          <motion.div 
            className='text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Info
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;