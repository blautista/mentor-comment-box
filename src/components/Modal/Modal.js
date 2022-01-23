import React, { useState } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import ModalButtons from "./ModalButtons";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div onClick={props.onExit} className={styles.modal}>
          <div onClick={stopPropagation} className={styles["modal-inner"]}>
            <div className={styles.modalHeader}>
              <h1 className={styles.title}>{props.title}</h1>
            </div>
            <div className={styles.modalBody}>
              {props.children}
              <ModalButtons
                cancelText={props.cancelText}
                successText={props.successText}
                onCancel={props.onExit}
                onSuccess={props.onSuccess}
              ></ModalButtons>
            </div>
            <div className={styles.modalFooter}>
              {props.showLoading && <p>Loading..</p>}
              {props.showError && (
                <p className={styles.errorMessage}>{props.errorMessage}</p>
              )}
              {props.showSuccess && (
                <p className={styles.successMessage}>{props.successMessage}</p>
              )}
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

Modal.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  showLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onExit: PropTypes.func,
};

export default Modal;
