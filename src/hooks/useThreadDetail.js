import { useState, useEffect } from "react";

const useThreadDetail = (threads_id) => {
  const [threadDetail, setThreadDetail] = useState({ threadId: "", posts: [] });
  useEffect(() => {
    (async () => {
      const url = `https://railway.bulletinboard.techtrain.dev/threads/${threads_id}/posts`;
      const response = await fetch(url);
      const data = await response.json();
      setThreadDetail(data);
    })();
  }, [threads_id]);
  return { threadDetail };
};

export default useThreadDetail;
