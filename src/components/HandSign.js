import React from 'react';

const defSize = '1rem';

const HandSign = React.memo(function HandSign(props) {
  const size = props.size*defSize.split('r')[0] || defSize;
  const style = {fontSize: `${size}rem`, ...props.style};
  return (<div style={style} className={props.className}>{'👉'}</div>)
});

export default HandSign;