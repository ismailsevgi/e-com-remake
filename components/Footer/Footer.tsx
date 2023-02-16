import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <div className='min-h-[480px]border-t-4 hidden border-red-700 bg-csblack md:block'>
      <div
        id='top-footer'
        className='mx-auto  grid max-w-[1200px]    grid-cols-4 gap-4 pt-8 text-white'
      >
        <div className='flex flex-col gap-4 p-6 tracking-wide'>
          <h3 className='text-left text-lg font-semibold leading-[5rem] md:text-2xl '>
            ABOUT US
          </h3>
          <div className='flex flex-col gap-4 '>
            <p className='text-sm text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <ul className='flex flex-col gap-4 '>
              <li className='flex items-center justify-start gap-4 '>
                <i className='fa-solid fa-phone text-red-600'></i>
                <span className='cursor-pointer text-sm text-gray-400 hover:text-red-600'>
                  +041-95-51-84
                </span>
              </li>
              <li className='flex items-center justify-start gap-4 '>
                <i className='fa-regular fa-envelope text-red-600 '></i>
                <span className='cursor-pointer text-sm text-gray-400 hover:text-red-600'>
                  email@gmail.com
                </span>
              </li>
              <li className='flex items-center justify-start gap-4 '>
                <i className='fa-solid fa-location-dot text-red-600'></i>
                <span className='cursor-pointer text-sm text-gray-400 hover:text-red-600'>
                  1734 Stonecoal Road
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-4 p-6 tracking-wide'>
          <h3 className='text-left text-lg font-semibold leading-[5rem] md:text-2xl'>
            CATEGORIES
          </h3>
          <ul className='flex flex-col gap-4 text-gray-400'>
            <li>Hot deals</li>
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>Cameras</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 p-6 tracking-wide'>
          <h3 className='text-left text-lg font-semibold leading-[5rem] md:text-2xl'>
            INFORMATION
          </h3>
          <ul className='flex flex-col gap-4 text-gray-400'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Orders and Returns</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 p-6 tracking-wide'>
          <h3 className='text-left text-lg font-semibold leading-[5rem] md:text-2xl'>
            SERVICE
          </h3>
          <ul className='flex flex-col gap-4 text-gray-400'>
            <li>My Account</li>
            <li>View Cart</li>
            <li>Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div id='bottom-footer' className='mt-8 h-[200px] bg-cstopbar'>
        <div className='mx-auto flex w-max flex-col'>
          <ul className='flex justify-center gap-6 text-5xl leading-[100px] opacity-50'>
            <li className=''>
              <a href='#'>
                <i className='fa-brands fa-cc-visa '></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-credit-card'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa-brands fa-cc-paypal'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa-brands fa-cc-mastercard'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa-brands fa-cc-discover'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa-brands fa-cc-amex'></i>
              </a>
            </li>
          </ul>
          <span id='copyright' className='text-center text-lg text-gray-500'>
            This template is made by Ismail Sevgi
            <i className='fa fa-heart-o' aria-hidden='true'></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
