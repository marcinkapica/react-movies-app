import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { API_ROOT_URL } from '../constants';
import useUpdateTitle from '../effects/useUpdateTitle';
import { useFetchData } from '../services/apiService';
import Spinner from './Spinner';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetchData(
    `${API_ROOT_URL}/${id}`,
    {}
  );

  useUpdateTitle(movie?.Title);

  if (isLoading) return <Spinner />;
  if (error) return <Redirect to="/404" />;

  return (
    <>
      <Link to="/">
        <button className="btn-shamrock" type="button">
          <span>&larr; </span>
          Back
        </button>
      </Link>
      <article className="flex flex-1 items-start mt-4 p-4 rounded-lg shadow-md bg-gray-100">
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
};

export default MovieDetailPage;
