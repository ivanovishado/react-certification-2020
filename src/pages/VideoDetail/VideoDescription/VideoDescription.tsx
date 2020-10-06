import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { useStore } from "store";
import { useAuth } from "providers/Auth";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "utils/actions";
import { Thumbail } from "components/VideoDeck/VideoCard";

interface Props {
  id: string;
  title: string;
  thumbnails: {
    default: Thumbail;
    high: Thumbail;
    medium: Thumbail;
  };
  description: string;
}

const VideoDescription = ({ id, title, thumbnails, description }: Props) => {
  const { state, dispatch } = useStore();
  const { isLoggedIn } = useAuth();
  const video = state.favVideos.find((video) => video.id.videoId === id);
  const isVideoInFavorites = !!video;

  const AddToFavoritesBtn = () => {
    return (
      <button
        onClick={() => {
          dispatch({
            type: ADD_FAVORITE,
            payload: {
              id: { videoId: id },
              snippet: {
                thumbnails,
                title,
                description,
              },
            },
          });
        }}
      >
        Add to Favorites
      </button>
    );
  };

  const RemoveFromFavoritesBtn = () => {
    return (
      <button
        onClick={() => {
          dispatch({ type: REMOVE_FAVORITE, payload: { id } });
        }}
      >
        Remove from Favorites
      </button>
    );
  };

  return (
    <section>
      <Grid item md={9}>
        <h3>{title}</h3>
      </Grid>
      <Grid container item md={3} justify="flex-end">
        <Grid>
          {isLoggedIn &&
            (isVideoInFavorites ? (
              <RemoveFromFavoritesBtn />
            ) : (
              <AddToFavoritesBtn />
            ))}
        </Grid>
      </Grid>
      <Grid container item md={12} alignItems="center">
        <h4>{description}</h4>
      </Grid>
    </section>
  );
};

VideoDescription.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

export default VideoDescription;
