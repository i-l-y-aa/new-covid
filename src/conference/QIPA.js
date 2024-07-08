import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import qipa from "../images/conf/qipa.PNG"


export function QIPA () {
  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={qipa} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>X Международная конференция «Квазилинейные уравнения, обратные задачи и их приложения» пройдет в Образовательном центре «Сириус», отеле «Омега Сириус» с 17 по 21 октября 2024 года .</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Сотрудники лаборатории примут участие в X Международной конференции «Квазилинейные уравнения, обратные задачи и их приложения».</p></div>
    <div class="row ps-4 my-4"><p class="lead">Более подробная информация указана на <a rel="noopener" target="_blank" href="https://qipa2024.mipt.ru/">сайте конференции</a>.</p></div>
    <div class="row ps-4 my-4"><p>13.06.2024</p></div>
    </Container>
    <Footer />
    </>
    
    )}