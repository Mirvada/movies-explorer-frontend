import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useSearch } from '../../hooks/useSearch';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({ movies, savedMovies, handleDeleteMovie, isLoading }) => {
  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  const {
    values,
    setValues,
    handleChange,
    handleChangeCheckbox,
    handleSubmit,
    sortedMovies,
    isSearchLoading,
  } = useSearch({ isMoviesPage: false, isSavedPage: true, movies, setError });

  return (
    <>
      <section className='movies'>
        <SearchForm
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          handleChangeCheckbox={handleChangeCheckbox}
          onSubmit={handleSubmit}
          error={error}
          isSavedPage={true}
          isSearchLoading={isSearchLoading}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={sortedMovies}
            isSavedPage={true}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
            error={error}
            isSearchLoading={isSearchLoading}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
