import React from "react";
import Comment from './Comment'
import styles from './CommentSection.module.css';
import NewComment from "./NewComment";

const CommentSection = (props) => {
  
  return(
    <div className={styles.container}>
      {props.comments.map(comment => <Comment key={comment.id} data={comment}></Comment>)}
      <NewComment></NewComment>
    </div>
  );
};

export default CommentSection;
