import React from "react";
import GameImage from "../GameImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const Game = props => {
  return (
    <Container>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <div className="d-flex  flex-wrap justify-content-around mb-4 mt-lg-4">
            {props.images.map(image => {
              return (
                <GameImage
                  key={image.id}
                  id={image.id}
                  src={image.src}
                  handleClick={props.handleClick}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
