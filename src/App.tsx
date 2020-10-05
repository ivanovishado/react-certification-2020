import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { AppBar } from "components";
import { Home, VideoDetail, NotFound, Favorites } from "pages";
import { SearchContext } from "components/contexts";
import { Video } from "components/VideoDeck/VideoCard";
import { SearchTypes } from "services/apis/YouTubeAPI/constants";
import YouTubeAPI from "services/apis/YouTubeAPI/YouTubeAPI";
import { AuthProvider } from "providers/Auth";
import { ProtectedRoute } from "auth";
import StoreProvider from "store";

function App() {
  const [searchTerm, setSearchTerm] = useState("wizeline");
  const [videos, setVideos] = useState<Video[]>([]);

  const searchVideos = async (termFromSearchBar: string) => {
    const cleanTerm = termFromSearchBar.trim();
    const data = await YouTubeAPI.get(SearchTypes.QUERY_TYPE_SEARCH, cleanTerm);

    if (!data) {
      throw new Error("No data to display");
    }

    setVideos(data.items);
  };

  return (
    <Container>
      <AuthProvider>
        <StoreProvider>
          <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            <AppBar searchVideos={searchVideos} />
            <Switch>
              <Route
                path="/videos/:id"
                render={(props) => <VideoDetail {...props} videos={videos} />}
              />
              <ProtectedRoute path="/favorites" component={Favorites} />
              <Route
                exact
                path="/"
                render={(props) => <Home {...props} videos={videos} />}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </SearchContext.Provider>
        </StoreProvider>
      </AuthProvider>
    </Container>
  );
}

export default withRouter(App);
