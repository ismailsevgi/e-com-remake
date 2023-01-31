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
      margin: 10,
      nav: false,
      dots: false,
      smartSpeed: 900,
      autoplaySpeed: 15000,
      autoplay: true,
      loop: true,

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
    <div className='mx-auto mt-12 h-[625px] max-w-[1200px]'>
      {/* TOP */}
      <div className='flex h-20 items-center justify-between px-4'>
        <h1 className='text-2xl font-bold text-csblack'>{title}</h1>
        <ul className='flex h-full w-max flex-wrap items-center justify-between gap-5 px-4'>
          <li className='border-b-2 border-red-600 font-semibold text-red-600'>
            Laptops
          </li>
          <li className='font-semibold text-gray-600'>Smartphones</li>
          <li className='font-semibold text-gray-600'>Cameras</li>
          <li className='font-semibold text-gray-600'>Accessories</li>
        </ul>
      </div>
      {/* BottomCards */}
      <OwlCarousel className='owl-theme' {...carousel.options}>
        {AllCards}
      </OwlCarousel>
    </div>
  );
}

export default Newproducts;
