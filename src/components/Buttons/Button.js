import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const styling = `${styles[props.styling] || ""} ${styles.button}`;

  return (
    <button onClick={props.onClick} type={props.type || "button"} className={styling}>
      {props.text}
    </button>
  );
};

export default Button;
