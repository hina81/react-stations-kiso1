import { useParams } from "react-router-dom";
import ThreadReplies from "../components/ThreadReplies";
import { useTitle } from "../contexts/TitleContext";

const Thread = () => {
  const { threads_id } = useParams();
  const { title } = useTitle();
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
        <ThreadReplies threads_id={threads_id} />
      </div>
    </>
  );
};

export default Thread;
