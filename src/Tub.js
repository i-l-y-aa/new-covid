import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NaviBarv2 from "./Components/NaviBarv2";
import Footer from "./Components/Footer";
import {
  Container,
  Button,
  Tab,
  Nav,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { motion } from "framer-motion";
import StaticTubData from "./Components/StaticTubData";
import StaticTubDataSoc from "./Components/StaticTubDataSoc";
import { useSearchParams } from "react-router-dom";

// Вынесение повторяющихся данных в отдельную функцию
const getRegionData = (id, hr, eventKey, title, title2, district, center, population, area, density) => ({ id, hr, eventKey, title, title2, district, center, population, area, density });

const regions = [

  getRegionData(1, "https://server.covid19-modeling.ru/api/csvTub/belgorod", "belgorod", "Белгородская область", "Белгородская область белгородская область","Центральный федеральный округ","Белгород", "1 514 500 ч.", "27 100 км²", "55,31 чел./км²"),
  getRegionData(2, "https://server.covid19-modeling.ru/api/csvTub/bryansk", "bryansk", "Брянская область", "Брянская область брянская область","Центральный федеральный округ","Брянск", "1 168 800 ч.", "34 900 км²", "32,77 чел./км²"),
  getRegionData(3, "https://server.covid19-modeling.ru/api/csvTub/vladimir", "vladimir", "Владимирская область", "Владимирская область владимирская область","Центральный федеральный округ","Владимир", "1 342 099 ч.", "29 000 км²", "46,15 чел./км²"),
  getRegionData(4, "https://server.covid19-modeling.ru/api/csvTub/voronezh", "voronezh", "Воронежская область", "Воронежская область воронежская область","Центральный федеральный округ","Воронеж", "2 273 417 ч.", "52 216 км²", "43,54 чел./км²"),
  getRegionData(5, "https://server.covid19-modeling.ru/api/csvTub/ivanovsk", "ivanovsk", "Ивановская область", "Ивановская область ивановская область","Центральный федеральный округ","Иваново", "905 900 ч.", "21 437 км²", "42,26 чел./км²"),
  getRegionData(6, "https://server.covid19-modeling.ru/api/csvTub/kaluga", "kaluga", "Калужская область", "Калужская область калужская область","Центральный федеральный округ","Калуга", "1 068 410 ч.", "29 777 км²", "35,88 чел./км²"),
  getRegionData(7, "https://server.covid19-modeling.ru/api/csvTub/kostroma", "kostroma", "Костромская область", "Костромская область костромская область","Центральный федеральный округ","Кострома", "566 266 ч.", "60 211 км²", "9,4 чел./км²"),
  getRegionData(8, "https://server.covid19-modeling.ru/api/csvTub/kursk", "kursk", "Курская область", "Курская область курская область","Центральный федеральный округ","Курск", "1 060 892 ч.", "29 997 км²", "35,37 чел./км²"),
  getRegionData(9, "https://server.covid19-modeling.ru/api/csvTub/lipeck", "lipeck", "Липецкая область", "Липецкая область липецкая область","Центральный федеральный округ","Липецк", "1 116 265 ч.", "24 047 км²", "46,42 чел./км²"),
  getRegionData(10, "https://server.covid19-modeling.ru/api/csvTub/moscow", "moscow", "Московская область", "Московская область московская область","Центральный федеральный округ","Москва", "8 651 260 ч.", "44 329 км²", "195,16 чел./км²"),
  getRegionData(11, "https://server.covid19-modeling.ru/api/csvTub/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(12, "https://server.covid19-modeling.ru/api/csvTub/altay", "altay", "Алтайский край" , "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(13, "https://server.covid19-modeling.ru/api/csvTub/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
];

const regionsSoc = [
  
  getRegionData(1, "https://server.covid19-modeling.ru/api/csvSocTub/belgorod", "belgorod", "Белгородская область", "Белгородская область белгородская область","Центральный федеральный округ","Белгород", "1 514 500 ч.", "27 100 км²", "55,31 чел./км²"),
  getRegionData(2, "https://server.covid19-modeling.ru/api/csvSocTub/bryansk", "bryansk", "Брянская область", "Брянская область брянская область","Центральный федеральный округ","Брянск", "1 168 800 ч.", "34 900 км²", "32,77 чел./км²"),
  getRegionData(3, "https://server.covid19-modeling.ru/api/csvSocTub/vladimir", "vladimir", "Владимирская область", "Владимирская область владимирская область","Центральный федеральный округ","Владимир", "1 342 099 ч.", "29 000 км²", "46,15 чел./км²"),
  getRegionData(4, "https://server.covid19-modeling.ru/api/csvSocTub/voronezh", "voronezh", "Воронежская область", "Воронежская область воронежская область","Центральный федеральный округ","Воронеж", "2 273 417 ч.", "52 216 км²", "43,54 чел./км²"),
  getRegionData(5, "https://server.covid19-modeling.ru/api/csvSocTub/ivanovsk", "ivanovsk", "Ивановская область", "Ивановская область ивановская область","Центральный федеральный округ","Иваново", "905 900 ч.", "21 437 км²", "42,26 чел./км²"),
  getRegionData(6, "https://server.covid19-modeling.ru/api/csvSocTub/kaluga", "kaluga", "Калужская область", "Калужская область калужская область","Центральный федеральный округ","Калуга", "1 068 410 ч.", "29 777 км²", "35,88 чел./км²"),
  getRegionData(7, "https://server.covid19-modeling.ru/api/csvSocTub/kostroma", "kostroma", "Костромская область", "Костромская область костромская область","Центральный федеральный округ","Кострома", "566 266 ч.", "60 211 км²", "9,4 чел./км²"),
  getRegionData(8, "https://server.covid19-modeling.ru/api/csvSocTub/kursk", "kursk", "Курская область", "Курская область курская область","Центральный федеральный округ","Курск", "1 060 892 ч.", "29 997 км²", "35,37 чел./км²"),
  getRegionData(9, "https://server.covid19-modeling.ru/api/csvSocTub/lipeck", "lipeck", "Липецкая область", "Липецкая область липецкая область","Центральный федеральный округ","Липецк", "1 116 265 ч.", "24 047 км²", "46,42 чел./км²"),
  getRegionData(10, "https://server.covid19-modeling.ru/api/csvSocTub/moscow", "moscow", "Московская область", "Московская область московская область","Центральный федеральный округ","Москва", "8 651 260 ч.", "44 329 км²", "195,16 чел./км²"),
  getRegionData(11, "https://server.covid19-modeling.ru/api/csvSocTub/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(12, "https://server.covid19-modeling.ru/api/csvSocTub/altay", "altay", "Алтайский край", "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(13, "https://server.covid19-modeling.ru/api/csvSocTub/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
];

const variants = {
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
    y: 30,
  },
};

export function Tub() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';
  const [noResults, setNoResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearchParams({ post: query });
  };

  const filteredRegions = regions.filter(region => region.title2.includes(postQuery));
  const filteredRegionsSoc = regionsSoc.filter(region => region.title2.includes(postQuery));

  React.useEffect(() => {
    setNoResults(filteredRegions.length === 0 && filteredRegionsSoc.length === 0);
  }, [filteredRegions, filteredRegionsSoc]);

  return (
    <>
      <NaviBarv2 />
      <Container className="my-3" style={{ height: "120%", width: "100%" }}>
        <Container>
          <motion.h3
            initial="hidden"
            custom={1}
            variants={variants}
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            className="my-3 text-secondary"
          >
            <div>
              <h4 className="mx-5 text-secondary">Туберкулёз</h4>
            </div>
            <hr />
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
              <input type="search" name="search" />
              <input type="submit" value="Поиск" />
            </form>
          </motion.h3>
        </Container>
        {noResults && (
          <div className="text-center text-danger my-3">
            По вашему запросу регион не найден
          </div>
        )}
        <Tab.Container id="left-tabs-example" defaultActiveKey={filteredRegions.length > 0 ? filteredRegions[0].eventKey : ""}>
          <div className="horizontal-scroll">
            <Nav variant="pills" defaultActiveKey="/home" className="d-flex">
              {filteredRegions.map((region, index) => (
                <Nav.Item key={region.id} className="region-button">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Popover>
                        <Popover.Body>
                          <div>{region.district}</div>
                          <div>Административный центр — город {region.center}</div>
                          <div>Население: {region.population}</div>
                          <div>Площадь: {region.area}</div>
                          <div>Плотность: {region.density}</div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <motion.div
                      initial="hidden"
                      custom={index + 1}
                      variants={variants}
                      whileInView="visible"
                      viewport={{ amount: 0.1, once: true }}
                    >
                      <Button
                        className="shadow3 "
                        size="sm"
                        variant="outline-info"
                        style={{ color: "#FFFFFF" }}
                      >
                        <Nav.Link eventKey={region.eventKey}>
                          {region.title}
                        </Nav.Link>
                      </Button>
                    </motion.div>
                  </OverlayTrigger>
                </Nav.Item>
              ))}
            </Nav>
          </div>
  
          <Tab.Content>
            {filteredRegions.map(region => (
              <StaticTubData key={region.id} region={region} />
            ))}
            {filteredRegionsSoc.map(region => (
              <StaticTubDataSoc key={region.id} region={region} />
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
      <Footer />
    </>
  );
}