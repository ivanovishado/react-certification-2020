import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

export interface Video {
  id: string;
  thumbnailURL: string;
  title: string;
  description: string;
}

const VideoCard = ({ id, title, description }: Video) => {
  return (
    <Grid.Column>
      <Card href={`/videos/${id}`}>
        <Image src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

VideoCard.propTypes = {
  id: PropTypes.string,
  thumbnailURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default VideoCard;
