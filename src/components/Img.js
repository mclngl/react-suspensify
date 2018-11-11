import React from 'react';

const Img = React.memo(function Img(props) {
  return (
    <img
      style={props.style}
      className={props.className}
      alt={props.alt}
      src={props.source}
    >
      {props.children}
    </img>
  );
});

export default Img;
