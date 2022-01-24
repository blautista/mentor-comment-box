import React from "react";
import containerStyles from "./Comment.module.css";

import NewCommentForm from "./NewCommentForm";
const NewComment = (props) => {
  const styles = !props.isReply
    ? containerStyles.container
    : `${containerStyles.container} ${containerStyles.replyContainer}`;
  return (
    <div className={styles}>
      <img src={props.currentUser.image.png}></img>
      <NewCommentForm onFormSubmit={props.onFormSubmit}></NewCommentForm>
    </div>
  );
};

export default NewComment;
