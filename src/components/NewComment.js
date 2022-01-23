import React from "react";
import containerStyles from "./Comment.module.css";

import NewCommentForm from "./NewCommentForm";
const NewComment = (props) => {
  return (
    <div className={containerStyles.container}>
      <img src={props.currentUser.image.png}></img>
      <NewCommentForm onFormSubmit={props.onFormSubmit}></NewCommentForm>
    </div>
  );
  /**
   * General component description in JSDoc format. Markdown is *supported*.
   */
};

export default NewComment;
