import React from "react";
import PropTypes from "prop-types";
// @ts-ignore
import ReactPlayer from "react-player/youtube";
import { Grid } from "@material-ui/core";

import VideoDescription from "../VideoDescription";
import { Thumbail } from "components/VideoDeck/VideoCard";

interface Props {
  videoId: string;
  title: string;
  thumbnails: {
    default: Thumbail;
    high: Thumbail;
    medium: Thumbail;
  };
  description: string;
}

const VideoPlayer = ({ videoId, title, thumbnails, description }: Props) => {
  const URL = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <Grid container item md={12} direction="column">
      <Grid item md={12}>
        <ReactPlayer url={URL} playing controls muted />;
      </Grid>
      <Grid container item md={12} alignItems="center">
        <VideoDescription
          title={title}
          id={videoId}
          description={description}
          thumbnails={thumbnails}
        />
      </Grid>
    </Grid>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
};

export default VideoPlayer;
