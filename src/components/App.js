import React from 'react';
import PAGE_TYPES from '../constants';
import MovieListPage from './MovieListPage';
import MovieDetailPage from './MovieDetailPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      activePage: PAGE_TYPES.list,
      selectedMovieId: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  handleSelectMovie = (imdbID) => {
    this.setState({
      selectedMovieId: imdbID,
      activePage: PAGE_TYPES.detail,
    });
  };

  clearSelectedMovie = () => {
    this.setState({
      selectedMovieId: null,
      activePage: PAGE_TYPES.list,
    });
  };

  fetchMovies = async () => {
    const apiUrl = '/apiData.json';

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      this.setState({ movies: data });
    } catch (e) {
      console.log('An error occurred:', e);
    }
  };

  render() {
    const { movies, selectedMovieId, activePage } = this.state;
    const selectedMovie = movies.find(
      (movie) => movie.imdbID === selectedMovieId
    );

    return (
      <main className="m-6">
        {activePage === PAGE_TYPES.list && (
          <MovieListPage
            movies={movies}
            onSelectMovie={this.handleSelectMovie}
          />
        )}
        {activePage === PAGE_TYPES.detail && (
          <MovieDetailPage
            movie={selectedMovie}
            onGoBack={this.clearSelectedMovie}
          />
        )}
      </main>
    );
  }
}

export default App;
