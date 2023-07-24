import React from "react";
import { useParams } from "react-router-dom";
import threads from "../data/threads.json";

const ThreadDetail = () => {
  const { id } = useParams();
  const thread = threads.find((thread) => thread.id === parseInt(id, 10));

  if (!thread) {
    return <div>Thread not found!</div>;
  }

  return (
    <div className="w-2/3 mx-auto p-4">
      <div className="bg-white rounded-md p-4 mb-4">
        <h2 className="page-title mb-4">{thread.title}</h2>
        {thread.content}
      </div>
      <div className="bg-white rounded-md p-4 mb-4">
        スレの続き...
      </div>
    </div>
  );
};

export default ThreadDetail;