import React from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
import icon from '../../../images/icon_user.svg';
import iconClose from '../../../images/icon_menu-close.svg';

const BurgerMenu = ({ active, setActive }) => {
  return (
    <div className={active ? 'menu menu_active' : 'menu'}>
      <div className='menu__blur'>
        <div className='menu__content'>
          <button
            className='menu__button-close'
            src={iconClose}
            type='button'
            onClick={() => setActive(false)}
          />
          <ul className='menu__list'>
            <li className='menu__item'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${isActive ? 'menu__link menu__link_active' : 'menu__link'}`
                }
              >
                Главная
              </NavLink>
            </li>
            <li className='menu__item'>
              <NavLink
                to='/movies'
                className={({ isActive }) =>
                  `${isActive ? 'menu__link menu__link_active' : 'menu__link'}`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className='menu__item'>
              <NavLink
                to='/saved-movies'
                className={({ isActive }) =>
                  `${isActive ? 'menu__link menu__link_active' : 'menu__link'}`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink to='/profile' className='menu__link menu__link_type_profile'>
            Аккаунт
            <img className='menu__icon-link' src={icon} alt='аккаунт' />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
