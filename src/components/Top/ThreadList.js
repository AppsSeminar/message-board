import React from 'react';
import ThreadListItem from './ThreadListItem'
import threads from '../../data/threads.json'

const ThreadList = () => {
    return (
        <div className="bg-white rounded-md p-4">
            <ul>
                {threads.map(thread => (
                    <ThreadListItem key={thread.id} thread={thread} />
                ))}
            </ul>
        </div>
    );
};

export default ThreadList;