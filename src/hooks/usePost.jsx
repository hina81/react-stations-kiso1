import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePost = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("投稿成功:", result);
      // ルートページに遷移
      navigate("/");
    } catch (error) {
      console.error("投稿失敗:", error);
    }
  };

  return { title, setTitle, handleSubmit };
};

export default usePost;
