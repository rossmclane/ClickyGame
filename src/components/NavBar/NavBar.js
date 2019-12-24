import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const NavBar = () => {
  return (
    <nav>
      <Container className="justify-content-center">
        <ul>
          <li>Clicky Game</li>
          <li>Click to Start!</li>
          <li>Score: 0 | Best: 2</li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
