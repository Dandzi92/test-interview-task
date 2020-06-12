import React from 'react';
import styles from './styles.module.scss';

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>home</li>
      <li>about</li>
      <li>press</li>
      <li>contact</li>
    </ul>
  );
};

export default Menu;
