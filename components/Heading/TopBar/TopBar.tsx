import React, { useState } from 'react';
import styles from './TopBar.module.scss';
type Props = {};

function TopBar({}: Props) {
  const [currency, setCurrency] = useState<'dollar' | 'euro'>('dollar');

  function ChangeCurrency(currency: string) {
    switch (currency) {
      case 'dollar':
        setCurrency('euro');
        break;
      case 'euro':
        setCurrency('dollar');
        break;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className='lg:w-4/6 mx-auto text-[12px] whitespace-nowrap flex-wrap gap-4 font-medium flex justify-between items-center px-4'>
        <ul className={styles.ulLeft}>
          <li className='flex gap-2 justify-center items-center'>
            <i className='fa-solid fa-phone text-red-600'></i>
            <span className='text-white hover:text-red-600 cursor-pointer'>
              +021-95-51-84
            </span>
          </li>
          <li className='flex gap-2 justify-center items-center'>
            <i className='fa-regular fa-envelope text-red-600 '></i>
            <span className='text-white hover:text-red-600 cursor-pointer'>
              email@gmail.com
            </span>
          </li>
          <li className='flex gap-2 justify-center items-center'>
            <i className='fa-solid fa-location-dot text-red-600'></i>
            <span className='text-white hover:text-red-600 cursor-pointer'>
              1734 Stonecoal Road
            </span>
          </li>
        </ul>
        <ul className={styles.ulRight}>
          <li className='flex gap-2 justify-center items-center'>
            <i className={`fa-solid fa-${currency}-sign text-red-500`}></i>
            <span className='text-white hover:text-red-600 cursor-pointer'>
              {currency === 'dollar' ? 'USD' : 'EURO'}
            </span>
          </li>
          <li className='flex gap-2 justify-center items-center'>
            <i className='fa-regular fa-user text-red-500'></i>

            <span className='text-white hover:text-red-600 cursor-pointer'>
              My Account
            </span>
          </li>
          <div
            onClick={() => ChangeCurrency(currency)}
            className={styles.dropdown}
          >
            <i
              className={`fa-solid fa-${
                currency === 'dollar' ? 'euro' : 'dollar'
              }-sign text-red-500`}
            ></i>
            <span className='text-white hover:text-red-600 cursor-pointer'>
              {currency === 'dollar' ? 'EURO' : 'USD'}
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
