import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {
  const {
    isSavedPage,
    handleChange,
    handleChangeCheckbox,
    values,
    onSubmit,
    error,
    isSearchLoading,
  } = props;

  const [isError, setError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!values.search && !isSavedPage) {
      setError(true);
      return setTimeout(() => setError(false), 600);
    }

    onSubmit(values);
  };

  return (
    <form className='searchForm' onSubmit={handleSubmit}>
      <label className='searchForm__label'>
        <input
          className={`searchForm__input ${
            (error.isEmptyInput || isError) &&
            !isSavedPage &&
            'searchForm__input_type_empty'
          }`}
          type='search'
          name='search'
          value={values.search ?? ''}
          onChange={handleChange}
          placeholder={
            isError
              ? 'Поле не может быть пустым. Нужно ввести ключевое слово'
              : 'Введите ключевое слово'
          }
          autoComplete='off'
        />
        <button
          className='searchForm__button'
          type='submit'
          disabled={isSearchLoading}
        />
      </label>
      <FilterCheckbox
        values={values}
        onChange={handleChangeCheckbox}
        isSavedPage={isSavedPage}
        isSearchLoading={isSearchLoading}
      />
    </form>
  );
};

export default SearchForm;
