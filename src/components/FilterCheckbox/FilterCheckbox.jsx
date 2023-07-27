import React, { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className='checkbox__label'>
      <input
        className='checkbox__input'
        type='checkbox'
        defaultChecked='checked'
      />
      <span className='checkbox__inner'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
