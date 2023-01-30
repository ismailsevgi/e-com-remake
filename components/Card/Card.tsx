import React from 'react';
import styles from './Card.module.scss';
type Props = {};

function Card({}: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className='max-w-[300px] h-[280px] mx-auto px-2'>
        <img src='/imgs/laptop.jpg' className='w-full h-full object-contain' />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-sm text-gray-500 py-2'>CATEGORY</span>
        <h2 className='font-bold text-md'>PRODUCT NAME GOES HERE</h2>
        <p className='font-bold text-lg text-csred'>
          $980.00
          <small className='text-gray-500 font-medium pl-1'>
            <s>$990.00</s>
          </small>
        </p>
      </div>
      <div className='relative flex justify-center  items-center  h-8'>
        <div className='w-max z-[1] flex justify-center gap-1 bg-white '>
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} className='fa-sharp fa-solid fa-star text-csred'></i>
          ))}
        </div>

        <div className='absolute top-[50%] z-[0] left-0 border w-full'></div>
      </div>
      <div className='flex justify-center gap-4 h-14 items-center'>
        <i className='fa-regular fa-heart'></i>
        <i className='fa-solid fa-right-left'></i>
        <i className='fa-sharp fa-solid fa-eye'></i>
      </div>
      <div className={styles.cardExtention}>
        <button className='bg-red-600 px-4 py-2 rounded-3xl text-white font-semibold tracking-wide'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Card;
