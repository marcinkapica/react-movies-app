import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import MovieListItem from './MovieListItem';
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
    const { onSelectMovie } = this.props;
    onSelectMovie(imdbID);
  };

  propertiesContainFilterText = (propertiesArray) => {
    const { filterText } = this.state;
    const lowercaseFilterText = filterText.toLowerCase();
    return propertiesArray.some((property) =>
      property.toLowerCase().includes(lowercaseFilterText)
    );
  };

  render() {
    const { movies } = this.props;

    const movieList = movies
      .filter((movie) =>
        this.propertiesContainFilterText([movie.Title, movie.Plot])
      )
      .map((movie) => (
        <MovieListItem
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={this.handleSelectMovie}
        />
      ));

    return (
      <>
        <Search onFilterTextChange={this.handleFilterTextChange} />
        {movieList.length ? (
          <div className="flex flex-wrap -mx-4">{movieList}</div>
        ) : (
          <div className="mt-4">
            <p className="text-7xl text-center text-shamrock-500">:(</p>
            <p className="mt-8 text-xl text-center">
              Sorry, no results match your search terms.
            </p>
          </div>
        )}
      </>
    );
  }
}

MovieListPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string,
      Poster: PropTypes.string,
      Title: PropTypes.string,
      Plot: PropTypes.string,
    })
  ).isRequired,
  onSelectMovie: PropTypes.func.isRequired,
};

export default MovieListPage;
