import React, { useState } from "react";
import styles from "./Comment.module.css";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import CommentVoteBox from "./CommentVoteBox";
import NewComment from "./NewComment";
import NewCommentForm from "./NewCommentForm";

const Comment = (props) => {
  const containerStyle = !props.isReply
    ? styles.commentContainer
    : styles.replyContainer;
  const [hasReplyBoxEnabled, setHasReplyBoxEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleReplyClick = (e) => {
    setHasReplyBoxEnabled((bool) => !bool);
  };

  const handleEditClick = (e) => {
    setIsEditing((bool) => !bool);
  };

  const handleEditSubmit = (e) => {
    
  };
  

  const handleReplySubmit = (textareaData) => {
    props.onReplySubmit({
      ...textareaData,
      replyingTo: props.data.user.username,
      parentId: props.parentId || props.data.id,
    });
    setHasReplyBoxEnabled(false);
  };

  return (
    <>
      <div className={`${styles.container} ${containerStyle}`}>
        <div>
          <CommentVoteBox score={props.data.score}></CommentVoteBox>
        </div>
        <div style={{flex:1}}>
          <CommentHeader
            image={"hi"}
            createdAt={props.data.createdAt}
            currentUser={props.currentUser}
            user={props.data.user}
            onReplyClick={handleReplyClick}
            onEditClick={handleEditClick}
          />
          {!isEditing && (
            <CommentBody
              content={props.data.content}
              replyingTo={props.data.replyingTo}
            ></CommentBody>
          )}
          {isEditing && (
            <NewCommentForm
              content={props.data.content}
              onFormSubmit={handleEditSubmit}
              currentUser={props.currentUser}
              isUpdating={true}
            ></NewCommentForm>
          )}
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
      </div>
    </>
  );
};

export default Comment;
