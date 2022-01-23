import React, { useState } from "react";
import styles from "./CommentVoteBox.module.css";

const CommentVoteBox = (props) => {
  const [vote, setVote] = useState(0);

  const handleUpvote = () => {
    setVote((oldVote) => (oldVote === 1 ? 0 : 1));
    props.onUpvote();
  };

  const handleDownvote = () => {
    setVote((oldVote) => (oldVote === -1 ? 0 : -1));
    props.onDownvote();
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.voteButton} ${
          vote === 1 ? styles.voteButtonBold : ""
        }`}
        onClick={handleUpvote}
      >
        +
      </button>
      <span className={styles.scoreNumber}>{props.score}</span>
      <button
        className={`${styles.voteButton} ${
          vote === -1 ? styles.voteButtonBold : ""
        }`}
        onClick={handleDownvote}
      >
        -
      </button>
    </div>
  );
};

export default CommentVoteBox;
