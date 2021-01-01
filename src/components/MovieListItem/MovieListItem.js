import './MovieListItem.css';

function MovieListItem(props) {
  const handleSelectMovie = () => {
    props.onSelectMovie(props.movie.imdbID);
  };
  return (
    <article className="MovieListItem-wrapper">
      <img
        className="MovieListItem-image"
        src={props.movie.Poster}
        alt={props.movie.Title}
      />

      <div className="MovieListItem-contents-wrapper">
        <h1 className="MovieListItem-title">
          <a href="#" onClick={handleSelectMovie}>
            {props.movie.Title}
          </a>
        </h1>
        <p>{props.movie.Plot}</p>
        <button onClick={handleSelectMovie}>
          Read more <span>&rarr;</span>
        </button>
      </div>
    </article>
  );
}

export default MovieListItem;
