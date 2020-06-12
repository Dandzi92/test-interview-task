import React from 'react';
import Suggestions from '../Suggestions';
import Destinations from '../Destinations';
import styles from './styles.module.scss';
import Form from '../Form';

const Main = () => {
  return (
    <main className={styles.content}>
      <div className={styles.banner}>
        <h3 className={styles.title}>Where will you go next?</h3>
        <Form />
      </div>
      <Destinations />
      <Suggestions />
    </main>
  );
};

export default Main;
