import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ffffff');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };
  

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <div className='group relative cursor-pointer'>
            <span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:bg-gradient-to-l'>
            改善
            </span>
            <div className='absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full'></div>
          </div>
        </Link>
        
        <div className='flex items-center'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            {/* ... existing nav items ... */}
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Tech-Stack</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/grid'>Grid</Link>
            </li>
          </ul>

          {/* Social Icons for Desktop */}
          <div className='hidden md:flex ml-10'>
            <a href='https://linkedin.com/in/javan-mugambi-2351a81b0/' target='_blank' rel='noreferrer' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 mx-2'>
              <FaLinkedinIn className='text-blue-600' />
            </a>
            <a href='https://github.com/mugambijavan' target='_blank' rel='noreferrer' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-gray-500/40 transition-all duration-300 hover:-translate-y-1 mx-2'>
              <FaGithub className='text-gray-600' />
            </a>
            <a href='mailto:mugambijavan@gmail.com' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1 mx-2'>
              <AiOutlineMail className='text-red-600' />
            </a>
          </div>

          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden ml-4'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <div className='group relative cursor-pointer'>
                  <span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                    Mugambi Javan
                  </span>
                  <div className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600'></div>
                </div>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:rotate-90 transition-all duration-300'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Kaizen 改善
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col h-[70%] justify-between'>
            <ul className='uppercase'>
              {/* ... existing mobile nav items ... */}
              <li onClick={() => setNav(false)} className='py-4 text-sm hover:pl-2 transition-all duration-300'>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm hover:pl-2 transition-all duration-300'>
                <Link href='/#about'>About</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm hover:pl-2 transition-all duration-300'>
                <Link href='/#skills'>Tech-Stack</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm hover:pl-2 transition-all duration-300'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm hover:pl-2 transition-all duration-300'>
                <Link href='/resume'>Resume</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm hover:pl-2 transition-all duration-300'>
                <Link href='/grid'>Grid</Link>
              </li>
            </ul>

            {/* Social Icons for Mobile */}
            <div className='pt-20'>
              <div className='flex items-center justify-center gap-6'>
                <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1'>
                  <FaLinkedinIn className='text-blue-600' />
                </a>
                <a href='https://github.com' target='_blank' rel='noreferrer' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-gray-500/40 transition-all duration-300 hover:-translate-y-1'>
                  <FaGithub className='text-gray-600' />
                </a>
                <a href='mailto:contact@example.com' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1'>
                  <AiOutlineMail className='text-red-600' />
                </a>
                <a href='/resume' className='p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1'>
                  <BsFillPersonLinesFill className='text-purple-600' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;