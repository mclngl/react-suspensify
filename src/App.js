import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Nav from './Nav';
import ArtistList from "./ArtistList";
import ArtistDetail from "./ArtistDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav>
        <Route exact path="/" component={ArtistList} />
        <Route exact path="/a/:id" component={ArtistDetail} />
      </Nav>
    </Router>
  );
}

export default App;
