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