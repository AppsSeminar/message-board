const CommentList = ({ comments }) => {
    return (
        <div className="bg-white rounded-md p-4 mb-4">
            {comments.map((comment) => (
                <div key={comment.resId} className="border-b pb-4 mb-4">
                    <div className="text-gray-400 mb-2">
                        {comment.userId} · {comment.createdAt}
                        {comment.anchor && (
                            <span className="ml-2">Reply to #{comment.anchor}</span>
                        )}
                    </div>
                    <div className="mb-2">{comment.comment}</div>
                    <div className="text-gray-400">Upvotes: {comment.upvote}</div>
                </div>
            ))}
        </div>
    );
}

export default CommentList
