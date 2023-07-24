const saveThreadsTofile = (threads) => {
    const jsonThreads = JSON.stringify(threads);
    localStorage.setItem('threads', jsonThreads);
};

module.exports = {
    saveThreadsTofile,
};