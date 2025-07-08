import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Tech-Stack', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Resume', href: '/resume' },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: 'https://linkedin.com/in/javan-mugambi-2351a81b0/',
      gradient: '',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/mugambijavan',
      gradient: '',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/+254727761646',
      gradient: '',
    },
    {
      icon: <AiOutlineMail />,
      href: 'mailto:mugambijavan@gmail.com',
      gradient: '',
    },
  ];

  const navVariant = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut', staggerChildren: 0.1 },
    },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${shadow ? 'bg-black/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'} transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="w-10 h-10 bg-neutral-800 text-white font-bold rounded-full flex items-center justify-center"
          >
            改
          </motion.div>
          <span className="text-xl font-bold text-white">善</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="relative px-3 py-2 text-sm text-white hover:text-gray-300"
            >
              {item.name}
              <motion.span
                whileHover={{ width: '100%' }}
                className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-400 rounded-full"
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <div className="flex gap-2 ml-4">
            {socialLinks.map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-black/80 border border-black"
                style={{ color: "white" }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={handleNav}
          className="md:hidden p-2 rounded-lg bg-black/80 border border-black"
        >
          <AiOutlineMenu className="text-xl text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariant}
            className="fixed inset-0 bg-black z-40 md:hidden flex"
            onClick={handleNav}
          >
            <motion.div
              className="w-[80%] sm:w-[60%] h-full bg-black/95 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={handleNav} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-neutral-800 text-white font-bold rounded-full flex items-center justify-center">
                    改
                  </div>
                  <span className="text-xl font-bold text-white">善</span>
                </Link>
                <button
                  onClick={handleNav}
                  className="p-2 bg-black rounded-full border border-black"
                >
                  <AiOutlineClose className="text-white" />
                </button>
              </div>

              <ul className="space-y-5 mt-10">
                {navItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariant}
                    onClick={handleNav}
                    className="text-white text-lg font-medium flex items-center gap-3 border-b border-black pb-3"
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <Link href={item.href}>{item.name}</Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 border-t border-black pt-6">
                <p className="text-sm text-gray-400 mb-3">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-3 rounded-full bg-black/80 border border-black`}
                      style={{ color: "white" }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;