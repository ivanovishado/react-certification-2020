import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { useStore } from "providers/Store";
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
  const isVideoInFavorites = state.favVideos.some(
    (video) => video.id.videoId === id
  );

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
      <Grid item md={3}>
        {isLoggedIn &&
          (isVideoInFavorites ? (
            <RemoveFromFavoritesBtn />
          ) : (
            <AddToFavoritesBtn />
          ))}
      </Grid>
      <Grid container item md={12} alignItems="center">
        <p>{description}</p>
      </Grid>
    </section>
  );
};

VideoDescription.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default VideoDescription;
