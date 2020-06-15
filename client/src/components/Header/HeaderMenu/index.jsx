import React from 'react';
import Menu from '../../Menu';
import Toggler from '../Toggler';
import './styles.scss';

const HeaderMenu = () => {
  return (
    <>
      <Toggler />
      <Menu isHeader />
    </>
  );
};

export default HeaderMenu;
