import { useState, useEffect, useCallback } from "react";

const useThreadDetail = (threads_id) => {
  const [threadDetail, setThreadDetail] = useState({ threadId: "", posts: [] });

  const fetchThreadDetail = useCallback(async () => {
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${threads_id}/posts`;
    const response = await fetch(url);
    const data = await response.json();
    setThreadDetail(data);
  }, [threads_id]);

  useEffect(() => {
    fetchThreadDetail();
  }, [fetchThreadDetail]);

  return { threadDetail, refetch: fetchThreadDetail };
};

export default useThreadDetail;
