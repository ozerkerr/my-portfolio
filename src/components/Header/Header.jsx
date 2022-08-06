import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const myName = "Ozer Kelgembaitegin";

function Header({ handlePageChange, currentPage }) {
  return (
    <Navbar bg="bg-transparent" className="sticky-top" expand="lg">
      <Container className="header p-0 ml-2 mr-2 p-2 w-100">
        <Navbar.Brand>{myName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navigation
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Navbar>
  );
}

export default Header;
