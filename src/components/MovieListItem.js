import React from 'react';
import PropTypes from 'prop-types';

function MovieListItem({ movie, onSelectMovie }) {
  const handleSelectMovie = () => {
    onSelectMovie(movie.imdbID);
  };
  return (
    <article className="flex flex-col p-4 w-full md:w-1/2 lg:w-1/3">
      <div className="flex flex-col flex-1 p-4 rounded-lg shadow-md bg-gray-100">
        <div className="flex-1 flex items-start mb-4">
          <img
            className="w-32 rounded-lg"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className="ml-4">
            <h1 className="mb-1">
              <button
                onClick={handleSelectMovie}
                className="text-left font-semibold"
                type="button"
              >
                {movie.Title}
              </button>
            </h1>
            <p className="">{movie.Plot}</p>
          </div>
        </div>
        <button
          onClick={handleSelectMovie}
          className="btn-shamrock"
          type="button"
        >
          Read more <span>&rarr;</span>
        </button>
      </div>
    </article>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Plot: PropTypes.string,
  }).isRequired,
  onSelectMovie: PropTypes.func.isRequired,
};

export default MovieListItem;
