import React from 'react';
import './PageNotFound.css';
import { Link, useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <h3 className='not-found__title'>
        <span>404</span>
      </h3>
      <p className='not-found__text'>Страница не найдена</p>
      <Link
        className='not-found__button'
        onClick={() => navigate(-1, { replace: true })}
      >
        Назад
      </Link>
    </div>
  );
};

export default PageNotFound;
