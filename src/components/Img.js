import React from "react";

const Img = React.memo(function Img(props) {
  return (
    <div className={props.className}>
      <img className={props.imgClassName} src={props.source}>
        {props.children}
      </img>
    </div>
  );
});

export default Img;
