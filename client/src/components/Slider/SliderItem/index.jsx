import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SliderItem = ({ src, title, description, translate }) => {
  const style = { transform: `translate(${translate}, -50%)` };
  return (
    <div className={'container'} style={style}>
      <img className={'avatar'} src={src} alt="landscape" />
      <div className={'details'}>
        <h5 className={'title'}>{title}</h5>
        <div className={'description'}>{description}</div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SliderItem;
