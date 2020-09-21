import React from "react";
import { Grid } from "semantic-ui-react";
import VideoCard, { Video } from "./VideoCard";

interface Props {
  videos: Video[];
}

const VideoDeck = ({ videos }: Props) => {
  return (
    <Grid stackable columns={4}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id}
          description={video.description}
          title={video.title}
          thumbnailURL={video.thumbnailURL}
        />
      ))}
    </Grid>
  );
};

export default VideoDeck;
