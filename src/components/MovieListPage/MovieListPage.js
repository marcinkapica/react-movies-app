import React from 'react';
import Search from '../Search/Search';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieListPage.css';
class MovieListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  handleFilterTextChange = (value) => {
    this.setState({ filterText: value });
  };

  handleSelectMovie = (imdbID) => {
    this.props.onSelectMovie(imdbID);
  };

  propertiesContainFilterText(propertiesArray) {
    const lowercaseFilterText = this.state.filterText.toLowerCase();
    return propertiesArray.some((property) =>
      property.toLowerCase().includes(lowercaseFilterText)
    );
  }

  render() {
    const movieList = [];
    this.props.movies.forEach((movie) => {
      if (this.propertiesContainFilterText([movie.Title, movie.Plot])) {
        movieList.push(
          <MovieListItem
            key={movie.imdbID}
            movie={movie}
            onSelectMovie={this.handleSelectMovie}
          />
        );
      }
    });

    return (
      <>
        <Search onFilterTextChange={this.handleFilterTextChange} />
        {movieList.length ? (
          movieList
        ) : (
          <p>Sorry, no results match your search terms.</p>
        )}
      </>
    );
  }
}

export default MovieListPage;
