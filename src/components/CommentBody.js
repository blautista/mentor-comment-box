import React from 'react';
import styles from './CommentBody.module.css';

const CommentBody = (props) => {
  return <div><p>{props.content}</p></div>;
};

export default CommentBody;
