import React from 'react';
import styles from './styles.module.scss';
import Menu from '../Menu';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['copy-right']}>
        Copyright © 2014 Travelly.
        <span className={styles.desktop}>All Rights Reserved.Designed for Despreneur.</span>
      </div>
      <Menu />
    </footer>
  );
};

export default Footer;
