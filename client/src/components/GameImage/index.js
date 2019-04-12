import React from "react";

const GameImage = props => {
  return (
    <img
      src={props.src}
      alt={props.id}
      onClick={props.handleClick}
      data-id={props.id}
    />
  );
};

export default GameImage;