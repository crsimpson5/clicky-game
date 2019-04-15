import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

const Header = props => {
  return (
    <div>
      <Navbar expand="lg" variant="default">
        <Navbar.Brand>Clicky Game</Navbar.Brand>
          <Nav>
          <Nav.Link href="https://github.com/crsimpson5/clicky-game">GitHub</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron fluid className="text-center">
        <h1><strong>Clicky Game</strong></h1>
        <p className="px-2">Click a character to earn a point, but don't pick the same one twice!</p>
        <div id="score"><strong>Score: {props.score}</strong></div>
      </Jumbotron>
    </div>
  );
};

export default Header;
