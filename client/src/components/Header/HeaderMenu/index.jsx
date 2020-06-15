import React from 'react';
import Menu from '../../Menu';
import Toggler from '../Toggler';

const HeaderMenu = () => {
  return (
    <>
      <Toggler />
      <Menu isHeader />
    </>
  );
};

export default HeaderMenu;
