import useWindowSize from '@/utils/useWindowSize';
import React, { useEffect, useRef, useState } from 'react';

type Props = {};

function LogoSearchCart({}: Props) {
  let currentSize = useWindowSize();
  const [sideNavbarStatus, setSideNavbarStatus] = useState<Boolean>(false);
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
    <div className='w-full border-b-4 border-red-500 bg-csblack py-4'>
      <div className='min-h-20 mx-auto flex flex-col  items-center justify-between gap-4 px-3  xl:flex-row xl:gap-0 2xl:w-4/6'>
        <div id='logoWrapper' className='grid place-content-center'>
          <h1 className='text-5xl font-bold text-white'>
            Electro
            <span className='text-red-600'>
              <b>.</b>
            </span>
          </h1>
        </div>
        <div id='searchbar' className='w-full'>
          <form className='mx-auto flex items-center justify-center sm:justify-between md:w-max'>
            <select className='text-md hidden h-12 basis-1/4 rounded-l-[40px]  p-[10px] font-light sm:block md:w-40'>
              <option>All Categories</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <input
              className='h-12 w-full rounded-l-[40px] pl-2 sm:basis-2/4 sm:rounded-none md:w-80'
              placeholder='Search product...'
            />
            <button className='h-12 basis-1/4 rounded-r-[40px] bg-red-600 p-[10px] text-lg font-bold text-white md:w-40'>
              Search
            </button>
          </form>
        </div>
        <div
          id='withList-Cart'
          className='flex w-full items-center justify-between px-4 md:w-max md:justify-center'
        >
          <div
            onClick={changeSideBar}
            className='grid h-12 w-12 place-content-center hover:bg-red-600 md:hidden'
          >
            <i className='fa-solid fa-bars text-2xl text-white'></i>
          </div>
          <div className='flex'>
            <div className='grid  h-12 place-content-center gap-1 p-4'>
              <i className='fa-regular fa-heart text-center text-lg text-white'></i>
              <span className='whitespace-nowrap text-xs text-white'>
                Your Wishlist
              </span>
            </div>
            <div className='grid  h-12 place-content-center gap-1 p-4'>
              <i className='fa-solid fa-cart-shopping text-center text-lg text-white'></i>
              <span className='whitespace-nowrap text-xs text-white'>
                Your Cart
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sideNavRef}
        className={`fixed top-0 left-0  z-10 h-screen  ${
          currentSize[0] > 768 ? 'hidden' : 'block'
        } ${sideNavbarStatus ? 'w-screen' : 'min-w-[250px]'}`}
      >
        <nav className='h-full w-[220px] bg-csblack pt-[4rem]'>
          <ul className='flex h-max w-full flex-col items-center justify-between gap-5 px-4 '>
            <li
              onClick={changeSideBar}
              className='w-full border-b-2 border-csred font-semibold text-csred'
            >
              Home
            </li>
            <li
              onClick={changeSideBar}
              className='w-full font-semibold text-gray-600'
            >
              Hot Deals
            </li>
            <li
              onClick={changeSideBar}
              className='w-full font-semibold text-gray-600'
            >
              Categories
            </li>
            <li
              onClick={changeSideBar}
              className='w-full font-semibold text-gray-600'
            >
              Laptops
            </li>
            <li
              onClick={changeSideBar}
              className='w-full font-semibold text-gray-600'
            >
              Smartphones
            </li>
            <li
              onClick={changeSideBar}
              className='w-full font-semibold text-gray-600'
            >
              Cameras
            </li>
            <li
              onClick={changeSideBar}
              className='w-full font-semibold text-gray-600'
            >
              Accessories
            </li>
          </ul>
        </nav>
        <div
          id='emptySpace'
          onClick={() => setSideNavbarStatus(false)}
          className={`fixed top-0 right-0   bg-transparent ${
            sideNavbarStatus ? 'w-[510px]' : 'hidden'
          } h-screen`}
        ></div>
      </div>
    </div>
  );
}

export default LogoSearchCart;
