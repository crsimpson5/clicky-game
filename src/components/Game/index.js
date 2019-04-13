import React from "react";
import GameImage from "../GameImage";
import "./style.css";

const Game = props => {
  return (
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
  );
};

export default Game;
