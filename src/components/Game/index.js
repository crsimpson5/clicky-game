import React from "react";
import GameImage from "../GameImage";
import Container from "react-bootstrap/Container";
import "./style.css";

const Game = props => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="d-flex  flex-wrap justify-content-around mt-4">
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
        </div>
      </div>
    </Container>
  );
};

export default Game;
