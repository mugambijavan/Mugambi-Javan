import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Main = () => {
  const socialLinks = [
    { 
      icon: <FaLinkedinIn />, 
      href: 'https://linkedin.com/in/javan-mugambi-2351a81b0/',
      color: 'hover:text-[#0077b5]'
    },
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/mugambijavan',
      color: 'hover:text-[#333]'
    },
    { 
      icon: <FaWhatsapp />, 
      href: 'https://wa.me/+254727761646',
      color: 'hover:text-[#25D366]'
    },
    { 
      icon: <AiOutlineMail />, 
      href: 'mailto:mugambijavan@gmail.com',
      color: 'hover:text-[#EA4335]'
    },
    { 
      icon: <FaTwitter />, 
      href: 'https://twitter.com/mugambi_javan',
      color: 'hover:text-[#1DA1F2]'
    },
    { 
      icon: <FaTelegram />, 
      href: 'https://t.me/KamiriJavan',
      color: 'hover:text-[#0088cc]'
    },
  ];

  return (
    <section id='home' className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f9fb] to-[#eef2f6]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center space-y-12'
        >
          <div className='space-y-6'>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-2xl sm:text-3xl font-light text-gray-500'
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className='text-4xl sm:text-6xl font-bold text-gray-800'
            >
              <span className='text-[#4e9ffc]'>Mugambi Javan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-xl sm:text-2xl text-gray-600 font-medium'
            >
              Full Stack Software Engineer
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='max-w-2xl mx-auto'
          >
            <p className='text-lg text-gray-500 leading-relaxed'>
              Crafting robust digital solutions through innovative code and user-centric design.
              Specializing in modern web technologies to build scalable and efficient applications.
            </p>
          </motion.div>

          <motion.div 
            className='flex flex-wrap justify-center gap-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${link.color}`}
              >
                <span className='text-2xl'>{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className='flex flex-col sm:flex-row justify-center gap-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;