import React, { useEffect } from 'react';
import Suggestions from '../Suggestions';
import Destinations from '../Destinations';
import styles from './styles.module.scss';
import Form from '../Form';
import { useDispatch } from 'react-redux';
import { fetchDestinationsRequest } from '../../features/destinations';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinationsRequest());
  }, [dispatch]);
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
