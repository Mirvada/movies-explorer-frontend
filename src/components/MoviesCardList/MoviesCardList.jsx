import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({
  movies,
  savedMovies,
  isSavedPage,
  handleLikeMovie,
  handleDeleteMovie,
  error,
  isSearchLoading,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showCardCount, setShowCardCount] = useState(12);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handleResize = (event) => {
      setTimeout(() => setWidth(event.target.innerWidth), 300);
    };

    if (width <= 767) {
      setShowCardCount(5 + 2 * page);
    } else if (width <= 1200) {
      setShowCardCount(8 + 2 * page);
    } else {
      setShowCardCount(12 + 3 * page);
    }

    if (movies.length > showCardCount) {
      setShowMoreButton(true);
    } else {
      setShowMoreButton(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, page, showMoreButton, movies, showCardCount]);

  const handlePage = () => {
    setPage((page) => page + 1);
  };

  const isSaved = (movie) => {
    return savedMovies.reduce((acc, savedFilm) => {
      if (savedFilm.movieId === movie.id) {
        movie._id = savedFilm._id;
        return true;
      } else {
        return acc;
      }
    }, false);
  };

  const renderMovies = () => {
    if (isSavedPage) {
      return movies.map((movie) => {
        return (
          <MoviesCard
            movieData={movie}
            isSaved={isSaved(movie)}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            key={movie.movieId}
            name={movie.nameRU}
            img={movie.image}
            alt={movie.description}
            duration={
              new Date(movie.duration * 60 * 1000)
                .toISOString()
                .substring(12, 16)
                .split(':')
                .join('ч ') + 'м'
            }
          />
        );
      });
    }

    return movies.slice(0, showCardCount).map((movie) => {
      return (
        <MoviesCard
          movieData={movie}
          isSaved={isSaved(movie)}
          handleLikeMovie={handleLikeMovie}
          handleDeleteMovie={handleDeleteMovie}
          key={movie.id}
          name={movie.nameRU}
          img={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.description}
          duration={
            new Date(movie.duration * 60 * 1000)
              .toISOString()
              .substring(12, 16)
              .split(':')
              .join('ч ') + 'м'
          }
        />
      );
    });
  };

  return isSearchLoading ? (
    <Preloader />
  ) : (
    <>
      <ul className='movies__list'>
        {error.isError ? (
          <li className='movies__errors'>
            <h2 className='movies__title'>{error.message}</h2>
          </li>
        ) : (
          renderMovies()
        )}
      </ul>
      <div
        className={`movies__button-wrapper ${
          isSavedPage && 'movies__button-wrapper_type_saved'
        }`}
      >
        {!isSavedPage && showMoreButton && !error.isError ? (
          <button className='movies__button' type='button' onClick={handlePage}>
            Ещё
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default MoviesCardList;
