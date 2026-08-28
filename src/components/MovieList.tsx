import { Loader2 } from "lucide-react";
import type { MovieListProps } from "../utils/types";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList, isLoading, errorMessage }: MovieListProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (movieList.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="flex flex-col">
      <p className="text-4xl font-bold ml-40 mt-5">Movies:</p>
      <div className="mt-10 mb-10 ml-40 mr-40">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
