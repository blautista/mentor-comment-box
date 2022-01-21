import React from "react";
import styles from "./Comment.module.css";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import CommentVoteBox from "./CommentVoteBox";

const Comment = (props) => {

  const containerStyle = (!props.isReply) ? styles.commentContainer : styles.replyContainer;
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
            user={props.data.user}
          />
          <CommentBody content={props.data.content} replyingTo={props.data.replyingTo}></CommentBody>
        </div>
      </div>
      <div>
        {props.data.replies &&
          props.data.replies.map((reply) => (
            <Comment key={reply.id} data={reply} isReply={true}></Comment>
          ))}
      </div>
    </>
  );
};

export default Comment;
