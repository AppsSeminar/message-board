const saveThreadsTofile = (threads) => {
    const jsonThreads = JSON.stringify(threads);
    localStorage.setItem('threads', jsonThreads);
};

const updateThreads = (newThread) => {
    const existingThreadsJson = localStorage.getItem('threads');
    const existingThreads = existingThreadsJson ? JSON.parse(existingThreadsJson) : [];

    const updatedThreads = existingThreads.map(thread =>
        thread.threadId === newThread.threadId ? newThread : thread
    );

    const updatedThreadsJson = JSON.stringify(updatedThreads);
    localStorage.setItem('threads', updatedThreadsJson);
};

module.exports = {
    saveThreadsTofile,
    updateThreads,
};