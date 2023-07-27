import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import NavLanding from '../Navigation/NavLanding/NavLanding';
import NavAuth from '../Navigation/NavAuth/NavAuth';
import { Outlet, Link } from 'react-router-dom';

const Header = ({ isLanding, loggedIn }) => {
  return (
    <>
      <header className={!isLanding ? 'header' : 'header header__theme_sapphire'}>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='логотип' />
        </Link>
        {loggedIn ? <NavAuth /> : <NavLanding />}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
