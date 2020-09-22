import React from "react";
import { VideoDeck } from "components";
import { Video } from "components/VideoDeck/VideoCard";

interface Props {
  videos: Video[];
}

const Home = ({ videos }: Props) => {
  return <VideoDeck videos={videos} />;
};

export default Home;
