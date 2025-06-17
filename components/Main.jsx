import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
      className="flex flex-wrap justify-center"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            type: 'spring',
            damping: 12,
            stiffness: 100,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};


const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/javan-mugambi-2351a81b0/' },
    { icon: <FaGithub />, href: 'https://github.com/mugambijavan' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/+254727761646' },
    { icon: <AiOutlineMail />, href: 'mailto:mugambijavan@gmail.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com/mugambi_javan' },
    { icon: <FaTelegram />, href: 'https://t.me/KamiriJavan' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-4xl text-center space-y-12 py-20">

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-400 tracking-wider"
          >
            HELLO, I'M
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold"
          >
            <AnimatedText text="Mugambi Javan" />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-xl text-blue-400 font-medium"
          >
            Full Stack Software Engineer
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Crafting robust digital solutions through innovative code and user-centric design.
          Specializing in modern web technologies to build scalable and efficient applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center flex-wrap gap-4 pt-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
