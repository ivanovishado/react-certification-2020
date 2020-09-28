import { DEFAULT_API_MAX_RESULTS, SearchTypes } from "./constants";

class API {
  apiKey: string | undefined;
  fields: string;
  baseURL: string;

  constructor() {
    this.apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    this.fields =
      "items(id(videoId))%2Citems%2Fsnippet(publishedAt%2Ctitle%2Cdescription%2Cthumbnails%2CchannelTitle)";
    this.baseURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&fields=${this.fields}&key=${this.apiKey}`;
  }

  async get(
    type: SearchTypes,
    resource: string,
    maxResults: number = DEFAULT_API_MAX_RESULTS
  ) {
    let url =
      type === SearchTypes.QUERY_TYPE_SEARCH
        ? `&q=${resource}`
        : `&relatedToVideoId=${resource}`;

    url = this.baseURL + url + `&maxResults=${maxResults}`;

    const response = await fetch(url);

    return response && response.json();
  }
}

export default new API();
