import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';

export function Krivorotko_teaching_methods () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div class="row my-4 text-center"><h1>Численные методы решения обратных и некорректных задач - годовой спецкурс кафедры математических методов геофизики ММФ НГУ, 3-6 курсы.</h1></div>
        <div class="row my-4 ps-4"><p class="lead">27 февраля стартует спецкурс для студентов 4-6 курсов ММФ «Численные методы решения обратных и некорректных задач»</p></div>
        <div class="row my-4 ps-4"><p class="lead">Руководитель: <b>Криворотько О.И.</b></p></div>
        <div class="row my-4 ps-4"><p class="lead">Место проведения: дистанционно Zoom</p></div>
        <div class="row my-4 ps-4"><p class="lead">Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div class="row my-4 ps-4"><p class="lead">Время проведения: четверг 10:30-12:00 (первое занятие - 27.02.2025)</p></div>
        <div class="row my-4 ps-4"><p class="lead">Изучаются численные методы решения обратных и некорректных задач биологии (иммунологии, эпидемиологии, фармакокинетики), медицины (термоакустика, биостатистика), математической физики (геофизики, цунами, акустики), экономики и социальных процессов. Особое внимание уделяется численной регуляризации обратных задач, оценкам условной устойчивости решений обратных задач, идентифицируемости.</p></div>
</section>
        </Container>
        

    <Footer />
    </>
    
    )}