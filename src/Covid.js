import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import NaviBarv2 from './Components/NaviBarv2';
import Footer from './Components/Footer'
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import { motion } from "framer-motion"
import StaticCovidData from './Components/StaticCovidData'
import { useSearchParams } from "react-router-dom";

const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 30,
 },
}
const getRegionData = (id, hr, eventKey, title, title2, district, center, population, area, density) => ({ id, hr, eventKey, title, title2, district, center, population, area, density });

const regions = [
 // getRegionData(1, "http://localhost:4000/api/csvCovid/nd", "nd", "Новосибирская область", "Белгородская область белгородская область","Центральный федеральный округ","Белгород", "1 514 500 ч.", "27 100 км²", "55,31 чел./км²"),
 // getRegionData(2, "http://localhost:4000/api/csvCovid/altay", "altay", "Алтайский край", "Брянская область брянская область","Центральный федеральный округ","Брянск", "1 168 800 ч.", "34 900 км²", "32,77 чел./км²"),
 // getRegionData(3, "http://localhost:4000/api/csvCovid/omsk", "omsk", "Омская область", "Владимирская область владимирская область","Центральный федеральный округ","Владимир", "1 342 099 ч.", "29 000 км²", "46,15 чел./км²"),
 // getRegionData(4, "http://localhost:4000/api/csvCovid/tomsk", "tomsk", "Томская область", "Владимирская область владимирская область","Центральный федеральный округ","Владимир", "1 342 099 ч.", "29 000 км²", "46,15 чел./км²"),
  getRegionData(1, "https://server.covid19-modeling.ru/api/csvCovid/belgorod", "belgorod", "Белгородская область", "Белгородская область белгородская область","Центральный федеральный округ","Белгород", "1 514 500 ч.", "27 100 км²", "55,31 чел./км²"),
  getRegionData(2, "https://server.covid19-modeling.ru/api/csvCovid/bryansk", "bryansk", "Брянская область", "Брянская область брянская область","Центральный федеральный округ","Брянск", "1 168 800 ч.", "34 900 км²", "32,77 чел./км²"),
  getRegionData(3, "https://server.covid19-modeling.ru/api/csvCovid/vladimir", "vladimir", "Владимирская область", "Владимирская область владимирская область","Центральный федеральный округ","Владимир", "1 342 099 ч.", "29 000 км²", "46,15 чел./км²"),
  getRegionData(4, "https://server.covid19-modeling.ru/api/csvCovid/voronezh", "voronezh", "Воронежская область", "Воронежская область воронежская область","Центральный федеральный округ","Воронеж", "2 273 417 ч.", "52 216 км²", "43,54 чел./км²"),
  getRegionData(5, "https://server.covid19-modeling.ru/api/csvCovid/ivanovsk", "ivanovsk", "Ивановская область", "Ивановская область ивановская область","Центральный федеральный округ","Иваново", "905 900 ч.", "21 437 км²", "42,26 чел./км²"),
  getRegionData(6, "https://server.covid19-modeling.ru/api/csvCovid/kaluga", "kaluga", "Калужская область", "Калужская область калужская область","Центральный федеральный округ","Калуга", "1 068 410 ч.", "29 777 км²", "35,88 чел./км²"),
  getRegionData(7, "https://server.covid19-modeling.ru/api/csvCovid/kostroma", "kostroma", "Костромская область", "Костромская область костромская область","Центральный федеральный округ","Кострома", "566 266 ч.", "60 211 км²", "9,4 чел./км²"),
  getRegionData(8, "https://server.covid19-modeling.ru/api/csvCovid/kursk", "kursk", "Курская область", "Курская область курская область","Центральный федеральный округ","Курск", "1 060 892 ч.", "29 997 км²", "35,37 чел./км²"),
  getRegionData(9, "https://server.covid19-modeling.ru/api/csvCovid/lipeck", "lipeck", "Липецкая область", "Липецкая область липецкая область","Центральный федеральный округ","Липецк", "1 116 265 ч.", "24 047 км²", "46,42 чел./км²"),
  getRegionData(10, "https://server.covid19-modeling.ru/api/csvCovid/moscow", "moscow", "Московская область", "Московская область московская область","Центральный федеральный округ","Москва", "8 651 260 ч.", "44 329 км²", "195,16 чел./км²"),
  getRegionData(11, "https://server.covid19-modeling.ru/api/csvCovid/orel", "orel", "Орловская область", "Орловская область орловская область","Центральный федеральный округ","Орёл", "724 686 ч.", "24 700 км²", "29,4 чел./км²"),
  getRegionData(12, "https://server.covid19-modeling.ru/api/csvCovid/ryazun", "ryazun", "Рязанская область", "Рязанская область рязанская область","Центральный федеральный округ","Рязань", "1 082 231 ч.", "44 329 км²", "27,33 чел./км²"),
  getRegionData(13, "https://server.covid19-modeling.ru/api/csvCovid/smolensk", "smolensk", "Смоленская область", "Смоленская область смоленская область","Центральный федеральный округ","Смоленск", "863 987 ч.", "49 779 км²", "17,36 чел./км²"),
  getRegionData(14, "https://server.covid19-modeling.ru/api/csvCovid/tambov", "tambov", "Тамбовская область", "Тамбовская область тамбовская область","Центральный федеральный округ","Тамбов", "956 292 ч.", "34 462 км²", "27,75 чел./км²"),
  getRegionData(15, "https://server.covid19-modeling.ru/api/csvCovid/tver", "tver", "Тверская область", "Тверская область тверская область","Центральный федеральный округ","Тверь", "1 199 747 ч.", "84 100 км²", "14,25 чел./км²"),
  getRegionData(16, "https://server.covid19-modeling.ru/api/csvCovid/tula", "tula", "Тульская область", "Тульская область тульская область","Центральный федеральный округ","Тула", "1 471 140 ч.", "25 679 км²", "57,29 чел./км²"),
  getRegionData(17, "https://server.covid19-modeling.ru/api/csvCovid/yaroslavl", "yaroslavl", "Ярославская область", "Ярославская область ярославская область","Центральный федеральный округ","Ярославль", "1 187 558 ч.", "36 400 км²", "32,83 чел./км²"),
  getRegionData(18, "https://server.covid19-modeling.ru/api/csvCovid/kareliya", "kareliya", "Республика Карелия", "Республика Карелия республика карелия","Северо-Западный федеральный округ","Петразаводск", "523 856 ч.", "172 400 км²", "2,9 чел./км²"),
  getRegionData(19, "https://server.covid19-modeling.ru/api/csvCovid/komi", "komi", "Республика Коми", "Республика Коми республика коми","Северо-Западный федеральный округ","Сыктывкар", "720 610 ч.", "415 900 км²", "1,73 чел./км²"),
  getRegionData(20, "https://server.covid19-modeling.ru/api/csvCovid/arhangelsk", "arhangelsk", "Архангельская область", "Архангельская область архангельская область","Северо-Западный федеральный округ","Архангельск", "998 072 ч.", "587 400 км²", "1,69 чел./км²"),
  getRegionData(21, "https://server.covid19-modeling.ru/api/csvCovid/vologda", "vologda", "Вологодская область", "Вологодская область вологодская область","Северо-Западный федеральный округ","Вологда", "1 121 343 ч.", "144 527 км²", "8,5 чел./км²"),
  getRegionData(22, "https://server.covid19-modeling.ru/api/csvCovid/kaliningrad", "kaliningrad", "Калининградская область", "Калининградская область калининградская область","Северо-Западный федеральный округ","Калининград", "1 033 914 ч.", "15 125 км²", "68,36 чел./км²"),
  getRegionData(23, "https://server.covid19-modeling.ru/api/csvCovid/leningrad", "leningrad", "Ленинградская область", "Ленинградская область ленинградская область","Северо-Западный федеральный округ","Гатчина", "2 035 762 ч.", "83 908 км²", "24,26 чел./км²"),
  getRegionData(24, "https://server.covid19-modeling.ru/api/csvCovid/murmansk", "murmansk", "Мурманская область", "Мурманская область мурманская область","Северо-Западный федеральный округ","Мурманск", "656 438 ч.", "144 902 км²", "4,53 чел./км²"),
  getRegionData(25, "https://server.covid19-modeling.ru/api/csvCovid/novgorod", "novgorod", "Новгородская область", "Новгородская область новгородская область","Северо-Западный федеральный округ","Великий Новгород", "571 447 ч.", "54 501 км²", "10,49 чел./км²"),
  getRegionData(26, "https://server.covid19-modeling.ru/api/csvCovid/pskov", "pskov", "Псковская область", "Псковская область псковская область","Северо-Западный федеральный округ","Псков", "581 147 ч.", "55 399 км²", "10,49 чел./км²"),
  getRegionData(27, "https://server.covid19-modeling.ru/api/csvCovid/adygea", "adygea", "Республика Адыгея", "Республика Адыгея республика адыгея","Южный федеральный округ","Майкоп", "500 591 ч.", "7 792 км²", "64,24 чел./км²"),
  getRegionData(28, "https://server.covid19-modeling.ru/api/csvCovid/kalmykia", "kalmykia", "Республика Калмыкия", "Республика Калмыкия республика калмыкия","Южный федеральный округ","Элиста", "266 770 ч.", "74 731 км²", "5,57 чел./км²"),
  getRegionData(29, "https://server.covid19-modeling.ru/api/csvCovid/krasnodar", "krasnodar", "Краснодарский край", "Краснодарский край краснодарский край","Южный федеральный округ","Краснодар", "5 833 002 ч.", "76 005 км²", "77,27 чел./км²"),
  getRegionData(30, "https://server.covid19-modeling.ru/api/csvCovid/volgograd", "volgograd", "Волгоградская область", "Волгоградская область волгоградская область","Южный федеральный округ","Волгоград", "2 453 898 ч.", "113 900 км²", "21,74 чел./км²"),
  getRegionData(31, "https://server.covid19-modeling.ru/api/csvCovid/rostov", "rostov", "Ростовская область", "Ростовская область ростовская область","Южный федеральный округ","Ростов", "4 152 518 ч.", "100 967 км²", "41,13 чел./км²"),
  getRegionData(32, "https://server.covid19-modeling.ru/api/csvCovid/dagestan", "dagestan", "Республика Дагестан", "Республика Дагестан республика дагестан","Южный федеральный округ","Махачкала", "3 232 224 ч.", "50 270 км²", "64,3 чел./км²"),
  getRegionData(33, "https://server.covid19-modeling.ru/api/csvCovid/ingushetia", "ingushetia", "Республика Ингушетия", "Республика Ингушетия республика ингушетия","Южный федеральный округ","Магас", "509 541 ч.", "3 685 км²", "147,7 чел./км²"),
  getRegionData(34, "https://server.covid19-modeling.ru/api/csvCovid/kabarbalkar", "kabarbalkar", "Кабардино-Балкарская Республика", "Кабардино-Балкарская Республика кабардино-балкарская республик","Южный федеральный округ","Нальчик", "905 464 ч.", "76 005 км²", "72,61 чел./км²"),
  getRegionData(35, "https://server.covid19-modeling.ru/api/csvCovid/karcherk", "karcherk", "Карачаево-Черкесская Республика", "Карачаево-Черкесская Республика карачаево-черкесская республика","Южный федеральный округ","Черкесск", "468 322 ч.", "14 100 км²", "32,8 чел./км²"),
  getRegionData(36, "https://server.covid19-modeling.ru/api/csvCovid/sevosetiaalania", "sevosetiaalania", "Республика Северная Осетия-Алания", "Республика Северная Осетия-Алания республика северная осетия-алания","Северо-Кавказский федеральный округ","Владикавказ", "678 879 ч.", "8 000 км²", "85,00 чел./км²"),
  getRegionData(37, "https://server.covid19-modeling.ru/api/csvCovid/chechnya", "chechnya", "Чеченская республика", "Чеченская республика чеченская республика","Северо-Кавказский федеральный округ","Грозный", "1 552 866 ч.", "16 171 км²", "96,03 чел./км²"),
  getRegionData(38, "https://server.covid19-modeling.ru/api/csvCovid/stavrapol", "stavrapol", "Ставропольский край", "Ставропольский край ставропольский край","Северо-Кавказский федеральный округ","Ставрополь", "2 886 108 ч.", "66 160 км²", "43,62 чел./км²"),
  getRegionData(39, "https://server.covid19-modeling.ru/api/csvCovid/bashkortostan", "bashkortostan", "Республика Башкортостан", "Республика Башкортастан республика башкортастан","Приволжский федеральный округ","Уфа", "4 064 361 ч.", "142 947 км²", "28,4 чел./км²"),
  getRegionData(40, "https://server.covid19-modeling.ru/api/csvCovid/maryal", "maryal", "Республика Марий Эл", "Республика Марий Эл республика марий эл","Приволжский федеральный округ","Йошкар-Ола", "696 459 ч.", "23 375 км²", "29,5 чел./км²"),
  getRegionData(41, "https://server.covid19-modeling.ru/api/csvCovid/mordovia", "mordovia", "Республика Мордовия", "Республика Мордовия республика мордовия","Приволжский федеральный округ","Саранск", "765 891  ч.", "26 128 км²", "29,31 чел./км²"),
  getRegionData(42, "https://server.covid19-modeling.ru/api/csvCovid/tatarstan", "tatarstan", "Республика Татарстан", "Республика Татарстан республика татарстан","Приволжский федеральный округ","Казань", "4 003 016 ч.", "67 847 км²", "56,57 чел./км²"),
  getRegionData(43, "https://server.covid19-modeling.ru/api/csvCovid/udmurtia", "udmurtia", "Удмуртская Республика", "Удмуртская Республика удмуртская республика","Приволжский федеральный округ","Ижевск", "1 434 557  ч.", "42 061 км²", "34,11 чел./км²"),
  getRegionData(44, "https://server.covid19-modeling.ru/api/csvCovid/chuvashia", "chuvashia", "Чувашская Республика", "Чувашская Республика чувашская республика","Приволжский федеральный округ","Чебоксары", "1 167 061 ч.", "18 343 км²", "63,62 чел./км²"),
  getRegionData(45, "https://server.covid19-modeling.ru/api/csvCovid/perm", "perm", "Пермский край", "Пермский край пермский край","Приволжский федеральный округ","Пермь", "2 495 266 ч.", "160 236 км²", "15,57 чел./км²"),
  getRegionData(46, "https://server.covid19-modeling.ru/api/csvCovid/kirov", "kirov", "Кировская область", "Кировская область кировская область","Северо-Кавказский федеральный округ","Киров", "1 129 935 ч.", "120 400 км²", "9,39 чел./км²"),
  getRegionData(47, "https://server.covid19-modeling.ru/api/csvCovid/nizhniynovgorod", "nizhniynovgorod", "Нижегородская область", "Нижегородская область нижегородская область","Северо-Кавказский федеральный округ","Нижний Новгород", "3 060 335 ч.", "76 624 км²", "39,94 чел./км²"),
  getRegionData(48, "https://server.covid19-modeling.ru/api/csvCovid/orenburg", "orenburg", "Оренбургская область", "Оренбургская область оренбургская область","Северо-Кавказский федеральный округ","Оренбург", "1 828 656 ч.", "123 702 км²", "14,78 чел./км²"),
  getRegionData(49, "https://server.covid19-modeling.ru/api/csvCovid/penza", "penza", "Пензенская область", "Пензенская область пензенская область","Приволжский федеральный округ","Пенза", "1 236 113 ч.", "43 352 км²", "28,51 чел./км²"),
  getRegionData(50, "https://server.covid19-modeling.ru/api/csvCovid/samara", "samara", "Самарская область", "Самарская область самарская область","Приволжский федеральный округ","Самара", "3 127 842 ч.", "53 565 км²", "58,39 чел./км²"),
  getRegionData(51, "https://server.covid19-modeling.ru/api/csvCovid/saratov", "saratov", "Саратовская область", "Саратовская область саратовская область","Приволжский федеральный округ","Саратов", "2 385 163  ч.", "101 240 км²", "23,56 чел./км²"),
  getRegionData(52, "https://server.covid19-modeling.ru/api/csvCovid/ulyanovsk", "ulyanovsk", "Ульяновская область", "Ульяновская область ульяновская область","Приволжский федеральный округ","Ульяновск", "1 172 782 ч.", "37 181 км²", "31,54 чел./км²"),
  getRegionData(53, "https://server.covid19-modeling.ru/api/csvCovid/kurgan", "kurgan", "Курганская область", "Курганская область курганская область","Уральский федеральный округ","Курган", "753 002  ч.", "71 488 км²", "10,53 чел./км²"),
  getRegionData(54, "https://server.covid19-modeling.ru/api/csvCovid/sverdlov", "sverdlov", "Свердловская область", "Свердловская область свердловская область","Уральский федеральный округ","Екатеринбург", "4 222 695 ч.", "194 226 км²", "21,73 чел./км²"),
  getRegionData(55, "https://server.covid19-modeling.ru/api/csvCovid/tumen", "tumen", "Тюменская область", "Тюменская область тюменская область","Уральский федеральный округ","Тюмень", "3 890 800 ч.", "160 122 км²", "2,66 чел./км²"),
  getRegionData(56, "https://server.covid19-modeling.ru/api/csvCovid/chelyabinsk", "chelyabinsk", "Челябинская область", "Челябинская область челябинская область","Уральский федеральный округ","Челябинск", "3 395 798 ч.", "88 529 км²", "38,36 чел./км²"),
  getRegionData(57, "https://server.covid19-modeling.ru/api/csvCovid/respaltay", "respaltay", "Республика Алтай", "Республика Алтай республика алтай","Сибирский федеральный округ","Горно-Алтайск", "210 765 ч.", "92 903 км²", "2,27 чел./км²"),
  getRegionData(58, "https://server.covid19-modeling.ru/api/csvCovid/resptyva", "resptyva", "Республика Тыва", "Республика Тыва республика тыва","Сибирский федеральный округ","Кызыл", "337 544 ч.", "168 604 км²", "2,0 чел./км²"),
  getRegionData(59, "https://server.covid19-modeling.ru/api/csvCovid/resphakasia", "resphakasia", "Республика Хакасия", "Республика Хакасия республика хакасия","Сибирский федеральный округ","Абакан", "528 175 ч.", "61 569 км²", "8,58 чел./км²"),
  getRegionData(60, "https://server.covid19-modeling.ru/api/csvCovid/altay", "altay", "Алтайский край" , "Алтайский край алтайский край","Сибирский федеральный округ","Барнаул", "2 268 179 ч.", "167 996 км²", "13,5 чел./км²"),
  getRegionData(61, "https://server.covid19-modeling.ru/api/csvCovid/krasnoyarsk", "krasnoyarsk", "Красноярский край", "Красноярский край красноярский край","Сибирский федеральный округ","Красноярск", "2 846 120 ч.", "2 366 797  км²", "1,2 чел./км²"),
  getRegionData(62, "https://server.covid19-modeling.ru/api/csvCovid/irkutsk", "irkutsk", "Иркутская область", "Иркутская область иркутская область","Сибирский федеральный округ","Иркутск", "2 330 537 ч.", "774 846 км²", "3,01 чел./км²"),
  getRegionData(63, "https://server.covid19-modeling.ru/api/csvCovid/kemerovo", "kemerovo", "Кемеровская область", "Кемеровская область кемеровская область","Сибирский федеральный округ","Кемерово", "2 547 684 ч.", "95 725 км²", "26,61 чел./км²"),
  getRegionData(64, "https://server.covid19-modeling.ru/api/csvCovid/novosibirsk", "novosibirsk", "Новосибирская область", "Новосибирская область новосибирская область","Сибирский федеральный округ","Новосибирск", "2 779 375 ч.", "177 756 км²", "15,64 чел./км²"),
  getRegionData(65, "https://server.covid19-modeling.ru/api/csvCovid/omsk", "omsk", "Омская область", "Омская область омская область","Сибирский федеральный округ","Омск", "1 879 548 ч.", "141 140 км²", "13,32 чел./км²"),
  getRegionData(66, "https://server.covid19-modeling.ru/api/csvCovid/tomsk", "tomsk", "Томская область", "Томская область томская область","Сибирский федеральный округ","Томск", "1 043 385 ч.", "314 391 км²", "3,32 чел./км²"),
  getRegionData(67, "https://server.covid19-modeling.ru/api/csvCovid/buryatia", "buryatia", "Республика Бурятия", "Республика Бурятия республика бурятия","Дальневосточный федеральный округ","Улан-Удэ", "971 922 ч.", "351 334 км²", "2,73 чел./км²"),
  getRegionData(68, "https://server.covid19-modeling.ru/api/csvCovid/saha", "saha", "Республика Саха", "Республика Саха республика саха","Дальневосточный федеральный округ","Якутск", "1 001 664 ч.", "3 083 523 км²", "0,32 чел./км²"),
  getRegionData(69, "https://server.covid19-modeling.ru/api/csvCovid/zabaikalsky", "zabaikalsky", "Забайкальский край", "Забайкальский край забайкальский край","Дальневосточный федеральный округ","Чита", "984 395 ч.", "168 604 км²", "2,28 чел./км²"),
  getRegionData(70, "https://server.covid19-modeling.ru/api/csvCovid/kamchatsky", "kamchatsky", "Камчатский край", "Камчатский край камчатский край","Дальневосточный федеральный округ","Петропавловск-Камчатский", "288 947 ч.", "464 300 км²", "0,62 чел./км²"),
  getRegionData(71, "https://server.covid19-modeling.ru/api/csvCovid/primorsk", "primorsk", "Приморский край" , "Приморский край приморский край","Дальневосточный федеральный округ","Владивосток", "1 806 393 ч.", "164 673 км²", "10,97 чел./км²"),
  getRegionData(72, "https://server.covid19-modeling.ru/api/csvCovid/habarovsk", "habarovsk", "Хабаровский край", "Хабаровский край хабаровский край","Дальневосточный федеральный округ","Хабаровск", "1 278 132 ч.", "787 633  км²", "1,62 чел./км²"),
  getRegionData(73, "https://server.covid19-modeling.ru/api/csvCovid/amursk", "amursk", "Амурская область", "Амурская область амурская область","Дальневосточный федеральный округ","Благовещенск", "750 083 ч.", "361 908 км²", "2,20 чел./км²"),
  getRegionData(74, "https://server.covid19-modeling.ru/api/csvCovid/magadan", "magadan", "Магаданская область", "Магаданская область магаданская область","Дальневосточный федеральный округ","Магадан", "133 387 ч.", "462 464 км²", "0,29 чел./км²"),
  getRegionData(75, "https://server.covid19-modeling.ru/api/csvCovid/sahalin", "sahalin", "Сахалинская область", "Сахалинская область сахалинская область","Дальневосточный федеральный округ","Южно-Сахалинск", "457 590 ч.", "87 101 км²", "5,25 чел./км²"),
  getRegionData(76, "https://server.covid19-modeling.ru/api/csvCovid/evreiskaya", "evreiskaya", "Еврейская автономная область", "Еврейская автономная область еврейская автономная область","Дальневосточный федеральный округ","Биробиджан", "145 802 ч.", "36 300 км²", "4,02 чел./км²"),
  getRegionData(77, "https://server.covid19-modeling.ru/api/csvCovid/chukotsk", "chukotsk", "Чукотский автономный округ", "Чукотский автономный округ чукотский автономный округ","Дальневосточный федеральный округ","Анадырь", "48 029 ч.", "721 481 км²", "0,07 чел./км²"),
]
export function Covid(){
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

  React.useEffect(() => {
    setNoResults(filteredRegions.length === 0 );
  }, [filteredRegions]);

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
              <h4 className="mx-5 text-secondary">Коронавирус</h4>
            </div>
            <hr />
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
              <input type="search" name="search" />
              <input type="submit" value="Поиск" />
            </form>
          </motion.h3>
        </Container>
        <Button className="my-2 all-region" onClick={() => setShowAllRegions(!showAllRegions)}>
        {showAllRegions ? "Скрыть регионы" : "Показать все регионы"}
      </Button>
        {noResults && (
          <div className="text-center text-danger my-3">
            По вашему запросу регион не найден
          </div>
        )}
              
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
              <StaticCovidData key={region.id} region={region} />
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
      <Footer />
    </>
  );
}
