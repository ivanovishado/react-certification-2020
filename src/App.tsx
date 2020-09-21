import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <NavBar />
      {/* <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter> */}
    </Container>
  );
}

export default App;
