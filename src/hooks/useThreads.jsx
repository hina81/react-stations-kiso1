import { useEffect, useState } from "react";

export function useThreads() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => response.json())
      .then((data) => {
        setThreads(data);
      });
  }, []);
  return { threads };
}
