import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const emptyThumbnail = (): Thumbnail => ({
  url: "",
  width: 0,
  height: 0,
});

const emptyVideo = (): Video => ({
  id: { videoId: "" },
  snippet: {
    thumbnails: {
      default: emptyThumbnail(),
    },
    title: "",
    description: "",
  },
});

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Video {
  id: { videoId: string };
  snippet: {
    thumbnails: { default: Thumbnail; high?: Thumbnail; medium?: Thumbnail };
    title: string;
    description: string;
  };
}

const VideoCard = ({
  id: { videoId },
  snippet: { title, description, thumbnails },
}: Video) => {
  return (
    <Grid.Column>
      <Card href={`/videos/${videoId}`}>
        <Image src={thumbnails.default.url} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

const thumbnailShape = PropTypes.shape({
  url: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
});

const VideoPropTypes = {
  id: PropTypes.shape({ videoId: PropTypes.string }),
  snippet: PropTypes.shape({
    thumbnails: PropTypes.shape({
      default: thumbnailShape.isRequired,
      high: thumbnailShape,
      medium: thumbnailShape,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

VideoCard.propTypes = VideoPropTypes;

export default VideoCard;
export { VideoPropTypes, emptyVideo };
