import React from "react";

import { VideoDeck } from "components";
import { useStore } from "store";

const Favorites = () => {
  const { state } = useStore();
  const { favVideos } = state;

  return favVideos ? (
    <VideoDeck videos={favVideos} />
  ) : (
    <div>There are no favorites to show.</div>
  );
};

export default Favorites;
