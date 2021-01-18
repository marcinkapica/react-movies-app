import React from 'react';
import Search from './Search';
import MovieListItem from './MovieListItem';
import Spinner from './Spinner';
import API_ROOT_URL from '../constants';
import ErrorNotification from './ErrorNotification';

class MovieListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterText: '',
      error: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const moviesApiUrl = `${API_ROOT_URL}`;

    try {
      const res = await fetch(moviesApiUrl);
      if (!res.ok) {
        this.setState({ error: true, isLoading: false });
        throw new Error('Incorrect response');
      }
      const data = await res.json();
      this.setState({ movies: data, isLoading: false });
    } catch (e) {
      console.log('An error occurred:', e);
    }
  };

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
    const movieList = movies
      .filter((movie) =>
        this.propertiesContainFilterText([movie.Title, movie.Plot])
      )
      .map((movie) => <MovieListItem key={movie.id} movie={movie} />);

    if (isLoading) return <Spinner />;
    if (error)
      return (
        <ErrorNotification>
          An error ocurred. Please try again later.
        </ErrorNotification>
      );

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
