import React from "react";

const defStyle = {
  display: "flex",
  alignItems: "center"
};

function Container(props) {
  const style = {...props.style, ...defStyle};
  return <div className={props.className} ref={props.hover} style={style}>{props.children}</div>;
}

export default Container;
