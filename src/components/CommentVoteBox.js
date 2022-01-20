import React from "react";
import styles from "./CommentVoteBox.module.css";

const CommentVoteBox = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.voteButton}>+</button>
      <span className={styles.scoreNumber}>{props.score}</span>
      <button className={styles.voteButton}>-</button>
    </div>
  );
};

export default CommentVoteBox;
