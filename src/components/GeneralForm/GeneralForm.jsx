import React from 'react';
import './GeneralForm.css';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';

const GeneralForm = ({ onRegister, onLogin, isLoading, loggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegisterPage = location.pathname === '/signup';
  const { values, handleChange, handleChangeEmail, errors, isValid } =
    useFormAndValidation();

  const handleRouteLanding = () => {
    navigate('/');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isRegisterPage) {
      onRegister(values.email, values.password, values.name);
    } else {
      onLogin(values.email, values.password);
    }
  };

  return loggedIn ? (
    <Navigate to='/movies' />
  ) : (
    <section className='general-form'>
      <div className='general-form__logo' onClick={handleRouteLanding}></div>
      <h1 className='general-form__title'>
        {isRegisterPage ? 'Добро пожаловать!' : 'Рады видеть!'}
      </h1>
      <form className='general-form__form' onSubmit={handleSubmit}>
        {isRegisterPage ? (
          <label className='general-form__label'>
            Имя
            <input
              className={
                errors.name
                  ? 'general-form__input general-form__input_errors'
                  : 'general-form__input'
              }
              type='text'
              name='name'
              value={values.name ?? ''}
              onChange={handleChange}
              placeholder='Введите имя.'
              minLength='2'
              maxLength='30'
              required
            />
            <span className='general-form__errors'>{errors.name}</span>
          </label>
        ) : (
          <></>
        )}
        <label className='general-form__label'>
          E-mail
          <input
            className={
              errors.email
                ? 'general-form__input general-form__input_errors'
                : 'general-form__input'
            }
            name='email'
            type='email'
            value={values.email ?? ''}
            onChange={handleChangeEmail}
            placeholder='Введите email.'
            autoComplete='email'
            required
          />
          <span className='general-form__errors'>{errors.email}</span>
        </label>
        <label className='general-form__label'>
          Пароль
          <input
            className={
              errors.password
                ? 'general-form__input general-form__input_errors'
                : 'general-form__input'
            }
            name='password'
            type='password'
            value={values.password ?? ''}
            onChange={handleChange}
            placeholder='Введите пароль.'
            autoComplete='current-password'
            minLength='6'
            required
          />
          <span className='general-form__errors'>{errors.password}</span>
        </label>
        {isLoading ? (
          <Preloader />
        ) : (
          <button
            className={
              isRegisterPage
                ? 'general-form__button'
                : 'general-form__button general-form__button_type_register'
            }
            type='submit'
            disabled={!isValid || isLoading}
          >
            {isRegisterPage ? 'Зарегистрироваться' : 'Войти'}
          </button>
        )}
      </form>
      {isLoading ? (
        ''
      ) : (
        <>
          <div className='general-form__container'>
            <p className='general-form__text'>
              {isRegisterPage
                ? 'Уже зарегистрированы?'
                : 'Ещё не зарегистрированы?'}
            </p>
            <Link
              className='general-form__link'
              to={isRegisterPage ? '/signin' : '/signup'}
            >
              {isRegisterPage ? 'Войти' : 'Регистрация'}
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default GeneralForm;
