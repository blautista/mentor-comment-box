import React, { useState, useEffect } from "react";
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
      createdAt: "Just now",
      score: 0,
      user: props.currentUser,
    };

    if (data.replyingTo) {
      setComments((oldComments) => {
        let newCommentsState = [...oldComments];
        let index = oldComments.findIndex(
          (comment) => comment.id === data.parentId
        );
        newCommentsState[index].replies.push({
          replyingTo: data.replyingTo,
          ...newCommentObject,
        });
        return newCommentsState;
      });
    } else {
      setComments((oldComments) => [
        ...oldComments,
        { ...newCommentObject, replies: [] },
      ]);
    }
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    setComments((oldComments) => {
      let newComments = [...oldComments];
      for (let i = 0; i < oldComments.length; i++) {
        if (oldComments[i].id === commentId) {
          newComments.splice(i, 1);
          break;
        } else {
          for (let j = 0; j < oldComments[i].replies.length; j++) {
            if (oldComments[i].replies[j].id === commentId) {
              newComments[i].replies.splice(j, 1);
              break;
            }
          }
        }
      }
      return newComments;
    });
  };

  return (
    <div className={styles.container}>
      {comments.map((comment) => {
        return (
          <>
            <Comment
              key={comment.id}
              onReplySubmit={handleCommentSubmit}
              onDelete={handleCommentDelete}
              currentUser={props.currentUser}
              isReply={false}
              data={comment}
            ></Comment>
            {comment.replies.map((reply) => (
              <Comment
                key={reply.id}
                onReplySubmit={handleCommentSubmit}
                onDelete={handleCommentDelete}
                currentUser={props.currentUser}
                parentId={comment.id}
                isReply={true}
                data={reply}
              ></Comment>
            ))}
          </>
        );
      })}
      <NewComment
        onFormSubmit={handleCommentSubmit}
        currentUser={props.currentUser}
      ></NewComment>
    </div>
  );
};

export default CommentSection;
