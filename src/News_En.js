import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
    OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Footer_En from './Components/Footer_En' ;
import NaviBarv2_En from './Components/NaviBarv2_En';
import sem_a from "./images/news/sem_a.PNG"
import conf_a from "./images/news/conf_a.PNG"
import NewsData from './Components/NewsData'
import conf_b from "./images/news/conf_b.PNG"
import life_a from "./images/news/life_a.PNG"
import life_b from "./images/news/life_b.PNG"
import conf_c from "./images/news/conf_c.PNG"
  
export function News_En () {

    const postsA1 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Conference"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Laboratory staff will take part in the IV conference of mathematical centers of Russia</h5>
    <p class="card_descr_t lead my-1">08.08.2024</p>
    <span class="card_btn_t my-3"><a href="/Conf_c/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li>
  </ul>,eventKey: "A2",eventKey: "all"},
  {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={conf_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">The acceptance of abstracts for the conference "Mathematics in Medicine" continues</h5>
        <h5 class="my-3 card_descr_t lead">17.06.2024 </h5>
        <span class="my-1 card_btn_t "><a href="/Conf_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A1",eventKey: "all"},
      {id: 3, name: <ul class="cards_t ">
      <li class="cards_item_t">
        <article class="card_t">
          <div class="card_image_t">
            <img src={conf_a} alt="Конференция"></img>
          </div>
          <div class="card_content_t">
          <h5 class="card_title_t">14th International Multi-Conference "Bioinformatics of genome regulation and Structure/Systems Biology", August 5-10, 2024</h5>
          <h5 class="card_descr_t lead">13.06.2024</h5>
          <span class="card_btn_t "><a href="/Conf_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
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
        <h5 class="card_title_t">On August 15, the laboratory will hold a seminar on the topic «Recommendation system for microfinance organizations»</h5>
        <p class="card_descr_t lead my-4">31.07.2024</p>
        <span class="card_btn_t my-2"><a href="/Sem_e/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
        </div>
      </article>
    </li>
  </ul>,eventKey: "A2",eventKey: "all"},
    {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_a} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">On August 1, a laboratory seminar will be held on the topic «A.N. Tikhonov's regularization method for solving the problem of determining the initial condition in a parabolic equation»</h5>
      <p class="card_descr_t lead">31.07.2024</p>
      <span class="card_btn_t "><a href="/Sem_d/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
      </div>
    </article>
  </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">On July 18, the laboratory will hold a seminar on the topic "Semi-controlled segmentation of medical images: An overview"</h5>
        <p class="card_descr_t lead my-3">10.07.2024</p>
        <span class="card_btn_t my-1"><a href="/Sem_c/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">On July 4, a laboratory seminar will be held on the topic "Application of PINN in the SIR model of the middle field game"</h5>
    <p class="my-3 card_descr_t lead">21.06.2024</p>
    <span class="my-1 card_btn_t "><a href="/Sem_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 5, name: <ul class="cards_t"><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">On June 20, the laboratory will hold a seminar on "Reasoning about methods of checking time series for stationarity"</h5>
        <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
        <span class="my-1 card_btn_t"><a  href="/Sem_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
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
        <h5 class="card_title_t my-3">The action "Science is near" is taking place in the Novosibirsk region</h5>
        <p class="card_descr_t lead my-4">10.07.2024</p>
        <span class="card_btn_t "><a href="/Life_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
        </div>
      </article>
    </li></ul>,eventKey: "A2",eventKey: "all"},
    {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
    <article class="card_t">
      <div class="card_image_t">
        <img src={life_a} alt="Семинар"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">NSU scientists are developing a model for predicting the development of complications of infectious diseases</h5>
      <p class="my-3 card_descr_t lead">08.07.2024</p>
      <span class="my-1 card_btn_t "><a href="/Life_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
      </div>
    </article>
  </li></ul>,eventKey: "A2",eventKey: "all"}


      
     

    ]  
const postsall  = [
  {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Conference"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">Laboratory staff will take part in the IV conference of mathematical centers of Russia</h5>
    <p class="card_descr_t lead my-3">08.08.2024</p>
    <span class="card_btn_t my-4"><a href="/Conf_c/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li>
  </ul>,eventKey: "A2",eventKey: "all"},
  {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Seminar"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-1">On August 15, the laboratory will hold a seminar on the topic «Recommendation system for microfinance organizations»</h5>
        <p class="card_descr_t lead my-3">31.07.2024</p>
        <span class="card_btn_t my-4"><a href="/Sem_e/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
        </div>
      </article>
    </li>
  </ul>,eventKey: "A2",eventKey: "all"},
    {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_a} alt="Seminar"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">On August 1, a laboratory seminar will be held on the topic «A.N. Tikhonov's regularization method for solving the problem of determining the initial condition in a parabolic equation»</h5>
      <p class="card_descr_t lead my-2">31.07.2024</p>
      <span class="card_btn_t my-1"><a href="/Sem_d/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
      </div>
    </article>
  </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_b} alt="Life"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">The action "Science is near" is taking place in the Novosibirsk region</h5>
    <p class="card_descr_t lead my-2">10.07.2024</p>
    <span class="card_btn_t my-4"><a href="/Life_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">On July 18, the laboratory will hold a seminar on the topic "Semi-controlled segmentation of medical images: An overview"</h5>
    <p class="card_descr_t lead">10.07.2024</p>
    <span class="card_btn_t "><a href="/Sem_c/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_a} alt="Life"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">NSU scientists are developing a model for predicting the development of complications of infectious diseases</h5>
    <p class="my-3 card_descr_t lead">08.07.2024</p>
    <span class="my-1 card_btn_t "><a href="/Life_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">On July 4, a laboratory seminar will be held on the topic "Application of PINN in the SIR model of the middle field game"</h5>
    <p class="my-3 card_descr_t lead">21.06.2024</p>
    <span class="my-1 card_btn_t "><a href="/Sem_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 8, name: <ul class="cards_t "><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_b} alt="Conference"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">The acceptance of abstracts for the conference "Mathematics in Medicine" continues</h5>
    <h5 class="my-3 card_descr_t lead">17.06.2024 </h5>
    <span class="my-1 card_btn_t "><a href="/Conf_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
    </div>
  </article>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 9, name: <ul class="cards_t ">
  <li class="cards_item_t">
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_a} alt="Conference"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">14th International Multi-Conference "Bioinformatics of genome regulation and Structure/Systems Biology", August 5-10, 2024</h5>
      <h5 class="card_descr_t lead">13.06.2024</h5>
      <span class="card_btn_t "><a href="/Conf_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
      </div>
    </article>
  </li></ul>,eventKey: "A1",eventKey: "all"},
  {id: 10, name: <ul class="cards_t"><li class="cards_item_t">
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">On June 20, the laboratory will hold a seminar on "Reasoning about methods of checking time series for stationarity"</h5>
    <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
    <span class="my-1 card_btn_t"><a  href="/Sem_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
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
      <NaviBarv2_En />
      <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h4 className="mx-5 text-secondary">News</h4></div>
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
               Quantity: 3 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  className="shadow3" size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
      <Nav.Link  eventKey="A1">Conferences</Nav.Link>
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
               Quantity: 5 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="A2">Seminars</Nav.Link>
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
               Quantity: 2 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  size="sm" variant="outline-info" className="mx-1 shadow3">
          <Nav.Link eventKey="Q1">Scientific life</Nav.Link>
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
               Quantity: 10 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="all">All</Nav.Link>
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
      <Footer_En />
      </>
      
      )}