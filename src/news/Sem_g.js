import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_g() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>12 сентября пройдёт семинар лаборатории на тему «Особенности использования физически-информированных нейронных сетей для решения задач моделирования движения несжимаемой жидкости»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В докладе рассматривается возможность применения подхода с
использованием физически-информированных нейронных сетей, в англоязычной
литературе Physics Informed Neural Network (PINN), для решения прямых и обратных
задач моделирования движения вязкой несжимаемой жидкости с использованием
системы уравнений Навье-Стокса и уравнений по теории мелкой воды. В работе
проведены исследования применимости бессеточного метода частиц для решения
модельных задач (течение Коважного, вихрь Тейлора-Грина, геофизическое течение
Бельтрами, обтекание цилиндра для заданных чисел Рейнольдса), допускающих
аналитическое решение для системы уравнений Навье-Стокса [1,2].<br></br>
Также выполнено исследование с целью разработки тематической PINN для
изучения гидрологии рек по уравнениям теории мелкой воды. В качестве примеров
нами рассматривались задачи обрушения столба жидкости воды, течения воды в
прямоугольном канале, течение воды в сечении русла реки с заданным профилем.
Для решения выбранных задач в качестве исходных данных задавались коэффициент
шероховатости дна, значение расходов воды, уровни поверхности воды.<br></br>
Общее количество точек в расчетной области выбиралось равным около 2
миллионов по уже обученной модели с целью воспроизведения детальной структуры
течения в различные моменты времени. Количество эпох для обучения нейронной
сети для разных задач задавалось равным от 20 000 до 300 000. Максимальное время
обучения нейронной сети составило 4 часа. Результатом предсказания PINN
являлись значения двух компонент скорости, уровень воды. Для получения точного
решения, когда невозможно получить аналитическое решение, нами дополнительно
использовались открытые расчетные коды для вычислительной гидродинамики
(OpenFOAM, Delft3D, NekTar++).<br></br>
С целью изучения вопроса точности предсказания PINN обсуждается вопрос
применимости различных архитектур нейронных сетей (FNN, DeepONet, FNO),
различных методов оптимизации целевой функции. Нами была проведена оценка
влияния выбора гиперпараметров (количество слоев и нейронов, количество точек в
расчетной области и на границах, весовые коэффициенты в функции потерь) для
нейронной сети на точность предсказания метрики MAE.<br></br>
Программное решение реализовано с использованием языка Python,
библиотек DeepXDE, TensorFlow, Numpy, Matplotlib, Jupyter Notebook, других.
Расчеты выполнялись на рабочей станции с Nvidia GPU Geforce RTX 3070.<br></br>
В заключении доклада формулируются направления дальнейшего
исследования PINN с использованием технологии трансферного обучения, с
возможностью параметризации геометрических свойств обтекаемого тела.</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Стрижак Сергей Владимирович.</b></p></div>
        <div className="row my-4"><p className="lead">Соавтор: <b>Кошелев Константин Борисович.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/PINN-Fluid Dynamics-SSV-12.09.2024.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>11.09.2024</p></div>

      </Container>
      <Footer />
    </>
  );
}