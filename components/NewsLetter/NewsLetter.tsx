import React from 'react';

type Props = {};

function NewsLetter({}: Props) {
  return (
    <div className='relative  border-t-2 border-b-2'>
      <div className='flex h-[280px] flex-col items-center justify-center gap-4'>
        <div className='text-3xl leading-[5rem]'>
          Sign Up for the <b>NEWSLETTER</b>
        </div>
        <div className='py-2'>
          <form className='mx-auto flex items-center justify-center sm:justify-between md:w-max'>
            <input
              className='h-12 w-full rounded-l-[40px] border pl-4 pl-2 sm:basis-3/4  md:w-80'
              placeholder='Search product...'
            />
            <button className='h-12 basis-1/4 rounded-r-[40px] bg-red-600 p-[10px] text-lg font-bold text-white md:w-40'>
              Search
            </button>
          </form>
        </div>
        <div className='flex gap-4'>
          <div className='grid h-12 w-12 cursor-pointer place-content-center border duration-200  ease-linear hover:bg-gray-300 hover:text-csred'>
            <i className='fa-brands fa-facebook text-xl'></i>
          </div>
          <div className='grid h-12 w-12 cursor-pointer place-content-center border duration-200 ease-linear hover:bg-gray-300 hover:text-csred'>
            <i className='fa-brands fa-twitter text-xl'></i>
          </div>
          <div className='ease-linearborder grid h-12 w-12  cursor-pointer place-content-center duration-200 hover:bg-gray-300 hover:text-csred'>
            <i className='fa-brands fa-instagram text-xl'></i>
          </div>
          <div className='ease-linearborder grid h-12 w-12  cursor-pointer place-content-center duration-200 hover:bg-gray-300 hover:text-csred'>
            <i className='fa-brands fa-pinterest text-xl'></i>
          </div>
        </div>
      </div>
      <div className='absolute top-5 left-[30%] z-[-1]'>
        <i className='fa-regular fa-envelope  rotate-12 text-[15rem] text-gray-300'></i>
      </div>
    </div>
  );
}

export default NewsLetter;
