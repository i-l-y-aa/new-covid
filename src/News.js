import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
    OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Footer from './Components/Footer' ;
import NaviBarv2 from './Components/NaviBarv2';
import sem_a from "./images/news/sem_a.PNG"
import conf_a from "./images/news/conf_a.PNG"
import NewsData from './Components/NewsData'
import conf_b from "./images/news/conf_b.PNG"
  
export function News () {

    const postsA1 = [
      {id: 1, name: <ul class="cards_t ">
      <li class="cards_item_t">
        <article class="card_t">
          <div class="card_image_t">
            <img src={conf_a} alt="Конференция"></img>
          </div>
          <div class="card_content_t">
          <h5 class="card_title_t">14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024</h5>
          <h5 class="card_descr_t lead">13.06.2024</h5>
          <span class="card_btn_t "><a href="/Conf_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
          </div>
        </article>
      </li></ul>,eventKey: "A1",eventKey: "all"},
      {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={conf_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">Открыта подача тезисов на конференцию «Математика в медицине»</h5>
        <h5 class="my-3 card_descr_t lead">17.06.2024 </h5>
        <span class="my-1 card_btn_t "><a href="/Conf_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A1",eventKey: "all"}
     
    ]
    const postsA2 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h5>
    <h5 class="my-3 card_descr_t lead">21.06.2024 </h5>
    <span class="my-1 card_btn_t "><a href="/Sem_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 2, name: <ul class="cards_t"><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h5>
        <h5 class="card_descr_t lead">13.06.2024</h5>
        <span class="card_btn_t"><a class="lead" style={{'textDecoration': 'none'}} href="/Sem_a">Читать полностью > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"}
    ]
    const postsQ1 = [
      
    ]
    const postsQ2 = [
     
    ]
    const postsQ3 = [
      
    ]
    const postsQ4 = [
      
     

    ]  
const postsall  = [
  {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h5>
    <h5 class="my-3 card_descr_t lead">21.06.2024 </h5>
    <span class="my-1 card_btn_t "><a href="/Sem_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Продолжается приём тезисов на конференцию «Математика в медицине»</h5>
    <h5 class="my-3 card_descr_t lead">17.06.2024 </h5>
    <span class="my-1 card_btn_t "><a href="/Conf_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 3, name: <ul class="cards_t ">
  <li class="cards_item_t">
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_a} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024</h5>
      <h5 class="card_descr_t lead">13.06.2024</h5>
      <span class="card_btn_t "><a href="/Conf_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
      </div>
    </article>
  </li></ul>,eventKey: "A1",eventKey: "all"},
{id: 4, name: <ul class="cards_t"><li class="cards_item_t">
<article class="card_t">
  <div class="card_image_t">
    <img src={sem_a} alt="Семинар"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t">20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h5>
  <h5 class="card_descr_t lead">13.06.2024</h5>
  <span class="card_btn_t"><a  href="/Sem_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
  </div>
</article>
</li></ul>,eventKey: "A1",eventKey: "all"},

  
  
]  

    const items = [
        {id:1, list:postsA1, eventKey:"A1"},
        {id:2, list:postsA2, eventKey:"A2"},
        {id:3, list:postsQ1, eventKey:"Q1"},
        {id:4, list:postsall, eventKey:"all"}
    ]
    return (
          <>
      <NaviBarv2 />
      <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h4 className="mx-5 text-secondary">Новости</h4></div>
      <hr/>
    
  </Container>
  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="all" >

      <Nav variant="pills" defaultActiveKey="/home" >
        <Nav.Item key={1}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="left" className="text-black">
               Количество: 2 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  className="shadow3" size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
      <Nav.Link  eventKey="A1">Конференции</Nav.Link>
        </Button>
     
        </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={2}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Количество: 2 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="A2">Семинары</Nav.Link>
          </Button>
            
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={3}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Количество: 0</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  size="sm" variant="outline-info" className="mx-1 shadow3">
          <Nav.Link eventKey="Q1">Научная жизнь</Nav.Link>
          </Button>
          
          </OverlayTrigger>
        </Nav.Item>
        
        <Nav.Item key={4}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Количество: 4</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="all">Все</Nav.Link>
          </Button>
           
          </OverlayTrigger>
        </Nav.Item>
      </Nav>

      <Tab.Content>
      {items.map((item) =>
          <NewsData key={item.id} item = {item}/>
      )}
      </Tab.Content>
  </Tab.Container>
      </Container>
      <Footer />
      </>
      
      )}