import React from 'react';
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
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };

  return (
    <form className='searchForm' onSubmit={handleSubmit}>
      <label className='searchForm__label'>
        <input
          className={`searchForm__input ${
            error.isEmptyInput && !isSavedPage && 'searchForm__input_type_empty'
          }`}
          type='search'
          name='search'
          value={values.search ?? ''}
          onChange={handleChange}
          placeholder='Фильм'
          autoComplete='off'
          required
        />
        <button className='searchForm__button' type='submit' />
      </label>
      <FilterCheckbox
        values={values}
        onChange={handleChangeCheckbox}
        isSavedPage={isSavedPage}
      />
    </form>
  );
};

export default SearchForm;
