import "./Navigation.css"
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Portfolio</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  )
}

export default Navigation;