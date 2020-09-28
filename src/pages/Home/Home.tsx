import React from "react";
import { VideoDeck } from "components";
import { Video, VideoPropTypes } from "components/VideoDeck/VideoCard";
import PropTypes from "prop-types";

interface Props {
  videos: Video[];
}

const Home = ({ videos }: Props) => {
  return <VideoDeck videos={videos} />;
};

Home.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(VideoPropTypes)),
};

export default Home;
