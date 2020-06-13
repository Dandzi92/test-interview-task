export const formValidate = values => {
  const errors = {};
  if (!values.destination) {
    errors.destination = 'Required field!';
  }

  if (!values.link) {
    errors.link = 'Required field!';
  }

  if (!values.textarea) {
    errors.textarea = 'Required field!';
  } else if (values.textarea.length > 35) {
    errors.textarea = 'Too verbose description! :)';
  }
  return errors;
};
