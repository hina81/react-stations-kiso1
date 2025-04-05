import useThreadDetail from "../hooks/useThreadDetail";
import PostNotFound from "./PostNotFound";
const ThreadReplies = ({ threads_id }) => {
  const { threadDetail } = useThreadDetail(threads_id);
  console.log(threadDetail);
  return (
    <div className="space-y-2">
      {threadDetail.posts.length === 0 ? (
        <PostNotFound />
      ) : (
        threadDetail.posts.map((p) => (
          <div
            key={p.id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 "
          >
            <h2 className="text-lg font-bold text-gray-600 ">{p.post}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default ThreadReplies;
