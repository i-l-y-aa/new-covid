import React from "react";
import {Container, Card, Row, Button } from 'react-bootstrap'
import MTeamItem from './Components/TeamItem'
import Main_picture_En from './Components/Main_picture_En'
import Main_contacts_En from './Components/Main_contacts_En'
import Main_publications_En from './Components/Main_publications_En'
import Main_conferences_En from './Components/Main_conferences_En'
import Main_publications_more_detailed_En from './Components/Main_publications_more_detailed_En'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Khrushchev from "./images/team/Khrushchev.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Footer_En from './Components/Footer_En'
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

export function Main_En() {

  const posts = [
    {id: 1, wid: '8rem', name: 'Olga Krivorotko', url:'https://covid19-modeling.ru/data/Krivorotko-CV_short.pdf', institution: 'Doctor of Physical and Mathematical Sciences, Head of the Research Department of the MCA IM SB RAS',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Nikolai Zyatkov', institution: 'Candidate of Technical Sciences, Head of the Innovation Department of the MCA IM SB RAS',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Sergey Kabanikhin', institution: 'Director of the MCA IM SB RAS',Phone:' 📞 +7(383) 329-7526',mail:'📩 kabanikh@math.nsc.ru', image: Kabanikhin},
    {id: 4, wid: '8rem', name: 'Victoria Petrakova', institution: 'Candidate of Physical and Mathematical Sciences, Researcher IM SB RAS',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Sergey Khrushchev', institution: 'Candidate of Physical and Mathematical Sciences, Senior Researcher IM SB RAS',Phone:' 📞 +7(383) 329-7659',mail:'📩 s.e.khrushchev@math.nsc.ru', image: Khrushchev},
    {id: 6, wid: '8rem', name: 'Tatyana Zvonareva', institution: 'Junior Researcher IM SB RAS',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 7, wid: '8rem', name: 'Andrey Neverov', institution: 'Graduate student IM SB RAS',institution2:'Research Engineer IM SB RAS',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Angelina Nesterova', institution: 'Graduate student IM SB RAS',institution2:'Research Engineer IM SB RAS',Phone:'',mail:'📩 angelka.nesterova.99@mail.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Sergey Strizhak', institution: 'Candidate of Technical Sciences, Senior Researcher of the ISP RAS',institution2:'',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 10, wid: '8rem', name: 'Konstantin Koshelev', institution: 'Candidate of Physical and Mathematical Sciences, Senior Researcher at ISP RAN',Phone:'',mail:'📩 koshelev@iwep.ru', image: Question},
    {id: 11, wid: '8rem', name: 'Evgeny Schaefer', institution: 'Candidate of Physical and Mathematical Sciences, Researcher IM SB RAS',Phone:' 📞 +7(383) 329-7659',mail:'📩 e.i.shefer@math.nsc.ru', image: Question},
    {id: 12, wid: '8rem', name: 'Anton Glukhov', institution: 'Intern researcher IM SB RAS',institution2:'',Phone:'',mail:'📩 a.glukhov@g.nsu.ru', image: Question},
    {id: 13, wid: '8rem', name: 'Pavel Surnin', institution: 'Graduate student of NSU',institution2:'Intern researcher IM SB RAS',Phone:'',mail:'📩 p.surnin@g.nsu.ru', image: Question}
  ]
  return(
      <>
      <Main_picture_En />
        <Container >
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">The composition of the laboratory</h4> </Card.Title>
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
          <h4 className="text-left mx-5 text-secondary">Contacts</h4>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_contacts_En />
          </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Publications</h4></motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_publications_En />
            </motion.div>
            <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/Main_publications_more_detailed/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>More detailed</b></div></Button>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title> <h4 className="my-1 ">Conferences</h4> </Card.Title>
        </Card></motion.div>
        <motion.div initial="hidden"
           custom={2}
          variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_conferences_En /> </motion.div>
      </Container>
      <Footer_En />
    </>
)
}