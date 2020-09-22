import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "components";
import { Home } from "./pages";
import { Container } from "semantic-ui-react";
import { SearchContext } from "components/contexts";
import { Video } from "components/VideoDeck/VideoCard";
import { YouTubeAPI } from "services/apis";

function App() {
  const [searchTerm, setSearchTerm] = useState("wizeline");
  const [videos, setVideos] = useState(Array<Video>());

  useEffect(() => {
    searchVideos(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchVideos = async (termFromSearchBar: string) => {
    const response = await YouTubeAPI.get(termFromSearchBar);

    setVideos(response.items);
  };

  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            <NavBar searchVideos={searchVideos} />
            <Route path="/" exact>
              <Home videos={videos} />
            </Route>
          </SearchContext.Provider>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
