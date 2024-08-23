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
  getRegionData(1, "https://server.covid19-modeling.ru/api/csvTub/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(2, "https://server.covid19-modeling.ru/api/csvTub/altay", "altay", "Алтайский край" , "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(3, "https://server.covid19-modeling.ru/api/csvTub/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
];

const regionsSoc = [
  getRegionData(1, "https://server.covid19-modeling.ru/api/csvSocTub/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(2, "https://server.covid19-modeling.ru/api/csvSocTub/altay", "altay", "Алтайский край", "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(3, "https://server.covid19-modeling.ru/api/csvSocTub/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
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
          <input type="submit" value="Поиск"/>
        </form>
          </motion.h3>
        </Container>
        {noResults && (
          <div className="text-center text-danger my-3">
            По вашему запросу регион не найден
          </div>
          
        )}
        <Tab.Container id="left-tabs-example" defaultActiveKey={filteredRegions.length > 0 ? filteredRegions[0].eventKey : ""}>
          <Nav variant="pills" defaultActiveKey="/home">
            {filteredRegions.map((region, index) => (
              <Nav.Item key={region.id}>
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
            ))}
          </Nav>

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