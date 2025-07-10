import Image from 'next/image';
import React from 'react';
import kamiliImg from '../public/assets/projects/kamili.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const kamili = () => {
  return (
    <div className='w-full text-gray-300 bg-gray-900 min-h-screen'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={kamiliImg}
          alt='Kamili Mental Health Clinic'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2 text-3xl font-bold'>Kamili Mental Wellness</h2>
          <p className='text-gray-300'>Compassionate Mental Health Care</p>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='text-2xl font-bold mb-4 text-white'>Project Overview</h2>
          <p className='mb-4'>
            A sensitive and secure platform for a mental health clinic providing resources, therapist matching, and appointment scheduling. Designed with privacy-first principles to create a safe space for users seeking support.
          </p>
          <p className='mb-4'>
            Features include encrypted patient portals, telehealth integration, mental health assessment tools, and a resource library. The calming color scheme and accessible design promote a therapeutic user experience.
          </p>
          
          <a
            href='https://kamili-mental-health.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 bg-[#5651e5] text-white rounded-lg hover:bg-[#4a46c7] transition-colors'>
              Live Demo
            </button>
          </a>
        </div>
        
        <div className='col-span-4 md:col-span-1 bg-gray-800 rounded-xl p-4 shadow-lg'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-white'>Technologies</p>
            <div className='grid grid-cols-1'>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#5651e5]' /> React
              </p>
              
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#5651e5]' /> Tailwind CSS
              </p>
              
            </div>
          </div>
        </div>
        
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#5651e5] hover:text-[#4a46c7] transition-colors'>
            Back to Projects
          </p>
        </Link>
      </div>
    </div>
  )
}

export default kamili;