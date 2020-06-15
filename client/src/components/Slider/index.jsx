import React from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render() {
    const { data } = this.props;
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
        {data &&
          data.map(({ id, destination, description, link }) => (
            <SliderItem key={id} src={link} title={destination} description={description} />
          ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
