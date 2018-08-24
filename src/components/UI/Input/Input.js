import React from 'react';

import classes from './Input.css';

const input = (props) => {

  let inputElement = null;

  switch (props.elementType) {
    case ('input'): 
      inputElement = <input 
          className={classes.InputElement} 
          {...props.elementConfig} 
          value={props.value}/>;
      break;

    case ('textarea'): 
      inputElement = <textarea 
          classsclassName={classes.Label}   
          {...props.elementConfig} 
          value={props.value}/>;
      break;

    default: 
      inputElement = <input 
          className={classes.InputElement}   
          {...props.elementConfig} 
          value={props.value}/>;
  }
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;