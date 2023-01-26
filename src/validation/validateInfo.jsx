export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'Enter your First Name';
  }
  if (!values.lastName.trim()) {
    errors.lastName = 'Enter your Last Name';
  }
  else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = 'Enter a valid name';
  }

  if (!values.Email) {
    errors.Email = 'Enter a valid Email address';
  } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
    errors.Email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}
