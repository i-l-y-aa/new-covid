import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Kabanikhin from "../images/team/Kabanikhin.jpg"

export function Kabanikhin_info () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div><img src={Kabanikhin} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Кабанихин Сергей Игоревич</h1></div>
        <div class="row ps-4"><p>Доктор физико-математических наук, член-корреспондент РАН</p></div>
        <div class="row ps-4"><p>Главный научный сотрудник</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 ksi52@mail.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/A-8104-2011">A-8104-2011</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID РИНЦ:<a rel="noopener" target="_blank" href="https://www.elibrary.ru/author_items.asp?authorid=3945">3945</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=6602773229">57217457913</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0003-4772-1481">0000-0003-4772-1481</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/_CV-Kabanikhin.pdf">Резюме</a></p></div>
        <div class="row ps-4"><p>27.12.1952</p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Образование</h3></div>
        <p>1975 г. — Механико-математический факультет Новосибирского государственного университета.</p>
        <p>1978 г. — Аспирантура при Вычислительном центре Сибирского отделения Академии наук СССР.</p>
        <p>1978 г. — Кандидат физико-математических наук, тема диссертации: "Некоторые обратные задачи для гиперболических уравнений и конечно-разностные методы их исследования", научный руководитель: член-корреспондент В.Г. Романов.</p>
        <p>1990 г. — Доктор физико-математических наук, тема диссертации: "Проекционно-разностные методы определения коэффициентов гиперболических уравнений".</p>
        <p>1993 г. — Профессор.</p>
        <p>2011 г. — Член-корреспондент РАН.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Профессиональный опыт</h3></div>
        <p> 2024 г.-н.вр. — Главный научный сотрудник, лаборатория ИИ-технологий математического моделирования биологических, социально-экономических и экологических процессов, Институт математики им. С.Л.Соболева СО РАН.</p>
        <p> 2023 г.-н.вр. — Директор Международного математического центра Института математики им. С.Л. Соболева СО РАН.</p>
        <p> 2018 г.-н.вр. — Главный научный сотрудник, лаборатория обратных задач естествознания.</p>
        <p> 2015 - 2018 г. — Директор ИВМиМГ СО РАН.</p>
        <p> 2014 г.-н.вр. — Заведующий кафедрой математических методов геофизики ММФ НГУ главный научный сотрудник лаборатории прикладных обратных задач ИМ СО РАН.</p>
        <p> 2014 г. — Временно исполняющий обязанности директора ИВМиМГ СО РАН.</p>
        <p> 2014 г.-н.вр. — Главный научный сотрудник, лаборатория математических задач геофизики ИВМиМГ Сибирского отделения Российской Академии Наук. </p>
        <p> 2014 г. — Заместитель директора по научной работе в ИВМиМГ СО РАН.</p>
        <p> 2009 - 2014 г. — Заведующий лабораторией математических задач геофизики ИВМиМГ Сибирского отделения Российской Академии Наук.</p>
        <p> 1990 - 2009 г. — Ведущий научный сотрудник Института математики Сибирского отделения Российской Академии Наук.</p>
        <p> 1978 - 1987 г. — Младший научный сотрудник, старший научный сотрудник, заведующий научно-исследовательской группой, ведущий научный сотрудник Вычислительного центра СО АН СССР.</p>
        <p> 1978 г.-н.вр. — Ассистент, доцент, профессор, с 2014 года – заведующий кафедрой математических методов геофизики ММФ НГУ.</p></div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Преподавание</h3></div>
        <p>2017 г. — Преподаватель математики физико-математического факультета, Новосибирск.</p>
        <p>1990 г.-н.вр. — Профессор Новосибирского государственного университета.</p>
        <p>1978 - 1990 г. — Доцент Новосибирского государственного университета.</p>
        <p>1977 - 1978 г. — Учитель математики физико-математической школы, Новосибирск.</p></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Профессиональные интересы</h3></div>
        <p>Вычислительная математика.</p>
        <p>Разработка, исследование и применение численных методов для решения обратных задач математической физики.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Исследовательские проекты и гранты</h3></div>
          <p>17-01-20243 - Проект организации Международной конференции «Вычислительная и прикладная математика 2017».</p>
          <p>17-51-540004 - Обоснование существующих и разработка новых численных методов решения обратных и некорректных задач для эллиптических и параболических уравнений.</p>
          <p>16-51-77011 - Проект организации российско-британского семинара по теме «Количественная неопределенность в обратном моделировании».</p>
          <p>16-31-10314 - Проект организации восьмой международной молодежной научной школы-конференции "Теория и численные методы решения обратных и некорректных задач".</p>
          <p>16-01-20522 - Проект организации второй Международной конференции «Математическое моделирование и высокопроизводительные вычисления в биоинформатике, биомедицине и биотехнологии».</p>
          <p>16-29-15120 - Разработка алгоритмического и программного обеспечения многомасштабного моделирования месторождений углеводородов с использованием суперкомпьютеров.</p>
          <p>15-31-10413 - Проект организации седьмой международной молодежной научной школы-конференции "Теория и численные методы решения обратных и некорректных задач", посвященной 90-летию со дня рождения академика Гурия Ивановича Марчука.</p>
          <p>15-01-20772 - Проект организации Международной конференции «Актуальные проблемы вычислительной и прикладной математики 2015» (АПВПМ-2015), посвященной 90-летию со дня рождения академика Гурия Ивановича Марчука.</p>
          <p>15-01-09230 - Построение и исследование аналогов уравнений И.М. Гельфанда, Б.М. Левитана, М.Г. Крейна и численных методов их решения в применении к многомерным обратным задачам акустики, электродинамики и теории упругости.</p>
          <p>14-01-06035 - Проект организации Международной конференции «Математическое моделирование и высокопроизводительные вычисления в биоинформатике, биомедицине и биотехнологии».</p>
          <p>14-01-06815 - Проект организации международной школы-конференции молодых ученых "Современные проблемы прикладной математики и информатики", посвященной 50-летию ИВМиМГ СО РАН (бывший Вычислительный центр).</p>
          <p>13-01-06834 - Организация и проведение пятой международной молодежной школы-конференции "Теория и численные методы решения обратных и некорректных задач".</p>
        </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Награды и достижения</h3></div>
        <p>Почетная грамота «За добросовестный труд на благо отечественной науки, большие успехи, достигнутые в научной и производственной деятельности», и в связи с 60-летием образования ФГБУ "Сибирское отделение Российской академии наук" (2017).</p>
        <p>Памятная серебряная медаль в ознаменование 60-летия Сибирского отделения Российской академии наук (2017).</p>
        <p>Премия Евразийской ассоциации обратных задач за выдающийся научный вклад в развитие обратных задач и в усиление сотрудничества между учеными стран Евразии (2016).</p>
        <p>Почетная грамота Министерства образования, науки и инновационной политики Новосибирской области (2013).</p>
        <p>Почетная грамота НГУ (2012).</p>
        <p>Памятная медаль «За вклад в развитие Новосибирской области» (2012).</p>
        </div>
        </div>
        </Container>
        

    <Footer />
    </>
    
    )}
    
    