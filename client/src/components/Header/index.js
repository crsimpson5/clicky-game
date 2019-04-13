import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const Header = props => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Clicky Game</Navbar.Brand>
      <div className="ml-auto text-light">Score: {props.score}</div>
    </Navbar>
  );
};

export default Header;
