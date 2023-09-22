import React from 'react';
import { Link } from 'react-router-dom';

const ThreadListItem = ({ thread }) => {
  return (
    <li key={thread.ThreadId} className="border-b border-gray-200 p-4">

      {/* Tags list */}
      <div className="flex flex-row space-x-2 items-center mb-2">
        {thread.tags.map(tag => (
          <span key={tag} className="px-2 inline-flex text-xs leading-5 rounded-md bg-blue-100 text-blue-800">{tag}</span>
        ))}
      </div>

      {/* Title, CreatedAt */}
      <div className='flex flex-row space-x-8 mb-2 items-center'>
        <h3 className="text-lg font-bold">
          <Link to={`/threads/${thread.threadId}`}>{thread.title}</Link>
        </h3>
        <div className="text-sm text-gray-400">{thread.createdAt}</div>
      </div>

      {/* Upvote */}
      <div className="flex-shrink-0 flex">
        <div className="relative inline-flex space-x-2 items-center text-gray-500">
          <button className="rounded hover:text-gray-600" >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" >
              <path fillRule="evenodd" d="M9.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.414V15a1 1 0 01-2 0V6.414L5.707 9.707a1 1 0 01-1.414-1.414l5-5z" clipRule="evenodd" />
            </svg>
          </button>
          <span>{thread.upvotes}</span>
        </div>
      </div>
    </li>
  );
};

export default ThreadListItem;