import { DEFAULT_MAX_RESULTS } from "./constants";

class YouTubeAPI {
  apiKey: string | undefined;

  constructor() {
    this.apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    console.log("APIKEY=", this.apiKey);
  }

  async get(query: string, maxResults: number = DEFAULT_MAX_RESULTS) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&videoEmbeddable=true&key=${this.apiKey}`
    );

    return response && response.json();
  }
}

export default new YouTubeAPI();
