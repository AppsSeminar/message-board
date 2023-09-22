import { HiArrowSmUp } from "react-icons/hi";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const CommentList = ({ comments }) => {
  return (
    <div className="bg-white rounded-md p-4 mb-4">
      {comments.map((comment) => (
        <div key={comment.resId} className="border-b pb-4 mb-4">
          {/* Info */}
          <div className="flex flex-row space-x-4 mb-2 items-center">
            <div className="text-gray-600">{comment.resId}:</div>
            <div className="text-gray-400 text-sm">
              {comment.userId}
              <span className="text-gray-600 mx-2">/</span>
              {comment.postedAt}
            </div>
          </div>
          {comment.anchor && (
            <span className="inline-block bg-gray-200 text-gray-600 text-sm font-bold rounded-md px-3 py-1 mb-2">&gt;&gt; {comment.anchor}</span>
          )}
          {/* Content */}
          <div className="text-lg text-gray-700 mb-2">
            {comment.content}
          </div>
          {/* Upvote */}
          <div className="relative inline-flex space-x-2 items-center text-gray-400 text-sm">
            <button className="rounded hover:text-gray-600" >
              <HiArrowSmUp className="h-6 w-6" />
            </button>
            <span>{comment.upvotes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList
