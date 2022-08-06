import "./Navigation.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ handlePageChange, currentPage }) {
  const activeKey =
    currentPage === "Home"
      ? 1
      : currentPage === "Portfolio"
      ? 2
      : currentPage === "Contact"
      ? 3
      : 4;
  return (
    <Navbar.Collapse id="basic-navbar-nav w-50">
      <Nav className="me-auto align-items-center" activeKey={activeKey}>
        <Nav.Link
          eventKey={1}
          href="#home"
          onClick={() => handlePageChange("Home")}
          style={{ width: "100px" }}
        >
          About Me
        </Nav.Link>
        <Nav.Link
          eventKey={2}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          style={{ width: "100px" }}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          eventKey={3}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          style={{ width: "100px" }}
        >
          Contact
        </Nav.Link>
        <Nav.Link
          eventKey={4}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          style={{ width: "100px" }}
        >
          Resume
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
}

export default Navigation;
