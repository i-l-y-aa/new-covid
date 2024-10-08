import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';

export function Krivorotko_teaching () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div class="row my-4 text-center"><h1>Обратные задачи: теория и практика</h1></div>
        <div class="row my-4 ps-4"><p class="lead">Курс на <a rel="noopener" target="_blank" href="https://cytometry.ru/biomed/schedule.html">кафедре биомедицинской физики Новосибирского государственного университета</a> для магистрантов 5-6 курса.</p></div>
<div class="row my-4 ps-4"><p class="lead">Авторы: <a rel="noopener" target="_blank" href="https://sites.google.com/site/yurkin/home">к.ф.-м.н. Юркин М.А.</a>, <a rel="noopener" target="_blank" href="/Krivorotko_info">д.ф.-м.н. Криворотько О.И.</a>.</p></div>
<div class="row my-4 ps-4"><p class="lead">Сначала приведено краткое содержание, ниже - чуть подробнее расписана каждая тема. В подробном плане ссылки на названии темы ведут на презентации в формате PowerPoint. Доступна запись <a rel="noopener" target="_blank" href="https://youtube.com/playlist?list=PLPJ7DMh8UqNP9D98Urd5D1ZIzHTxVvb7j">лекций</a> (от 2023 г.). Основная литература доступна по <a rel="noopener" target="_blank" href="http://cyto.kinetics.nsc.ru/yurkin/InverseProblems/Literature/">ссылке</a>.</p></div>
<div class="row my-4 ps-4"><h2>Введение</h2></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://covid19-modeling.ru/data/InvProb_01.pptx">1. Введение в курс</a></h4></div>
<div class="row my-2 ps-4"><p class="">1.1. Цели и структура курса.</p>
<p>1.2. Классификация обратных задач.</p>
<p>1.3. Примеры обратных задач.</p>
<p>1.4. Корректность обратной задачи: существование, единственность и устойчивость.</p>
<p>1.5. Обсуждение конкретных примеров обратных задач в дипломных работах студентов.</p></div>
<div class="row my-4 ps-4"><h2>Параметрическое описание искомой функции</h2></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://covid19-modeling.ru/data/InvProb_02.pptx">2. Задача регрессии при анализе экспериментальных данных</a></h4></div>
<div class="row my-2 ps-4"><p>2.1. Правильная постановка задачи регрессии в терминах мат. статистики - залог достоверного результата обработки экспериментальных данных.</p>
<p>2.2. Линейные и нелинейные модели.</p>
<p>2.3. Стандартные предположения о погрешностях экспериментальных данных - нормальное распределение и независимость.</p>
<p>2.4. Сведение к методу наименьших квадратов. Использование ожидаемых погрешностей экспериментальных данных в качестве веса.</p>
<p>2.5. Стандартные распределения вероятности.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://covid19-modeling.ru/data/InvProb_03.pptx">3. Линейная регрессия</a></h4></div>
<div class="row my-2 ps-4"><p>3.1. Простейший пример: один параметр.</p>
<p>3.2. Прямое решение задачи минимизации.</p>
<p>3.3. Оценка погрешности определения параметров: стандартные ошибки, корреляции и доверительные интервалы.</p>
<p>3.4. Доверительные интервалы на модельную (теоретическую) кривую.</p>
<p>3.5. Разные подходы к оценке погрешностей - один и тот же результат.</p>
<p>3.6. Усложнение линейной регрессии.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://covid19-modeling.ru/data/InvProb_04.pptx">4. Задача минимизации при нелинейной регрессии</a></h4></div>
<div class="row my-2 ps-4"><p>4.1. Наличие многих локальных минимумов в общем случае.</p>
<p>4.2. Алгоритмы поиска глобального минимума: Левенберга-Марквардта, мультистарта, DIRECT и др.</p>
<p>4.3. Классификация алгоритмов по использованию ими производной от целевой функции.</p>
<p>4.4. Необходимость исследования целевой функции (зависимость суммы квадратов отклонений от параметров) для конкретной задачи. Проверка применимости используемого алгоритма.</p>
<p>4.5. Разделяемые параметры.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://covid19-modeling.ru/data/InvProb_05.pptx">5. Оценка погрешности определения параметров</a></h4></div>
<div class="row my-2 ps-4"><p>5.1. Линейное приближение.</p>
<p>5.2. Контуры правдоподобия.</p>
<p>5.3. Байесовский подход.</p>
<p>5.4. Использование информации о поверхности целевой функции, полученной в ходе минимизации.</p>
<p>5.5. Метод Монте-Карло.</p>
<p>5.6. Применимость линейного приближения.</p></div>

<div class="row my-4 ps-4"><h2>Применение полученных знаний в дипломных работах студентов</h2></div>
<div class="row my-4 ps-4"><p class="lead">В качестве экзаменационной работы студенты должны предоставить главу дипломной работы (для 5-го курса - предварительную), в которой описывается обработка экспериментальных данных. При проверке основное внимание будет уделяться на статистическую достоверность полученных результатов и выводов.</p></div>
</section>
        </Container>
        

    <Footer />
    </>
    
    )}