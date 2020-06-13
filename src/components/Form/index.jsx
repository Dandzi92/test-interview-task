import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { formValidate } from '../../utils/formValidate';
import styles from './styles.module.scss';
import { addDestinationRequest } from '../../features/destinations';

const Form = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      destination: '',
      link: '',
      textarea: '',
    },
    validate: formValidate,
    onSubmit: values => {
      dispatch(addDestinationRequest(values));
    },
  });
  return (
    <form className={styles.form} action="#" method="post" onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Add your favourite destination!</div>
      <div className={styles.data}>
        <div className={styles.name}>
          <label
            className={classNames(styles.label, {
              [styles['validate-failure']]: formik.touched.destination && formik.errors.destination,
            })}
            htmlFor="destination"
          >
            Destination
          </label>
          <input
            className={styles.input}
            type="text"
            name="destination"
            id="destination"
            {...formik.getFieldProps('destination')}
          />
          {formik.touched.destination && formik.errors.destination ? (
            <div className={styles['validation-error']}>{formik.errors.destination}</div>
          ) : null}
        </div>
        <div className={styles.link}>
          <label
            className={classNames(styles.label, {
              [styles['validate-failure']]: formik.touched.link && formik.errors.link,
            })}
            htmlFor="link"
          >
            Image link
          </label>
          <input
            className={styles.input}
            type="link"
            name="link"
            id="link"
            {...formik.getFieldProps('link')}
          />
          {formik.touched.link && formik.errors.link ? (
            <div className={styles['validation-error']}>{formik.errors.link}</div>
          ) : null}
        </div>
        <div className={styles.textarea}>
          <label
            className={classNames(styles.label, {
              [styles['validate-failure']]: formik.touched.textarea && formik.errors.textarea,
            })}
            htmlFor="textarea"
          >
            Brief description of the destination
          </label>
          <input
            className={styles.textarea}
            type="textarea"
            name="textarea"
            id="textarea"
            {...formik.getFieldProps('textarea')}
          />
          {formik.touched.textarea && formik.errors.textarea ? (
            <div className={styles['validation-error']}>{formik.errors.textarea}</div>
          ) : null}
        </div>

        <div className={styles.submit}>
          <input type="submit" name="submit" value="submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
