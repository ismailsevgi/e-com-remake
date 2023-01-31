import React from 'react';

type Props = {};

function Hotdeals({}: Props) {
  return (
    <div className='my-12 flex min-h-[26rem] flex-col items-center justify-center gap-2 border bg-cswhite'>
      <div className='mx-auto flex  w-full flex-col items-center justify-center lg:w-1/2'>
        <div
          id='timer'
          className='mt-4 flex flex-wrap items-center justify-center gap-4 align-middle'
        >
          <div className='flex h-24 w-24 flex-col  items-center justify-center rounded-full border-red-200 bg-csred2 text-cswhite '>
            <span className='text-3xl font-bold'>02</span>
            <small>DAYS</small>
          </div>
          <div className='flex h-24 w-24 flex-col  items-center justify-center rounded-full border-red-200 bg-csred2 text-cswhite '>
            <span className='text-3xl font-bold'>10</span>
            <small>HOURS</small>
          </div>
          <div className='flex h-24 w-24 flex-col  items-center justify-center rounded-full border-red-200 bg-csred2 text-cswhite '>
            <span className='text-3xl font-bold'>34</span>
            <small>MINS</small>
          </div>
          <div className='flex h-24 w-24 flex-col items-center justify-center rounded-full border-red-200 bg-csred2 text-cswhite '>
            <span className='text-3xl font-bold'>59</span>
            <small>SECS</small>
          </div>
        </div>
      </div>
      <div className='mx-auto flex flex-col flex-wrap items-center justify-center gap-4 py-6 text-center'>
        <h2 className='text-4xl font-bold tracking-wide '>
          HOT DEAL THIS WEEK
        </h2>
        <h3 className='text-3xl font-light '>NEW COLLECTION UP TO 50% OFF</h3>
        <button className='mt-3 w-max rounded-3xl bg-csred px-6 py-2 text-xl text-white '>
          SHOP NOW
        </button>
      </div>
      <div className='top-50 lg:left-18 absolute left-4 hidden lg:block lg:h-72 lg:w-72 xl:h-96 xl:w-96'>
        <img
          src='/imgs/laptop-1.png'
          className='h-full w-full object-contain'
        />
      </div>

      <div className='top-50 lg:right-18 absolute right-4  hidden lg:block lg:h-72  lg:w-72 xl:h-96 xl:w-96'>
        <img src='/imgs/head1.png' className='h-full w-full object-contain' />
      </div>
    </div>
  );
}

export default Hotdeals;
