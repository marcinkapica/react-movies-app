import React from 'react';
import './MovieListPage.css';
import Search from '../Search/Search';
import MovieListElement from '../MovieListElement/MovieListElement';
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

  handleSelectMovie = (movie) => {
    this.props.onSelectMovie(movie);
  };

  propertiesContainsFilterText(properties) {
    const filterText = this.state.filterText.toLowerCase();
    return properties.some((property) =>
      property.toLowerCase().includes(filterText)
    );
  }

  render() {
    const movieList = [];
    this.props.movies.forEach((movie) => {
      if (this.propertiesContainsFilterText([movie.Title, movie.Plot])) {
        movieList.push(
          <MovieListElement
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
