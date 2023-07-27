import React, { useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = (props) => {
  const location = useLocation();

  const locationName =
    location.pathname === '/movies' ? (
      <>
        <div className='movie__wrapper'>
          <h2 className='movie__name'>{props.name}</h2>
          <button
            className={
              props.like
                ? 'movie__button movie__button_active'
                : 'movie__button movie__button_type_like'
            }
            type='button'
          />
        </div>
        <time className='movie__duration'>{props.duration}</time>
      </>
    ) : (
      <div className='movie__conteiner'>
        <div className='movie__wrapper'>
          <h2 className='movie__name'>{props.name}</h2>
          <button
            className='movie__button movie__button_type_delete'
            type='button'
          />
        </div>
        <time className='movie__duration'>{props.duration}</time>
      </div>
    );

  return (
    <li className='movie'>
      <img className='movie__preview' src={props.img} alt='обложка фильма' />
      {locationName}
    </li>
  );
};

export default MoviesCard;
