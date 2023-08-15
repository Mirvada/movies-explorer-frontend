import React from 'react';
import './Portfolio.css';
import icon from '../../../images/arrow-icon.svg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav>
        <ul className='portfolio__links'>
          <li>
            <Link
              className='portfolio__link'
              to='https://mirvada.github.io/how-to-learn/'
              target='_blank'
            >
              Статичный сайт
              <img className='portfolio__icon' src={icon} alt='перейти' />
            </Link>
          </li>
          <li>
            <Link
              className='portfolio__link'
              to='https://mirvada.github.io/russian-travel/'
              target='_blank'
            >
              Адаптивный сайт
              <img className='portfolio__icon' src={icon} alt='перейти' />
            </Link>
          </li>
          <li>
            <Link
              className='portfolio__link'
              to='https://mesto.sasha.nomoreparties.sbs/signin'
              target='_blank'
            >
              Одностраничное приложение
              <img className='portfolio__icon' src={icon} alt='перейти' />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
