import React from "react";
import PropTypes from "prop-types";

interface Props {
  title: string;
  description: string;
}

const VideoDescription = ({ title, description }: Props) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
};

VideoDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default VideoDescription;
