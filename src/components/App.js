import React from 'react';
import {Router} from '@reach/router';

import Nav from './Nav';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';

import '../styles/App.css';

function App() {
  return (
    <Router>
      <Nav default>
        <ArtistList path="/" />
        <ArtistDetail path="/a/:id" />
      </Nav>
    </Router>
  );
}

export default App;
