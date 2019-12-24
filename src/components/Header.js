import React from "react";
import NavBar from "./NavBar/NavBar";

const Header = props => {
  return (
    <header>
      <NavBar state={props.state} />
    </header>
  );
};

export default Header;
