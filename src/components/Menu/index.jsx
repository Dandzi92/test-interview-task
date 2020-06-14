import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

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

Menu.propTypes = {
  isHeader: PropTypes.bool,
};

export default Menu;
