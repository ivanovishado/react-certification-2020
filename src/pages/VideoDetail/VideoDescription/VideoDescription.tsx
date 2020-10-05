import React from "react";
import PropTypes from "prop-types";

import { useStore } from "store";
import { useAuth } from "providers/Auth";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "utils/actions";
import { Thumbail } from "components/VideoDeck/VideoCard";

interface Props {
  id: string;
  title: string;
  defaultThumbnail: Thumbail;
  description: string;
}

const VideoDescription = ({
  id,
  title,
  defaultThumbnail,
  description,
}: Props) => {
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
                thumbnails: { default: defaultThumbnail },
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
    <>
      <p>{title}</p>
      <p>{description}</p>
      {isLoggedIn &&
        (isVideoInFavorites ? (
          <RemoveFromFavoritesBtn />
        ) : (
          <AddToFavoritesBtn />
        ))}
    </>
  );
};

VideoDescription.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

export default VideoDescription;
