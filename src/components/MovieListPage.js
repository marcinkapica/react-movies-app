import React from 'react';
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
    this.props.onSelectMovie(imdbID);
  };

  propertiesContainFilterText = (propertiesArray) => {
    const lowercaseFilterText = this.state.filterText.toLowerCase();
    return propertiesArray.some((property) =>
      property.toLowerCase().includes(lowercaseFilterText)
    );
  };

  render() {
    const movieList = this.props.movies
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

export default MovieListPage;
