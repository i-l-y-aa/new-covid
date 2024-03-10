import React from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image, Stack} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ".././styles.css";
import ip_head from "../images/ip_head.png"

const setActive=({isActive}) => isActive ? 'active-link' : 'non-active';
export default function NaviBar_En() {

  return (

    <>
      <Navbar collapseOnSelect expand="md" className="text-white">
        <Container className="py-1">
        <Navbar.Brand className="text-white ">
        <Stack direction="horizontal" gap={3}>
        <Image variant="bottom" className = ""
        src={ip_head}
        roundedCircle
        fluid
        style={{ width: '8rem' }, {height: '8rem'}}
        />{' '}
      <h3></h3></Stack></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" className="justify-content-end flex-grow-1 pe-4" >
            <Nav.Link><NavLink to="/En"
            className={setActive}><h5>Main</h5></NavLink></Nav.Link>
            <Nav.Link><NavLink to="/modeling/En"
            className={setActive}><h5>Modeling</h5></NavLink></Nav.Link>
            <Nav.Link><NavLink to="/data/En"
            className={setActive}><h5>Data</h5></NavLink></Nav.Link>
            <h5><NavDropdown title={<span className="fdrop">Statistics</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item> <NavLink to="/statistics/En" className={({isActive}) => isActive ? 'active-link' : 'text-secondary'}>Coronavirus</NavLink></NavDropdown.Item>
            </NavDropdown></h5>
            <div class="header__lang">
                    <a href="/" class="header__lang-link ">RU</a>
                    <span>|</span>
                    <a href="/EN/" class="header__lang-link active">EN</a>
                </div>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

