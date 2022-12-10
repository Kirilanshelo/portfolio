import Reac, { useContext } from "react";
import { GlobalContext } from "../context/themeContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeButton from './themeButton';

const NavbarElement = () => {
  const {theme} = useContext(GlobalContext)

  return (
    <div className="horizontal-nav">
      <Container className={`navbar-${theme}`}>
      <Navbar collapseOnSelect expand="sm" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link className={theme} href="#aboutme">About Me</Nav.Link>
                <Nav.Link className={theme} href="#experience">Experiences</Nav.Link>
                <Nav.Link className={theme} href="#skills">Abilities</Nav.Link>
                <Nav.Link className={theme} href="#getintouch">Get in touch</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
        
        {/* <Form >
          <Form.Check 
            type="switch"
            id="custom-switch"
            onClick={() => setDarkMode(!mode)}
          />
        </Form> */}
      </Navbar>
      </Container>
      <ThemeButton />
    </div>
  );
}

export default NavbarElement;