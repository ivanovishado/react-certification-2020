import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { AppBar } from "components";
import { Home, VideoDetail, NotFound } from "pages";
import { Container } from "semantic-ui-react";
import { SearchContext } from "components/contexts";
import { Video } from "components/VideoDeck/VideoCard";
import { SearchTypes } from "services/apis/YouTubeAPI/constants";
import YouTubeAPI from "services/apis/YouTubeAPI/YouTubeAPI";

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
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <AppBar searchVideos={searchVideos} />
        <Switch>
          <Route path="/videos/:id">
            <VideoDetail videos={videos} />
          </Route>
          <Route exact path="/">
            <Home videos={videos} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </SearchContext.Provider>
    </Container>
  );
}

export default withRouter(App);
