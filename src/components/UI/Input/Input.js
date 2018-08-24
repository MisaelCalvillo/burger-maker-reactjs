import React from 'react';

import classes from './Input.css';

const input = (props) => {

  let inputElement = null;

  switch (props.inputtype) {
    case ('input'): 
      inputElement = <input className={classes.InputElement} {...props}/>;
      break;
    case ('textarea'): 
      inputElement = <textarea classsclassName={classes.Label}   {...props}/>;
      break;
    default: 
      inputElement = <input className={classes.InputElement}   {...props}/>;
  }
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;