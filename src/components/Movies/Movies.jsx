import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { useSearch } from '../../hooks/useSearch';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  movies,
  savedMovies,
  handleLikeMovie,
  handleDeleteMovie,
  isLoading,
}) => {
  const [error, setError] = useState({
    isError: false,
    message: '',
    isEmptyInput: false,
  });

  const {
    values,
    setValues,
    handleChange,
    handleChangeCheckbox,
    handleSubmit,
    sortedMovies,
    isSearchLoading,
  } = useSearch({ isMoviesPage: true, isSavedPage: false, movies, setError });

  return (
    <>
      <main>
        <section className='movies'>
          <SearchForm
            values={values}
            setValues={setValues}
            handleChange={handleChange}
            handleChangeCheckbox={handleChangeCheckbox}
            onSubmit={handleSubmit}
            error={error}
          />
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={sortedMovies}
              savedMovies={savedMovies}
              isSavedPage={false}
              handleLikeMovie={handleLikeMovie}
              handleDeleteMovie={handleDeleteMovie}
              error={error}
              isSearchLoading={isSearchLoading}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
