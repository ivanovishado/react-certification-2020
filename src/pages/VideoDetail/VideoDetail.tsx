import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import RelatedVideos from "./RelatedVideos";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { videoId } = useParams();

  return (
    <>
      <VideoPlayer videoId={videoId} />
      <VideoDescription />
      <RelatedVideos />
    </>
  );
};

export default VideoDetail;
