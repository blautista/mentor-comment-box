import React, { useRef } from "react";
import styles from "./NewComment.module.css";
import containerStyles from "./Comment.module.css";
import Button from "./Buttons/Button";

const NewComment = (props) => {
  const textareaRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({ commentBody: textareaRef.current.value });
    textareaRef.current.value = "";
  };

  return (
    <div className={containerStyles.container}>
      <img src={props.currentUser.image.png}></img>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        placeholder="Write your comment here"
      ></textarea>
      <Button
        type="submit"
        text={"SEND"}
        onClick={handleSubmit}
        styling="success"
      ></Button>
    </div>
  );
};

export default NewComment;
