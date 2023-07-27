import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <form className='seachForm'>
      <label className='seachForm__label'>
        <input className='seachForm__input' type='search' placeholder='Фильм' />
        <button className='seachForm__button' type='button' />
      </label>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
