import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NaviBar.css";

const NaviBar: React.FC = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">GOT-the-SAUCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="#link">RANDOM DRINK</Nav.Link>
            <NavDropdown title="ALC TYPE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">VODKA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GIN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">RUM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">TEQUILA</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NaviBar;
