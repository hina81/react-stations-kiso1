import usePostReply from "../hooks/usePostReply";

const ReplyForm = ({ threads_id }) => {
  const { reply, setReply, handleSubmit } = usePostReply(threads_id);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="投稿しよう！"
        className="w-full p-3 text-base rounded-md shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow transition"
      >
        投稿
      </button>
    </form>
  );
};

export default ReplyForm;
