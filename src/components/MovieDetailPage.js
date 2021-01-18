import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import API_ROOT_URL from '../constants';
import NotFoundPage from './NotFoundPage';
import Spinner from './Spinner';

class MovieDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match } = this.props;
    const movieApiUrl = `${API_ROOT_URL}/${match.params.id}`;

    try {
      const res = await fetch(movieApiUrl);
      if (!res.ok) {
        this.setState({ error: true, isLoading: false });
        throw new Error('Incorrect response');
      }
      const data = await res.json();
      this.setState({ movie: data, isLoading: false });
    } catch (e) {
      console.log('An error occurred:', e);
    }
  };

  render() {
    const { movie, error, isLoading } = this.state;
    const movieDetailsElement = (
      <>
        <Link to="/">
          <button className="btn-shamrock" type="button">
            <span>&larr; </span>
            Back
          </button>
        </Link>
        <article className="flex flex-1 items-start mt-4 p-4 rounded-lg shadow-md bg-gray-100">
          <img
            className="w-64 rounded-lg"
            src={movie.Poster}
            alt={movie.Title}
          />
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

    if (isLoading) return <Spinner />;
    if (error) return <NotFoundPage />;
    return movieDetailsElement;
  }
}

MovieDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default withRouter(MovieDetailPage);
