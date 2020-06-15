import React from 'react';
import styles from './styles.module.scss';
import Slider from '../Slider';
import { useSelector } from 'react-redux';

const Destinations = () => {
  const destinations = useSelector(state => state.destinations.destinations);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>top destinations</h4>
      <div className={styles.description}>
        Some of the top destinations for your next summer adventure
      </div>
      <Slider data={destinations} />
    </div>
  );
};

export default Destinations;
