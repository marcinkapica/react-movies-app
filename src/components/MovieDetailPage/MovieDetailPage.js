import './MovieDetailPage.css';

function MovieDetailPage(props) {
  const handleGoBack = () => {
    props.onGoBack();
  };
  return (
    <>
      <button className="MovieDetailPage-back-button" onClick={handleGoBack}>
        <span>&larr;</span> Back
      </button>
      <article className="MovieDetailPage-contents-wrapper">
        <img
          className="MovieDetailPage-image"
          src={props.movie.Poster}
          alt={props.movie.title}
        />
        <div className="MovieDetailPage-details">
          <h1>{props.movie.Title}</h1>
          <p>directed by {props.movie.Director}</p>
          <p>{props.movie.PlotFull}</p>
        </div>
      </article>
    </>
  );
}

export default MovieDetailPage;
