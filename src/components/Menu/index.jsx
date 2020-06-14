import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

const Menu = ({ isHeader }) => {
  return (
    <ul
      className={classnames({
        [styles['menu']]: !isHeader,
        [styles['menu-header']]: isHeader,
      })}
    >
      <li>home</li>
      <li>about</li>
      <li>press</li>
      <li>contact</li>
    </ul>
  );
};

export default Menu;
