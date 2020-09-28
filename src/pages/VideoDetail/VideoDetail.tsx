import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import RelatedVideos from "./RelatedVideos";
import { Video, emptyVideo } from "components/VideoDeck/VideoCard";
import { useParams } from "react-router-dom";

interface Props {
  videos: Video[];
}

const VideoDetail = ({ videos }: Props) => {
  const { id } = useParams();
  const video = videos.find((video) => id === video.id.videoId) ?? emptyVideo();

  const {
    id: { videoId },
    snippet: { title, description },
  } = video;

  return (
    <>
      <VideoPlayer videoId={videoId} />
      <VideoDescription title={title} description={description} />
      <RelatedVideos videoId={videoId} />
    </>
  );
};

export default VideoDetail;
