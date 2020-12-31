import './MovieListElement.css';

function MovieListElement(props) {
  const handleSelectMovie = () => {
    props.onSelectMovie(props.movie);
  };
  return (
    <article className="MovieListElement-wrapper">
      <img
        className="MovieListElement-image"
        src={props.movie.Poster}
        alt={props.movie.Title}
      />

      <div className="MovieListElement-contents-wrapper">
        <h1 className="MovieListElement-title">
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

export default MovieListElement;
