import React from "react";
import styles from "./CommentBody.module.css";

const CommentBody = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>{props.replyingTo && <span className={styles.userTag}>@{props.replyingTo} </span>}{props.content}</p>
    </div>
  );
};

export default CommentBody;
