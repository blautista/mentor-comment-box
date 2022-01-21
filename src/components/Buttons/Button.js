import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const styling = `${styles[props.styling] || ""} ${styles.button}`;

  return (
    <button type={props.type || "button"} className={styling}>
      {props.text}
    </button>
  );
};

export default Button;
