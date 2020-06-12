import React from 'react';
import styles from './styles.module.scss';

const SuggestionItem = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        There are some things you should take care of before going to your next adventure. We’ll
        help you to get required visas and documents needed.
      </div>
    </div>
  );
};

export default SuggestionItem;
