import React from 'react';

export default function Die(props) {
  const styles = {
    backgroundColor: props.on ? '#39aa5f9e' : 'white',
  };
  return (
    <div className="die-face" onClick={props.isHeld} style={styles}>
      <h2 className="die-num ">{props.value}</h2>
    </div>
  );
}
