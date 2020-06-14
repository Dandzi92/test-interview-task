import React from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render() {
    const arr = [0, 1, 2, 3];
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: true,
      centerMode: true,
    };
    return (
      <Slider {...settings}>
        {arr.map((item, i) => (
          <SliderItem
            key={i}
            src={
              'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            title={'Good place for your rest'}
            description={'The best choice for everyone, who want to spend their free time'}
          />
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
