import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import logo from "../../log.svg"
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


function ColorSchemesExample() {
    return (
   
        <Navbar className="navbar">
          <Container>
            <NavLink to={"/"}>
                <img src={logo} alt="" width={100}/>
            </NavLink>
            <Nav className="me-auto">
              <NavLink to={"/"} >Home</NavLink>
              <NavLink to={"/productos"} >Productos</NavLink>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <ListGroup>
                  <NavLink to={"/categorias/escritorio"}>Escritorio</NavLink>
                  <NavLink to={"/categorias/sillas"}>Sillas de Escritorio</NavLink>
                </ListGroup>
              </NavDropdown>
              <NavLink to={"/contacto"} >Contacto</NavLink>
              <CartWidget/>
            </Nav>
          </Container>
        </Navbar>
    

    );
  }
  
  export default ColorSchemesExample;