import React from "react";

const GameImage = props => {
  return (
    <div onClick={props.handleClick} value={props.id}>
      <img src={props.path} alt={props.id}/>
    </div>
  );
};

export default GameImage;