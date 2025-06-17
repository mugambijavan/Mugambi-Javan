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
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
    >
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={backgroundImg}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 drop-shadow-lg text-center">{title}</h3>
        <Link href={projectUrl} passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#5651e5] font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            View Project
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
