import { useState, useEffect } from 'react';
import {handleRegisterRequest} from "../service/Constant/action.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const useForm = (callback, validate) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting] = useState(false);

  const validatePhoneNumber = (phoneNumber: string) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const expectedLength = 11;
    if (digitsOnly.length === expectedLength) {
      setValues({...values, phone: phoneNumber});
      setErrors({...errors, phone: ''});
    } else {
      setErrors({...errors, phone: 'Invalid Phone Number'});
    }
  };


  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(name, value)
    if (name === 'confirmPassword') {
      // console.log('hhh')
      if (values.password !== value) {
        setErrors((prevData) => ({
          ...prevData,
          confirmPassword: 'Passwords do not match'
        }))
      }
    }

    if (name === 'phone') {
      validatePhoneNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(handleRegisterRequest({
      payload: values,
      navigate: Navigate
    }));

    // setErrors(validate(values));
    // setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    }
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
