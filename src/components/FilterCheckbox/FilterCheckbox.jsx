import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ values, onChange, isSearchLoading }) => {
  return (
    <label className='checkbox__label'>
      <input
        className='checkbox__input'
        type='checkbox'
        name='isShort'
        checked={values.isShort}
        onChange={onChange}
        disabled={isSearchLoading}
      />
      <span className='checkbox__inner'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
