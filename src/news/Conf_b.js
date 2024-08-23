import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_b from "../images/news/conf_b.PNG"


export function Conf_b () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_b} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Продолжается приём тезисов на конференцию «Математика в медицине»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Федеральное государственное бюджетное учреждение науки Институт математики им. С.Л. Соболева Сибирского отделения Российской академии наук и Федеральное государственное бюджетное научное учреждение «Федеральный исследовательский центр фундаментальной и трансляционной медицины» проводят Четвертую всероссийскую конференцию с международным участием «Математика в медицине».</p></div>
    <div class="row my-4"><p class="lead">Конференция объединяет в себе следующий темы: математические алгоритмы в обработке больших данных; применение методов математической статистики и современных статистических пакетов (SPSS, ORANGE и другие) при обработке и интерпретации медицинской информации; анализ результатов транскриптомных и/или протеомных исследований; применение нейронных сетей и систем искусственного интеллекта в различных областях медицины; применение методов математического моделирования в различных областях медицины (кардиологии, вирусологии, урологии и т.д.).</p></div>
    <div class="row my-4"><p class="lead">30 июня – крайний срок подачи тезисов и регистрации на сайте.</p></div>
    <div class="row my-4"><p class="lead">Конференция пройдёт 1-4 октября 2024 года в институте математики им. С.Л. Соболева СО РАН, Академгородок, Новосибирск.</p></div>
    <div class="row my-4"><p class="lead">Более подробная информация приведена на <a rel="noopener" target="_blank" href="http://conf.nsc.ru/mmed2024/ru/general_info">сайте конференции.</a></p></div>
    <div class="row my-4"><p>17.06.2024</p></div>
  
    </Container>
    <Footer />
    </>
    
    )}