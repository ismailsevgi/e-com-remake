import useWindowSize from '@/utils/useWindowSize';
import React, { useRef, useState } from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <div className='w-full  flex border-b-2'>
      <nav className='hidden md:block mx-auto 2xl:w-4/6 h-16 '>
        <ul className='flex px-4 gap-5 justify-between items-center h-full w-max'>
          <li className='text-red-600 font-semibold border-b-2 border-red-600'>
            Home
          </li>
          <li className='text-gray-600 font-semibold'>Hot Deals</li>
          <li className='text-gray-600 font-semibold'>Categories</li>
          <li className='text-gray-600 font-semibold'>Laptops</li>
          <li className='text-gray-600 font-semibold'>Smartphones</li>
          <li className='text-gray-600 font-semibold'>Cameras</li>
          <li className='text-gray-600 font-semibold'>Accessories</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
