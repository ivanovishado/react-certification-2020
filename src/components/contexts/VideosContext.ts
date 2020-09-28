import { createContext } from "react";
import { Video } from "../VideoDeck/VideoCard";

export interface VideosContext {
  videos: Video[];
  setCurrentVideos: (currentVideos: Video[]) => void;
}

export const videosContext = createContext<VideosContext>({
  videos: [],
  setCurrentVideos: () => {},
});
