import { useEffect, useState } from "react";
import { REGEX_FILTER, SEARCH_KEY } from "../utils/config";

export const useSearch = ({ isMoviesPage, isSavedPage, movies, setError }) => {
  const [values, setValues] = useState({
    search: '',
    isShort: false,
    movies: [],
  });

  const [isSearchLoading, setSearchLoading] = useState(false);

  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    function checkArrayAndSetError(arr) {
      if (arr.length === 0) {
        setError((err) => {
          return {
            ...err,
            isError: true,
            message: isMoviesPage ? 'Введите ключевое слово для начала поиска' : 'Нет избранных фильмов'
          }
        })
      }
    }

    if (isMoviesPage && SEARCH_KEY in localStorage) {
      const searchHistoryData = JSON.parse(localStorage.getItem(SEARCH_KEY));

      setValues({
        search: searchHistoryData.search,
        isShort: searchHistoryData.isShort,
        movies: searchHistoryData.movies,
      })

      setSortedMovies(searchHistoryData.movies)

      checkArrayAndSetError(searchHistoryData.movies);
    }

    if (isSavedPage) {
      setSortedMovies(movies)
      checkArrayAndSetError(movies)
    }

    if (!(SEARCH_KEY in localStorage) && !isSavedPage) {
      checkArrayAndSetError(values.movies);
    }

  }, [movies, setSortedMovies, setError, isMoviesPage, isSavedPage])



  function sortMovies(searchValues) {

    if (searchValues.isShort) {
      return movies
        .filter((movie) => movie.duration <= 40)
        .filter((movie) => {
          return movie.nameRU
            .trim()
            .toUpperCase()
            .replace(REGEX_FILTER, '')
            .includes(
              searchValues.search.trim().toUpperCase().replace(REGEX_FILTER, '')
            );
        });
    }

    return movies.filter(movie => movie.nameRU
      .trim()
      .replace(REGEX_FILTER, '')
      .toUpperCase()
      .includes(searchValues.search
        .trim()
        .replace(REGEX_FILTER, '')
        .toUpperCase()
      )
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleChangeCheckbox = (e) => {
    if (!values.search && isMoviesPage) {
      setError((err) => ({ ...err, isEmptyInput: true }))
      return setTimeout(() => setError((err) => ({ ...err, isEmptyInput: false })), 500)
    }

    setValues((values) => ({ ...values, isShort: e.target.checked }))
    handleSubmit({ ...values, isShort: e.target.checked })
  }

  function handleSubmit(searchValues) {
    setError({
      isError: false,
      message: '',
      isEmptyInput: false,
    })

    setSearchLoading(true)

    const sortedData = sortMovies(searchValues);

    setTimeout(() => {
      setSortedMovies(sortedData);

      if (sortedData.length === 0) {
        setError({
          isError: true,
          message: 'Ничего не найдено'
        })
      }

      setSearchLoading(false);
    }, 300)

    if (isMoviesPage) {
      localStorage.setItem(SEARCH_KEY, JSON.stringify({
        search: searchValues.search,
        isShort: searchValues.isShort,
        movies: sortedData,
      }))
    }
  }

  return { values, setValues, handleChange, handleChangeCheckbox, handleSubmit, sortedMovies, isSearchLoading }
};
