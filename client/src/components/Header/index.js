import React, { Fragment } from "react";

const Header = props => {
  return (
    <div>
      {props.score < props.length ? (
        <span>Score: {props.score}</span>
      ) : (
        <Fragment>
          <span>You win!</span> 
          <button onClick={props.handleClick}>Play again!</button>
        </Fragment>
      )}
    </div>
  );
};

export default Header;
