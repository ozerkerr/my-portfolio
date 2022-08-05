import "./Navigation.css"
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({handlePageChange}) {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
        <Nav.Link href="#link" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
        <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  )
}

export default Navigation;