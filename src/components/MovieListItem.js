import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieListItem({ movie }) {
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
              <Link className="text-black" to={`/movie/${movie.id}`}>
                <button className="text-left font-semibold" type="button">
                  {movie.Title}
                </button>
              </Link>
            </h1>
            <p className="">{movie.Plot}</p>
          </div>
        </div>
        <Link className="w-full" to={`/movie/${movie.id}`}>
          <button className="btn-shamrock w-full" type="button">
            Read more <span>&rarr;</span>
          </button>
        </Link>
      </div>
    </article>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieListItem;
