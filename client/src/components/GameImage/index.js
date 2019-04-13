import React from "react";
import "./style.css";

const GameImage = props => {
  return (
    <div 
      className="game-card justify-content-center"
      onClick={props.handleClick}
    >
      <img
        className="game-img"
        src={props.src}
        alt={props.id}
        data-id={props.id}
      />
    </div>
  );
};

export default GameImage;
