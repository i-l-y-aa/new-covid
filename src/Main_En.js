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
import Novikov from "./images/team/Novikov.jpg"
import Koshelev from "./images/team/Koshelev.jpg"
import Footer_En from './Components/Footer_En'
import Question from "./images/conf/Question.png"
import sem_a from "./images/news/sem_a.PNG"
import conf_c from "./images/news/conf_c.PNG"
import life_c from "./images/news/life_c.PNG"
import Semenova from "./images/team/Semenova.jpg"
import Mikhailapov from "./images/team/Mikhailapov.png"
import Dudukalov from "./images/team/Dudukalov.jpg"
import conf_TheoryAndNumericalMethods from "./images/conf/conf_TheoryAndNumericalMethods.png"
import conf_ModernProblemsOfInverseProblems from "./images/conf/conf_ModernProblemsOfInverseProblems.png"
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
    {id: 1, wid: '8rem', name: 'Olga Krivorotko', url:'/Krivorotko_info/En', institution: 'Doctor of Physical and Mathematical Sciences,Head of the laboratory',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Nikita Novikov', institution: 'Candidate of Physical and Mathematical Sciences,Senior Researcher',Phone:'',mail:'📩 novikov-1989@yandex.ru', image: Novikov},
    {id: 3, wid: '8rem', name: 'Nikolai Zyatkov', institution: 'Candidate of Technical Sciences,Research Associate',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 4, wid: '8rem', name: 'Victoria Petrakova', url:'https://covid19-modeling.ru/data/Petrakova_CV.pdf', institution: 'Candidate of Physical and Mathematical Sciences,Research Associate',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Tatyana Zvonareva',url:'https://covid19-modeling.ru/data/Zvonareva-CV.pdf', institution: 'Junior Research Assistant',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 6, wid: '8rem', name: 'Diana Semenova', institution: 'Junior Research Assistant',Phone:' 📞 +7(926) 189-8945',mail:'📩 dianasoulmate@yandex.ru', image: Semenova},
    {id: 7, wid: '8rem', name: 'Andrey Neverov', institution: 'Graduate student IM SB RAS',institution2:'Research Engineer',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Angelina Nesterova', institution: 'Graduate student IM SB RAS',institution2:'Research Engineer',Phone:'',mail:'📩  a.v.nesterova@math.nsc.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Denis Mikhailapov', institution: 'Intern Researcher',Phone:'',mail:'📩 d.i.mikhailapov@math.nsc.ru', image: Mikhailapov},
    {id: 10, wid: '8rem', name: 'Dmitry Dudukalov', institution: 'Intern Researcher',Phone:'',mail:'📩 d.dudukalov@g.nsu.ru', image: Dudukalov},
    {id: 11, wid: '8rem', name: 'Sergey Strizhak', institution: 'Candidate of Technical Sciences, Senior Researcher',institution2:'',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 12, wid: '8rem', name: 'Konstantin Koshelev', institution: 'Candidate of Physical and Mathematical Sciences, Senior Researcher',Phone:'',mail:'📩 koshelevkb@mail.ru', image: Koshelev}
  ]
  return(
      <>
      <Main_picture_En />
      <Container >
        <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">News</h4> </Card.Title>
          </Card>
          </motion.div>
          <ul class="cards_t">
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Seminar"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On September 26, the laboratory will hold a seminar on the topic «Problems of obtaining an accurate quantitative assessment of accumulated activity in tumor foci during the examination by the method of SPECT/CT»</h5>
                <p class="card_descr_t">17.09.2024</p>
                <span class="card_btn_t "><a href="/Sem_h/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Seminar"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On September 12, a laboratory seminar will be held on the topic «Features of using physically informed neural networks to solve problems of modeling the motion of an incompressible fluid»</h5>
                <p class="card_descr_t">11.09.2024</p>
                <span class="card_btn_t "><a href="/Sem_g/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={life_c} alt="Seminar"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On August 30, a meeting of the Siberian Association of Neurosurgeons will be held at the Neurosurgery Center</h5>
                <p class="card_descr_t">26.08.2024</p>
                <span class="card_btn_t "><a href="/Life_c/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          </ul>
          <Button href="/News/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>All the news</b></div></Button>
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
<Card className="text-center bg-secondary text-white my-3" >
<Card.Title> <h4 className="my-1 ">Conferences</h4> </Card.Title>
</Card>
</motion.div>
<ul class="cards_t">
<li class="cards_item_t">
<article class="card_conf">
<div class="card_image_conf my-3">
<img src={conf_TheoryAndNumericalMethods} alt="Conferences"></img>
</div>
<div class="card_content_t">
<h5 class="card_title_t">XVI International Youth Scientific School-conference «Theory and numerical methods for solving inverse and ill-posed problems».</h5>
<p class="card_title_t ">Venue: S.L. Sobolev Institute of Mathematics SB RAS.</p>
<p class="card_title_t ">Date: From September 30 to October 2, 2024.</p>

<span class="card_btn_t "><a href="/TheoryAndNumericalMethods/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
</div>
</article>
</li>
<li class="cards_item_t">
<article class="card_conf">
<div class="card_image_conf my-3">
<img src={conf_ModernProblemsOfInverseProblems} alt="Conferences"></img>
</div>
<div class="card_content_t">
<h5 class="card_title_t">International Scientific Conference «Modern problems of inverse problems».</h5>
<p class="card_title_t ">Venue: S.L. Sobolev Institute of Mathematics SB RAS.</p>
<p class="card_title_t ">Date: From 3 to 5 October 2024.</p>

<span class="card_btn_t "><a href="/ModernProblemsOfInverseProblems/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
</div>
</article>
</li>
</ul>
      </Container>
      <Footer_En />
    </>
)
}