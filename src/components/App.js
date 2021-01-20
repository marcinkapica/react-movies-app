import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
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
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </main>
  </Router>
);

export default App;
