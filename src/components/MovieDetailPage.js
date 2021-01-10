import React from 'react';
import PropTypes from 'prop-types';
function MovieDetailPage({ movie, onGoBack }) {
  const handleGoBack = () => {
    onGoBack();
  };
  return (
    <>
      <button className="btn-shamrock" onClick={handleGoBack} type="button">
        <span>&larr;</span>
        Back
      </button>
      <article className="flex flex-1 items-start mt-4">
        <img className="w-64 rounded-lg" src={movie.Poster} alt={movie.Title} />
        <div className="ml-4">
          <h1 className="font-semibold">{movie.Title}</h1>
          <p>directed by {movie.Director}</p>
          <p className="mt-4 pl-4 border-l-8 border-shamrock-500">
            {movie.PlotFull}
          </p>
        </div>
      </article>
    </>
  );
}

MovieDetailPage.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Director: PropTypes.string,
    PlotFull: PropTypes.string,
  }).isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default MovieDetailPage;
