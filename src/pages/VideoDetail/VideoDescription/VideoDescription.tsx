import React from "react";

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

export default VideoDescription;
