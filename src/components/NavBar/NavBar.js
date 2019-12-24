import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const NavBar = props => {
  return (
    <nav>
      <Container className="justify-content-center">
        <ul>
          <li>
            <a href="/" alt="">
              Clicky Game
            </a>
          </li>
          <li>Click an Image to Start!</li>
          <li>
            Score: {props.state.score} | Best: {props.state.highScore}
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
