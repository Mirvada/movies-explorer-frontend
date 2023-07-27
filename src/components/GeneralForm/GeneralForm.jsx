import React from 'react';
import './GeneralForm.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const GeneralForm = ({ setLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegisterPage = location.pathname === '/signup';

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  const handleRouteLanding = () => {
    navigate('/');
  };
  const handleRouteAuth = () => {
    if (isRegisterPage) {
      navigate('/signin');
    } else {
      setLoggedIn(true);
      navigate('/movies');
    }
  };
  return (
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
            onChange={handleChange}
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
            required
          />
          <span className='general-form__errors'>{errors.password}</span>
        </label>
        <button
          className={
            isRegisterPage
              ? 'general-form__button'
              : 'general-form__button general-form__button_type_register'
          }
          type='submit'
          disabled={!isValid}
          onClick={handleRouteAuth}
        >
          {isRegisterPage ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>
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
    </section>
  );
};

export default GeneralForm;
