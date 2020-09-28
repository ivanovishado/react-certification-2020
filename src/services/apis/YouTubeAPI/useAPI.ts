import { useState, useEffect } from "react";
import { DEFAULT_API_MAX_RESULTS, SearchTypes } from "./constants";
import { Video } from "components/VideoDeck/VideoCard";
import API from "./YouTubeAPI";

const useApi = (
  type: SearchTypes,
  resource: string,
  maxResults: number = DEFAULT_API_MAX_RESULTS
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Video[]>();

  useEffect(() => {
    if (!resource) {
      return;
    }

    API.get(type, resource, maxResults).then((response) => {
      setData(response.items);
      setIsLoading(false);
    });
  }, [type, resource, maxResults]);

  return { isLoading, data };
};

export default useApi;
