import React from "react";
import styles from './CommentHeader.module.css';

const CommentHeader = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.username}>{props.user.username}</span>
        <span className={styles.createdAt}>{props.createdAt}</span>
      </div>
      <button>reply</button>
    </div>
  );
};

export default CommentHeader;
