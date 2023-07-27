import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project' id='project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__wripper'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__wripper'>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__progressBar'>
        <h3 className='about-project__indicator about-project__indicator_type_complited'>
          1 неделя
        </h3>
        <h3 className='about-project__indicator'>4 недели</h3>
        <p className='about-project__caption'>Back-end</p>
        <p className='about-project__caption'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
