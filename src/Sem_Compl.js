import React from "react";
import {Container, Card, Row, Button, CarouselItem, CarouselCaption } from 'react-bootstrap'
import { motion } from "framer-motion"
import Footer from './Components/Footer'
import NaviBarv2 from './Components/NaviBarv2'
import sem_a from "./images/news/sem_a.PNG"




const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 100,
 },
}

const itemAnimation = {
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    x: -100,
 },
}

export function Sem_Compl() {


  return(
      <>
      <NaviBarv2 />
        <Container >
        <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Архивные семинары</h4> </Card.Title>
          </Card>
          </motion.div>
          <ul class="cards_t">
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h5>
        <p class="my-4 card_descr_t ">16.08.2024</p>
        <span class="my-2 card_btn_t "><a href="/Sem_e" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
            <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h5>
        <p class="card_descr_t ">02.08.2024</p>
        <span class="card_btn_t "><a href="/Sem_d" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">18 июля пройдёт семинар лаборатории на тему «Полуконтролируемая сегментация медицинских изображений: Обзор»</h5>
                <p class="card_descr_t">19.07.2024</p>
                <span class="card_btn_t "><a href="/Sem_c" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
            </ul>
            <ul class="cards_t">
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h5>
                <p class="card_descr_t">05.07.2024</p>
                <span class="card_btn_t "><a href="/Sem_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
            <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h5>
                <p class="card_descr_t">21.06.2024</p>
                <span class="card_btn_t "><a href="/Sem_a" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
          </ul>
       
          
          
            
      </Container>
      <Footer />
    </>
          
)
}