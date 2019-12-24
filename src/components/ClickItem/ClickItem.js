import React from "react";
import "./style.css";

const ClickItem = props => {
  return (
    <button className="btn" style={{ padding: "0" }}>
      <img alt="" src={props.src} onClick={props.handleClick} />
    </button>
  );
};

export default ClickItem;
