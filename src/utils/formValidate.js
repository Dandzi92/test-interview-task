export const formValidate = values => {
  const errors = {};
  if (!values.destination.trim()) {
    errors.destination = 'Required field!';
  }

  if (!values.link.trim()) {
    errors.link = 'Required field!';
  }

  if (!values.textarea.trim()) {
    errors.textarea = 'Required field!';
  } else if (values.textarea.length > 35) {
    errors.textarea = 'Too verbose description! :)';
  }
  return errors;
};
