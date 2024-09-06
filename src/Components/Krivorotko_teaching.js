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
</section>
        </Container>
        

    <Footer />
    </>
    
    )}