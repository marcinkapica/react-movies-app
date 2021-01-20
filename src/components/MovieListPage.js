import React from 'react';
import { fetchMovies } from '../services/apiService';
import Search from './Search';
import MovieListItem from './MovieListItem';
import Spinner from './Spinner';
import ErrorNotification from './ErrorNotification';

class MovieListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      movies: [],
      filterText: '',
    };
  }

  async componentDidMount() {
    const { isLoading, error, data: movies } = await fetchMovies();
    this.setState({ movies, error, isLoading });
  }

  handleFilterTextChange = (value) => {
    this.setState({ filterText: value });
  };

  propertiesContainFilterText = (propertiesArray) => {
    const { filterText } = this.state;
    const lowercaseFilterText = filterText.toLowerCase();
    return propertiesArray.some((property) =>
      property.toLowerCase().includes(lowercaseFilterText)
    );
  };

  render() {
    const { movies, error, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (error)
      return (
        <ErrorNotification>
          An error ocurred. Please try again later.
        </ErrorNotification>
      );

    const movieList = movies
      .filter((movie) =>
        this.propertiesContainFilterText([movie.Title, movie.Plot])
      )
      .map((movie) => <MovieListItem key={movie.id} movie={movie} />);

    return (
      <>
        <Search onFilterTextChange={this.handleFilterTextChange} />
        {movieList.length ? (
          <div className="flex flex-wrap -mx-4">{movieList}</div>
        ) : (
          <ErrorNotification>
            Sorry, no results match your search terms.
          </ErrorNotification>
        )}
      </>
    );
  }
}

export default MovieListPage;
