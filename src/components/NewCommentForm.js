import React, { useRef } from "react";
import Button from "./Buttons/Button";
import containerStyles from "./NewComment.module.css";
import styles from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const textareaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({ commentBody: textareaRef.current.value });
    textareaRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        placeholder="Write your comment here"
        defaultValue={props.content || ""}
      ></textarea>
      <Button
        text={props.isUpdating ? "UPDATE" : "SEND"}
        type="submit"
        onClick={handleSubmit}
        styling="success"
      ></Button>
    </div>
  );
};

export default NewCommentForm;
