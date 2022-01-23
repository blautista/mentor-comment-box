import React from "react";
import styles from "./CommentHeader.module.css";
import Button from "./Buttons/Button";
import Tag from "./Buttons/Tag";

const CommentHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img
          className={styles.profilePicture}
          alt="Profile picture"
          src={props.user.image.png}
        ></img>
        <span className={styles.username}>{props.user.username}</span>
        {props.user.username === props.currentUser.username && (
          <Tag text="you"></Tag>
        )}
        <span className={styles.createdAt}>{props.createdAt}</span>
      </div>
      {props.currentUser.username === props.user.username && (
        <div>
          <Button
            text="Delete"
            styling="warningNoBorder"
            icon="./images/icon-delete.svg"
            onClick={props.onDeleteClick}
          ></Button>
          <Button
            text="Edit"
            styling="successNoBorder"
            icon="./images/icon-edit.svg"
            onClick={props.onEditClick}
          ></Button>
        </div>
      )}
      {props.currentUser.username !== props.user.username && (
        <Button
          icon="./images/icon-reply.svg"
          text="Reply"
          styling="successNoBorder"
          onClick={props.onReplyClick}
        />
      )}
    </div>
  );
};

export default CommentHeader;
