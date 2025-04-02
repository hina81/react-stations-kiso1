import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";

const PostForm = () => {
    const { title, setTitle, handleSubmit } = usePost();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトルを入力..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-between mt-6">
        <Link to="/">
          <button className="py-2 px-6 bg-gray-100 border rounded-2xl">
            Topに戻る
          </button>
        </Link>

        <button
          type="submit"
          className="py-2 px-6 bg-sky-500 rounded-2xl text-white font-black"
        >
          作成
        </button>
      </div>
    </form>
  );
};

export default PostForm;
