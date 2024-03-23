import React from "react";
import {Container, Card, Row, Button } from 'react-bootstrap'
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
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Footer from './Components/Footer'
import Question from "./images/conf/Question.png"

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
    {id: 1, wid: '9rem', name: 'Криворотько Ольга Игоревна', url:'https://covid19-modeling.ru/data/Резюме-Криворотько_2023.pdf', institution: 'д.ф.-м.н.,  начальник научно-исследовательского отдела ММЦ ИМ СО РАН',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Зятьков Николай Юрьевич', institution: 'к.т.н., начальник инновационного отдела ММЦ ИМ СО РАН',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Кабанихин Сергей Игоревич', institution: 'Директор ММЦ ИМ СО РАН',Phone:' 📞 +7(383) 329-7526',mail:'📩 kabanikh@math.nsc.ru', image: Kabanikhin},
    {id: 4, wid: '9rem', name: 'Петракова Виктория Сергеевна ', institution: 'к.ф.-м.н., научный сотрудник ИМ СО РАН',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Хрущев Сергей Евгеньевич ', institution: 'к.ф.-м.н., старший научный сотрудник ИМ СО РАН',Phone:' 📞 +7(383) 329-7659',mail:'📩 s.e.khrushchev@math.nsc.ru', image: Question},
    {id: 6, wid: '8rem', name: 'Звонарева Татьяна Александровна ', institution: 'инженер ИМ СО РАН',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 7, wid: '9rem', name: 'Неверов Андрей Вячеславович ', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь ИМ СО РАН',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Нестерова Ангелина Витальевна ', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь ИМ СО РАН',Phone:'',mail:'📩 angelka.nesterova.99@mail.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Стрижак Сергей Владимирович ', institution: 'к.т.н., старший научный сотрудник ИСП',institution2:'РАН',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 10, wid: '8rem', name: 'Кошелев Константин Борисович ', institution: 'к.ф.-м.н., старший научный сотрудник ИСП РАН',Phone:'',mail:'📩 koshelev@iwep.ru', image: Question},
    {id: 11, wid: '8rem', name: 'Шефер Евгений Игоревич ', institution: 'к.ф.-м.н., научный сотрудник ИМ СО РАН',Phone:' 📞 +7(383) 329-7659',mail:'📩 e.i.shefer@math.nsc.ru', image: Question},
    {id: 12, wid: '8rem', name: 'Глухов Антон Иосифович ', institution: 'стажер-исследователь ИМ СО ',institution2:'РАН',Phone:'',mail:'📩 a.glukhov@g.nsu.ru', image: Question},
    {id: 13, wid: '8rem', name: 'Сурнин Павел Сергеевич ', institution: 'аспирант НГУ',institution2:'стажер-исследователь ИМ СО РАН',Phone:'',mail:'📩 p.surnin@g.nsu.ru', image: Question}
  ]
  return(
      <>
      <Main_picture />
        <Container >
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
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/Main_publications_more_detailed" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Подробнее</b></div></Button>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title> <h4 className="my-1 ">Конференции</h4> </Card.Title>
        </Card></motion.div>
        <motion.div initial="hidden"
           custom={2}
          variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_conferences /> </motion.div>
      </Container>
      <Footer />
    </>
          
)
}