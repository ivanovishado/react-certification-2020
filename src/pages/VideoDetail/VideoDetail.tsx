import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import VideoPlayer from "./VideoPlayer";
import RelatedVideos from "./RelatedVideos";
import {
  Video,
  emptyVideo,
  VideoPropTypes,
} from "components/VideoDeck/VideoCard";

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
    <section>
      <Grid container md={12}>
        <Grid item md={9}>
          <VideoPlayer
            videoId={videoId}
            title={title}
            description={description}
            thumbnails={thumbnails}
          />
        </Grid>
        <Grid container item md={3} justify="center">
          <Grid container item md={12}>
            <RelatedVideos videoId={videoId} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

VideoDetail.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(VideoPropTypes)),
};

export default VideoDetail;
