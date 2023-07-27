import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import movies from '../../utils/movies.js';
import saveMovies from '../../utils/saveMovies';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = () => {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const [showCardCount, setShowCardCount] = useState(12);

  useEffect(() => {
    const handleResize = (event) => {
      setTimeout(() => setWidth(event.target.innerWidth), 300);
    };

    if (width <= 767) {
      setShowCardCount(5);
    } else if (width <= 1200) {
      setShowCardCount(8);
    } else {
      setShowCardCount(12);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const isSavedPage = location.pathname === '/saved-movies';

  const locationName = !isSavedPage
    ? movies.slice(0, showCardCount).map((card) => {
        return (
          <MoviesCard
            key={card._id}
            name={card.name}
            img={card.img}
            duration={card.duration}
            like={card.likes}
          />
        );
      })
    : saveMovies.slice(0, showCardCount).map((card) => {
        return (
          <MoviesCard
            key={card._id}
            name={card.name}
            img={card.img}
            duration={card.duration}
            like={card.likes}
          />
        );
      });

  return (
    <>
      <ul className='movies__list'>{locationName}</ul>
      <div
        className={`movies__button-wrapper ${
          isSavedPage && 'movies__button-wrapper_type_saved'
        }`}
      >
        {!isSavedPage && (
          <button className='movies__button' type='button'>
            Ещё
          </button>
        )}
      </div>
    </>
  );
};

export default MoviesCardList;
