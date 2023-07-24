import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import threads from '../../data/threads.json';
import { saveThreadsTofile } from '../../utils/fileUtils';

const CreateTheread = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateThread = () => {
    const newThread = {
      id: threads.length + 1,
      title: title,
      content: content,
      tags: [],
      createdAt: new Date().toISOString().slice(0, 10),
      upvotes: 0,
    };

    threads.push(newThread);
    saveThreadsTofile(threads);

    navigate(`/threads/${newThread.id}`);
  };

  return (
    <div className="w-2/3 mx-auto p-4">
      {/* Title */}
      <h2 className="page-title px-4 mb-4">新規スレッド</h2>
      {/* Form */}
      <div className="bg-white rounded-md p-4">
        {/* User id */}
        <div className="text-gray-400 mb-4">user: asdfASDF12341234</div>
        {/* Text Area */}
        <div className="w-full border border-gray-300 rounded-lg p-2 mb-4">
          <input
            className="w-full p-2 text-lg focus:outline-none"
            id="title"
            type="text"
            placeholder="タイトル"
            onChange={handleTitleChange}
          />
          <div className="border-t my-2"></div>
          <textarea
            className="w-full p-2 focus:outline-none"
            id="content"
            placeholder="本文"
            onChange={handleContentChange}
          ></textarea>
          {/* Markdown controler */}
          <div className="flex flex-row space-x-2 px-2">
            <span className="p-1 text-gray-300 rounded-full font-semibold">T</span>
            <span className="p-1 text-gray-300 rounded-full font-semibold">B</span>
            <span className="p-1 text-gray-300 rounded-full font-semibold">I</span>
          </div>
        </div>
        {/* Tag selecter */}
        <div className="flex flex-row space-x-2 mb-4">
          <span className="py-1 px-4 inline-flex rounded-full font-semibold bg-blue-100 text-blue-800">tag1 x</span>
          <span className="py-1 px-4 inline-flex rounded-full font-semibold bg-green-100 text-green-800">tag2 x</span>
          <button className="py-1 px-4 inline-flex rounded-full font-bold bg-gray-200 text-gray-500">add tags | +</button>
        </div>
        {/* Control btn */}
        <div className="flex flex-row justify-end space-x-4">
          <button
            onClick={handleCreateThread}
            className="btn-primary"
          >
            作成する
          </button>
          <button className="hover:bg-gray-200 font-bold text-gray-500 rounded-md py-2 px-4">
            下書きに保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTheread;