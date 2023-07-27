import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='navTab'>
      <ul className='navTab__list'>
        <li>
          <Link
            to='project'
            className='navTab__link'
            smooth={true}
            duration={400}
          >
            О проекте
          </Link>
        </li>
        <li>
          <Link
            to='techs'
            className='navTab__link'
            smooth={true}
            duration={400}
          >
            Технологии
          </Link>
        </li>
        <li>
          <Link
            to='student'
            className='navTab__link'
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
