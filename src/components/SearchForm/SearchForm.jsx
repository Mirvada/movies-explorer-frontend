import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const SearchForm = () => {
  const { values, handleChange, resetForm } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  return (
    <form className='seachForm' onSubmit={handleSubmit}>
      <label className='seachForm__label'>
        <input
          className='seachForm__input'
          type='search'
          name='search'
          value={values.search ?? ''}
          onChange={handleChange}
          placeholder='Фильм'
        />
        <button className='seachForm__button' type='submit' />
      </label>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
