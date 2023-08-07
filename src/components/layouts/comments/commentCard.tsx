import React,{useState} from 'react'
import moment from 'moment'
import DeleteSvg from '../../icons/delete'
import EditSvg from '../../icons/edit'
import MinusSvg from '../../icons/minus'
import PlusSvg from '../../icons/plus'
import ReplySvg from '../../icons/reply'
import DeleteCommentModal from './mentions/DeleteCommentModal'

export default function CommentCard({
  comment,
  currentUser,
  updateComment,
  deleteComment,
}:{comment:any; currentUser:any; updateComment:any; deleteComment:any}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.content);



  const handleUpvote = () =>{
    updateComment(comment.id, { score: ++comment.score });
  };
  const handleDownvote = () =>{
    updateComment(comment.id, { score: --comment.score });
  };

  const handleReply = () =>{
    updateComment(comment.id, {
      addReply: true,
      replyingTo: { username: comment.user.username, id: comment.parentId },
    });
  };

  const formatDate = (timestamp:any) =>{
    const fromNow = moment.unix(timestamp).fromNow();
    return fromNow;
  };

  const CommentActions = () =>{
    return currentUser.username === comment.user.username ? (
      <div className="flex gap-4 h-fit ">
        <div
          className="group flex gap-2 items-center hover:cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <DeleteSvg/>
          <div className="text-primary-soft-red font-medium group-hover:opacity-50">
            Delete
          </div>
        </div>
        <div
          className="group flex gap-2 items-center hover:cursor-pointer"
          onClick={() => setEditing(!editing)}
        >
          <EditSvg/>
          <div className="text-primary-moderate-blue font-medium group-hover:opacity-50">
            Edit
          </div>
        </div>
      </div>
    ) : (
      <div
        className="group flex gap-2 items-center hover:cursor-pointer"
        onClick={handleReply}
      >
        <ReplySvg/>
        <div className="text-primary-moderate-blue font-medium group-hover:opacity-50">
          Reply
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="card bg-white border flex mb-4 sm:p-6 p-2 rounded-md sm:flex-row flex-col-reverse self-center">
      <div className="flex justify-between sm:items-start sm:m-0 items-center m-2">
        <div className="sm:w-11 sm:h-22 sm:flex-col sm:py-12 sm:px-2 sm:ml-0 sm:mt-0 w-24 h-10 bg-neutral-very-light-grey flex items-center justify-around rounded-lg">
          <div
            className="group hover:cursor-pointer p-1"
            onClick={handleUpvote}
            >
            <PlusSvg/>
          </div>
          <div className="my-4 text-primary-moderate-blue">{comment.score}</div>
          <div
            className="group hover:cursor-pointer p-1"
            onClick={handleDownvote}
            >
            <MinusSvg/>
          </div>
        </div>

        <div className="sm:hidden">
          <CommentActions />
        </div>
      </div>

      <div className="flex flex-col ml-4 w-full">
        <div className="flex flex-row mb-4 items-center flex-wrap">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            />
          <h1 className="h-fit mr-4">{comment.user.username}</h1>
          {currentUser.username === comment.user.username && (
            <div className="bg-primary-moderate-blue text-white px-2 py-[1px] text-sm rounded-sm mr-4">
              you
            </div>
          )}
          <div className="h-fit min-h-fit opacity-60 flex-1">
            {formatDate(comment.createdAt)}
          </div>
          <div className="sm:flex hidden">
            <CommentActions />
          </div>
        </div>

        <div className="flex flex-col">
          {editing ? (
            <div className="flex flex-col">
              <textarea
                autoFocus
                key="edit"
                rows={4}
                className="opacity-70 resize-none w-100 border-2 border-primary-moderate-blue rounded-md mb-2"
                value={`${
                  comment.replyingTo ? `@${comment.replyingTo} ${text}` : text
                }`}
                onChange={(e) =>{
                  setText(
                    comment.replyingTo
                    ? e.target.value.substring(comment.replyingTo.length + 2)
                    : e.target.value
                    );
                  }}
                  onFocus={function (e) {
                    var val = e.target.value;
                    e.target.value = "";
                    e.target.value = val;
                  }}
                  />
              <button
                className="bg-primary-moderate-blue text-white w-36 h-12 rounded-lg hover:opacity-50 self-end"
                onClick={() => {
                  updateComment(comment.id, { content: text });
                  setEditing(false);
                }}
                >
                UPDATE
              </button>
            </div>
          ) : comment.content ? (
            <div className="opacity-70">
              {comment.replyingTo && (
                <div className="font-semibold text-primary-bright-blue contents">
                  @{comment.replyingTo}{" "}
                </div>
              )}
              {comment.content}
            </div>
          ) : (
            <div className="flex flex-col">
              <textarea
                key="reply"
                rows={4}
                className="opacity-70 resize-none w-100 border-2 border-primary-moderate-blue rounded-md mb-2"
                value={`${
                  comment.replyingTo ? `@${comment.replyingTo} ${text}` : text
                }`}
                onChange={(e) => {
                  setText(
                    e.target.value.substring(comment.replyingTo.length + 2)
                    );
                  }}
                  onFocus={function (e) {
                    var val = e.target.value;
                    e.target.value = "";
                    e.target.value = val;
                  }}
                  />
              <button
                className="bg-primary-moderate-blue text-white w-36 h-12 rounded-lg hover:opacity-50 self-end"
                onClick={() => updateComment(comment.id, { content: text })}
                >
                REPLY
              </button>
            </div>
          )}
        </div>
      </div>
      <DeleteCommentModal
        open={modalOpen}
        comment={comment}
        setOpen={setModalOpen}
        handleDelete={deleteComment}
        />
    </div>

  
    {/* the movie content goes here */}
    
    </>
  );
}
