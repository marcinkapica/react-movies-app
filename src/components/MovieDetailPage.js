function MovieDetailPage(props) {
  const handleGoBack = () => {
    props.onGoBack();
  };
  return (
    <>
      <button className="btn-shamrock" onClick={handleGoBack}>
        <span>&larr;</span> Back
      </button>
      <article className="flex flex-1 items-start mt-4">
        <img
          className="w-64 rounded-lg"
          src={props.movie.Poster}
          alt={props.movie.Title}
        />
        <div className="ml-4">
          <h1 className="font-semibold">{props.movie.Title}</h1>
          <p>directed by {props.movie.Director}</p>
          <p className="mt-4 pl-4 border-l-8 border-shamrock-500">
            {props.movie.PlotFull}
          </p>
        </div>
      </article>
    </>
  );
}

export default MovieDetailPage;
