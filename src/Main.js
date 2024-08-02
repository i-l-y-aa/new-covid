import React from "react";
import {Container, Card, Row, Button, CarouselItem, CarouselCaption } from 'react-bootstrap'
import MTeamItem from './Components/TeamItem'
import Main_picture from './Components/Main_picture'
import Main_contacts from './Components/Main_contacts'
import Main_publications from './Components/Main_publications'
import Main_conferences from './Components/Main_conferences'
import Main_publications_more_detailed from './Components/Main_publications_more_detailed'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Dudukalov from "./images/team/Dudukalov.jpg"
import Koshelev from "./images/team/Koshelev.jpg"
import Semenova from "./images/team/Semenova.jpg"
import Mikhailapov from "./images/team/Mikhailapov.png"
import Footer from './Components/Footer'
import Question from "./images/conf/Question.png"
import {Carousel} from 'react-bootstrap'
import sem_a from "./images/news/sem_a.PNG"
import life_a from "./images/news/life_a.PNG"
import life_b from "./images/news/life_b.PNG"
import qipa from "./images/conf/qipa.PNG"



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

export function Main() {

  const posts = [
    {id: 1, wid: '8rem', name: 'Криворотько Ольга Игоревна', url:'/Krivorotko_info', institution: 'д.ф.-м.н.,заведующий лабораторией',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Новиков Никита Сергеевич ', institution: 'к.ф.-м.н.,старший научный сотрудник',Phone:'',mail:'📩 novikov-1989@yandex.ru', image: Question},
    {id: 3, wid: '8rem', name: 'Зятьков Николай Юрьевич', url:'/Zyatkov_info', institution: 'к.т.н.,научный сотрудник',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 4, wid: '8rem', name: 'Петракова Виктория Сергеевна ', url:'/Petrakova_info', institution: 'к.ф.-м.н., научный сотрудник',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Стрижак Сергей Владимирович ', institution: 'к.т.н., старший научный сотрудник',institution2:'',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 6, wid: '8rem', name: 'Кошелев Константин Борисович ', institution: 'к.ф.-м.н., старший научный сотрудник',Phone:'',mail:'📩 koshelevkb@mail.ru', image: Koshelev},
    {id: 7, wid: '8rem', name: 'Звонарева Татьяна Александровна ',url:'https://covid19-modeling.ru/data/Резюме ЗвонареваТА.pdf', institution: 'младший научный сотрудник',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 8, wid: '8rem', name: 'Семёнова Диана Анзоровна ',url:'/Semenova_info', institution: 'младший научный сотрудник',Phone:'📞 +7(926) 189-8945',mail:'📩 dianasoulmate@yandex.ru', image: Semenova},
    {id: 9, wid: '8rem', name: 'Неверов Андрей Вячеславович ', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 10, wid: '8rem', name: 'Нестерова Ангелина Витальевна ',url:'/Nesterova_info', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь',Phone:'',mail:'📩 a.v.nesterova@math.nsc.ru' , image: Question},
    {id: 11, wid: '8rem', name: 'Михайлапов Денис Иванович',url:'/Mikhailapov_info', institution: 'стажер-исследователь',Phone:'',mail:'📩 d.i.mikhailapov@math.nsc.ru', image: Mikhailapov},
    {id: 12, wid: '8rem', name: 'Дудукалов Дмитрий Витальевич ', institution: 'стажер-исследователь',Phone:'',mail:'📩 d.dudukalov@g.nsu.ru', image: Dudukalov}
  ]
  return(
      <>
      <Main_picture />
        <Container >
        <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Новости</h4> </Card.Title>
          </Card>
          </motion.div>
          <ul class="cards_t">
            <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Конференция"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h5>
                <p class="card_descr_t">31.07.2024</p>
                <span class="card_btn_t "><a href="/Sem_e" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Конференция"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h5>
                <p class="card_descr_t">31.07.2024</p>
                <span class="card_btn_t "><a href="/Sem_d" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={life_b} alt="Конференция"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
                <p class="card_descr_t">10.07.2024</p>
                <span class="card_btn_t "><a href="/Life_b" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
                </div>
              </article>
            </li>
          </ul>
          <Button href="/News" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Все новости</b></div></Button>
          
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Состав лаборатории</h4> </Card.Title>
          </Card>
          </motion.div>
          <motion.div  initial="hidden"
            animate="visible">
          <Container>
            <Row xs={1} md={2} className="justify-content-md-center" >
              {posts.map((post, index) =>
                  <MTeamItem  initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {post.id} post = {post}/>
              )}
            </Row>
          </Container>
          </motion.div>

          <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
        </motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Kонтакты</h4>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_contacts />
          </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Публикации</h4></motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_publications />
            </motion.div>
            <motion.div initial="hidden"
          animate="visible" custom={2}
          variants={variants}>
          <Button href="/Main_publications_more_detailed" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Подробнее</b></div></Button>
            </motion.div>
            <motion.div initial="hidden"
custom={2}
variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
<Card className="text-center bg-secondary text-white my-3" >
<Card.Title> <h4 className="my-1 ">Конференции</h4> </Card.Title>
</Card>
</motion.div>
<ul class="cards_t">
<li class="cards_item_t">
<article class="card_conf">
<div class="card_image_conf my-3">
<img src={qipa} alt="Конференция"></img>
</div>
<div class="card_content_t">
<h5 class="card_title_t">X Международная конференция «Квазилинейные уравнения, обратные задачи и их приложения».</h5>
<p class="card_title_t ">Место проведения: Образовательный центр «Сириус».</p>
<p class="card_title_t ">Дата проведения: С 17 по 21 октября 2024 года .</p>

<span class="card_btn_t "><a href="/QIPA" class="lead" style={{'textDecoration': 'none'}}>Читать полностью > </a></span>
</div>
</article>
</li>

</ul>
            
      </Container>
      <Footer />
    </>
          
)
}