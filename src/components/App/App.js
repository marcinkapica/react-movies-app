import './App.css';
import React from 'react';
import PAGE_TYPES from '../../constants';
import MovieListPage from '../MovieListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      activePage: PAGE_TYPES.list,
    };
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

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const selectedMovie = this.state.movies.find(
      (movie) => movie.imdbID === this.state.selectedMovieId
    );

    return (
      <main className="App-wrapper">
        {this.state.activePage === PAGE_TYPES.list && (
          <MovieListPage
            movies={this.state.movies}
            onSelectMovie={this.handleSelectMovie}
          />
        )}
        {this.state.activePage === PAGE_TYPES.detail && (
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
