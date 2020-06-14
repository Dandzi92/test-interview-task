import React from 'react';
import PropTypes from 'prop-types';
import svgSprite from '../../assets/images/svgSprite.svg';
import styles from './styles.module.scss';

const Icon = ({ icon, size, handler }) => (
  <svg className={styles[`${size}`]} onClick={handler}>
    <use xlinkHref={`${svgSprite}#${icon}`} />
  </svg>
);

Icon.defaultProps = {
  icon: 'Logo',
  size: 'default',
};

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
