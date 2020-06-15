import React, { useEffect, useState } from 'react';
import './styles.scss';
import SliderItem from './SliderItem';

const Slider = ({ data }) => {
  const arr = [0, 1, 2, 3];
  useEffect(() => {
    setProductIndex(Math.floor(data.length / 2));
  }, [data]);
  const [productIndex, setProductIndex] = useState(Math.floor(data.length / 2));
  console.log(productIndex);
  const nextProduct = () => {
    setProductIndex(productIndex + 1);
  };
  const prevProduct = () => {
    setProductIndex(productIndex - 1);
  };
  return (
    <div className={'slider'}>
      {data &&
        data.map(({ id, destination, description, link }, i) => (
          <SliderItem
            key={id}
            src={link}
            title={destination}
            description={description}
            translate={
              i === productIndex
                ? '-50%'
                : i < productIndex
                ? `${-50 + (i - productIndex) * 120}%`
                : `${-50 - (productIndex - i) * 120}%`
            }
          />
        ))}
      <button
        style={{ left: '10px', top: '10px' }}
        className={'controls'}
        disabled={productIndex === 0}
        onClick={prevProduct}
      >
        left
      </button>
      <button
        style={{ right: '10px', top: '10px' }}
        className={'controls'}
        disabled={productIndex === data.length - 1}
        onClick={nextProduct}
      >
        right
      </button>
    </div>
  );
};

export default Slider;
