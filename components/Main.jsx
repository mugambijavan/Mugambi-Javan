import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
          Let&#39;s Embark on an Epic Journey Towards Excellence
          </p>
          <h1 className='py-4 text-gray-700'>
            Greetings, I&#39;m <span className='text-[#5651e5]'> Mugambi Javan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Dedicated Software Engineer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          My passion lies in sculpting highly responsive front-end web applications that seamlessly integrate with state-of-the-art back-end technologies. , ensuring an unparalleled user experience, , where functionality meets elegance.
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
