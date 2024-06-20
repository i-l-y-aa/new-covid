import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_b from "../images/news/conf_b.PNG"


export function Conf_b_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_b} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>The acceptance of abstracts for the conference "Mathematics in Medicine" continues</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">The Federal State Budgetary Institution of Science S.L. Sobolev Institute of Mathematics of the Siberian Branch of the Russian Academy of Sciences and the Federal State Budgetary Scientific Institution Federal Research Center for Fundamental and Translational Medicine are holding the Fourth All-Russian Conference with international participation "Mathematics in Medicine".</p></div>
    <div class="row my-4"><p class="lead">The conference combines the following topics: mathematical algorithms in big data processing; application of mathematical statistics methods and modern statistical packages (SPSS, ORANGE and others) in the processing and interpretation of medical information; analysis of the results of transcriptomic and/or proteomic studies; application of neural networks and artificial intelligence systems in various fields of medicine; application of mathematical methods modeling in various fields of medicine (cardiology, virology, urology, etc.).</p></div>
    <div class="row my-4"><p class="lead">June 30 is the deadline for submitting abstracts and registering on the website.</p></div>
    <div class="row my-4"><p class="lead">The conference will be held on October 1-4, 2024 at the S.L. Sobolev Institute of Mathematics SB RAS, Akademgorodok, Novosibirsk.</p></div>
    <div class="row my-4"><p class="lead">More detailed information is available on the <a rel="noopener" target="_blank" href="http://conf.nsc.ru/mmed2024/ru/general_info">conference website.</a></p></div>
    <div class="row my-4"><p>17.06.2024</p></div>
    </Container>
    <Footer_En />
    </>
    
    )}