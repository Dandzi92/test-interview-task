import React from 'react';
import styles from './styles.module.scss';
import Slider from '../Slider';

const Destinations = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>top destinations</h4>
      <div>Some of the top destinations for your next summer adventure</div>
      <Slider />
    </div>
  );
};

export default Destinations;
