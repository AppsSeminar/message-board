import React, { useEffect, useState } from "react";
import threads from "../../../data/threads.json";
export const CreateTagArea = (props) => {
  let [tags, setTags] = useState([]);

  useEffect(() => {
    props.setTagsForParent(tags);
  }, [tags]);

  const createTag = () => {
    const input = document.getElementById("tag-input");
    const inputText = input.value;
    input.value = "";

    // tagsをsetに変えると、too-many-renderになる
    if (tags.includes(inputText)) return;

    if (!inputText == "") setTags((prev) => [...prev, inputText]);
  };

  const deleteTag = (elem) => {
    const newTags = tags.filter((tag) => elem.tag != tag);
    setTags(newTags);
  };

  return (
    <div className='mb-4'>
      <div className='mb-4'>
        {tags.map((tag, i) => {
          return (
            <p className='tag' key={i}>
              {tag}
              <span onClick={() => deleteTag({ tag })}>×</span>
            </p>
          );
        })}
      </div>

      <div>
        <input
          type='text'
          placeholder='追加したいタグ名を入力'
          className='border rounded-md pl-2'
          id='tag-input'
        />
        <button
          className='border rounded-full bg-gray-200 px-2 font-bold'
          onClick={() => createTag()}
        >
          add
        </button>
      </div>
    </div>
  );
};
