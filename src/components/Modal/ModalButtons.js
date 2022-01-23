import React from "react";
import Button from "../Buttons/Button";
import styles from "./ModalButtons.module.css";
const ModalButtons = (props) => {
  return (
    <div className={styles.container}>
      <Button
        text={props.cancelText}
        styling="cancel"
        onClick={props.onCancel}
      ></Button>
      <Button
        text={props.successText}
        styling="warning"
        onClick={props.onSuccess}
      ></Button>
    </div>
  );
};

export default ModalButtons;
