import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <>
      <main>
        <section className='movies'>
          <SearchForm />
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
