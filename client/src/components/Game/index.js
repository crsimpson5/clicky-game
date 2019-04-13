import React from "react";
import GameImage from "../GameImage";

const Game = props => {
  return (
    <div>
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
