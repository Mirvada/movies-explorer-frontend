import { useState, useCallback } from 'react';
import { REGEX_EMAIL } from '../utils/config';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const handleChangeEmail = (evt) => {
    handleChange(evt);

    const { name, value } = evt.target;

    if (name === 'email' && !REGEX_EMAIL.test(value)) {
      setIsValid(false);
      setErrors((prevState) => ({
        ...prevState,
        email: 'Почта должна быть в формате: pochta@domen.ru',
      }));
    }
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, handleChangeEmail, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}