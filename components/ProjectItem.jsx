import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="relative h-full w-full overflow-hidden rounded-xl shadow-lg shadow-gray-300 group"
    >
      {/* Project Image */}
      <div className="relative h-64 w-full">
        <Image
          src={backgroundImg}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#5651e5]/90 to-[#709dff]/90 p-4 text-center"
      >
        <motion.h3
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-2xl font-bold text-white"
        >
          {title}
        </motion.h3>

        <Link href={projectUrl} passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-lg bg-white px-6 py-2 text-lg font-semibold text-[#5651e5] shadow-md transition-all hover:bg-gray-100"
          >
            View Project
          </motion.a>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItem;