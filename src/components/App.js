import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import MovieDetailPage from './MovieDetailPage';
import NotFoundPage from './NotFoundPage';

const App = () => (
  <Router>
    <main className="m-6">
      <Switch>
        <Route exact path="/">
          <MovieListPage />
        </Route>
        <Route exact path="/movie/:id">
          <MovieDetailPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
