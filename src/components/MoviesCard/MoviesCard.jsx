import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({
  name,
  img,
  alt,
  duration,
  movieData,
  handleLikeMovie,
  handleDeleteMovie,
  isSaved,
}) => {
  const location = useLocation();

  const handleLikeClick = (evt) => {
    evt.stopPropagation();
    handleLikeMovie(movieData);
  };

  const handleDeleteClick = (evt) => {
    evt.stopPropagation();
    handleDeleteMovie(movieData);
  };

  const handleOpenTrailer = () => {
    window.open(movieData.trailerLink);
  };

  const locationName =
    location.pathname === '/movies' ? (
      <>
        <div className='movie__wrapper'>
          <h2 className='movie__name'>{name}</h2>
          <button
            className={
              isSaved
                ? 'movie__button movie__button_active'
                : 'movie__button movie__button_type_like'
            }
            type='button'
            onClick={isSaved ? handleDeleteClick : handleLikeClick}
          />
        </div>
        <time className='movie__duration'>{duration}</time>
      </>
    ) : (
      <div className='movie__conteiner'>
        <div className='movie__wrapper'>
          <h2 className='movie__name'>{name}</h2>
          <button
            className='movie__button movie__button_type_delete'
            type='button'
            onClick={handleDeleteClick}
          />
        </div>
        <time className='movie__duration'>{duration}</time>
      </div>
    );

  return (
    <li className='movie' onClick={handleOpenTrailer}>
      <img className='movie__preview' src={img} alt={alt} />
      {locationName}
    </li>
  );
};

export default MoviesCard;
