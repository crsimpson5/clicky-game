import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Header = props => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Clicky Game</Navbar.Brand>
      <Nav>
        <Nav.Link href="https://github.com/crsimpson5/clicky-game">GitHub</Nav.Link>
      </Nav>
      <div className="ml-auto text-light">Score: {props.score}</div>
    </Navbar>
  );
};

export default Header;
