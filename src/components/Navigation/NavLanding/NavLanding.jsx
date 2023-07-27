import React from 'react';
import './NavLanding.css';
import { Link } from 'react-router-dom';

const NavLanding = () => {
  return (
    <nav className='navigation__container'>
      <Link
        to='/signup'
        className='navigation__link navigation__link_type_register'
      >
        Регистрация
      </Link>
      <Link
        to='/signin'
        className='navigation__link navigation__link_type_login'
      >
        Войти
      </Link>
    </nav>
  );
};

export default NavLanding;
