import React from "react";

const ClickItem = props => {
  return (
    <button className="btn" style={{ padding: "0" }}>
      <img alt="" src={props.src} onClick={props.handleClick} />
    </button>
  );
};

export default ClickItem;
