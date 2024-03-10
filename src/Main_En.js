import {Container, Card, Row, Button } from 'react-bootstrap'
import STeamItem from './Components/TeamItem2'
import Main_picture_En from './Components/Main_picture_En'
import Main_contacts_En from './Components/Main_contacts_En'
import Main_publications_En from './Components/Main_publications_En'
import Main_conferences_En from './Components/Main_conferences_En'
import Main_publications_more_detailed_En from './Components/Main_publications_more_detailed_En'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Sosnovskaya from "./images/team/Sosnovskaya.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Footer_En from './Components/Footer_En'

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
    {id: 1, wid: '9rem', name: 'Olga Krivorotko',institution: 'Head of the Research Department of the MCA IM SB RAS',  image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Nikolai Zyatkov', institution: 'Head of the Innovation Department of the MCA IM SB RAS', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Sergey Kabanikhin', institution: 'Director of the MCA IM SB RAS', image: Kabanikhin}
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
                  <STeamItem  initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {post.id} post = {post}/>
              )}
            </Row>
          </Container>
          </motion.div>
          <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/MainTeam/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>More detailed</b></div></Button>
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