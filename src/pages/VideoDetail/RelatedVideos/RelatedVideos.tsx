import React from "react";
import PropTypes from "prop-types";
import { useApi } from "services/apis/YouTubeAPI";
import { List } from "semantic-ui-react";
import { SearchTypes } from "services/apis/YouTubeAPI/constants";
import { Video } from "components/VideoDeck/VideoCard";

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
        return <p>{video.id.videoId}</p>;
      })}
    </List>
  );
};

RelatedVideos.propTypes = {
  videoId: PropTypes.string,
};

export default RelatedVideos;
