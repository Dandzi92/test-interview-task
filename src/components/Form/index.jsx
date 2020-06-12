import React from 'react';
import styles from './styles.module.scss';

const Form = () => {
  return (
    <form className={styles.form} action="#" method="post">
      <div className={styles.title}>Add your favourite destination!</div>
      <div className={styles.data}>
        <div className={styles.name}>
          <label className={styles.label} htmlFor="name2">
            Destination
          </label>
          <input
            className={styles.input}
            type="text"
            name="name2"
            id="name2"
            required
            placeholder="Destination:"
          />
        </div>
        <div className={styles.link}>
          <label className={styles.label} htmlFor="link">
            Image link
          </label>
          <input
            className={styles.input}
            type="link"
            name="link"
            id="link"
            placeholder="Url:"
            required
          />
        </div>
        <div className={styles.textarea}>
          <label className={styles.label} htmlFor="textarea">
            Brief description of the destination
          </label>
          <input
            className={styles.textarea}
            type="textarea"
            name="textarea"
            id="textarea"
            required
          />
        </div>

        <div className={styles.submit}>
          <input type="submit" name="submit" value="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
