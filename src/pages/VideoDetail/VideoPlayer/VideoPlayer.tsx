import React from "react";
import PropTypes from "prop-types";
// @ts-ignore
import ReactPlayer from "react-player/youtube";

interface Props {
  videoId: string;
}

const VideoPlayer = ({ videoId }: Props) => {
  const URL = `https://www.youtube.com/watch?v=${videoId}`;

  return <ReactPlayer url={URL} playing controls muted />;
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
};

export default VideoPlayer;
