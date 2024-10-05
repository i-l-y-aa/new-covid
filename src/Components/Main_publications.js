import React from "react";
import {Container, Card, ListGroup} from 'react-bootstrap';


const Main_publications = () => {
    return (
     
    <ListGroup as="ol" variant="flush" >

    <h3>2024</h3>
      
            <ListGroup as="li"> 
      <a href="https://covid19-modeling.ru/data/mathematics-12-03044.pdf" style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left'>  O. Krivorotko, N. Zyatkov. The Forecasting of the Spread of Infectious Diseases Based on Conditional Generative Adversarial Networks. Journal of Applied Mathematics in Disease Control and Dynamics. Vol. 12, No.19. DOI: 10.3390/math12193044.</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>        

            <ListGroup as="li"> 
      <a href="https://covid19-modeling.ru/data/COVID_review_10.1515_jiip-2024-0013.pdf" style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left'>  O. Krivorotko, S. Kabanikhin. Artificial intelligence for COVID-19 spread modeling. Journal of Inverse and Ill-Posed Problems. Vol. 32, No.2. DOI: 10.1515/jiip-2024-0013.</h5></Card.Title>
              </Card.Body></a>
              </ListGroup>

              <ListGroup as="li"> 
      <a  style={{'textDecoration': 'none'}}>
              <Card.Body className="pubcardcol my-3">
              <Card.Title ><h5 align='left'>  G. Akindinov, O. Krivorotko, V. Matyukhin. Numerical solution of an inverse problem for a general hyperbolic heat equation // In: Olenev, N., Evtushenko, Y., Jacimovic, M., Khachay, M., Malkova, V. (eds) Advances in Optimization and Applications. OPTIMA 2023. Communications in Computer and Information Science, vol 1913. Springer, Cham. 2024. P. 47-60.</h5></Card.Title>
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

     
     
    </ListGroup>
  
//</Container>
//</Card>
 
    )}

export default Main_publications;
//<Card border="secondary" className="my-3 shadow1">
//</Card><Container className="mx-1 my-1"></Container>
//<ListGroup.Item as="li">
//</ListGroup.Item>