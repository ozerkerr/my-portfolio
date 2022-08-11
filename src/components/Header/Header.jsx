// import components
import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// create var for name
const myName = "Ozer Kelgembaitegin";

// component for header
function Header({ handlePageChange, currentPage }) {
  return (
    <Navbar bg="transperent" className="sticky-top" expand="lg">
      <Container className="header p-0 ml-2 mr-2 p-2 w-100">
        <Navbar.Brand>{myName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      {/* render navigation component */}
      <Navigation
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Navbar>
  );
}

export default Header;
