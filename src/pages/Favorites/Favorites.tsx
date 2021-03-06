import React from "react";

import { VideoDeck } from "components";
import { useStore } from "providers/Store";

const Favorites = () => {
  const { state } = useStore();
  const { favVideos } = state;

  return favVideos && favVideos.length > 0 ? (
    <VideoDeck videos={favVideos} />
  ) : (
    <div>There are no favorites to show.</div>
  );
};

export default Favorites;
