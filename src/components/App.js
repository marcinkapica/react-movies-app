import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import MovieDetailPage from './MovieDetailPage';
import NotFoundPage from './NotFoundPage';
import API_ROOT_URL from '../constants';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const apiUrl = `${API_ROOT_URL}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      this.setState({ movies: data, isLoading: false });
    } catch (e) {
      console.log('An error occurred:', e);
    }
  };

  render() {
    const { movies, isLoading: loading } = this.state;
    if (loading) return <Spinner />;
    return (
      <Router>
        <main className="m-6">
          <Switch>
            <Route exact path="/">
              <MovieListPage movies={movies} />
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
  }
}

export default App;
