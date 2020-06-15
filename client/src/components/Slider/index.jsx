import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import SliderItem from './SliderItem';

const Slider = ({ data }) => {
  useEffect(() => {
    setCardIndex(Math.floor(data.length / 2));
  }, [data]);
  const [cardIndex, setCardIndex] = useState(Math.floor(data.length / 2));
  const nextCard = () => {
    setCardIndex(cardIndex + 1);
  };
  const prevCard = () => {
    setCardIndex(cardIndex - 1);
  };
  return (
    <div className={styles['slider']}>
      {data &&
        data.map(({ id, destination, description, link }, i) => (
          <SliderItem
            key={id}
            src={link}
            title={destination}
            description={description}
            translate={
              i === cardIndex
                ? '-50%'
                : i < cardIndex
                ? `${-50 + (i - cardIndex) * 120}%`
                : `${-50 - (cardIndex - i) * 120}%`
            }
          />
        ))}
      <button
        style={{ left: '10px', top: '10px' }}
        className={styles['controls']}
        disabled={cardIndex === 0}
        onClick={prevCard}
      >
        left
      </button>
      <button
        style={{ right: '10px', top: '10px' }}
        className={styles['controls']}
        disabled={cardIndex === data.length - 1}
        onClick={nextCard}
      >
        right
      </button>
    </div>
  );
};

export default Slider;
