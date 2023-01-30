import React from 'react';

type Props = {};

function Hotdeals({}: Props) {
  return (
    <div className='min-h-[26rem] border bg-cswhite flex flex-col justify-center items-center gap-2'>
      <div className='mx-auto w-full  lg:w-1/2 flex flex-col justify-center items-center'>
        <div
          id='timer'
          className='flex flex-wrap gap-4 justify-center align-middle items-center mt-4'
        >
          <div className='flex flex-col justify-center items-center  border-red-200 rounded-full h-24 w-24 text-cswhite bg-csred2 '>
            <span className='text-3xl font-bold'>02</span>
            <small>DAYS</small>
          </div>
          <div className='flex flex-col justify-center items-center  border-red-200 rounded-full h-24 w-24 text-cswhite bg-csred2 '>
            <span className='text-3xl font-bold'>10</span>
            <small>HOURS</small>
          </div>
          <div className='flex flex-col justify-center items-center  border-red-200 rounded-full h-24 w-24 text-cswhite bg-csred2 '>
            <span className='text-3xl font-bold'>34</span>
            <small>MINS</small>
          </div>
          <div className='flex flex-col justify-center items-center border-red-200 rounded-full h-24 w-24 text-cswhite bg-csred2 '>
            <span className='text-3xl font-bold'>59</span>
            <small>SECS</small>
          </div>
        </div>
      </div>
      <div className='mx-auto text-center flex flex-wrap justify-center items-center flex-col gap-4 py-6'>
        <h2 className='text-4xl font-bold tracking-wide '>
          HOT DEAL THIS WEEK
        </h2>
        <h3 className='text-3xl font-light '>NEW COLLECTION UP TO 50% OFF</h3>
        <button className='bg-csred text-white text-xl w-max mt-3 px-6 py-2 rounded-3xl '>
          SHOP NOW
        </button>
      </div>
      <div className='hidden lg:block lg:h-72 lg:w-72 xl:h-96 xl:w-96 absolute top-50 left-4 lg:left-18'>
        <img
          src='/imgs/laptop-1.png'
          className='w-full h-full object-contain'
        />
      </div>

      <div className='hidden lg:block lg:h-72 lg:w-72  xl:h-96 xl:w-96 absolute  top-50 right-4 lg:right-18'>
        <img src='/imgs/head1.png' className='w-full h-full object-contain' />
      </div>
    </div>
  );
}

export default Hotdeals;
