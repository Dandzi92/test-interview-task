import React, { useEffect, useState } from 'react';
import './styles.scss';
import SliderItem from './SliderItem';

const Slider = () => {
  const arr = [0, 1, 2, 3];

  const [products, setProducts] = useState(arr);
  const [productIndex, setProductIndex] = useState(Math.floor(arr.length / 2));
  console.log('productIndex', productIndex);
  const nextProduct = () => {
    // const lastProductIndex = products.length - 1;
    // const resetProductIndex = productIndex === lastProductIndex;
    // const index = resetProductIndex ? 0 : productIndex + 1;
    setProductIndex(productIndex + 1);
  };
  const prevProduct = () => {
    setProductIndex(productIndex - 1);
  };
  return (
    <div className={'slider'}>
      {arr.map((item, i) => (
        <SliderItem
          key={i}
          src={
            'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
          title={i + 'Good place for your rest'}
          description={'The best choice for everyone, who want to spend their free time'}
          translate={
            i === productIndex
              ? '-50%'
              : i < productIndex
              ? `${-50 + (i - productIndex) * 120}%`
              : `${-50 - (productIndex - i) * 120}%`
          }
        />
      ))}
      <button disabled={productIndex === 0} onClick={prevProduct}>
        left
      </button>
      <button disabled={productIndex === arr.length - 1} onClick={nextProduct}>
        right
      </button>
    </div>
  );
};

export default Slider;
