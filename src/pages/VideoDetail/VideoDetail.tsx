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
    snippet: { title, description, thumbnails },
  } = video;

  return (
    <>
      <VideoPlayer videoId={videoId} />
      <VideoDescription
        title={title}
        id={videoId}
        description={description}
        defaultThumbnail={thumbnails.default}
      />
      <RelatedVideos videoId={videoId} />
    </>
  );
};

VideoDetail.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(VideoPropTypes)),
};

export default VideoDetail;
