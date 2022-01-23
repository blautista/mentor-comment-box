import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => {
  const styling = `${styles[props.styling] || ""} ${styles.button}`;

  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={styling}
    >
      {props.icon && (
        <img src={props.icon} alt="Button icon" className={styles.icon} />
      )}
      {props.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Button;
