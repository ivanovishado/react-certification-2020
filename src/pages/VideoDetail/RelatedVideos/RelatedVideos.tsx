import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

import { useApi } from "services/apis/YouTubeAPI";
import { SearchTypes } from "services/apis/YouTubeAPI/constants";
import VideoCard, { Video } from "components/VideoDeck/VideoCard";
import Grid from "@material-ui/core/Grid";

interface Props {
  videoId: string;
}

const RelatedVideos = ({ videoId }: Props) => {
  const { isLoading, data } = useApi(SearchTypes.RELATED_TYPE_SEARCH, videoId);

  return isLoading || data == null ? (
    <div>Loading...</div>
  ) : (
    <List>
      {data.map((video: Video) => {
        return (
          <Grid item md={12}>
            <VideoCard
              key={video.id.videoId}
              id={video.id}
              snippet={video.snippet}
            />
          </Grid>
        );
      })}
    </List>
  );
};

RelatedVideos.propTypes = {
  videoId: PropTypes.string,
};

export default RelatedVideos;
