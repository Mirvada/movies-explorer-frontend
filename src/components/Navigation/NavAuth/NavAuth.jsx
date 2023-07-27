import React from 'react';
import './NavAuth.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../../images/icon_user.svg';
import NavBar from '../NavBar/NavBar';

const NavAuth = () => {
  return (
    <>
      <NavBar />
      <nav className='navigation'>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            `${
              isActive
                ? 'navigation__movies navigation__movies_active'
                : 'navigation__movies'
            }`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={({ isActive }) =>
            `${
              isActive
                ? 'navigation__movies navigation__movies_active'
                : 'navigation__movies'
            }`
          }
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link to='/profile' className='navigation__profile-link'>
        Аккаунт
        <img className='navigation__profile-icon' src={icon} alt='аккаунт' />
      </Link>
    </>
  );
};

export default NavAuth;
