import React from "react";
import styles from './CommentHeader.module.css';

const CommentHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img className={styles.profilePicture} alt="Profile picture" src={props.user.image.png}></img>
        <span className={styles.username}>{props.user.username}</span>
        <span className={styles.createdAt}>{props.createdAt}</span>
      </div>
      <button>reply</button>
    </div>
  );
};

export default CommentHeader;
