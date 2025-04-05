import { useState } from "react";

const usePostReply = (threads_id, refetch) => {
  const [reply, setReply] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${threads_id}/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ post: reply }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("投稿成功:", result);
      setReply("");
      refetch();
    } catch (error) {
      console.error("投稿失敗:", error);
    }
  };

  return { reply, setReply, handleSubmit };
};

export default usePostReply;
