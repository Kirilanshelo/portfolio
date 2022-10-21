import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const NavbarElement = () => {
  return (
    <>
      <Container className="navbar">
      <Navbar collapseOnSelect expand="sm" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#experience">Experiences</Nav.Link>
                <Nav.Link href="#skills">Abilities</Nav.Link>
                <Nav.Link href="#getintouch">Get in touch</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    </>
  );
}

export default NavbarElement;