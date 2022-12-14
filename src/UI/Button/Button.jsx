import React from 'react';
import './Button.css';
const Button = (props) => {
  return (
    <button className={` ${props.className} btn`} onClick={props.onClick} type={props.type || `button`}>
      {props.children}
    </button>
  );
};

export default Button;
