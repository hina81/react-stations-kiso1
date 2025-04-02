import React from "react";
import ThreadList from "./ThreadList";

const ThreadListContainer = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">新着スレッド</h1>
      <ThreadList />
    </>
  );
};

export default ThreadListContainer;
