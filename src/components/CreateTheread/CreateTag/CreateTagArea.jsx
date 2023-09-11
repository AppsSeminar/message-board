import threads from "../../../data/threads.json";
export const CreateTagArea = () => {
  //TODO localstorageからタグ一覧をとってくる
  console.log(threads);
  let tags = [];

  threads.map((thread) => {
    thread.tags.forEach((tag) => tags.push(tag));
  });

  // 重複排除
  let tags_set = new Set(tags);

  // 排除後、配列に戻す
  tags = Array.from(tags_set)

  console.log(tags);

  //TODO カラーをランダムにする

  //TODO 新規でタグを作る

  return (
    <div className='flex flex-row space-x-2 mb-4'>
      <span className='py-1 px-4 inline-flex rounded-full font-semibold bg-blue-100 text-blue-800'>
        tag1 x
      </span>
      <span className='py-1 px-4 inline-flex rounded-full font-semibold bg-green-100 text-green-800'>
        tag2 x
      </span>
      <button className='py-1 px-4 inline-flex rounded-full font-bold bg-gray-200 text-gray-500'>
        add tags | +
      </button>
    </div>
  );
};
