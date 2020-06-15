import React from 'react';
import styles from './styles.module.scss';
import SuggestionItem from './SuggestionItem';

const Suggestions = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>before you leave</h3>
      <div className={styles.items}>
        <SuggestionItem title={'accomodation'} />
        <SuggestionItem title={'visa & documents'} />
        <SuggestionItem title={'transportation'} />
      </div>
      <h5 className={styles.proposal}>get hottest deals to your box</h5>
      <div className={styles.subscription}>
        <input type="text" placeholder="email address" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default Suggestions;
