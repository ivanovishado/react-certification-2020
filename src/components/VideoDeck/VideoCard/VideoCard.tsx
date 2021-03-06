import React from "react";
import { CardContent } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { CardActionArea, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { MAX_DESC_CHARS } from "utils/constants";
import { useVideo } from "providers/CurrentVideo";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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
      high: emptyThumbnail(),
      medium: emptyThumbnail(),
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
    thumbnails: { default: Thumbnail; high: Thumbnail; medium: Thumbnail };
    title: string;
    description: string;
  };
}

const VideoCard = (props: Video) => {
  const classes = useStyles();
  const { setSelectedVideo } = useVideo();
  const { videoId } = props.id;
  const { title, description, thumbnails } = props.snippet;

  return (
    <Link to={`/videos/${videoId}`}>
      <Card
        className={classes.root}
        onClick={() => {
          setSelectedVideo(props);
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={thumbnails.high.url}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description && description.substring(0, MAX_DESC_CHARS) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
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
