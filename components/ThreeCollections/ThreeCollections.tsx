import Image from 'next/image';
import React from 'react';
import styles from './ThreeCollections.module.scss';
type Props = {};

function ThreeCollections({}: Props) {
  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 mt-12 px-4 md:px-2'>
      <div className={styles.imageCard}>
        <img src='/imgs/laptop.jpg' className='object-cover w-full h-full' />
        <div className={styles.ImageWrapper}>
          <div>
            <p className='text-3xl text-white font-semibold'>Laptop</p>
            <p className='text-3xl text-white font-semibold'>Collection</p>
          </div>
          <p className='text-white text-xl mt-2 flex justify-start gap-2 items-center'>
            SHOP NOW
            <i className={styles.arrowClass + ' fa-solid fa-arrow-right'}></i>
          </p>
        </div>
      </div>
      <div className={styles.imageCard}>
        <img src='/imgs/camera.jpg' className='object-cover w-full h-full' />
        <div className={styles.ImageWrapper}>
          <div>
            <p className='text-3xl text-white font-semibold'>Laptop</p>
            <p className='text-3xl text-white font-semibold'>Collection</p>
          </div>
          <p className='text-white text-xl mt-2 flex justify-start gap-2 items-center'>
            SHOP NOW
            <i className={styles.arrowClass + ' fa-solid fa-arrow-right'}></i>
          </p>
        </div>
      </div>
      <div className={styles.imageCard}>
        <img src='/imgs/headphone.jpg' className='object-cover w-full h-full' />
        <div className={styles.ImageWrapper}>
          <div>
            <p className='text-3xl text-white font-semibold'>Laptop</p>
            <p className='text-3xl text-white font-semibold'>Collection</p>
          </div>
          <p className='text-white text-xl mt-2 flex justify-start gap-2 items-center'>
            SHOP NOW
            <i className={styles.arrowClass + ' fa-solid fa-arrow-right'}></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreeCollections;
