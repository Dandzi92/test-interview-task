import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SliderItem = ({ src, title, description }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt="landscape" />
      <div className={styles.details}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SliderItem;
