import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import logo from "../../log.svg"
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function ColorSchemesExample() {
    return (
   
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" width={100}/>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Contacto</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Escritorio</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Sillas de Escritorio
              </NavDropdown.Item>
              </NavDropdown>
              <CartWidget/>
            </Nav>
          </Container>
        </Navbar>
    

    );
  }
  
  export default ColorSchemesExample;