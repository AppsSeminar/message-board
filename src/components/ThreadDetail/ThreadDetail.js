import React from "react";
import { useParams } from "react-router-dom";
import threads from "../../data/threads.json";
import CommentList from "./CommentList"

const ThreadDetail = () => {
  const { id } = useParams();
  const thread = threads.find((thread) => thread.threadId === parseInt(id, 10));

  if (!thread) {
    return <div>Thread not found!</div>;
  }

  return (
    <div className="w-2/3 mx-auto p-4">
      <div className="bg-white rounded-md p-4 mb-4">
        {/* Info */}
        <div className="text-gray-400 text-sm mb-2">
          {thread.authorId}
          <span className="text-lg text-gray-600 mx-2">/</span>
          {thread.createdAt}
        </div>
        {/* Title */}
        <h1 className="text-2xl text-gray-700 font-extrabold mb-4">{thread.title}</h1>
        {/* Tags */}
        <div className="mb-4">
          {thread.tags.map(tag => (
            <span key={tag} className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 mb-2">{tag}</span>
          ))}
        </div>
      </div>
      <CommentList comments={thread.comments} />
    </div >
  );
};

export default ThreadDetail;