import React, { useState } from "react";
import Comment from "./Comment";
import styles from "./CommentSection.module.css";
import NewComment from "./NewComment";

const CommentSection = (props) => {
  const [comments, setComments] = useState(props.comments);

  const handleCommentSubmit = (data) => {
    if (!data.commentBody) return;

    let newCommentObject = {
      id: Math.random(), //should be set by the backend
      content: data.commentBody,
      createdAt: Date.now(),
      score: 0,
      user: props.currentUser,
    };

    if (data.replyingTo) {
      newCommentObject = {
        ...newCommentObject,
        replyingTo: data.replyingTo.user.username,
      };
      setComments((oldComments) => {
        let newCommentsState = [...oldComments];
        for (let i = 0; i < newCommentsState.length; i++) {
          let isCurrent = newCommentsState[i].id === data.replyingTo.id;
          let isAReply = newCommentsState[i].replies.find(
            (comment) => comment.id === data.replyingTo.id
          );
          if (isCurrent || isAReply) {
            newCommentsState[i].replies.push(newCommentObject);
            return newCommentsState;
          }
        }
      });
    } else {
      setComments((oldComments) => {
        let newCommentsState = [...oldComments];
        newCommentsState.push(newCommentObject);
        return newCommentsState;
      });
    }
  };

  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          onReplySubmit={handleCommentSubmit}
          currentUser={props.currentUser}
          data={comment}
        ></Comment>
      ))}
      <NewComment
        onFormSubmit={handleCommentSubmit}
        currentUser={props.currentUser}
      ></NewComment>
    </div>
  );
};

export default CommentSection;
