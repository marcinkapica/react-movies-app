import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { fetchMovie } from '../services/apiService';
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

  async componentDidMount() {
    const { match } = this.props;
    const { isLoading, error, data: movie } = await fetchMovie(match.params.id);
    this.setState({ movie, error, isLoading });
  }

  render() {
    const { movie, error, isLoading } = this.state;

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
