import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistDisplay from '../container/ArtistDisplay';
import Header from './Header.js';
import './App.css';
import ReleaseDisplay from '../container/ReleaseDisplay';
import TrackDisplay from '../container/TrackDisplay';
import LyricsDisplay from '../container/LyricsDisplay';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/artists/:id/:name" component={ReleaseDisplay} />
          <Route path="/tracks/:id/:name" component={TrackDisplay} />
          <Route path="/lyrics/:name/:track" component={LyricsDisplay} />
          <Route exact path="/" component={ArtistDisplay} />
        </Switch>
      </Router>
    </>
  );
}
