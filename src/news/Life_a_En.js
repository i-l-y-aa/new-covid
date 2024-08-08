import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_a from "../images/news/life_a.PNG"


export function Life_a_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={life_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>NSU scientists are developing a model for predicting the development of complications of infectious diseases</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Scientists of Novosibirsk State University, together with colleagues from the Laboratory of AI Technologies for Mathematical Modeling of Biological, Socio-economic and Environmental Processes of the S.L. Sobolev Institute of Mathematics, use artificial intelligence and mathematical modeling to study the impact of the past covid epidemic on the course of tuberculosis and HIV in various regions of Russia. The research is carried out at the request of several institutions subordinate to the Ministry of Health of the Russian Federation: the National Medical Research Center for Physiopulmonology and Infectious Diseases (Moscow), the Tula Regional Center for the Prevention and Control of AIDS and Infectious Diseases (Tula) and the Novosibirsk Tuberculosis Research Institute (Novosibirsk). According to this request, the laboratory's researchers were asked to find out what socio-economic and epidemiological factors affect the prevalence of tuberculosis and HIV infection.</p></div>
    <div class="row ps-4 my-4"><p class="lead">— Medical workers suspected that the covid-19 pandemic affected the occurrence of future complications of tuberculosis, since covid is a rapidly developing disease, the incubation period and development of which is calculated in days, and tuberculosis can develop covertly in the body for years and take a long time. Superimposed on the latent period of tuberculosis, the covid virus can lead to complications of its course and, accordingly, treatment due to the emergence of drug resistance. It is also possible to reduce the duration of the incubation period of tuberculosis. However, so far this is only a theory that requires confirmation, and it is difficult to obtain them using conventional methods, since not enough time has passed to assess the situation since the end of the covid epidemic, — explains <b>Olga Krivorotko</b>  head of the Laboratory, Associate Professor of the Department of Higher Mathematics of the <a rel="noopener" target="_blank" href="https://www.nsu.ru/n/physics-department/"> Faculty of Physics of NSU</a> and the Department of Mathematical Methods of Geophysics of the <a rel="noopener" target="_blank" href="https://www.nsu.ru/n/mathematics-mechanics-department/">Faculty of Mechanics and Mathematics of NSU.</a></p></div>
    <div class="row ps-4 my-4"><p class="lead">The scientists were given this task, which they decided to perform in two stages. First, they had to build a mathematical model and develop an algorithm to identify the key socio-economic factors affecting the incidence of tuberculosis and its prevalence in each region of the country. The average area of premises in which residents of different regions live and work, the unemployment rate, average salary, education level, migration, the number of cases in institutions of the Federal Penitentiary Service, etc. were taken into account.</p></div>
    <div class="row ps-4 my-4"><p class="lead">At the second stage, it was decided to build a mathematical model of the spread of tuberculosis and HIV infection, taking into account, in addition to socio-economic factors, epidemiological factors: the number of people who had covid and received natural immunity, the number of deaths with this diagnosis (both major and concomitant other diseases).</p></div>
    <div class="row ps-4 my-4"><p class="lead">The first stage of the study has already been completed, the key factors of the spread of tuberculosis have been identified. They are not the same in all regions of Russia.</p></div>
    <div class="row ps-4 my-4"><p class="lead">— We conditionally divided all 86 regions of the country into three large blocks using machine learning and neural networks. The first is the developed regions, which are characterized by a lower population density and a more prosperous situation in terms of tuberculosis incidence. The second block includes their opposites — regions with high morbidity and higher population density. The third block consisted of regions with average indicators. In each group of regions, different indicators affect the prevalence of tuberculosis, for example, Moscow, St. Petersburg and the Tyumen Region belong to the first group, the Republic of Tyva, the Kurgan Region and the Altai Territory belong to the second group. For both groups (developed and less developed), the overall indicator affecting the spread of tuberculosis is the number of HIV-infected people. In the first group, the indicator of the area of premises per person and the average per capita income also affects, and in the second — the share of the permanent population and the share of the population below the subsistence minimum, — said <b>Olga Krivorotko.</b></p></div>
    <div class="row ps-4 my-4"><p class="lead">Mathematical models have been developed for each group of regions, taking into account their specifics, as well as the prevailing key factors and socio-economic indicators. Then, using these mathematical models, forecasts for the past years were built and compared with real historical data. The forecasts, where socio-economic factors were taken into account, coincided with the real data to a greater extent than those in which they were not taken into account, especially in regions with increased morbidity in the last 3 years. Also, the forecast for 2021 coincided with the real indicators — it turned out to be in the confidence interval. But the forecast for 2022 was different from the real situation. According to epidemiologists of the Ministry of Health of the Russian Federation, such a discrepancy occurred due to the fact that we did not take into account the covid epidemic when making forecasts for the incidence of tuberculosis, the impact of which manifested itself in 2022, the researchers added an additional dependence to the model on the number of covid patients and began to draw up scenarios for the spread of tuberculosis for 2022-2024. Forecasts for 2022 and 2023 turned out to be quite close to historical data, it is not yet possible to check the forecast for 2024 due to a lack of statistical data.</p></div>
    <div class="row ps-4 my-4"><p class="lead">Scientists plan to complete work on a model for predicting the incidence of tuberculosis for three years ahead, taking into account covid, by September this year. The program that creates forecasts for the year is already used by specialists of the Ministry of Health of the Russian Federation, the forecast data issued by it today coincide with the real ones. The forecasts were used to calculate the loads on medical institutions this year and so far there have been no significant discrepancies between them and the current situation.</p></div>
    <div class="row ps-4 my-4"><p class="lead">The laboratory's scientists have accumulated extensive experience in working with forecasts of covid incidence during the coronavirus pandemic. In April 2020, using their forecasting model, they predicted the peak incidence of the Wuhan strain of coronavirus in Moscow on May 11 of the same year and provided data on the estimated number of cases per day. Olga Krivorotko presented a report on this on April 17 at the <a rel="noopener" target="_blank" href="https://www.nsu.ru/n/mca/researchgroups/nauchno-obrazovatelnye-seminary/">  Internet seminar "Actual Problems of Applied Mathematics"</a>, which was conducted under the guidance of Academician of the Russian Academy of Sciences I.A. Taimanov, corresponding member. RAS S.I. Kabanikhina, corresponding member. RAS A.E. Mironova, Doctor of Ph.D. M.A. Shishlenina.</p></div>
    <div class="row ps-4 my-4"><p class="lead">— This forecast was made based on the basic model, which was based on the law of acting masses and functioned without the use of machine learning. It took into account only information about the disease itself — its incubation period, the degree of contagion, the course of the disease, etc. Then began a period of restrictive measures: mandatory wearing of protective masks, closure of public places, temporary shutdown of institutions and organizations, lockdowns, and then vaccination. It should be noted that with the introduction of preventive measures, the scenario of the spread of any infectious disease changes, and classical mathematical models of calculations no longer work here. And we have created a new forecast model that takes into account many factors, including the listed ones. Moreover, the forecasts were different for all regions — depending on what preventive measures were introduced in them and when, forecasts for 7, 30, 45 days were issued, taking into account current socio-economic changes," <b>Olga Krivorotko</b> said.</p></div>
    <div class="row ps-4 my-4"><p>08.07.2024</p></div>
    </Container>
    <Footer_En />
    </>
    
    )}