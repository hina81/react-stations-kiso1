import { useState, createContext, useContext } from "react";
import { useThreads } from "../hooks/useThreads";
import { Link } from "react-router-dom";
import PostNotFound from "./PostNotFound";

const ThreadList = () => {
  const { threads } = useThreads();
  // const [title, setTitle] = useState("");
  // const titleContext = createContext("");

  return (
    <div className="space-y-2">
      {threads.map((thread) => (
        <Link
          to={`/threads/${thread.id}`}
          // onClick={() => setTitle(thread.title)}
          key={thread.id}
        >
          <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-lg font-bold text-gray-600 hover:text-gray-700">
              {thread.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ThreadList;
