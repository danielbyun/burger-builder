import React from "react";
import classname from "./Button.module.css";

const Button = props => (
  <button
    className={[classname.Button, classname[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
