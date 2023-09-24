import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import threads from "../../data/threads.json";
import CommentList from "./CommentList"
import { HiPaperAirplane } from "react-icons/hi";
import { updateThreads } from "../../utils/fileUtils";

const ThreadDetail = () => {
  const { id } = useParams();
  const thread = threads.find((thread) => thread.threadId === parseInt(id, 10));

  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(thread.comments);

  const handleCommentChange = useCallback((e) => {
    setNewComment(e.target.value);
  }, []);

  const handleCommentSubmit = useCallback(() => {
    const newCommentObj = {
      resId: comments.length + 1,
      anchor: null,
      postedAt: new Date().toISOString(),
      userId: "user-newnewne1111",
      upvotes: 0,
      content: newComment
    };
    const updatedThread = { ...thread, comments: [...thread.comments, newCommentObj] }
    updateThreads(updatedThread)
    setComments(prevComments => [...prevComments, newCommentObj]);
    setNewComment('');
  }, [newComment, comments, thread]);

  if (!thread) {
    return <div>Thread not found!</div>;
  }

  return (
    <div className="flex flex-col w-2/3 p-4 mx-auto">
      <div className="overflow-y-auto">
        {/* Thread Title */}
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
        {/* Comment List */}
        <CommentList comments={comments} />
      </div>
      {/* Comment Input Area */}
      <div className="flex bg-white rounded-md p-4 mt-4" >
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-2 rounded border border-gray-300 mr-4"
          placeholder="Add a comment..."
        />
        <button onClick={handleCommentSubmit} className="transform rotate-90 rounded text-blue-500 hover:text-blue-600">
          <HiPaperAirplane className="h-6 w-6" />
        </button>
      </div >
    </div >
  );
};

export default ThreadDetail;