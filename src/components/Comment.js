import React, {useState} from "react";
import styles from "./Comment.module.css";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import CommentVoteBox from "./CommentVoteBox";
import NewComment from './NewComment'

const Comment = (props) => {

  const containerStyle = (!props.isReply) ? styles.commentContainer : styles.replyContainer;
  const [hasReplyBoxEnabled, setHasReplyBoxEnabled] = useState(false);

  const handleReplyClick = (e) => {
    setHasReplyBoxEnabled(bool => !bool);
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
            user={props.data.user}
            onReplyClick={handleReplyClick}
          />
          <CommentBody content={props.data.content} replyingTo={props.data.replyingTo}></CommentBody>
        </div>
      </div>
      <div>
        {hasReplyBoxEnabled && <NewComment isReply={true} currentUser={props.currentUser}></NewComment>}
        {props.data.replies &&
          props.data.replies.map((reply) => (
            <Comment key={reply.id} data={reply} currentUser={props.currentUser} isReply={true}></Comment>
          ))}
      </div>
    </>
  );
};

export default Comment;
