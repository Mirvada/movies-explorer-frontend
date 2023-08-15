import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { REGEX_EMAIL } from '../../utils/config';
import Preloader from '../Preloader/Preloader';

const Profile = ({ onSignOut, onUpdateUser, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
  } = useFormAndValidation({
    name: currentUser.name,
    email: currentUser.email,
  });

  useEffect(() => {
    setValues((userData) => ({
      ...userData,
      name: currentUser.name,
      email: currentUser.email,
    }));
  }, [currentUser, setValues]);

  useEffect(() => {
    setIsValid(false);
    if (
      isValid &&
      (values.email !== currentUser.email || values.name !== currentUser.name)
    ) {
      setIsValid(true);
    }
  }, [setIsValid, currentUser, values]);

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

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser(values);
  };

  return (
    <div className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}</h1>
      <form className='profile__from' onSubmit={handleSubmit}>
        <label className='profile__label'>
          Имя
          <input
            className={
              errors.name
                ? 'profile__input profile__input_errors'
                : 'profile__input'
            }
            type='text'
            name='name'
            placeholder='Имя'
            value={values.name ?? currentUser.name}
            onChange={handleChange}
            minLength='2'
            maxLength='40'
            required
          />
          <span className='profile__errors'>{errors.name}</span>
        </label>
        <span className='profile__separator'></span>
        <label className='profile__label'>
          E-mail
          <input
            className={
              errors.email
                ? 'profile__input profile__input_errors'
                : 'profile__input'
            }
            type='email'
            name='email'
            placeholder='Введите новый e-mail'
            value={values.email ?? currentUser.email}
            onChange={handleChangeEmail}
            autoComplete='email'
            required
          />
          <span className='profile__errors'>{errors.email}</span>
        </label>
        {isLoading ? (
          <Preloader />
        ) : (
          <button
            className='profile__button'
            type='submit'
            disabled={!isValid || isLoading}
          >
            Редактировать
          </button>
        )}
      </form>
      <button
        className='profile__button profile__button_type_logOut'
        type='button'
        onClick={onSignOut}
      >
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default Profile;
