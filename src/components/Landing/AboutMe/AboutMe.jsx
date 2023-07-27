import React from 'react';
import './AboutMe.css';
import myPhoto from '../../../images/myPhoto.png';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className='student' id='student'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__container'>
        <img className='student__photo' src={myPhoto} alt='моя фотография' />
        <p className='student__name'>Виталий</p>
        <p className='student__profession'>Фронтенд-разработчик, 30 лет</p>
        <p className='student__about'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link
          className='student__link-repo'
          to='https://github.com/Mirvada?tab=repositories'
          target='_blank'
        >
          Github
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
