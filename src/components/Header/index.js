import React from "react";

const Header = props => {
  return (
    <div>
      <span>{props.score}</span>
    </div>
  );
};

export default Header;