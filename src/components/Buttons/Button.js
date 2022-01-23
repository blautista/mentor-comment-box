import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

/**
 * Just a good old button lmafo
 */

const Button = (props) => {
  const styling = `${styles[props.styling] || ""} ${styles.button}`;

  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={styling}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
}

export default Button;
