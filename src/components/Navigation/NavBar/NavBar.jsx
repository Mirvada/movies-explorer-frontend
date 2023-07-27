import React, { useState } from 'react';
import './NavBar.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const NavBar = () => {
  const [menuActive, setMenuArctive] = useState(false);
  return (
    <>
      <nav className='nav-bar'>
        <button
          className='nav-bar__icon'
          onClick={() => setMenuArctive(!menuActive)}
          type='button'
        />
      </nav>
      <BurgerMenu active={menuActive} setActive={setMenuArctive} />
    </>
  );
};

export default NavBar;
