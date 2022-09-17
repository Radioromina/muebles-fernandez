import React from "react"
import { ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import logo from "../../log.svg"


function BasicExample() {

  

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand>
            <NavLink to={"/"}>
                <img src={logo} width="140" className="d-inline-block " alt="logo"/>
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-around basis">
            <NavLink className="nav-link" to={"/"}>Home</NavLink>
            <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <ListGroup>
                    <NavLink className="border-bottom justify-content-center fs-4" to={"/categorias/escritorio"} >Escritorios</NavLink>
                    <NavLink className="border-bottom fs-4" to={"/categorias/sillas"} >Sillas de Escritorio</NavLink>
                </ListGroup>
            </NavDropdown>
            <NavLink className="nav-link" to={"/contacto"}>Contacto</NavLink>
           <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;