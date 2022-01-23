import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Comment.module.css";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import CommentVoteBox from "./CommentVoteBox";
import NewComment from "./NewComment";
import NewCommentForm from "./NewCommentForm";
import Button from "./Buttons/Button";
import Modal from "./Modal/Modal";

const Comment = (props) => {
  const containerStyle = !props.isReply
    ? styles.commentContainer
    : styles.replyContainer;
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(props.data.content);
  const [score, setScore] = useState(props.data.score);
  const [hasReplyBoxEnabled, setHasReplyBoxEnabled] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleReplyClick = (e) => {
    setHasReplyBoxEnabled((bool) => !bool);
  };

  const handleEditClick = (e) => {
    setIsEditing((bool) => !bool);
  };

  const handleDeleteClick = (e) => {
    setIsDeleteModalOpen(true);
    console.log("Opening delete confirmation modal...");
  };

  const handleEditSubmit = (newContent) => {
    setIsEditing(false);
    setContent(newContent.commentBody);
    // props.onEditSubmit({ id: props.parentId || props.data.id, ...newContent });
  };

  const handleModalExit = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCommentDelete = () => {
    setIsDeleteModalOpen(false);
    props.onDelete(props.data.id);
  };

  const handleUpvote = () => {
    //api call
    setScore((oldScore) => {
      if (oldScore > props.data.score) return oldScore - 1;
      else return props.data.score + 1;
    });
  };

  const handleDownvote = () => {
    //api call
    setScore((oldScore) => {
      if (oldScore < props.data.score) return oldScore + 1;
      else return props.data.score - 1;
    });
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
          <CommentVoteBox
            score={score}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
          ></CommentVoteBox>
        </div>
        <div style={{ flex: 1 }}>
          <CommentHeader
            image={"hi"}
            createdAt={props.data.createdAt}
            currentUser={props.currentUser}
            user={props.data.user}
            onReplyClick={handleReplyClick}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
          {!isEditing && (
            <CommentBody
              content={content}
              replyingTo={props.data.replyingTo}
            ></CommentBody>
          )}
          {isEditing && (
            <NewCommentForm
              content={content}
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
        {isDeleteModalOpen && (
          <Modal
            onSuccess={handleCommentDelete}
            successText="YES, DELETE"
            onExit={handleModalExit}
            cancelText="NO, CANCEL"
            title="Are you sure?"
          >
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and cannot be undone.
            </p>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Comment;
