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
  getRegionData(11, "https://server.covid19-modeling.ru/api/csvTub/orel", "orel", "Орловская область", "Орловская область орловская область","Центральный федеральный округ","Орёл", "724 686 ч.", "24 700 км²", "29,4 чел./км²"),
  getRegionData(12, "https://server.covid19-modeling.ru/api/csvTub/ryazun", "ryazun", "Рязанская область", "Рязанская область рязанская область","Центральный федеральный округ","Рязань", "1 082 231 ч.", "44 329 км²", "27,33 чел./км²"),
  getRegionData(13, "https://server.covid19-modeling.ru/api/csvTub/smolensk", "smolensk", "Смоленская область", "Смоленская область смоленская область","Центральный федеральный округ","Смоленск", "863 987 ч.", "49 779 км²", "17,36 чел./км²"),
  getRegionData(14, "https://server.covid19-modeling.ru/api/csvTub/tambov", "tambov", "Тамбовская область", "Тамбовская область тамбовская область","Центральный федеральный округ","Тамбов", "956 292 ч.", "34 462 км²", "27,75 чел./км²"),
  getRegionData(15, "https://server.covid19-modeling.ru/api/csvTub/tver", "tver", "Тверская область", "Тверская область тверская область","Центральный федеральный округ","Тверь", "1 199 747 ч.", "84 100 км²", "14,25 чел./км²"),
  getRegionData(16, "https://server.covid19-modeling.ru/api/csvTub/tula", "tula", "Тульская область", "Тульская область тульская область","Центральный федеральный округ","Тула", "1 471 140 ч.", "25 679 км²", "57,29 чел./км²"),
  getRegionData(17, "https://server.covid19-modeling.ru/api/csvTub/yaroslavl", "yaroslavl", "Ярославская область", "Ярославская область ярославская область","Центральный федеральный округ","Ярославль", "1 187 558 ч.", "36 400 км²", "32,83 чел./км²"),
  getRegionData(18, "https://server.covid19-modeling.ru/api/csvTub/kareliya", "kareliya", "Республика Карелия", "Республика Карелия республика карелия","Северо-Западный федеральный округ","Петразаводск", "523 856 ч.", "172 400 км²", "2,9 чел./км²"),
  getRegionData(19, "https://server.covid19-modeling.ru/api/csvTub/komi", "komi", "Республика Коми", "Республика Коми республика коми","Северо-Западный федеральный округ","Сыктывкар", "720 610 ч.", "415 900 км²", "1,73 чел./км²"),
  getRegionData(20, "https://server.covid19-modeling.ru/api/csvTub/arhangelsk", "arhangelsk", "Архангельская область", "Архангельская область архангельская область","Северо-Западный федеральный округ","Архангельск", "998 072 ч.", "587 400 км²", "1,69 чел./км²"),
  
  getRegionData(21, "https://server.covid19-modeling.ru/api/csvTub/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(22, "https://server.covid19-modeling.ru/api/csvTub/altay", "altay", "Алтайский край" , "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(23, "https://server.covid19-modeling.ru/api/csvTub/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
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
  getRegionData(11, "https://server.covid19-modeling.ru/api/csvSocTub/orel", "orel", "Орловская область", "Орловская область орловская область","Центральный федеральный округ","Орёл", "724 686 ч.", "24 700 км²", "29,4 чел./км²"),
  getRegionData(12, "https://server.covid19-modeling.ru/api/csvSocTub/ryazun", "ryazun", "Рязанская область", "Рязанская область рязанская область","Центральный федеральный округ","Рязань", "1 082 231 ч.", "44 329 км²", "27,33 чел./км²"),
  getRegionData(13, "https://server.covid19-modeling.ru/api/csvSocTub/smolensk", "smolensk", "Смоленская область", "Смоленская область смоленская область","Центральный федеральный округ","Смоленск", "863 987 ч.", "49 779 км²", "17,36 чел./км²"),
  getRegionData(14, "https://server.covid19-modeling.ru/api/csvSocTub/tambov", "tambov", "Тамбовская область", "Тамбовская область тамбовская область","Центральный федеральный округ","Тамбов", "956 292 ч.", "34 462 км²", "27,75 чел./км²"),
  getRegionData(15, "https://server.covid19-modeling.ru/api/csvSocTub/tver", "tver", "Тверская область", "Тверская область тверская область","Центральный федеральный округ","Тверь", "1 199 747 ч.", "84 100 км²", "14,25 чел./км²"),
  getRegionData(16, "https://server.covid19-modeling.ru/api/csvSocTub/tula", "tula", "Тульская область", "Тульская область тульская область","Центральный федеральный округ","Тула", "1 471 140 ч.", "25 679 км²", "57,29 чел./км²"),
  getRegionData(17, "https://server.covid19-modeling.ru/api/csvSocTub/yaroslavl", "yaroslavl", "Ярославская область", "Ярославская область ярославская область","Центральный федеральный округ","Ярославль", "1 187 558 ч.", "36 400 км²", "32,83 чел./км²"),
  getRegionData(18, "https://server.covid19-modeling.ru/api/csvSocTub/kareliya", "kareliya", "Республика Карелия", "Республика Карелия республика карелия","Северо-Западный федеральный округ","Петразаводск", "523 856 ч.", "172 400 км²", "2,9 чел./км²"),
  getRegionData(19, "https://server.covid19-modeling.ru/api/csvSocTub/komi", "komi", "Республика Коми", "Республика Коми", "Республика Коми республика коми","Северо-Западный федеральный округ","Сыктывкар", "720 610 ч.", "415 900 км²", "1,73 чел./км²"),
  getRegionData(20, "https://server.covid19-modeling.ru/api/csvSocTub/arhangelsk", "arhangelsk", "Архангельская область", "Архангельская область архангельская область","Северо-Западный федеральный округ","Архангельск", "998 072 ч.", "587 400 км²", "1,69 чел./км²"),

  getRegionData(21, "https://server.covid19-modeling.ru/api/csvSocTub/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(22, "https://server.covid19-modeling.ru/api/csvSocTub/altay", "altay", "Алтайский край", "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(23, "https://server.covid19-modeling.ru/api/csvSocTub/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
//getRegionData(11, "http://localhost:4000/api/csvSocTub/lipeck", "lipeck", "Липецкая область", "Липецкая область липецкая область","Центральный федеральный округ","Липецк", "1 116 265 ч.", "24 047 км²", "46,42 чел./км²"),
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
  const [showAllRegions, setShowAllRegions] = useState(false);

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
              <Button className="my-2 all-region" onClick={() => setShowAllRegions(!showAllRegions)}>
        {showAllRegions ? "Скрыть регионы" : "Показать все регионы"}
      </Button>
        <Tab.Container id="left-tabs-example" defaultActiveKey={filteredRegions.length > 0 ? filteredRegions[0].eventKey : ""}>
          <div className="horizontal-scroll">
            <Nav variant="pills" defaultActiveKey="/home" className="d-flex">
              {showAllRegions ?
                filteredRegions.map((region, index) => (
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
                          className="shadow3"
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
                )) :
                <Nav.Item key={filteredRegions[0].id} className="region-button">
                  {/* Отображаем только первый регион */}
                </Nav.Item>
              }
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