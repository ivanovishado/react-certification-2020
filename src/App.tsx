import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
