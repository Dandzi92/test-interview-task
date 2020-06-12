import React from 'react';
import styles from './styles.module.scss';

const Form = () => {
  return (
    <form className={styles.form} action="#" method="post">
      <div className={styles.title}>Leave a request for free departure of the measurer</div>
      <div className={styles.data}>
        <div className={styles.name}>
          <label className={styles.label} htmlFor="name2">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            name="name2"
            id="name2"
            required
            placeholder="What is your name:"
          />
        </div>
        <div className={styles.phone}>
          <label className={styles.label} htmlFor="phone2">
            Phone
          </label>
          <input
            className={styles.input}
            type="tel"
            name="phone2"
            id="phone2"
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Your phone number:"
          />
        </div>
        <div className={styles.email}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
          />
        </div>
        <div className={styles.submit}>
          <input type="submit" name="submit" placeholder="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
