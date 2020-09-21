import React from "react";
import { VideoDeck } from "components";
import { Video } from "components/VideoDeck/VideoCard";

const Home = () => {
  let mockVideos: Video[] = [
    {
      id: "123",
      thumbnailURL: "thumb",
      title: "Title",
      description: "desc.",
    },
  ];

  return <VideoDeck videos={mockVideos} />;
};

export default Home;
