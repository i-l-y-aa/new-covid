import React, {useEffect, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import Footer_En from './Components/Footer_En'
import './App.css';
import {MainTeam} from './MainTeam'
import {Main_publications_more_detailed} from './Components/Main_publications_more_detailed'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {Covid} from './Covid';
import {Main} from './Main';
import {Modeling} from './Modeling';
import {Data} from './Data';
import axios from "axios"


import {Helmet} from "react-helmet";

import "./styles.css";
import { Covid_En } from "./Covid_En";
import { Main_En } from "./Main_En";
import { Modeling_En } from "./Modeling_En";
import { Data_En } from "./Data_En";
import { MainTeam_En } from "./MainTeam_En";
import {Main_publications_more_detailed_En} from './Components/Main_publications_more_detailed_En'

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