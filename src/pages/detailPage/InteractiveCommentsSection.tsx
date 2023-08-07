import React from "react";
import CommentCard from "../../components/layouts/comments/commentCard";
import NewCommentCard from "../../components/layouts/comments/mentions/NewCommentCard";
import commentsData from '../../assets/data.json'


interface User {
  username: string;
  // Add any other properties related to the user object
}

interface Comment {
  id: number;
  parentId?: number;
  content: string;
  createdAt: number;
  replyingTo?: string;
  score: number;
  user: User;
  replies: Comment[];
}

interface InteractiveCommentsSectionProps {
  // Add any props if required
}

const InteractiveCommentsSection: React.FC<InteractiveCommentsSectionProps> = () => {
  const { comments: commentsExternal, currentUser } = commentsData;
  const [comments, setComments] = React.useState<Comment[]>(commentsExternal);

  const getNewId = (): number => {
    const replies = comments
      .filter((comment) => comment.replies && comment.replies.length > 0)
      .map((comment) => comment.replies);
    const ids = comments.concat(...replies).map((comment) => comment.id);

    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  const addComment = (content: string): void => {
    const newId = getNewId();
    const commentData: Comment = {
      id: newId,
      content,
      createdAt: +new Date() / 1000,
      replies: [],
      score: 0,
      user: currentUser,
    };

    setComments([...comments, commentData]);
  };

  const updateComment = (commentId: number, data: any): void => {
    const { content, score, updateReply, addReply, replyingTo, replies } = data;
    const updatedComments = [...comments];

    if (updateReply) {
      const commentIndex = updatedComments.findIndex(
        (comment) =>
          comment.replies &&
          comment.replies.length > 0 &&
          comment.replies.find((reply) => reply.id === commentId)
      );

      const replyIndex = updatedComments[commentIndex].replies.findIndex(
        (reply) => reply.id === commentId
      );

      if (content) {
        updatedComments[commentIndex].replies[replyIndex].content = content;
      }

      if (score) {
        updatedComments[commentIndex].replies[replyIndex].score = score;
      }
    } else if (addReply) {
      const newId = getNewId();

      const replyData: Comment = {
        parentId: replyingTo.id,
        id: newId,
        content: content || "",
        createdAt: +new Date() / 1000,
        replyingTo: replyingTo.username,
        score: 0,
        user: currentUser,
        replies: [],
      };

      updatedComments.forEach((comment) => {
        if (comment.id === commentId || comment.id === replyingTo.id) {
          comment.replies = [...comment.replies, replyData];
        }
      });
      setComments(updatedComments);
    } else {
      const index = comments.findIndex((comment) => comment.id === commentId);

      if (content) {
        updatedComments[index].content = content;
      }

      if (score) {
        updatedComments[index].score = score;
      }
    }

    setComments(updatedComments);
  };

  const deleteComment = (commentId: number, parentId?: number): void => {
    let updatedComments = [...comments];

    if (parentId) {
      const commentIndex = updatedComments.findIndex(
        (comment) => comment.id === parentId
      );

      const filteredReplies = updatedComments[commentIndex].replies.filter(
        (reply) => reply.id !== commentId
      );

      updatedComments[commentIndex].replies = filteredReplies;
    } else {
      const filtered = updatedComments.filter(
        (comment) => comment.id !== commentId
      );
      updatedComments = filtered;
    }

    setComments(updatedComments);
  };

  return (
    <>
      <div className="interactive-comments-section pt-24 sm:px-24 px-8 bg-black h-full py-12 flex flex-col">
      <p className='text-white font-extrabold text-2xl pb-4'>Comments</p>
       

        {comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <CommentCard
              key={`${comment.id} ${comment.user.username}`}
              comment={comment}
              currentUser={currentUser}
              updateComment={updateComment}
              deleteComment={deleteComment}
            />
            {comment.replies && comment.replies.length > 0 && (
              <div className=" sm:pl-10 sm:ml-10 ml-0 mb-4 pl-5">
                {comment.replies.map((reply) => (
                  <CommentCard
                    key={`${reply.id} ${reply.user.username}`}
                    comment={reply}
                    currentUser={currentUser}
                    updateComment={(replyId:any, data:any) => {
                      updateComment(replyId, {
                        updateReply: !data.addReply,
                        ...data,
                      });
                    }}
                    deleteComment={deleteComment}
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}

        <NewCommentCard currentUser={currentUser} onAdd={addComment} />
      </div>
    </>
  );
};

export default InteractiveCommentsSection;
