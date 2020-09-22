import { useState, useEffect } from "react";
import YouTubeAPI from "./YouTubeAPI";
import { DEFAULT_MAX_RESULTS } from "./constants";

const useAPI = (query: string, maxResults: number = DEFAULT_MAX_RESULTS) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    YouTubeAPI.get(query, maxResults).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [query, maxResults]);

  return { isLoading, data };
};

export default useAPI;
