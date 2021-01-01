function MovieListItem(props) {
  const handleSelectMovie = () => {
    props.onSelectMovie(props.movie.imdbID);
  };
  return (
    <article className="flex flex-col p-4 w-full md:w-1/2 lg:w-1/3">
      <div className="flex flex-col flex-1 p-4 rounded-lg shadow-md bg-gray-100">
        <div className="flex-1 flex items-start mb-4">
          <img
            className="w-32 rounded-lg"
            src={props.movie.Poster}
            alt={props.movie.Title}
          />

          <div className="ml-4">
            <h1 className="mb-1">
              <button
                href="#"
                onClick={handleSelectMovie}
                className="text-left font-semibold"
              >
                {props.movie.Title}
              </button>
            </h1>
            <p className="">{props.movie.Plot}</p>
          </div>
        </div>
        <button onClick={handleSelectMovie} className="btn-shamrock">
          Read more <span>&rarr;</span>
        </button>
      </div>
    </article>
  );
}

export default MovieListItem;
