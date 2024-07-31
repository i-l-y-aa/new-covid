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
import life_a from "./images/news/life_a.PNG"
import life_b from "./images/news/life_b.PNG"
  
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
        <h5 class="card_title_t">15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h5>
        <p class="my-4 card_descr_t lead">31.07.2024</p>
        <span class="my-2 card_btn_t "><a href="/Sem_e" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h5>
        <p class="card_descr_t lead">31.07.2024</p>
        <span class="card_btn_t "><a href="/Sem_d" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">18 июля пройдёт семинар лаборатории на тему «Полуконтролируемая сегментация медицинских изображений: Обзор»</h5>
    <p class="my-4 card_descr_t lead">10.07.2024</p>
    <span class="my-2 card_btn_t "><a href="/Sem_c" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
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
      {id: 5, name: <ul class="cards_t"><li class="cards_item_t">
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
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
    <p class="card_descr_t lead">10.07.2024</p>
    <span class="card_btn_t "><a href="/Life_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
    <h5 class="my-3 card_descr_t lead">08.07.2024 </h5>
    <span class="my-1 card_btn_t "><a href="/Life_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "Q1",eventKey: "all"},

      
    ]
    
      
     

     
const postsall  = [
  {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h5>
        <p class="my-4 card_descr_t lead">31.07.2024</p>
        <span class="my-2 card_btn_t "><a href="/Sem_e" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h5>
        <p class="card_descr_t lead">31.07.2024</p>
        <span class="card_btn_t "><a href="/Sem_d" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
    <p class="my-4 card_descr_t lead">10.07.2024</p>
    <span class="my-2 card_btn_t "><a href="/Life_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">18 июля пройдёт семинар лаборатории на тему «Полуконтролируемая сегментация медицинских изображений: Обзор»</h5>
    <p class="my-3 card_descr_t lead">10.07.2024</p>
    <span class="my-1 card_btn_t "><a href="/Sem_c" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
    <h5 class="my-3 card_descr_t lead">08.07.2024 </h5>
    <span class="my-1 card_btn_t "><a href="/Life_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h5>
    <h5 class="my-4 card_descr_t lead">21.06.2024 </h5>
    <span class="my-2 card_btn_t "><a href="/Sem_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Продолжается приём тезисов на конференцию «Математика в медицине»</h5>
    <h5 class="my-4 card_descr_t lead">17.06.2024 </h5>
    <span class="my-2 card_btn_t "><a href="/Conf_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 8, name: <ul class="cards_t ">
  <li class="cards_item_t">
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_a} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024</h5>
      <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
      <span class="my-1 card_btn_t "><a href="/Conf_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
      </div>
    </article>
  </li></ul>,eventKey: "A1",eventKey: "all"},
{id: 9, name: <ul class="cards_t"><li class="cards_item_t">
<article class="card_t">
  <div class="card_image_t">
    <img src={sem_a} alt="Семинар"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t">20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h5>
  <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
  <span class="my-1 card_btn_t"><a  href="/Sem_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
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
               Количество: 5 </div>
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
               Количество: 2</div>
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
               Количество: 9</div>
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