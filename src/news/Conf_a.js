import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';


export function Conf_a () {
  return (
        <>
    <NaviBarv2 />
    <Container>
    <div class="row my-4 ps-4"><h1>14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024 года</h1></div>
    <div class="row ps-4 my-4"><p class="lead">Сотрудники лаборатории примут участие в 14-я Международной мультиконференции "Биоинформатика регуляции и структуры геномов/системная биология", которая пройдет в Новосибирском Академгородке 5-10 августа 2024 года.</p></div>
    <div class="row ps-4 my-4"><p class="lead">В рамках работы конференции будет организована Секция «Математическая эпидемиология» (<a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/systems-computational-biology/">симпозиум "Системная компьютерная биология"</a>).</p></div>
    <div class="row ps-4 my-4"><p class="lead">Более подробная информация приведена на <a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/schedule/">сайте конференции.</a></p></div>
    <div class="row ps-4 my-4"><p>13.06.2024</p></div>
    </Container>
    <Footer />
    </>
    
    )}