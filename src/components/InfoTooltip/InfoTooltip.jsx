import React from 'react';
import './InfoTooltip.css';
import ok from '../../images/ok-icon.svg';
import fail from '../../images/fail-icon.svg';

const InfoTooltip = ({ isOpen, onClose, isErrors }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
      <div
        className='popup__container popup__info-tooltip'
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className='popup__button-close' onClick={onClose} />
        <img
          src={isErrors.errors ? fail : ok}
          alt={isErrors.errors ? 'красный крест' : 'зеленая галочка'}
          className='popup__img'
        />
        <p className='popup__info-text'>
          {isErrors.errors ? isErrors.errorsText : 'Успешно'}
        </p>
      </div>
    </div>
  );
};

export default InfoTooltip;
