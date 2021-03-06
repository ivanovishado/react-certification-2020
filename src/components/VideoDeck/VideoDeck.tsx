import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import VideoCard, { Video, VideoPropTypes } from "./VideoCard";

interface Props {
  videos: Video[];
}

const VideoDeck = ({ videos }: Props) => {
  return (
    <Grid container spacing={4} style={{ padding: "10px" }}>
      {videos.map((video) => (
        <Grid item md={3} key={video.id.videoId}>
          <VideoCard id={video.id} snippet={video.snippet} />
        </Grid>
      ))}
    </Grid>
  );
};

VideoDeck.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(VideoPropTypes)),
};

export default VideoDeck;
