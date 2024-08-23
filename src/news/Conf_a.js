import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_a from "../images/news/conf_a.PNG"


export function Conf_a () {
  const [views2, setViews2] = useState(0);

  useEffect(() => {
    const storedViews2 = localStorage.getItem('sem_e_views2');
    const newViews2 = storedViews2 ? parseInt(storedViews2) + 1 : 1;
    setViews2(newViews2);
    localStorage.setItem('sem_e_views2', newViews2);
  }, []);
  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024 года</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Сотрудники лаборатории примут участие в 14-я Международной мультиконференции «Биоинформатика регуляции и структуры геномов/системная биология», которая пройдет в Новосибирском Академгородке 5-10 августа 2024 года.</p></div>
    <div class="row ps-4 my-4"><p class="lead">В рамках работы конференции будет организована Секция «Математическая эпидемиология» (<a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/systems-computational-biology/">симпозиум "Системная компьютерная биология"</a>).</p></div>
    <div class="row ps-4 my-4"><p class="lead">Более подробная информация приведена на <a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/schedule/">сайте конференции.</a></p></div>
    <div class="row ps-4 my-4"><p>13.06.2024</p></div>
    <div className="row ps-4 my-4">
          <p className="lead">
            <FontAwesomeIcon icon={faEye} /> {views2}
          </p>
        </div>
    </Container>
    <Footer />
    </>
    
    )}