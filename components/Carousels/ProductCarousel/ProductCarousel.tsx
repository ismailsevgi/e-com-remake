import React, { useState } from 'react';
var $ = require('jquery');
if (typeof window !== 'undefined') {
  // Client-side-only code
  window.$ = window.jQuery = require('jquery');
}
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from '@/components/Card/Card';

type Props = {
  title: string;
};

function Newproducts({ title }: Props) {
  const [carousel, setCarousel] = useState({
    options: {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    },
  });

  const AllCards = [1, 2, 3, 4, 5].map((n) => {
    return (
      <div key={n} className='item'>
        <Card />
      </div>
    );
  });

  return (
    <div className='max-w-[1200px] mx-auto mt-12 h-[800px]'>
      {/* TOP */}
      <div className='flex justify-between items-center px-4 h-20'>
        <h1 className='text-2xl font-bold text-csblack'>{title}</h1>
        <ul className='flex px-4 gap-5 justify-between flex-wrap items-center h-full w-max'>
          <li className='text-red-600 font-semibold border-b-2 border-red-600'>
            Laptops
          </li>
          <li className='text-gray-600 font-semibold'>Smartphones</li>
          <li className='text-gray-600 font-semibold'>Cameras</li>
          <li className='text-gray-600 font-semibold'>Accessories</li>
        </ul>
      </div>
      {/* BottomCards */}
      <OwlCarousel className='owl-theme' {...carousel.options}>
        {AllCards}
      </OwlCarousel>
      ;
    </div>
  );
}

export default Newproducts;
