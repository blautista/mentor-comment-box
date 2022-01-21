import React from "react";
import styles from "./NewComment.module.css";
import containerStyles from "./Comment.module.css";
import Button from "./Buttons/Button";

const NewComment = (props) => {
  return (
    <div className={containerStyles.container}>
      <img src={props.currentUser.image.png}></img>
      <textarea className={styles.textarea} placeholder="Write your comment here"></textarea>
      <Button text={'SEND'} styling='success'></Button>
    </div>
  );
};

export default NewComment;
