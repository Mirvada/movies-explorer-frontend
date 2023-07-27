import React from 'react';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Profile = ({ onSignOut }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  return (
    <div className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
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
            value={values.name ?? 'Виталий'}
            onChange={handleChange}
            minLength='2'
            maxLength='40'
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
            value={values.email ?? 'pochta@yandex.ru'}
            onChange={handleChange}
            autoComplete='email'
          />
          <span className='profile__errors'>{errors.email}</span>
        </label>
        <button className='profile__button' type='submit' disabled={!isValid}>
          Редактировать
        </button>
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
