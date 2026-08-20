import type { MovieListProps } from "../utils/types";

const MovieList = ({
  movieList,
  isLoading,
  errorMessage,
}: MovieListProps) => {
  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (movieList.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
      {movieList.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  );
};

export default MovieList;
