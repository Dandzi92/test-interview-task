import React from 'react';
import styles from './styles.module.scss';
import SliderItem from './SliderItem';

const Slider = () => {
  const arr = [0, 1, 2];
  return (
    <div className={styles.slider}>
      {arr.map((item, i) => (
        <SliderItem
          key={i}
          src={
            'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
          title={'Good place for your rest'}
          description={'The best choice for everyone, who want to spend their free time'}
        />
      ))}
    </div>
  );
};

export default Slider;
