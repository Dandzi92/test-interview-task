import React from 'react';
import Icon from '../Icon';
import styles from './styles.module.scss';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Icon />
        <h3 className={styles.title}>travelly</h3>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
