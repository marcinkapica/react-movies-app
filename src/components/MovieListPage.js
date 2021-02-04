import React, { useState } from 'react';
import { useFetchData } from '../services/apiService';
import Search from './Search';
import MovieListItem from './MovieListItem';
import Spinner from './Spinner';
import ErrorNotification from './ErrorNotification';
import { API_ROOT_URL } from '../constants';
import useUpdateTitle from '../effects/useUpdateTitle';

const MovieListPage = () => {
  useUpdateTitle();

  const { isLoading, error, data: movies } = useFetchData(API_ROOT_URL, []);
  const [filterText, setFilterText] = useState('');
  const handleFilterTextChange = (value) => {
    setFilterText(value);
  };

  const arrayValuesContainText = (array, text) => {
    const lowercaseFilterText = text.toLowerCase();
    return array.some((value) =>
      value.toLowerCase().includes(lowercaseFilterText)
    );
  };

  if (isLoading) return <Spinner />;

  if (error) {
    return (
      <ErrorNotification>
        An error ocurred. Please try again later.
      </ErrorNotification>
    );
  }

  const movieList = movies
    .filter((movie) =>
      arrayValuesContainText([movie.Title, movie.Plot], filterText)
    )
    .map((movie) => <MovieListItem key={movie.id} movie={movie} />);

  return (
    <>
      <Search onFilterTextChange={handleFilterTextChange} />
      {movieList.length ? (
        <div className="flex flex-wrap -mx-4">{movieList}</div>
      ) : (
        <ErrorNotification>
          Sorry, no results match your search terms.
        </ErrorNotification>
      )}
    </>
  );
};

export default MovieListPage;
