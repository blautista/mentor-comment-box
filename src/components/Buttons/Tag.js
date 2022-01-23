import React from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = (props) => {
  return <div className={styles.container}>{props.text}</div>;
};

Tag.propTypes = {
  text: PropTypes.string,
  styling: PropTypes.string,
};

export default Tag;
