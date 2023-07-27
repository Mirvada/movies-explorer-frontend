import React from 'react';
import './GeneralForm.css';
import logo from '../../images/logo.svg';
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

  const handleRoute = () => {
    if (isRegisterPage) {
      navigate('/signin');
    } else {
      setLoggedIn(true);
      navigate('/movies');
    }
  };
  return (
    <section className='generalForm'>
      <Link to='/' className='generalForm__link_type_logo'>
        <img className='generalForm__logo' src={logo} alt='логотип' />
      </Link>
      <h1 className='generalForm__title'>
        {isRegisterPage ? 'Добро пожаловать!' : 'Рады видеть!'}
      </h1>
      <form className='generalForm__form' onSubmit={handleSubmit}>
        {isRegisterPage ? (
          <label className='generalForm__label'>
            Имя
            <input
              className={
                errors.name
                  ? 'generalForm__input generalForm__input_errors'
                  : 'generalForm__input'
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
            <span className='generalForm__errors'>{errors.name}</span>
          </label>
        ) : (
          <></>
        )}
        <label className='generalForm__label'>
          E-mail
          <input
            className={
              errors.email
                ? 'generalForm__input generalForm__input_errors'
                : 'generalForm__input'
            }
            name='email'
            type='email'
            value={values.email ?? ''}
            onChange={handleChange}
            placeholder='Введите email.'
            autoComplete='email'
            required
          />
          <span className='generalForm__errors'>{errors.email}</span>
        </label>
        <label className='generalForm__label'>
          Пароль
          <input
            className={
              errors.password
                ? 'generalForm__input generalForm__input_errors'
                : 'generalForm__input'
            }
            name='password'
            type='password'
            value={values.password ?? ''}
            onChange={handleChange}
            placeholder='Введите пароль.'
            autoComplete='current-password'
            required
          />
          <span className='generalForm__errors'>{errors.password}</span>
        </label>
        <button
          className={
            isRegisterPage
              ? 'generalForm__button'
              : 'generalForm__button generalForm__button_type_register'
          }
          type='submit'
          disabled={!isValid}
          onClick={handleRoute}
        >
          {isRegisterPage ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>
      <div className='generalForm__container'>
        <p className='generalForm__text'>
          {isRegisterPage
            ? 'Уже зарегистрированы?'
            : 'Ещё не зарегистрированы?'}
        </p>
        <Link
          className='generalForm__link'
          to={isRegisterPage ? '/signin' : '/signup'}
        >
          {isRegisterPage ? 'Войти' : 'Регистрация'}
        </Link>
      </div>
    </section>
  );
};

export default GeneralForm;
