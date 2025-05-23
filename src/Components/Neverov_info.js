import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Neverov from "../images/team/Neverov.png"

export function Neverov_info () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div><img src={Neverov} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Неверов Андрей Вячеславович</h1></div>
        <div class="row ps-4"><p>Инженер-исследователь</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 a.v.neverov@math.nsc.ru</h5>
        <h5>📩 a.neverov@g.nsu.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID РИНЦ:<a rel="noopener" target="_blank" href="https://elibrary.ru/author_profile.asp?authorid=1152944">1152944</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0002-0698-0578">0000-0002-0698-0578</a><hr></hr></div>
        </div>
 

        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Неверов_Резюме.pdf">Резюме</a></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Образование</h3></div>
        <p>2017-2021 г. – Бакалавриат, Новосибирский государственный университет, Механико-математический факультет, Специальность: Механика и математическое моделирование.Название дипломной работы: Новый подход к решению обратных задач для стохастических дифференциальных уравнений, возникающих в экономике и финансах. Научный руководитель: д.ф.-м.н. О.И.Криворотько.</p>
        <p>2021–2023г. - Магистратура, Новосибирский государственный университет, Механико-математический факультет, Специальность: Прикладная математика и информатика. Название дипломной работы: Численная реализация модели игры среднего поля в эпидемиологии. Научный руководитель: д.ф.-м.н. О.И.Криворотько.</p>
        <p>2023–н.в. - Аспирантура, Институт математики им. С. Л. Соболева СО РАН. Научный руководитель: д.ф.-м.н. О.И. Криворотько.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Профессиональный опыт</h3></div>
        <p> 2023 – н.в. Инженер-исследователь, Институт математики им. С.Л.Соболева СО РАН, Новосибирск, Россия.</p>
        <p> 2021 – н.в. Ассистент, кафедра математики физического факультета, Новосибирский государственный университет, Новосибирск, Россия.</p>
        <p> 2021 – 2024 – Инженер. Институт вычислительной математики и математической геофизики СО РАН, Новосибирск, Россия.</p>
        <p> 2020 – Лаборант, Международный математический центр, Новосибирский государственный университет, Новосибирск, Россия.</p>
</div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Преподавание</h3></div>
        <p>2021 – 2024, проведение семинаров на кафедре высшей математики ФФ НГУ.</p>
   
</div>





        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Профессиональные интересы</h3></div>
        <p>Обратные задачи.</p>
        <p>Численные методы решения дифференциальных уравнений.</p>
        <p>Игры среднего поля.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Исследовательские проекты и гранты</h3></div>
          <p>РНФ 18-71-10044 «Суперкомпьютерный анализ социальных, эпидемиологических и экономических процессов. Теория, алгоритмы и комплекс программ» (2018-2023) — исполнитель.</p>
          <p>РФФИ 21-51-10003 «Обратное математическое моделирование в эпидемиологии» (2021-2022) — исполнитель.</p>
          <p>РНФ 23-71-10068 «Разработка интеллектуальной программной системы мониторинга и моделирования взаимосвязанных эпидемиологических и экономических процессов в Российской Федерации» (2023-2026) — исполнитель.</p>
        </div>
        <hr></hr>
        </div>
        </Container>
        

    <Footer />
    </>
    
    )}