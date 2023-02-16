import React from 'react';
import styles from './Card.module.scss';
type Props = {
  name: string;
  price: number;
  imgUrl: string;
};

function Card({ name, price, imgUrl }: Props) {
  console.log('New cards!');

  return (
    <div className={styles.cardWrapper}>
      <div className='mx-auto h-[280px] max-w-[300px] px-2'>
        <img src={imgUrl} className='h-full w-full object-contain' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='py-2 text-sm text-gray-500'>CATEGORY</span>
        <h2 className='text-md font-bold'>{name}</h2>
        <p className='text-lg font-bold text-csred'>
          ${price}
          <small className='pl-1 font-medium text-gray-500'>
            <s>${price + 1000}</s>
          </small>
        </p>
      </div>
      <div className='relative flex h-8  items-center  justify-center'>
        <div className='z-[1] flex w-max justify-center gap-1 bg-white '>
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} className='fa-sharp fa-solid fa-star text-csred'></i>
          ))}
        </div>

        <div className='absolute top-[50%] left-0 z-[0] w-full border'></div>
      </div>
      <div className={styles.bottomIcons}>
        <i className='fa-regular fa-heart text-2xl'></i>
        <i className='fa-solid fa-right-left text-2xl'></i>
        <i className='fa-sharp fa-solid fa-eye text-2xl'></i>
      </div>
      <div className={styles.cardExtention}>
        <button className={styles.cardExtentionButton}>
          <i className='fa-solid fa-cart-shopping text-center text-lg text-white'></i>
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
