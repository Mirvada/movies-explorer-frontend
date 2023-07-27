import React from 'react';
import './Footer.css';
import {Link, useLocation} from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isSaveMoviesPage = location.pathname === '/saved-movies'
  return (
    <footer className='footer'>
      <p className={isSaveMoviesPage ? 'footer__text footer__text_type_savedMovies' : 'footer__text'}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copyright'>Александра Коляниченко &copy; 2023</p>
        <nav className='footer__links'>
          <Link
            className='footer__link'
            to='https://practicum.yandex.ru/'
            target='_blank'
          >
            Яндекс.Практикум
          </Link>
          <Link
            className='footer__link'
            to='https://github.com/Mirvada?tab=repositories'
            target='_blank'
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
