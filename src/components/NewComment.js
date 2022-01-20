import React from "react";
import styles from "./NewComment.module.css";
import containerStyles from "./Comment.module.css";

const NewComment = () => {
  return (
    <div className={containerStyles.container}>
      <div></div>
      <textarea></textarea>
      <button>SEND</button>
    </div>
  );
};

export default NewComment;
