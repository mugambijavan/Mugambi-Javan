import Link from 'next/link';
import React from 'react';

const Javoh = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <iframe
        src='https://projects-exhibit.vercel.app/'
        title='Embedded Website'
        width='100%'
        height='800'  // You can adjust the height as needed
        frameBorder='0'
        allowFullScreen
        ></iframe>
      </div>
      
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <iframe
        src='https://mugambijavan.netlify.app/'
        title='Embedded Website'
        width='100%'
        height='800'  // You can adjust the height as needed
        frameBorder='0'
        allowFullScreen
        ></iframe>
      </div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
         <iframe
        src='https://text-reveal-lemon.vercel.app/'
        title='Embedded Website'
        width='100%'
        height='300'  // You can adjust the height as needed
        frameBorder='0'
        allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Javoh;
