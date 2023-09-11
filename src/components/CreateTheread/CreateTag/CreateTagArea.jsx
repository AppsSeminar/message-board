import threads from "../../../data/threads.json";
export const CreateTagArea = () => {
  //localstorageからタグ一覧をとってくる
  let tags = [];
  let tagsColor = [];

  threads.map((thread) => {
    thread.tags.forEach((tag) => tags.push(tag));
    tagsColor.push(thread.tagColor);
  });

  //重複排除
  let tags_set = new Set(tags);
  let tagsColor_set = new Set(tagsColor);

  //排除後、配列に戻す
  tags = Array.from(tags_set);
  tagsColor = Array.from(tagsColor_set);

  console.log(tags);
  console.log(tagsColor);

  //カラーをランダムにする
  const tagSetitingColor = [
    "bg-blue-100",
    "bg-green-100",
    "bg-red-100",
    "bg-grey-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-orange-100",
  ];

  const colorRandom = Math.floor(Math.random() * tagSetitingColor.length);

  //TODO 新規でタグを作る

  return (
    <div className='flex flex-row space-x-2 mb-4'>
      <span className='tag bg-blue-100'>tag1 x</span>
      <span className='tag bg-green-100'>tag2 x</span>
      <button className='py-1 px-4 inline-flex rounded-full font-bold bg-gray-200 text-gray-500'>
        add tags | +
      </button>
    </div>
  );
};
