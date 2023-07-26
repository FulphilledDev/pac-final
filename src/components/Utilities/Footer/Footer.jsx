import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='md:w-3/4 mx-auto min-h-[300px] flex flex-col justify-center items-center py-3 bg-black text-white gap-4 font-bold'>
        <h3 className=''>CONTACT US</h3>
        <h3 className='underline underline-offset-8'>702.521.6001</h3>
        {/* <button
        type='button'
        className='border border-none rounded-sm px-3 py-2 bg-blue-700 text-sm hover:bg-blue-800'
      >
        SEND EMAIL
      </button> */}
      </div>
      {/* <div className='flex flex-row justify-center pb-8 text-white hover:underline'>
        <button className='hover:underline'>
          <a href='#topOfList'> Back to Top</a>
        </button>
      </div> */}
    </>
  );
};

export default Footer;
