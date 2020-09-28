import React from "react";
import { Grid } from "semantic-ui-react";
import VideoCard, { Video, VideoPropTypes } from "./VideoCard";
import PropTypes from "prop-types";

interface Props {
  videos: Video[];
}

const VideoDeck = ({ videos }: Props) => {
  return (
    <Grid stackable columns={4}>
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id}
          snippet={video.snippet}
        />
      ))}
    </Grid>
  );
};

VideoDeck.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(VideoPropTypes)),
};

export default VideoDeck;
