import React from "react";
import classname from "./Button.module.css";

const Button = props => (
  <button
    className={[classname.Button, classname[props.btnType]].join(" ")}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
