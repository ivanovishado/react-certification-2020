import React, { useState, useContext, Dispatch, SetStateAction } from "react";

import { Video, emptyVideo } from "../../components/VideoDeck/VideoCard";

interface videoContext {
  selectedVideo: Video;
  setSelectedVideo: Dispatch<SetStateAction<Video>>;
}

const VideoContext = React.createContext<videoContext>({
  // Not sure why I cannot use emptyVideo() like below
  selectedVideo: {
    id: { videoId: "" },
    snippet: {
      thumbnails: {
        default: {
          url: "",
          width: 0,
          height: 0,
        },
        high: {
          url: "",
          width: 0,
          height: 0,
        },
        medium: {
          url: "",
          width: 0,
          height: 0,
        },
      },
      title: "",
      description: "",
    },
  },
  setSelectedVideo: () => {},
});

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without a CurrentVideoProvider!`);
  }
  return context;
}

function CurrentVideoProvider({ children }: any) {
  const [selectedVideo, setSelectedVideo] = useState<Video>(emptyVideo());

  return (
    <VideoContext.Provider value={{ selectedVideo, setSelectedVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export { useVideo };
export default CurrentVideoProvider;
