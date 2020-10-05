import React, { useReducer, useContext } from "react";

import { storage } from "./utils/storage";
import { FAVS_STORAGE_KEY } from "./utils/constants";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "./utils/actions";
import { Video } from "./components/VideoDeck/VideoCard";

type storeContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type State = {
  favVideos: Video[];
};

type Action =
  | { type: typeof ADD_FAVORITE; payload: Video }
  | { type: typeof REMOVE_FAVORITE; payload: { id: string } };

const getInitialState = () => {
  const favVideos = storage.get(FAVS_STORAGE_KEY) ?? [];
  return favVideos;
};

const StoreContext = React.createContext<storeContext>({
  state: { favVideos: [] },
  dispatch: () => {},
});

function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(`Can't use "useStore" without an StoreProvider!`);
  }
  return context;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_FAVORITE: {
      const newState = {
        favVideos: [...state.favVideos, action.payload],
      };
      storage.set(FAVS_STORAGE_KEY, newState);
      return newState;
    }
    case REMOVE_FAVORITE: {
      const newState = {
        favVideos: state.favVideos.filter(
          (video: Video) => video.id.videoId !== action.payload.id
        ),
      };
      storage.set(FAVS_STORAGE_KEY, newState);
      return newState;
    }
    default:
      return state;
  }
};

function StoreProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export { useStore };
export default StoreProvider;
