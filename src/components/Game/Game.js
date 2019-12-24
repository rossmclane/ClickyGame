import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import ClickItem from "../ClickItem/ClickItem";

const Game = props => {
  return (
    <Container className="justify-content-center">
      {props.imgs.map(img => (
        <ClickItem src={img} handleClick={props.handleClick} />
      ))}
    </Container>
  );
};

export default Game;
