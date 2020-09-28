import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import RelatedVideos from "./RelatedVideos";
import {
  Video,
  emptyVideo,
  VideoPropTypes,
} from "components/VideoDeck/VideoCard";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

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

VideoDetail.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(VideoPropTypes)),
};

export default VideoDetail;
