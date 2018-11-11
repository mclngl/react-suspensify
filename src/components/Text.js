import React from 'react';

const Text = React.memo(function Text(props) {
  return (
    <div style={props.style} className={props.className}>
      {props.text}
    </div>
  );
});

export default Text;
