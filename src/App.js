import React, {useEffect, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import Footer_En from './Components/Footer_En'
import './App.css';
import {MainTeam} from './MainTeam'
import {Main_publications_more_detailed} from './Components/Main_publications_more_detailed'
import {Krivorotko_info} from './Components/Krivorotko_info'
import {Krivorotko_info_En} from './Components/Krivorotko_info_En'
import {Mikhailapov_info} from './Components/Mikhailapov_info'
import {Petrakova_info} from './Components/Petrakova_info'
import {Semenova_info} from './Components/Semenova_info'
import {Nesterova_info} from './Components/Nesterova_info'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {Covid} from './Covid';
import {Tub} from './Tub';
import {Main} from './Main';
import {Modeling} from './Modeling';
import {Data} from './Data';
import axios from "axios"
import {News} from './News';
import {News_En} from './News_En';
import {Sem_Compl} from './Sem_Compl';


import {Helmet} from "react-helmet";

import "./styles.css";
import { Covid_En } from "./Covid_En";
import { Main_En } from "./Main_En";
import { Modeling_En } from "./Modeling_En";
import { Data_En } from "./Data_En";
import { MainTeam_En } from "./MainTeam_En";
import {Main_publications_more_detailed_En} from './Components/Main_publications_more_detailed_En';
import {Sem_Compl_En} from './Sem_Compl_En';


import {Sem_a} from './news/Sem_a';
import {Conf_a} from './news/Conf_a';
import {Conf_b} from './news/Conf_b'
import {Sem_a_En} from './news/Sem_a_En';
import {Conf_a_En} from './news/Conf_a_En';
import {Conf_b_En} from './news/Conf_b_En';
import {Sem_b} from './news/Sem_b';
import {Sem_b_En} from './news/Sem_b_En'
import {Sem_c} from './news/Sem_c';
import {Sem_c_En} from './news/Sem_c_En'
import {Sem_d} from './news/Sem_d';
import {Sem_d_En} from './news/Sem_d_En'
import {Sem_e} from './news/Sem_e';
import {Sem_e_En} from './news/Sem_e_En'
import {Life_a} from './news/Life_a';
import {Life_a_En} from './news/Life_a_En'
import {Life_b} from './news/Life_b';
import {Life_b_En} from './news/Life_b_En'
import {QIPA} from './conference/QIPA';

function App() {

return (<>
    <>
    <div className="bg-light" >

      <Helmet>
         <meta charSet="utf-8" />
         <title></title>
         <link rel="canonical" href="http://covid19-modeling.ru" />
       </Helmet>
          <Routes>
            <Route exact path="/statistics" element={<Covid />} />
            <Route exact path="/tub" element={<Tub />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/modeling" element={<Modeling />} />
            <Route exact path="/data" element={<Data />} />
            <Route exact path="/mainTeam" element={<MainTeam />} />
            <Route exact path="/main_publications_more_detailed" element={<Main_publications_more_detailed />} />
            <Route exact path="/statistics/En" element={<Covid_En />} />
            <Route exact path="/En" element={<Main_En />} />
            <Route exact path="/modeling/En" element={<Modeling_En />} />
            <Route exact path="/data/En" element={<Data_En />} />
            <Route exact path="/mainTeam/En" element={<MainTeam_En />} />
            <Route exact path="/main_publications_more_detailed/En" element={<Main_publications_more_detailed_En />} />
            <Route exact path="/krivorotko_info" element={<Krivorotko_info />} />
            <Route exact path="/krivorotko_info/En" element={<Krivorotko_info_En />} />
            <Route exact path="/mikhailapov_info" element={<Mikhailapov_info />} />
            <Route exact path="/petrakova_info" element={<Petrakova_info />} />
            <Route exact path="/semenova_info" element={<Semenova_info />} />
            <Route exact path="/nesterova_info" element={<Nesterova_info />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/news/En" element={<News_En />} />
            <Route exact path="/sem_compl" element={<Sem_Compl />} />
            <Route exact path="/sem_compl/EN" element={<Sem_Compl_En />} />
            <Route exact path="/sem_a" element={<Sem_a />} />
            <Route exact path="/sem_a/En" element={<Sem_a_En />} />
            <Route exact path="/conf_a" element={<Conf_a />} />
            <Route exact path="/conf_b" element={<Conf_b />} />
            <Route exact path="/conf_a/En" element={<Conf_a_En />} />
            <Route exact path="/conf_b/En" element={<Conf_b_En />} />
            <Route exact path="/sem_b" element={<Sem_b />} />
            <Route exact path="/sem_b/En" element={<Sem_b_En />} />
            <Route exact path="/sem_c" element={<Sem_c />} />
            <Route exact path="/sem_c/En" element={<Sem_c_En />} />
            <Route exact path="/sem_d" element={<Sem_d />} />
            <Route exact path="/sem_d/En" element={<Sem_d_En />} />
            <Route exact path="/sem_e" element={<Sem_e />} />
            <Route exact path="/sem_e/En" element={<Sem_e_En />} />
            <Route exact path="/life_a" element={<Life_a />} />
            <Route exact path="/life_a/En" element={<Life_a_En />} />
            <Route exact path="/life_b" element={<Life_b />} />
            <Route exact path="/life_b/En" element={<Life_b_En />} />
            <Route exact path="/qipa" element={<QIPA />} />
          </Routes>
          </div>
    </>
  </>)
}

export default App;
//<Footer />
//<Route exact path="/statistics/En" element={<Covid_En />} />
//<Route exact path="/En" element={<Main_En />} />
//<Route exact path="/modeling/En" element={<Modeling_En />} />
//<Route exact path="/data/En" element={<Data_En />} />
//<Route exact path="/mainTeam/En" element={<MainTeam_En />} />
//<Route exact path="/main_publications_more_detailed/En" element={<Main_publications_more_detailed_En />} />