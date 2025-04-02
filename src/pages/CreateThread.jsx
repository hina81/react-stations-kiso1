import React from "react";
import PostForm from "../components/PostForm";

const CreateThread = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          スレッド新規作成
        </h1>
        <PostForm />
      </div>
    </div>
  );
};

export default CreateThread;
