import React from 'react'

const grid = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <iframe
        src='https://new-portfolio-beryl-phi.vercel.app/'
        title='Embedded Website'
        width='100%'
        height='900'  // You can adjust the height as needed
        frameBorder='0'
        allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default grid