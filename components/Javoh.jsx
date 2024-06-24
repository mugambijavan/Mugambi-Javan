import Link from 'next/link';
import React from 'react';
import ReactIframe from 'react-iframe'; // Import the required component

const Javoh = () => {
  const iframeUrl = 'https://mugambijavan.netlify.app/'; // Define the iframe URL
  const iframeWidth = '100%'; // Set the iframe width to fill the container
  const iframeHeight = 'calc(100vh - 100px)'; // Set the iframe height to fill the viewport minus header height (adjust as needed)

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <ReactIframe
          url={iframeUrl}
          width={iframeWidth}
          height={iframeHeight}
          className='w-full h-full' // Ensure iframe fills the container
          frameBorder={0} // Remove the default border
          scrolling='auto' // Enable scrolling within the iframe
          allowFullScreen // Allow full-screen mode (optional)
        />
      </div>
    </div>
  );
};

export default Javoh;
