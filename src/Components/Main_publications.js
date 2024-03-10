import React from "react";
import {Container, Card, ListGroup} from 'react-bootstrap';


const Main_publications = () => {
    return (
     
    <ListGroup as="ol" variant="flush" >

    <h3>2024</h3>
      
            <ListGroup as="li"> 
      <a  style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol">
              <Card.Title ><h5 align='left' style={{fontSize:"20px", align:"right"}}>  G. Akindinov, O. Krivorotko, V. Matyukhin. Numerical solution of an inverse problem for a general hyperbolic heat equation // In: Olenev, N., Evtushenko, Y., Jacimovic, M., Khachay, M., Malkova, V. (eds) Advances in Optimization and Applications. OPTIMA 2023. Communications in Computer and Information Science, vol 1913. Springer, Cham. 2024. P. 47-60.</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>

      <h3>2023</h3>

      <ListGroup as="li">
      <a href="https://covid19-modeling.ru/data/КСИ_КОИ_ЗНЮ_ЖВМиМФ_COVID_NN.pdf" style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left' style={{fontSize:"20px", align:"right"}}>  Криворотько О.И., Кабанихин С.И., Зятьков Н.Ю. Нейросетевое моделирование распространения COVID-19 c учетом социально-экономических процессов // Всемирный конгресс (26–30 июня 2023 г., Москва). Теория систем, алгебраическая биология, искусственный интеллект: математические основы и приложения: Тезисы докладов. М., 2023. С. 787-789. DOI 10.18699/sblai2023-22</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>
      
              <ListGroup as="li">
      <a href="https://covid19-modeling.ru/data/Proc_Petrakova_Krivorotko_CSGB-23.pdf" style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left' style={{fontSize:"20px", align:"right"}}>  V. Petrakova, O. Krivorotko, A. Neverov. Review of the mean field models for predicting the spread of viral infections. 2023 IEEE CSGB.2023. P. 45-50. DOI: 10.1109/CSGB60362.2023</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>

              <ListGroup as="li">
      <a href="https://covid19-modeling.ru/data/_Numerical Modelling of Mean-Field .pdf" style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left' style={{fontSize:"20px", align:"right"}}>  Neverov A., Krivorotko O. Numerical Modelling of Mean-Field Game Epidemic. Lecture Notes in Computer Science. 2023. V.14395 - Optimization and Applications: 14th International Conference, OPTIMA 2023, Petrovac, Montenegro, September 18–22, 2023. P.207-217. DOI: 10.1007/978-3-031-47859-8_15</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>
      
              <ListGroup as="li">
      <a href="https://covid19-modeling.ru/data/PCI_2023_paper_146.pdf" style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left' style={{fontSize:"20px", align:"right"}}>  T. Zvonareva, O. Krivorotko. Identifiability analysis for source problem of quasi-hyperbolic equation // IEEE Proceedings of 5th International Conference on Problems of Cybernetics and Informatics (PCI 2023), Baku, August 28-30, 2023. P. 1-4. DOI: 10.1109/PCI60110.2023.10325964</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>
     
     
    </ListGroup>
  
//</Container>
//</Card>
 
    )}

export default Main_publications;
//<Card border="secondary" className="my-3 shadow1">
//</Card><Container className="mx-1 my-1"></Container>
//<ListGroup.Item as="li">
//</ListGroup.Item>