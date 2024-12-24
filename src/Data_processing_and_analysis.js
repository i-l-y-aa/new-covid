import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2 from './Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import epid1 from "./images/directions/epid1.png"
import epid2 from "./images/directions/epid2.png"
import epid3 from "./images/directions/epid3.png"
import ecol1 from "./images/directions/ecol1.png"
import ecol2 from "./images/directions/ecol2.png"
import econ1 from "./images/directions/econ1.png"
import econ2 from "./images/directions/econ2.png"
import Footer from './Components/Footer'



export function Data_processing_and_analysis(){


  return(
  <>
  <NaviBarv2 />
      <Container className="my-3"   style={{
              height: "120%" }}>
                <p class="lead my-4">Сбор, обработка и анализ данных представляют важную часть исследований при построении математических моделей биологии, эпидемиологии, экономики, экологии и социальных процессов. Некорректная обработка и интерпретирование данных может привести к некорректным результатам моделирования и прогнозирования изучаемых процессов.</p>
         
        <Tabs  justify defaultActiveKey="epid" id="uncontrolled-tab-example" >
          <Tab eventKey="epid" title="Эпидемиология">
          <h5 class="my-4">COVID-19</h5>
          <p class="lead my-4">В процессе обработки данных COVID-19 были применены следующие подходы:
             сглаживание данных с использованием 7-дневного экспоненциального скользящего среднего, заполнение
              пропущенных значений с помощью линейной интерполяции и удаление выбросов в данных.</p>
                          <div class="center"><img src={epid1} align="center" width={500} /></div>
                           <p class="lead my-4">Для математического моделирования данные предварительно нормализируются и приводятся к нормальному распределению с помощью преобразования Бокса-Кокса или путём вычисления логарифмического приращения точек временного ряда по отношению к значениям прошлых. Например, для моделирования COVID-19 ежедневное количество умерших в результате COVID-19 в Санкт-Петербурге были преобразованы таким способом, что привело данные к нормальному и стационарному виду:</p>
                           <div class="center"><img src={epid2} align="center" width={500} /></div><hr></hr>
                           <h5 class="my-4">Туберкулёз, ВИЧ</h5>
                           <p class="lead my-4"> Рассмотрены данные заболеваемости туберкулезом и ВИЧ в регионах России.</p>
                           <img src={epid3} align="right" width={500} />
                           <p class="lead my-4">Процесс сбора статистических данных не так однороден, как хотелось бы. Так, для данных заболеваемости туберкулезом по месяцам были обнаружены аномальные выбросы в декабрях и сильно заниженные данные в январях, кратно отличающиеся от остальных месяцев. Подобное поведение не может быть описано используемыми непрерывными моделями и плохо объясняется медленной скоростью развития заболевания.</p>
                           <p class="lead my-4">С другой стороны, вызывает интерес латентная форма туберкулеза, которая, как предполагается, широко распространена среди населения (по оценкам ВОЗ в районе 30%). </p>
                           <p class="lead my-4">Однако, определение данной формы кардинально разнится в различных источниках и консенсуса о данной форме не сложилось.</p>
                           <p class="lead my-4">При восстановлении эпидемиологических параметров из числа заболевших активной формой, в том числе восстанавливалось число больных латентной формой туберкулеза. В общем случае такая задача имеет множество решений, однако при ограничении на возможную длительность болезни, было выяснено, что, для регионов России, количество больных латентной формой, если она является обязательным промежуточным этапом болезни, не может превышать 1-5%.</p>
           </Tab>
          <Tab eventKey="econ" title="Экономика">
          <p class="lead my-4">Экономические и социальные процессы рассматриваются как косвенные факторы, указывающие на дальнейший ход развития эпидемий. В нашем случае туберкулез и ВИЧ считаются важными социальными заболеваниями, более распространенными среди необеспеченных слоев населения. По этой причине предполагается, что экономические и социальные показатели регионов могут выступать в качестве дополнительных маркеров характера эпидемиологического процесса, уточняющих эпидемиологические параметры.</p>
          <p class="lead my-4">Наша цель – получить данное уточнение относительно средней эпидемиологической модели для регионов России.</p>
          <p class="lead my-4">Потенциально взаимосвязанными с развитием эпидемии в регионе выделяют следующие социально-экономические параметры:
- уровень жизни<br></br>
- среднедушевой доход<br></br>
- уровень безработицы<br></br>
- количество рабочей силы<br></br>
- численность населения ниже прожиточного минимума<br></br>
- плотность населения
</p>
<div class="center"><img src={econ1} align="center" width={700} /><p class="lead my-4">Рисунок 1. Показатель уровня жизни в регионах России.</p></div>
<div class="center"><img src={econ2} align="center" width={700} /><p class="lead my-4">Рисунок 2. Численность населения в регионах России.</p></div>
<p class="lead my-4">Так как данные параметры тесно взаимосвязаны друг с другом, был применен теоретико-игровой подход выделения наиболее важных параметров на основе вектора Шепли. В результате хоть и были получены важности показателей, первичные результаты уточнения эпидемиологических параметров показали удовлетворительный результат восстановления эпидемиологических параметров лишь в 10% регионов.</p>

          </Tab>
          <Tab eventKey="ecol" title="Экология и климат">
          <p class="lead my-4">Проводится анализ и обработка данных с <a rel="noopener" target="_blank" href="https://sensor.krasn.ru/sc/project/1/map.html">геопортала Красноярского края</a>  по загрязнению атмосферного воздуха взвешенными частицами PM2.5 и <a rel="noopener" target="_blank" href="https://sensor.krasn.ru/sc/project/1/map.html">системы оперативного мониторинга состояния воздуха</a>. </p>
          <img src={ecol1} align="right" width={500} />
          <p class="lead my-4">PM2.5 — это мельчайшие твёрдые частицы и капельки жидкостей размером от 2,5 до 10 микрон (мкм). Их часто называют мелкодисперсными взвешенными частицами или тонкодисперсной пылью. Частицы PM2.5 являются одним из наиболее вредных загрязнителей - из-за своего размера мелкодисперсные частицы легко проникают в кровь и разносятся по всему организму. На небольшие дозы PM2.5 нет мгновенной реакции, но они накапливаются в организме и со временем могут привести к серьёзным проблемам.</p>
          <p class="lead my-4">Понимание причин развития «черного неба» в Красноярском крае или в других городах неотрывно связано с анализом данных с сети оперативного мониторинга качества атмосферного воздуха. В Красноярске такая система представлена более чем 30 датчиками, делающими записи каждые 20 минут на протяжении более 4 лет. Анализ таких данных осложнен тем, что в природе источников PM2.5 очень много: автомобильный транспорт с бензиновыми или дизельными двигателями, промышленные производства, в том числе предприятия по добыче полезных ископаемых, угольные электростанции, стройки, свалки, сельскохозяйственные предприятия. Это приводит к тому, что данные являются сложно нестационарными, то есть не имеют ярко выраженных трендов, сезонностей и сильно зашумлены. Также большой проблемой являются длинные пропуски в данных, связанные с поломками оборудования, а также наличие большого числа аномалий и выбросов, которые могут быть связаны как с поломкой оборудования (и должны быть удалены из дальнейшего рассмотрения), так и быть физически значимыми и иметь природное происхождение. Пример данных по концентрации PM2.5 в г. Красноярске с одного поста наблюдений за 2019-2023 гг. изображен на рисунке: </p>
          <div class="center"><img src={ecol2} align="center" width={1000} /></div>
          <p class="lead my-4">Наше исследование посвящено анализу таких сложноустроенных данных и разработке методов для их анализа. Показано, что не существует единого критерия оценки стационарности данных, представленных в виде временных рядов. Было уделено внимание корректности использования наиболее популярных инструментов при решении таких задач. Показано, что для временных рядов реальных измерений различные статистические тесты, которые наиболее используются на практике, в силу особенностей построения гипотез могут давать интерпретируемые по-разному результаты, а другие известные инструменты ограничены в использовании. Для первичного анализа предложена процедура, на основании которой можно сделать первичные выводы о стационарности данных.</p>

          </Tab>
        </Tabs>
    </Container>
    <Footer />
  </>
)}