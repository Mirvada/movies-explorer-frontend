import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='aboutProject' id='project'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__container'>
        <div className='aboutProject__wripper'>
          <h3 className='aboutProject__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutProject__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProject__wripper'>
          <h3 className='aboutProject__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutProject__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProject__progressBar'>
        <h3 className='aboutProject__indicator aboutProject__indicator_type_complited'>
          1 неделя
        </h3>
        <h3 className='aboutProject__indicator'>4 недели</h3>
        <p className='aboutProject__captcha'>Back-end</p>
        <p className='aboutProject__captcha'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
