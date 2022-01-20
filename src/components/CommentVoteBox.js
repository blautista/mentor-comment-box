import React from 'react';
import styles from './CommentVoteBox.module.css';

const CommentVoteBox = (props) => {
  return <div className={styles.container}>
    <button>+</button>
    {props.score}
    <button>-</button>
  </div>;
};

export default CommentVoteBox;
