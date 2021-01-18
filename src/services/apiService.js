import API_ROOT_URL from '../constants';

const getApiData = async (url) => {
  const responseObj = {
    isLoading: true,
    error: false,
    data: null,
  };

  try {
    const res = await fetch(url);
    if (!res.ok) {
      responseObj.isLoading = false;
      responseObj.error = true;
      throw new Error('Incorrect response');
    }
    const data = await res.json();
    responseObj.isLoading = false;
    responseObj.data = data;
  } catch (e) {
    console.log('An error occurred:', e);
  }
  return responseObj;
};

const fetchMovie = (movieId) => {
  const movieApiUrl = `${API_ROOT_URL}/${movieId}`;
  return getApiData(movieApiUrl);
};

const fetchMovies = () => getApiData(API_ROOT_URL);
export { fetchMovie, fetchMovies };
