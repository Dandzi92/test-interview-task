import React from 'react';
import Icon from '../Icon';
import Menu from '../Menu';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Icon />
        <h3 className={styles.title}>travelly</h3>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
