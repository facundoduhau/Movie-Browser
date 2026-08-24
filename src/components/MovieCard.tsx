import MovieList from "./MovieList";
import type { MovieListProps } from "../utils/types";

const MovieCard = ({ movieList, isLoading, errorMessage }: MovieListProps) => {
  return (
    <MovieList
      movieList={movieList}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default MovieCard;
