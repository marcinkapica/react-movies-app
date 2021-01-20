import API_ROOT_URL from '../constants';

const getApiData = async (url) => {
  const responseObj = {
    isLoading: true,
    error: false,
    data: null,
  };

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok || data.error) {
      responseObj.isLoading = false;
      responseObj.error = true;
      throw new Error(
        data.error || `A error occurred (error status: ${res.status})`
      );
    }
    responseObj.isLoading = false;
    responseObj.data = data;
  } catch (e) {
    console.log(e.message);
  }
  return responseObj;
};

const fetchMovie = (movieId) => {
  const movieApiUrl = `${API_ROOT_URL}/${movieId}`;
  return getApiData(movieApiUrl);
};

const fetchMovies = () => getApiData(API_ROOT_URL);
export { fetchMovie, fetchMovies };
