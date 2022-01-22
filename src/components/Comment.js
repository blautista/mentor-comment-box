import React, { useState } from "react";
import styles from "./Comment.module.css";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import CommentVoteBox from "./CommentVoteBox";
import NewComment from "./NewComment";

const Comment = (props) => {
  const containerStyle = !props.isReply
    ? styles.commentContainer
    : styles.replyContainer;
  const [hasReplyBoxEnabled, setHasReplyBoxEnabled] = useState(false);

  const handleReplyClick = (e) => {
    setHasReplyBoxEnabled((bool) => !bool);
  };

  const handleReplySubmit = (textareaData) => {
    if (textareaData.hasOwnProperty("replyingTo")) {
      props.onReplySubmit({ ...textareaData });
    } else {
      props.onReplySubmit({ ...textareaData, replyingTo: props.data });
    }
    setHasReplyBoxEnabled(false);
  };

  return (
    <>
      <div className={`${styles.container} ${containerStyle}`}>
        <div>
          <CommentVoteBox score={props.data.score}></CommentVoteBox>
        </div>
        <div>
          <CommentHeader
            image={"hi"}
            createdAt={props.data.createdAt}
            currentUser={props.currentUser}
            user={props.data.user}
            onReplyClick={handleReplyClick}
          />
          <CommentBody
            content={props.data.content}
            replyingTo={props.data.replyingTo}
          ></CommentBody>
        </div>
      </div>
      <div>
        {hasReplyBoxEnabled && (
          <NewComment
            isReply={true}
            onFormSubmit={handleReplySubmit}
            currentUser={props.currentUser}
          ></NewComment>
        )}
        {props.data.replies &&
          props.data.replies.map((reply) => (
            <Comment
              key={reply.id}
              data={reply}
              onReplySubmit={handleReplySubmit}
              currentUser={props.currentUser}
              isReply={true}
            ></Comment>
          ))}
      </div>
    </>
  );
};

export default Comment;
