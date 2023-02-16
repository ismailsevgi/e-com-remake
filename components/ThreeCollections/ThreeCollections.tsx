import Image from 'next/image';
import React from 'react';
import styles from './ThreeCollections.module.scss';
type Props = {};

function ThreeCollections({}: Props) {
  return (
    <div className='mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-2 px-4 md:grid-cols-3 md:px-2'>
      <div className={styles.imageCard}>
        <img src='/imgs/laptop.jpg' className='h-full w-full object-cover' />
        <div className={styles.ImageWrapper}>
          <div>
            <p className='text-3xl font-semibold text-white'>Laptop</p>
            <p className='text-3xl font-semibold text-white'>Collection</p>
          </div>
          <p className='mt-2 flex items-center justify-start gap-2 text-xl text-white'>
            SHOP NOW
            <i className={styles.arrowClass + ' fa-solid fa-arrow-right'}></i>
          </p>
        </div>
      </div>
      <div className={styles.imageCard}>
        <img src='/imgs/camera.jpg' className='h-full w-full object-cover' />
        <div className={styles.ImageWrapper}>
          <div>
            <p className='text-3xl font-semibold text-white'>Camera</p>
            <p className='text-3xl font-semibold text-white'>Collection</p>
          </div>
          <p className='mt-2 flex items-center justify-start gap-2 text-xl text-white'>
            SHOP NOW
            <i className={styles.arrowClass + ' fa-solid fa-arrow-right'}></i>
          </p>
        </div>
      </div>
      <div className={styles.imageCard}>
        <img src='/imgs/headphone.jpg' className='h-full w-full object-cover' />
        <div className={styles.ImageWrapper}>
          <div>
            <p className='text-3xl font-semibold text-white'>Headphone</p>
            <p className='text-3xl font-semibold text-white'>Collection</p>
          </div>
          <p className='mt-2 flex items-center justify-start gap-2 text-xl text-white'>
            SHOP NOW
            <i className={styles.arrowClass + ' fa-solid fa-arrow-right'}></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreeCollections;
