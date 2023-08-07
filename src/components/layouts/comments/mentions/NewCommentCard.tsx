import React, { useState } from "react";

interface NewCommentCardProps {
  currentUser: {
    image: {
      webp: string;
    };
  };
  onAdd: (content: string) => void;
}

const NewCommentCard: React.FC<NewCommentCardProps> = ({ currentUser, onAdd }) => {
  const [text, setText] = useState<string>("");

  return (
    <>
      {/* Desktop View */}
      <div className="sm:block hidden">
        <div className="flex bg-white p-6 rounded-md">
          <img
            alt="avatar"
            className="w-10 h-10 rounded-full mr-4"
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          />
          <textarea
            autoFocus
            value={text}
            className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mr-4"
            placeholder="Add a comment..."
            onChange={(e) => setText(e.target.value)}
            onFocus={(e) => {
              var val = e.target.value;
              e.target.value = "";
              e.target.value = val;
            }}
          />
          <button
            className="bg-blue-600 text-white w-36 h-12 rounded-lg hover:opacity-50"
            onClick={() => {
              onAdd(text);
              setText("");
            }}
          >
            SEND
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden block">
        <div className="flex flex-col bg-white p-4 rounded-md">
          <textarea
            value={text}
            className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mb-4"
            placeholder="Add a comment..."
            onChange={(e) => setText(e.target.value)}
            onFocus={(e) => {
              var val = e.target.value;
              e.target.value = "";
              e.target.value = val;
            }}
          />
          <div className="flex justify-between">
            <img
              alt="avatar"
              className="w-10 h-10 rounded-full mr-4"
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            />

            <button
              className="bg-blue-600 text-gray-500 h-12 rounded-lg w-[80px]"
              onClick={() => {
                onAdd(text);
                setText("");
              }}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCommentCard;
