import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Zyatkov from "../images/team/Zyatkov.png"

export function Zyatkov_info () {
  return (
    <>
    <NaviBarv2 />
    <Container>
      <section>
      <div><img src={Zyatkov} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Зятьков Николай Юрьевич</h1></div>
        <div class="row ps-4"><p>Кандидат технических наук</p></div>
        <div class="row ps-4"><p>Научный сотрудник</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 n.y.zyatkov@math.nsc.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/1137811">1137811</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID РИНЦ:<a rel="noopener" target="_blank" href="https://elibrary.ru/author_profile.asp?authorid=1093951">1093951</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=55151392600">55151392600</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0001-5847-4194">0000-0001-5847-4194</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Zyatkov N. - CV.pdf">Резюме</a></p></div>
        <div class="row ps-4"><p>12.04.1990</p></div>
        </section>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Образование</h3></div>
        <p>2007-2011 г. — Бакалавриат, Новосибирский государственный университет , факультет информационных технологий, Россия. Название диссертации: Разработка программного комплекса для многокритериального выбора на конечном множестве альтернатив (на примере производственного планирования). Научный руководитель: Полякова Галина Леонидовна.</p>
        <p>2011-2013 г. — Магистратура, Новосибирский государственный университет , факультет информационных технологий, Россия. Название диссертации: Разработка высокооптимизированного пакета программ дифракционного моделирования сейсмических волновых полей в слоисто-блоковых средах. Научный руководитель: к.ф.-м.н., доцент Аркадий Маркович Айзенберг; к.т.н. Романенко Алексей Анатольевич.</p>
        <p>2013-2016 г. — Аспирант факультета информационных технологий Новосибирского государственного университета , Россия. Название диссертации: Разработка и оптимизация программного комплекса для дифракционного моделирования сейсмических волн с адаптацией под графические ускорители. Научный руководитель: к.ф.-м.н., доцент Аркадий Маркович Айзенберг; д.ф.-м.н., член.-корр. РАН Кабанихин Сергей Игоревич.</p>
        <p>2016-2017 г. — Профессиональная переподготовка по программе "Экономика и менеджмент организации", Новосибирский государственный университет. Тема выпускной квалификационной работы: "Применение методов поиска недооцененных акций при выборе инвестором стратегии на фондовом рынке РФ" Научный руководитель: к.э.н., доцент Е.Н. Мельтенисова.</p>
        </div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Профессиональный опыт</h3></div>
        <p> 2024 г.-н.вр. — научный сотрудник лаборатории ИИ-технологий математического моделирования биологических, социально-экономических и экологических процессов, Институт математики им. С.Л.Соболева СО РАН.</p>
        <p> 2023 г.-н.вр. — начальник инновационного отдела Международного математического центра, Институт математики им. С.Л. Соболева СО РАН.</p>
        <p> 2022-2024 г. — научный сотрудник лаборатории прикладных обратных задач, Институт математики им. С.Л.Соболева СО РАН.</p>
        <p> 2020-2023 г. — младший научный сотрудник лаборатории обратных задач естествознания, Институт вычислительной математики и математической геофизики СО РАН.</p>
        <p> 2014-2018 г. — программист отдела компьютерной техники факультета информационных технологий, Новосибирский государственный университет.</p>
        <p> 2010-2014 г. — лаборант отдела компьютерной техники факультета информационных технологий, Новосибирский государственный университет.</p>

</div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Профессиональные интересы</h3></div>
        <p>Компьютерные науки.</p>
        <p>Математическое моделирование.</p>
        <p>Количественные исследования.</p>
        <p>Машинное обучение.</p>
        <p>Глубокое обучение.</p>
        <p>Алгоритмическая торговля.</p>
        <p>Финансовые рынки.</p>
        <p>Макроэкономика.</p>
        <p>Стартапы.</p>
        <p>Высокопроизводительные вычисления.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Исследовательские проекты и гранты</h3></div>
          <p>РФФИ 18-31-20019 «Прямые и обратные задачи социальных процессов: теория, алгоритмы и комплексы программ» (2018-2020).</p>
          <p>РФФИ 19-410-540002 «Агентные системы поддержки принятия пространственных решений на региональном уровне» (2019-2021).</p>
          <p>РФФИ 14 21-51-10003 «Обратное математическое моделирование в эпидемиологии» (2021-2022).</p>
          <p>РНФ 18-71-10044 «Суперкомпьютерный анализ социальных, эпидемиологических и экономических процессов. Теория, алгоритмы и комплекс программ» (2018-2023).</p>
          <p>РНФ 23-71-10068 «Разработка интеллектуальной программной системы мониторинга и моделирования взаимосвязанных эпидемиологических и экономических процессов в Российской Федерации» (2023-н.в.).</p>
         </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Награды и достижения</h3></div>
        <p>Победа в бизнес-акселераторе А:СТАРТ новосибирского технопарка "Академпарк" в секции IT с проектом "Панель управляющего: облачный сервис для управления рисками по инвестиционным счетам" (2018).</p>
        <p>1 место в номинации "Эффективное приложение" на конкурсе "GPU: серьезные ускорители для больших задач", NVIDIA Ltd., Московский государственный университет, Москва, Россия (2013).</p>
        <p>Стипендия Правительства РФ (2012-2013).</p>
        <p>2 место на 51-й Международной научной студенческой конференции "Студент и научно-технический прогресс", Новосибирский государственный университет, Новосибирск, Россия (2013).</p>
        <p>1 место на 50-й Международной научной студенческой конференции "Студент и научно-технический прогресс", Новосибирский государственный университет, Новосибирск, Россия (2012).</p>
        </div>
        </div>
        </Container>
        

    <Footer />
    </>
    
    )}
    