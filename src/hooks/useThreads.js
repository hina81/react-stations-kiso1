import { useEffect, useState } from "react";

export function useThreads() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    (async () => {
      const url = "https://railway.bulletinboard.techtrain.dev/threads";
      const response = await fetch(url);
      const data = await response.json();
      setThreads(data);
    })(); //すぐ返す
  }, []);
  return { threads };
}
