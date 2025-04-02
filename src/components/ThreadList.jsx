import React from "react";
import { useThreads } from "../hooks/useThreads";

const ThreadList = () => {
  const { threads } = useThreads();
  console.log(threads);
  return (
    <ul className="list-disc pl-5">
      {threads.map((thread) => (
        <li key={thread.id} className="text-lg mb-2">
          {thread.title}
        </li>
      ))}
    </ul>
  );
};

export default ThreadList;

