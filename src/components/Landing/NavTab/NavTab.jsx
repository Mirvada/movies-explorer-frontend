import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        <li>
          <Link
            to='project'
            className='nav-tab__link'
            smooth={true}
            duration={400}
          >
            О проекте
          </Link>
        </li>
        <li>
          <Link
            to='techs'
            className='nav-tab__link'
            smooth={true}
            duration={400}
          >
            Технологии
          </Link>
        </li>
        <li>
          <Link
            to='student'
            className='nav-tab__link'
            smooth={true}
            duration={400}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
