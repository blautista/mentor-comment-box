import React, {useRef} from "react";
import Button from "./Buttons/Button";
import styles from './NewComment.module.css'

const NewCommentForm = (props) => {
  
  const textareaRef= useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({ commentBody: textareaRef.current.value });
    textareaRef.current.value = "";
  };
  
  return (
    <>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        placeholder="Write your comment here"
        value={props.content || ''}
      ></textarea>
      <Button
        text={(props.isUpdating) ? "UPDATE" : "SEND"}
        type="submit"
        onClick={handleSubmit}
        styling="success"
      ></Button>
    </>
  );
};

export default NewCommentForm;
