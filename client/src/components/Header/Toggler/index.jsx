import React from 'react';
import './styles.scss';

const Toggler = () => {
  return (
    <>
      <input id="toggler" type="checkbox" />
      <label className="hamburger" htmlFor="toggler">
        <span></span>
      </label>
    </>
  );
};

export default Toggler;
