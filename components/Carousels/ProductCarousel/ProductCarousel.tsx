import React, { useState } from 'react';
import db from '../../../database/db.json';
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

// const AllCards = db.laptops.map((p: any) => {
//   return (
//     <div key={p.id} className='item'>
//       <Card name={p.name} price={p.price} imgUrl={p.imgUrl} />
//     </div>
//   );
// });

const carouselOptions = {
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
};

function Newproducts({ title }: Props) {
  // const [carousel, setCarousel] = useState({
  //   options: {
  //     margin: 10,
  //     nav: false,
  //     dots: false,
  //     smartSpeed: 900,
  //     autoplaySpeed: 15000,
  //     autoplay: true,
  //     loop: true,

  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 3,
  //       },
  //       1000: {
  //         items: 4,
  //       },
  //     },
  //   },
  // });
  const [carouselProducts, setCarouselProducts] = useState<
    'laptops' | 'smartphones' | 'cameras' | 'headphones'
  >('laptops');
  const types = ['laptops', 'smartphones', 'cameras', 'headphones'];
  function changeCarousel(
    type: 'laptops' | 'smartphones' | 'cameras' | 'headphones'
  ) {
    setCarouselProducts(type);
  }

  React.useEffect(() => {
    console.log('Rendered!', carouselProducts);
  }, [carouselProducts]);

  const activeLink =
    'border-b-2 border-red-600 font-semibold text-red-600 cursor-pointer';
  const inactiveLink = 'font-semibold text-gray-600 cursor-pointer';

  return (
    <div className='mx-auto mt-12 h-[625px] max-w-[1200px]'>
      {/* TOP */}
      <div className='flex h-20 items-center justify-between px-4'>
        <h1 className='text-2xl font-bold text-csblack'>{title}</h1>
        <ul className='flex h-full w-max flex-wrap items-center justify-between gap-5 px-4'>
          <li
            onClick={() => changeCarousel('laptops')}
            className={
              carouselProducts === 'laptops' ? activeLink : inactiveLink
            }
          >
            Laptops
          </li>
          <li
            onClick={() => changeCarousel('smartphones')}
            className={
              carouselProducts === 'smartphones' ? activeLink : inactiveLink
            }
          >
            Smartphones
          </li>
          <li
            onClick={() => changeCarousel('cameras')}
            className={
              carouselProducts === 'cameras' ? activeLink : inactiveLink
            }
          >
            Cameras
          </li>
          <li
            onClick={() => changeCarousel('headphones')}
            className={
              carouselProducts === 'headphones' ? activeLink : inactiveLink
            }
          >
            Headphones
          </li>
        </ul>
      </div>
      {/* BottomCards */}

      <OwlCarousel
        key={`carousel_${carouselProducts}`}
        className='owl-theme'
        {...carouselOptions}
      >
        {db[carouselProducts].map((p: any) => {
          return (
            <div key={p.id} className='item'>
              <Card name={p.name} price={p.price} imgUrl={p.imgUrl} />
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Newproducts;
