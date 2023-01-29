import useWindowSize from '@/utils/useWindowSize';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};

function LogoSearchCart({}: Props) {
  let currentSize = useWindowSize();
  const [sideNavbarStatus, setSideNavbarStatus] = useState<Boolean>(true);
  const sideNavRef = useRef<HTMLDivElement>(null);

  console.log(currentSize);

  function changeSideBar() {
    setSideNavbarStatus(!sideNavbarStatus);
  }

  useEffect(() => {
    if (!sideNavbarStatus) {
      sideNavRef?.current!.animate([{ left: '0px' }, { left: '-250px' }], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    } else {
      sideNavRef?.current!.animate([{ left: '-250px' }, { left: '0px' }], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }
  }, [sideNavbarStatus]);

  return (
    <div className='w-full bg-csblack py-4 border-b-4 border-red-500'>
      <div className='2xl:w-4/6 mx-auto px-3 flex  flex-col xl:flex-row gap-4 xl:gap-0  justify-between items-center min-h-20'>
        <div id='logoWrapper' className='grid place-content-center'>
          <h1 className='text-5xl font-bold text-white'>
            Electro
            <span className='text-red-600'>
              <b>.</b>
            </span>
          </h1>
        </div>
        <div id='searchbar' className='w-full'>
          <form className='mx-auto md:w-max flex justify-center sm:justify-between items-center'>
            <select className='hidden sm:block p-[10px] h-12 basis-1/4  md:w-40 rounded-l-[40px] font-light text-md'>
              <option>All Categories</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <input
              className='rounded-l-[40px] sm:rounded-none md:w-80 h-12 pl-2 w-full sm:basis-2/4'
              placeholder='Search product...'
            />
            <button className='bg-red-600 basis-1/4 md:w-40 h-12 p-[10px] rounded-r-[40px] text-white font-bold text-lg'>
              Search
            </button>
          </form>
        </div>
        <div
          id='withList-Cart'
          className='flex justify-between px-4 items-center md:w-max w-full md:justify-center'
        >
          <div
            onClick={changeSideBar}
            className='w-12 h-12 grid place-content-center hover:bg-red-600 md:hidden'
          >
            <i className='fa-solid fa-bars text-2xl text-white'></i>
          </div>
          <div className='flex'>
            <div className='h-12  p-4 grid place-content-center gap-1'>
              <i className='fa-regular fa-heart text-white text-center text-lg'></i>
              <span className='text-white text-xs whitespace-nowrap'>
                Your Wishlist
              </span>
            </div>
            <div className='h-12  p-4 grid place-content-center gap-1'>
              <i className='fa-solid fa-cart-shopping text-white text-center text-lg'></i>
              <span className='text-white text-xs whitespace-nowrap'>
                Your Cart
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sideNavRef}
        className={`absolute top-0 left-0  h-screen  ${
          currentSize[0] > 768 ? 'hidden' : 'block'
        } ${sideNavbarStatus ? 'w-screen' : 'min-w-[250px]'}`}
      >
        <nav className='w-1/3 h-full bg-csblack pt-[4rem]'>
          <ul className='flex flex-col px-4 gap-5 justify-between items-center h-max w-full '>
            <li className='text-csred font-semibold border-b-2 border-csred w-full'>
              Home
            </li>
            <li className='text-gray-600 font-semibold w-full'>Hot Deals</li>
            <li className='text-gray-600 font-semibold w-full'>Categories</li>
            <li className='text-gray-600 font-semibold w-full'>Laptops</li>
            <li className='text-gray-600 font-semibold w-full'>Smartphones</li>
            <li className='text-gray-600 font-semibold w-full'>Cameras</li>
            <li className='text-gray-600 font-semibold w-full'>Accessories</li>
          </ul>
        </nav>
        <div
          id='emptySpace'
          onClick={() => setSideNavbarStatus(false)}
          className={`absolute top-0 right-0   bg-transparent ${
            sideNavbarStatus ? 'w-2/3' : 'hidden'
          } h-screen`}
        ></div>
      </div>
    </div>
  );
}

export default LogoSearchCart;
