import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#4e9ffc]'> Mugambi Javan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Software Engineer</h1>
            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I'm not just a Dev
            </p>
          <div className='flex items-center justify-between max-w-[360px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/javan-mugambi-2351a81b0/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href='https://github.com/mugambijavan'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>

            <a
              href='https://wa.me/+254727761646'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaWhatsapp />
              </div>
            </a>

            <a
              href='mailto:mugambijavan@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>

            <a
              href='https://twitter.com/mugambi_javan'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTwitter />
              </div>
            </a>

            <a
              href='https://t.me/KamiriJavan'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTelegram />
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;