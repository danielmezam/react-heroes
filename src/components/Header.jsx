import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand href="#home">SuperHero API</Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default Header;
