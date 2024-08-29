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
        <div class="row my-4 ps-4"><h1>Обратные задачи: теория и практика</h1></div>
<div class="row my-4 ps-4"><p class="lead">Лектор: <a rel="noopener" target="_blank" href="/Krivorotko_info">Криворотько О.И.</a>.</p></div>

</section>
        </Container>
        

    <Footer />
    </>
    
    )}