import React from "react";
import { Grid } from "@material-ui/core";

import VideoPlayer from "./VideoPlayer";
import RelatedVideos from "./RelatedVideos";
import { useVideo } from "providers/CurrentVideo";

const VideoDetail = () => {
  const { selectedVideo } = useVideo();

  const {
    id: { videoId },
    snippet: { title, description, thumbnails },
  } = selectedVideo;

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

export default VideoDetail;
