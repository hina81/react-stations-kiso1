import { useParams } from "react-router-dom";
import ThreadReplies from "../components/ThreadReplies";
import { useTitle } from "../contexts/TitleContext";
import ReplyForm from "../components/ReplyForm";

const Thread = () => {
  const { threads_id } = useParams();
  const { title } = useTitle();

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>

      <div className="flex space-x-4 h-[80vh]">
        <div className="basis-3/5 overflow-y-auto p-4 bg-white">
          <ThreadReplies threads_id={threads_id} />
        </div>

        <div className="basis-2/5 p-4 bg-white ">
          <ReplyForm threads_id={threads_id} />
        </div>
      </div>
    </div>
  );
};

export default Thread;
